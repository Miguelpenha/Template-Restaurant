import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 7%;
    left: 1%;
    z-index: 2;
    position: absolute;
`

export const IconZoom = styled(MaterialIcons)`
    right: 4%;
    top: 14.5%;
    z-index: 1;
    position: absolute;
    color: ${props => props.theme.secondaryColor};
`

export const Photo = styled.Image`
    width: 100%;
    aspect-ratio: 1;
    align-self: center;
`

export const Name = styled.Text`
    width: 85%;
    margin-top: 8%;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const Description = styled.Text`
    width: 85%;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const PeoplesCount = styled.Text`
    width: 85%;
    margin-top: 3%;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Price = styled.Text`
    width: 85%;
    margin-top: 5%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const LabelNote = styled.Text`
    width: 85%;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const Note = styled.TextInput`
    width: 85%;
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.color};
`

export const ContainerCountAndButton = styled.View`
    width: 85%;
    margin-top: 5%;
    margin-bottom: 15%;
    align-self: center;
    flex-direction: row;
`

export const ContainerCount = styled.View`
    width: 45%;
    align-self: center;
    margin-right: auto;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.secondary};
`

export const ContainerCountIconLeft = styled.TouchableOpacity`
    width: 30%;
    margin: auto;
    align-items: center;
`

export const ContainerCountIconRight = styled.TouchableOpacity`
    width: 30%;
    margin: auto;
    align-items: center;
`

export const CountIcon = styled.Text`
    font-size: ${RFPercentage(6)}px;
    color: ${props => props.theme.primary};
`

export const Count = styled.Text`
    margin: auto;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 45%;
    padding: 2%;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButtonSubmit = styled.Text`
    margin: auto;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
`