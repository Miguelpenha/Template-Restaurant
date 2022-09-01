import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ScrollView } from 'react-native'
import { ContainerSwitch, TextSwitch, Switch, Button, IconButton, IconUpdateButton, TextButton, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import checkUpdate from './checkUpdate'
import Constants from 'expo-constants'
import { blue, red, magenta, yellow } from '../../utils/colorsLogs'
import Toast from 'react-native-toast-message'
import { useProfile } from '../../contexts/profileContext'
import useOrders from '../../contexts/ordersContext'

function Settings() {
    const navigation = useNavigation()
    const { theme, themeName, mutateTheme, loadTheme } = useTheme()
    const [dark, setDark] = useState(themeName==='light' ? false : true)
    const [checkUpdating, setCheckUpdating] = useState(false)
    const { loadProfile } = useProfile()
    const { loadOrders } = useOrders()
    
    return (
        <ContainerPd scroll={false}>
            <HeaderBack onClick={() => navigation.goBack()} title="Configurações"/>
            <ScrollView>
                <ContainerSwitch>
                    <TextSwitch>Tema escuro</TextSwitch>
                    <Switch
                        value={dark}
                        thumbColor={dark ? theme.primary : theme.primary}
                        trackColor={{false: theme.secondary, true: theme.secondary}}
                        onChange={() => {
                            dark ? setDark(false) : setDark(true)
                            
                            console.log(blue(`>> Theme changed`))
                            console.log(magenta(`   >> ${dark ? 'light' : 'dark'}`))
                            
                            mutateTheme()
                        }}
                    />
                </ContainerSwitch>
                <Button onPress={() => {
                    AsyncStorage.removeItem('@templateRestaurant:theme').then(() => {
                        AsyncStorage.removeItem('@templateRestaurant:profile').then(async () => {
                            AsyncStorage.removeItem('@templateRestaurant:orders').then(async () => {
                                console.log(yellow('>> All data has been deleted'))
                                console.log(red('   >> @templateRestaurant:theme'))
                                console.log(red('   >> @templateRestaurant:orders'))
                                console.log(red('   >> @templateRestaurant:profile'))

                                Toast.show({
                                    type: 'error',
                                    text1: 'Dados Apagados'
                                })

                                await loadProfile()
                                await loadTheme()
                                await loadOrders()
                                
                                navigation.reset({
                                    index: 0,
                                    routes: [{
                                        name: 'ProfileInitial'
                                    }]
                                })
                            })
                        })
                    })
                }}>
                    <IconButton name="delete" size={30}/>
                    <TextButton>Apagar dados</TextButton>
                </Button>
                <Button disabled={checkUpdating} onPress={async () => checkUpdate(setCheckUpdating)} loading={checkUpdating}>
                    <IconUpdateButton checkUpdating={checkUpdating} name="sync" size={30}/>
                    <TextButton>Verificar atualizações</TextButton>
                </Button>
            </ScrollView>
            <Version>Versão {Constants.manifest.version}</Version>
            <ContainerPoweredBy>
                <TextPoweredBy>Powered by</TextPoweredBy>
                <TextPoweredByName>Miguel da Penha</TextPoweredByName>
            </ContainerPoweredBy>
        </ContainerPd>
    )
}

export default Settings