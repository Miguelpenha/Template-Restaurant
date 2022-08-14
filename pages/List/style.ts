import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 8%;
    left: 1%;
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

export const Items = styled.FlatList`
    padding-top: 30%;
`