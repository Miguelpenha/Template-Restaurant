import { useRoute, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import useLocation from '../../locationContext'
import { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, ContainerSettings, Settings, Title, Field, Label, Required, Input, ButtonSubmit, TextButtonSubmit } from './style'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'

interface IParams {
    initial?: boolean
}

function Location() {
    const { initial } = useRoute().params as IParams
    const navigation = useNavigation()
    const theme = useTheme()
    const { location, setLocation } = useLocation()
    const [city, setCity] = useState(location ? location.city : '')
    const [neighborhood, setNeighborhood] = useState(location ? location.neighborhood : '')
    const [street, setStreet] = useState(location ? location.street : '')
    const [complement, setComplement] = useState(location ? location.complement : '')
    const [number, setNumber] = useState(location ? location.number : '')

    useEffect(() => {
        setCity(location ? location.city : '')
        setNeighborhood(location ? location.neighborhood : '')
        setStreet(location ? location.street : '')
        setComplement(location ? location.complement : '')
        setNumber(location ? location.number : '')
    }, [location])

    return (
        <ContainerPd scroll={false}>
            {!initial && <ButtonBack iconSize={30} iconName="arrow-back-ios" onClick={() => navigation.goBack()}/>}
            <ScrollView>
                {initial && (
                    <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                        <Settings size={30} name="settings"/>
                    </ContainerSettings>
                )}
                <Title>Localização</Title>
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
                        setLocation({
                            city,
                            complement,
                            neighborhood,
                            number,
                            street
                        })
                        
                        !initial && navigation.goBack()

                        !initial && Toast.show({
                            type: 'success',
                            text1: 'Localização editada com sucesso'
                        })
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