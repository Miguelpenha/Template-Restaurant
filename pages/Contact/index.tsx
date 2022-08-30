import { IContact, Inavigation } from '../../types'
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

function Contact() {
    const { initial, edit, editParams, transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const theme = useTheme()
    const { profile, setProfile } = useProfile()
    const [email, setEmail] = useState(profile && profile.contact ? profile.contact.email : '')
    const [telephone, setTelephone] = useState(profile && profile.contact ? profile.contact.telephone : '')

    useEffect(() => {
        setEmail(profile && profile.contact ? profile.contact.email : '')
        setTelephone(profile && profile.contact ? profile.contact.telephone : '')
    }, [profile && profile.contact])

    return (
        <ContainerPd scroll={false}>
            {!initial && <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>}
            <ScrollView>
                {initial && (
                    <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                        <Settings size={30} name="settings"/>
                    </ContainerSettings>
                )}
                <Title>{edit ? 'Confirmar Contato' : 'Contato'}</Title>
                <Field>
                    <Label>Email <Required>*</Required></Label>
                    <Input autoCapitalize="none" autoCompleteType="email" defaultValue={email} onChangeText={setEmail} autoCorrect selectionColor={theme.secondary} placeholder="Email..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field>
                    <Label>Telefone <Required>*</Required></Label>
                    <Input autoCapitalize="none" autoCompleteType="tel" defaultValue={telephone} onChangeText={setTelephone} autoCorrect selectionColor={theme.secondary} placeholder="Telefone..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <ButtonSubmit activeOpacity={0.5} onPress={() => {
                    if (email && telephone) {
                        const contact: IContact = {
                            email,
                            telephone
                        }

                        if (edit && typeof edit === 'string') {
                            navigation.navigate(edit as any, { contact, ...editParams } || { contact })
                        } else {
                            setProfile({
                                ...profile,
                                contact
                            })

                            initial && navigation.navigate('LocationInitial')

                            !initial && navigation.goBack()

                            !initial && Toast.show({
                                type: 'success',
                                text1: 'Contato editada com sucesso'
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

export default Contact