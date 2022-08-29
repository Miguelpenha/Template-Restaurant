import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Contact from '../pages/Contact'
import Location from '../pages/Location'
import Settings from '../pages/Settings'

function InitialStack() {
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  
  return (
    <Navigator initialRouteName="ContactInitial" screenOptions={{ headerShown: false }}>
      <Screen name="ContactInitial" component={Contact} initialParams={{ initial: true }}/>
      <Screen name="LocationInitial" component={Location} initialParams={{ initial: true }}/>
      <Screen name="Settings" component={Settings}/>
    </Navigator>
  )
}

export default InitialStack