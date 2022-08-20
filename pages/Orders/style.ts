import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 7%;
    left: 3%;
    z-index: 2;
    position: absolute;
`

export const TextNotFound = styled.Text`
    margin-top: 40%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4.5)}px;
    line-height: ${RFPercentage(6.5)}px;
    color: ${props => props.theme.primary};
`

export const OrdersContainer = styled.FlatList`
    margin-top: 25%;
`

export const Loading = styled.ActivityIndicator`
    margin: auto;
`