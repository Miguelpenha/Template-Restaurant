import { useTheme } from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { darkThemeRouter, lightThemeRouter } from '../theme/routes'
import AppStack from './AppStack'
import InitialStack from './InitialStack'
import Toast from 'react-native-toast-message'
import toastConfig from '../toastConfig'
import useLocation from '../locationContext'

function Routes() {
  const { name } = useTheme()
  const { location } = useLocation()

  return (
    <>
      <StatusBar
        animated={true}
        style={name === 'dark' ? 'light' : 'dark'}
      />
      <NavigationContainer theme={name === 'dark' ? darkThemeRouter : lightThemeRouter}>
        {location ? <AppStack/> : <InitialStack/>}
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
  )
}

export default Routes