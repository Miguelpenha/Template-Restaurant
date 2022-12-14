import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 7%;
    left: 1%;
    z-index: 2;
    position: absolute;
`

export const Name = styled.Text`
    margin-top: 28%;
    margin-left: 10%;
    font-size: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.primary};
`

export const MethodOfPayment = styled.Text`
    margin-top: 5%;
    margin-left: 10%;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const ItemsCount = styled.Text`
    margin-top: 2%;
    margin-left: 10%;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondary};
`

export const Price = styled.Text`
    margin-top: 4%;
    margin-left: 10%;
    font-weight: bold;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const ContainerButtons = styled.View`
    margin-top: 65%;
    align-items: center;
`

export const ButtonCancel = styled.TouchableOpacity`
    width: 60%;
    padding: 6%;
    background-color: red;
    border-radius: ${RFPercentage(1)}px;
`

export const TextButtonCancel = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const ButtonDelivered = styled.TouchableOpacity`
    width: 60%;
    padding: 6%;
    margin-top: 10%;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButtonDelivered = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.backgroundColor};
`

export const Loading = styled.ActivityIndicator`
    margin: auto;
`