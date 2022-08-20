import { IPlate } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Menu, IconMenu, Quantity, Title, InputFind, NotFoundMessage } from './style'
import { TouchableOpacity } from 'react-native'
import useList from '../../../listContext'

interface Iprops {
    find: string
    plates: IPlate[]
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<Iprops> = ({ find, plates, setFind }) => {
    const navigation = useNavigation()
    const theme = useTheme()
    const { list } = useList()
    let exists = false

    plates.map(plate => {
        if (plate.name.toUpperCase().includes(find.toUpperCase()) || plate.description.toUpperCase().includes(find.toUpperCase())) {
            exists = true
        }
    })

    return (
        <>
            <Menu>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <IconMenu name="settings" size={40}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                    <IconMenu name="location-on" size={40}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('List')}>
                    <IconMenu name="shopping-cart" size={40}/>
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
            {!exists && <NotFoundMessage>Sem resultados {':('}</NotFoundMessage>}
        </>
    )
}

export default Header