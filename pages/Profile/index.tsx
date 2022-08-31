import { Inavigation, IProfile } from '../../types'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useProfile } from '../../contexts/profileContext'
import { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, ContainerSettings, Settings, Title, Field, Label, Required, Input, ButtonSubmit, TextButtonSubmit } from './style'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'

interface IParams {
    initial?: boolean
    transitionModal?: boolean
    editParams?: object | null
    edit?: keyof Inavigation | boolean
}

function Profile() {
    const { initial, edit, editParams, transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const theme = useTheme()
    const { profile, setProfile } = useProfile()
    const [name, setName] = useState(profile && profile.name || '')

    useEffect(() => {
        setName(profile && profile.name || '')
    }, [profile && profile.name])

    return (
        <ContainerPd scroll={false}>
            {!initial && <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>}
            <ScrollView>
                {initial && (
                    <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                        <Settings size={30} name="settings"/>
                    </ContainerSettings>
                )}
                <Title>{edit ? 'Confirmar Perfil' : 'Perfil'}</Title>
                <Field>
                    <Label>Nome <Required>*</Required></Label>
                    <Input autoCompleteType="name" defaultValue={name} onChangeText={setName} autoCorrect selectionColor={theme.secondary} placeholder="Nome..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <ButtonSubmit activeOpacity={0.5} onPress={() => {
                    if (name) {
                        const profileNew: IProfile = {
                            ...profile,
                            name
                        }

                        if (edit && typeof edit === 'string') {
                            navigation.navigate(edit as any, { profileNew, ...editParams } || { profileNew })
                        } else {
                            setProfile(profileNew)

                            initial && navigation.navigate('ContactInitial')

                            !initial && navigation.goBack()

                            !initial && Toast.show({
                                type: 'success',
                                text1: 'Perfil editada com sucesso'
                            })
                        }
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Campos não preenchidos'
                        })
                    }
                }}>
                    <TextButtonSubmit>Confirmar</TextButtonSubmit>
                </ButtonSubmit>
            </ScrollView>
        </ContainerPd>
    )
}

export default Profile