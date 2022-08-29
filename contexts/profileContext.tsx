import { IProfile } from '../types'
import { Dispatch, SetStateAction, createContext, FC, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IProfileContext {
    profile: IProfile
    loadProfile: () => Promise<void>
    setProfile: Dispatch<SetStateAction<IProfile>>
}

export const ProfileContext = createContext<IProfileContext>({} as IProfileContext)

export const ProfileProvider: FC = ({ children }) => {
    const [profile, setProfile] = useState<IProfile>(null)
    
    async function loadProfile() {
        const profile: IProfile = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:profile'))
        
        if (profile) {
            setProfile(profile)
        } else {
            setProfile(null)
        }
    }

    async function setProfileOnStorage(profile: IProfile) {
        AsyncStorage.setItem('@templateRestaurant:profile', JSON.stringify(profile))

        setProfile(profile)
    }

    useEffect(() => {
        loadProfile().then()
    }, [])
    
    return (
        <ProfileContext.Provider value={{profile, setProfile: setProfileOnStorage, loadProfile}}>
           {children}
        </ProfileContext.Provider>
    )
}

export function useProfile() {
    return useContext(ProfileContext)
}

export default useProfile