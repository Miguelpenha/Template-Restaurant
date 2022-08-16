import { IItemList, IPlate } from '../../../types'
import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Menu, ContainerSettings, Settings, ContainerList, List, Title, Balance, InputFind, NotFoundMessage } from './style'
import toFormatSafe from '../../../utils/toFormatSafe'
import dinero from 'dinero.js'

interface Iprops {
    find: string
    balance: number
    plates: IPlate[]
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<Iprops> = ({ balance, find, plates, setFind }) => {
    const navigation = useNavigation()
    const theme = useTheme()
    let exists = false

    plates.map(plate => {
        if (plate.name.toUpperCase().includes(find.toUpperCase()) || plate.description.toUpperCase().includes(find.toUpperCase())) {
            exists = true
        }
    })

    return (
        <>
            <Menu>
                <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                    <Settings name="settings" size={40}/>
                </ContainerSettings>
                <ContainerList onPress={() => navigation.navigate('List')}>
                    <List name="shopping-cart" size={40}/>
                </ContainerList>
            </Menu>
            <Title>Modelo Para Restaurante</Title>
            <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
            <InputFind
                autoCorrect
                defaultValue={find}
                onChangeText={setFind}
                placeholder="Pesquisar..."
                selectionColor={theme.secondary}
                style={{ shadowColor: theme.primary }}
                placeholderTextColor={theme.secondaryColor}
            />
            {!exists && <NotFoundMessage>Sem resultados {':('}</NotFoundMessage>}
        </>
    )
}

export default Header