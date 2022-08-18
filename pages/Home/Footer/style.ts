import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    z-index: 2;
    width: 95%;
    elevation: 8;
    bottom: 1.5%;
    padding: 4% 2.5%;
    align-self: center;
    position: absolute;
    flex-direction: row;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Icon = styled(MaterialIcons)`
    margin-left: 2%;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const Text = styled.Text`
    left: 0;
    right: 0;
    position: absolute;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Balance = styled.Text`
    margin-right: 2%;
    margin-left: auto;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`