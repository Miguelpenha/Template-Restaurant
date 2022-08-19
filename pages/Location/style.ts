import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 8%;
    left: 2%;
    z-index: 2;
    position: absolute;
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
    margin-top: 20%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const Field = styled.View`
    width: 90%;
    margin-top: 6%;
    align-self: center;
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

export const ButtonSubmit = styled.TouchableOpacity`
    width: 82%;
    padding: 4%;
    elevation: 8;
    margin-top: 10%;
    margin-bottom: 10%;
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