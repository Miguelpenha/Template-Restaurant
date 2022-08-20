import { ILocation } from '../types'
import { Dispatch, SetStateAction, createContext, FC, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ILocationContext {
    location: ILocation
    loadLocation: () => Promise<void>
    setLocation: Dispatch<SetStateAction<ILocation>>
}

export const LocationContext = createContext<ILocationContext>({} as ILocationContext)

export const LocationProvider: FC = ({ children }) => {
    const [location, setLocation] = useState<ILocation>(null)

    async function loadLocation() {
        const location: ILocation = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:location'))
        
        if (location) {
            setLocation(location)
        } else {
            setLocation(null)
        }
    }

    async function setLocationOnStorage(location: ILocation) {
        AsyncStorage.setItem('@templateRestaurant:location', JSON.stringify(location))

        setLocation(location)
    }

    useEffect(() => {
        loadLocation().then()
    }, [])
    
    return (
        <LocationContext.Provider value={{location, setLocation: setLocationOnStorage, loadLocation}}>
           {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    return useContext(LocationContext)
}

export default useLocation