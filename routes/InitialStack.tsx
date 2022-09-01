import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

function InitialStack() {
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  
  return (
    <Navigator initialRouteName="ProfileInitial" screenOptions={{ headerShown: false }}>
      <Screen name="ProfileInitial" component={Profile} initialParams={{ initial: true }}/>
      <Screen name="Settings" component={Settings}/>
    </Navigator>
  )
}

export default InitialStack