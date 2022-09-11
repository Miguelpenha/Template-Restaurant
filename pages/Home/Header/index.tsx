import { IPlate } from '../../../types'
import { Dispatch, SetStateAction, FC, useState, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Menu, IconMenu, Quantity, Title, InputFind, ContainerPeoplesCountFilterAndLabel, LabelPeoplesCountFilter, ContainerPeoplesCountFilter, NotFoundMessage, ContainerPeoplesCountFilterIconLeft, PeoplesCountFilterIcon, ContainerPeoplesCountFilterIconRight, PeoplesCountFilter } from './style'
import { TouchableOpacity } from 'react-native'
import useList from '../../../contexts/listContext'
import useOrders from '../../../contexts/ordersContext'

interface Iprops {
    find: string
    plates: IPlate[]
    peoplesCountFilter: number
    setFind: Dispatch<SetStateAction<string>>
    setPeoplesCountFilter: Dispatch<SetStateAction<number>>
}

const Header: FC<Iprops> = ({ find, plates, peoplesCountFilter, setFind, setPeoplesCountFilter }) => {
    const navigation = useNavigation()
    const theme = useTheme()
    const { list } = useList()
    const [countOrdersOnHold, setCountOrdersOnHold] = useState<number>(0)
    const { orders: ordersInUse } = useOrders()
    let exists = false

    useFocusEffect(useCallback(() => {
        setCountOrdersOnHold(0)
        
        ordersInUse && ordersInUse.map(orderInUse => !orderInUse.finished && setCountOrdersOnHold(count => count+1))
    }, [ordersInUse]))

    plates.map(plate => {
        if (plate.name.toUpperCase().includes(find.toUpperCase()) || plate.description.toUpperCase().includes(find.toUpperCase())) {
            exists = true
        }
    })

    return (
        <>
            <Menu>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <IconMenu name="settings" size={35}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <IconMenu name="person" size={35}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                    <IconMenu name="receipt" size={35}/>
                    {ordersInUse && ordersInUse.length >= 1 && countOrdersOnHold >= 1 && <Quantity>{countOrdersOnHold}</Quantity>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('List')}>
                    <IconMenu name="shopping-cart" size={35}/>
                    {list.length >= 1 && <Quantity>{list.length}</Quantity>}
                </TouchableOpacity>
            </Menu>
            <Title>Modelo Para Restaurante</Title>
            <InputFind
                autoCorrect
                defaultValue={find}
                onChangeText={setFind}
                placeholder="Pesquisar..."
                selectionColor={theme.secondary}
                style={{ shadowColor: theme.primary }}
                placeholderTextColor={theme.secondaryColor}
            />
            <ContainerPeoplesCountFilterAndLabel>
                <LabelPeoplesCountFilter>Serve a quantas pessoas</LabelPeoplesCountFilter>
                <ContainerPeoplesCountFilter>
                    <ContainerPeoplesCountFilterIconLeft disabled={peoplesCountFilter <= 1} onPress={() => peoplesCountFilter >= 2 && setPeoplesCountFilter(peoplesCountFilter-1)}>
                    <PeoplesCountFilterIcon disabled={peoplesCountFilter <= 1}>-</PeoplesCountFilterIcon>
                    </ContainerPeoplesCountFilterIconLeft>
                    <PeoplesCountFilter>{peoplesCountFilter}</PeoplesCountFilter>
                    <ContainerPeoplesCountFilterIconRight onPress={() => setPeoplesCountFilter(peoplesCountFilter+1)}>
                    <PeoplesCountFilterIcon>+</PeoplesCountFilterIcon>
                    </ContainerPeoplesCountFilterIconRight>
                </ContainerPeoplesCountFilter>
            </ContainerPeoplesCountFilterAndLabel>
            {!exists && <NotFoundMessage>Sem resultados {':('}</NotFoundMessage>}
        </>
    )
}

export default Header