import { Inavigation, IProfile } from '../../types'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useProfile } from '../../contexts/profileContext'
import { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, ContainerForm, ContainerSettings, Settings, Title, Field, Label, Required, Input, SubTitle, ButtonSubmit, TextButtonSubmit } from './style'
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
    const [email, setEmail] = useState(profile && profile.contact ? profile.contact.email : '')
    const [telephone, setTelephone] = useState(profile && profile.contact ? profile.contact.telephone : '')
    const [city, setCity] = useState(profile && profile.location ? profile.location.city : '')
    const [neighborhood, setNeighborhood] = useState(profile && profile.location ? profile.location.neighborhood : '')
    const [street, setStreet] = useState(profile && profile.location ? profile.location.street : '')
    const [complement, setComplement] = useState(profile && profile.location ? profile.location.complement : '')
    const [number, setNumber] = useState(profile && profile.location ? profile.location.number : '')

    useEffect(() => {
        setName(profile && profile.name || '')
        setEmail(profile && profile.contact ? profile.contact.email : '')
        setTelephone(profile && profile.contact ? profile.contact.telephone : '')
        setCity(profile && profile.location ? profile.location.city : '')
        setNeighborhood(profile && profile.location ? profile.location.neighborhood : '')
        setStreet(profile && profile.location ? profile.location.street : '')
        setComplement(profile && profile.location ? profile.location.complement : '')
        setNumber(profile && profile.location ? profile.location.number : '')
    }, [profile])

    return (
        <ContainerPd scroll={false}>
            {!initial && <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>}
            <ContainerForm>
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
                <SubTitle>Contato</SubTitle>
                <Field>
                    <Label>Email <Required>*</Required></Label>
                    <Input autoCapitalize="none" autoCompleteType="email" defaultValue={email} onChangeText={setEmail} autoCorrect selectionColor={theme.secondary} placeholder="Email..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field>
                    <Label>Telefone <Required>*</Required></Label>
                    <Input autoCapitalize="none" autoCompleteType="tel" defaultValue={telephone} onChangeText={setTelephone} autoCorrect selectionColor={theme.secondary} placeholder="Telefone..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <SubTitle>Localização</SubTitle>
                <Field>
                    <Label>Cidade <Required>*</Required></Label>
                    <Input autoCompleteType="street-address" defaultValue={city} onChangeText={setCity} autoCorrect selectionColor={theme.secondary} placeholder="Cidade..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field>
                    <Label>Bairro <Required>*</Required></Label>
                    <Input autoCompleteType="street-address" defaultValue={neighborhood} onChangeText={setNeighborhood} autoCorrect selectionColor={theme.secondary} placeholder="Bairro..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field>
                    <Label>Rua <Required>*</Required></Label>
                    <Input autoCompleteType="street-address" defaultValue={street} onChangeText={setStreet} autoCorrect selectionColor={theme.secondary} placeholder="Rua..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field>
                    <Label>Complemento da casa/apartamento <Required>*</Required></Label>
                    <Input autoCompleteType="street-address" defaultValue={complement} onChangeText={setComplement} autoCorrect selectionColor={theme.secondary} placeholder="Complemento..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <Field last>
                    <Label>Número da casa/apartamento <Required>*</Required></Label>
                    <Input autoCompleteType="cc-number" defaultValue={number} onChangeText={setNumber} autoCorrect selectionColor={theme.secondary} placeholder="Número da casa/apartamento..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
            </ContainerForm>
            <ButtonSubmit activeOpacity={0.5} onPress={() => {
                if (name && email && telephone && city && neighborhood && street && complement && number) {
                    const profileNew: IProfile = {
                        contact: {
                            telephone,
                            email
                        },
                        location: {
                            city,
                            complement,
                            neighborhood,
                            number,
                            street
                        },
                        name
                    }

                    if (edit && typeof edit === 'string') {
                        navigation.navigate(edit as any, { profileNew, ...editParams } || { profileNew })
                    } else {
                        setProfile(profileNew)

                        !initial && navigation.goBack()

                        !initial && Toast.show({
                            type: 'success',
                            text1: 'Perfil editado com sucesso'
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
        </ContainerPd>
    )
}

export default Profile