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
    color: ${props => props.theme.color};
`

export const Loading = styled.ActivityIndicator`
    margin: auto;
`