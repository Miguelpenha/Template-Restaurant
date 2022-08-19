import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Plate from '../pages/Plate'
import List from '../pages/List'
import Photo from '../pages/Photo'
import Confirmation from '../pages/Confirmation'
import Location from '../pages/Location'
import useLocation from '../locationContext'

function StackRouter() {
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  const { location } = useLocation()
  
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home}/>
      <Screen name="Plate" component={Plate}/>
      <Screen initialParams={{ transitionModal: false }} name="List" component={List} options={({ route: { params } }) => ({
          presentation: params.transitionModal ? 'modal' : 'card'
      })}/>
      <Screen name="Photo" component={Photo}/>
      <Screen initialParams={{ transitionModal: false }} name="Confirmation" component={Confirmation} options={({ route: { params } }) => ({
          presentation: params.transitionModal ? 'modal' : 'card'
      })}/>
      <Screen name="Location" component={Location}/>
      <Screen name="Settings" component={Settings}/>
    </Navigator>
  )
}

export default StackRouter