import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Plate from '../pages/Plate'
import List from '../pages/List'
import Photo from '../pages/Photo'
import Confirmation from '../pages/Confirmation'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import Location from '../pages/Location'
import Settings from '../pages/Settings'
import Orders from '../pages/Orders'

function AppStack() {
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  
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
      <Screen initialParams={{ initial: false, transitionModal: false, edit: false }} name="Profile" component={Profile} options={({ route: { params } }) => ({
          presentation: params.transitionModal ? 'modal' : 'card'
      })}/>
      <Screen initialParams={{ initial: false, transitionModal: false, edit: false }} name="Contact" component={Contact} options={({ route: { params } }) => ({
          presentation: params.transitionModal ? 'modal' : 'card'
      })}/>
      <Screen initialParams={{ initial: false, transitionModal: false, edit: false }} name="Location" component={Location} options={({ route: { params } }) => ({
          presentation: params.transitionModal ? 'modal' : 'card'
      })}/>
      <Screen name="Settings" component={Settings}/>
      <Screen name="Orders" component={Orders}/>
    </Navigator>
  )
}

export default AppStack