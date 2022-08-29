import { ILocation, Inavigation } from '../../types'
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

function Location() {
    const { initial, edit, editParams, transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const theme = useTheme()
    const { profile, setProfile } = useProfile()
    const [city, setCity] = useState(profile && profile.location ? profile.location.city : '')
    const [neighborhood, setNeighborhood] = useState(profile && profile.location ? profile.location.neighborhood : '')
    const [street, setStreet] = useState(profile && profile.location ? profile.location.street : '')
    const [complement, setComplement] = useState(profile && profile.location ? profile.location.complement : '')
    const [number, setNumber] = useState(profile && profile.location ? profile.location.number : '')

    useEffect(() => {
        setCity(profile && profile.location ? profile.location.city : '')
        setNeighborhood(profile && profile.location ? profile.location.neighborhood : '')
        setStreet(profile && profile.location ? profile.location.street : '')
        setComplement(profile && profile.location ? profile.location.complement : '')
        setNumber(profile && profile.location ? profile.location.number : '')
    }, [profile && profile.location])

    return (
        <ContainerPd scroll={false}>
            {!initial && <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>}
            <ScrollView>
                {initial && (
                    <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                        <Settings size={30} name="settings"/>
                    </ContainerSettings>
                )}
                <Title>{edit ? 'Confirmar Localização' : 'Localização'}</Title>
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
                <Field>
                    <Label>Número da casa/apartamento <Required>*</Required></Label>
                    <Input autoCompleteType="cc-number" defaultValue={number} onChangeText={setNumber} autoCorrect selectionColor={theme.secondary} placeholder="Número da casa/apartamento..." placeholderTextColor={theme.secondaryColor}/>
                </Field>
                <ButtonSubmit activeOpacity={0.5} onPress={() => {
                    if (city && neighborhood && street && complement && number) {
                        const location: ILocation = {
                            city,
                            complement,
                            neighborhood,
                            number,
                            street
                        }

                        if (edit && typeof edit === 'string') {
                            navigation.navigate(edit as any, { location, ...editParams } || { location })
                        } else {
                            setProfile({
                                ...profile,
                                location
                            })

                            !initial && navigation.goBack()

                            !initial && Toast.show({
                                type: 'success',
                                text1: 'Localização editada com sucesso'
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

export default Location