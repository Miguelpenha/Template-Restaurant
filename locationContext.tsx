import { ILocation } from './types'
import { Dispatch, SetStateAction, createContext, FC, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ILocationContext {
    location: ILocation
    setLocation: Dispatch<SetStateAction<ILocation>>
}

export const LocationContext = createContext<ILocationContext>({} as ILocationContext)

export const LocationProvider: FC = ({ children }) => {
    const [location, setLocation] = useState<ILocation>(null)

    async function loadLocation() {
        const location: ILocation = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:location'))
        
        if (location) {
            setLocation(location)
        }
    }

    async function setLocationOnStorage(location: ILocation) {
        setLocation(location)

        AsyncStorage.setItem('@templateRestaurant:location', JSON.stringify(location))
    }

    useEffect(() => {
        loadLocation().then()
    }, [])
    
    return (
        <LocationContext.Provider value={{location, setLocation: setLocationOnStorage}}>
           {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    return useContext(LocationContext)
}

export default useLocation