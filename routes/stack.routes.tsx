import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Plate from '../pages/Plate'
import List from '../pages/List'
import Photo from '../pages/Photo'

function StackRouter() {
    const { Navigator, Screen } = createStackNavigator<Inavigation>()
    
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="Plate" component={Plate}/>
            <Screen name="List" component={List}/>
            <Screen name="Photo" component={Photo}/>
        </Navigator>
    )
}

export default StackRouter