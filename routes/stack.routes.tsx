import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Plate from '../pages/Plate'
import List from '../pages/List'

function StackRouter() {
    const { Navigator, Screen } = createStackNavigator<Inavigation>()
    
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" initialParams={{
                list: []
            }} component={Home}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="Plate" component={Plate}/>
            <Screen name="List" component={List}/>
        </Navigator>
    )
}

export default StackRouter