import { Dispatch, SetStateAction, FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Menu, ContainerSettings, Settings, ContainerList, List, Title, Balance, InputFind } from './style'
import toFormatSafe from '../../../utils/toFormatSafe'
import dinero from 'dinero.js'
import { useTheme } from 'styled-components'

interface Iprops {
    find: string
    balance: number
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<Iprops> = ({ balance, find, setFind }) => {
    const navigation = useNavigation()
    const theme = useTheme()

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
            <InputFind style={{ shadowColor: theme.primary }} autoCapitalize="sentences" autoCompleteType="username" defaultValue={find} onChangeText={setFind} autoCorrect selectionColor={theme.secondary} placeholder="Pesquisar..." placeholderTextColor={theme.secondaryColor}/>
        </>
    )
}

export default Header