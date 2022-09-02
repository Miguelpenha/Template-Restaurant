import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

interface IButtonBack {
    transitionModal: boolean
}

export const ButtonBack = styled(ButtonBackNotStyled)<IButtonBack>`
    z-index: 2;
    position: absolute;
    top: ${props => props.transitionModal ? 7 : 7}%;
    left: ${props => props.transitionModal ? -2 : 3}%;
`

export const ContainerForm = styled.ScrollView`
    
`

export const ContainerSettings = styled.TouchableOpacity`
    top: 6%;
    left: 3%;
    z-index: 2;
    position: absolute;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    margin-top: 25%;
    font-weight: bold;
    margin-bottom: 5%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

interface IField {
    last?: boolean
}

export const Field = styled.View<IField>`
    width: 90%;
    align-self: center;
    margin-bottom: ${props => props.last ? 35 : 6}%;
`

export const Label = styled.Text`
    margin-bottom: 2%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Required = styled.Text`
    color: red;
    margin-bottom: 2%;
    font-size: ${RFPercentage(2.5)}px;
`

export const Input = styled.TextInput`
    padding: 3%;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1.5)}px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
`

export const SubTitle = styled.Text`
    width: 90%;
    margin-top: 5%;
    margin-bottom: 6%;
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 82%;
    bottom: 3%;
    padding: 4%;
    elevation: 8;
    position: absolute;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonSubmit = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`