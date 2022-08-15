import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Menu = styled.View`
    margin-top: 14%;
    flex-direction: row;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 4%;
    margin-right: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ContainerList = styled.TouchableOpacity`
    margin-right: 4%;
    margin-left: auto;
`

export const List = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const Balance = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    margin-bottom: 4%;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const InputFind = styled.TextInput`
    width: 80%;
    padding: 4%;
    elevation: 10;
    margin-bottom: 4%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`