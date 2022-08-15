import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 8%;
    left: 2%;
    z-index: 2;
    position: absolute;
`

export const ButtonDeleteAll = styled.TouchableOpacity`
    top: 8%;
    right: 2%;
    z-index: 2;
    position: absolute;
`

export const IconDeleteAll = styled(MaterialIcons)`
    color: ${props => props.theme.secondaryColor};
`

export const TextNotFound = styled.Text`
    margin-top: 40%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4.5)}px;
    line-height: ${RFPercentage(6.5)}px;
    color: ${props => props.theme.primary};
`

export const InputFind = styled.TextInput`
    width: 80%;
    padding: 4%;
    elevation: 10;
    margin-top: 35%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`

export const Items = styled.FlatList`
    padding-top: 5%;
`