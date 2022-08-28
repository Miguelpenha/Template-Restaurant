import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 65%;
    padding: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Header = styled.View`
    flex-direction: row;
`

export const Balance = styled.Text`
    padding: 2% 0%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const ContainerIconDelete = styled.TouchableOpacity`
    margin-left: auto;
    align-self: center;
`

export const IconDelete = styled(MaterialIcons)`
    color: ${props => props.theme.secondary};
`

export const Note = styled.Text`
    color: ${props => props.theme.secondary};
`

export const Footer = styled.View`
    margin-top: auto;
    flex-direction: row;
`

export const Created = styled.Text`
    align-self: flex-end;
    font-size: ${RFPercentage(1.9)}px;
    color: ${props => props.theme.color};
`

const status = css`
    width: 45%;
    padding: 5%;
    margin-left: auto;
    text-align: center;
    border-radius: ${RFPercentage(3)}px;
`

export const FinishedStatus = styled.Text`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.backgroundColorSecondary};

    ${status}
`

export const WaitStatus = styled.Text`
    background-color: yellow;
    color: ${props => props.theme.secondary};

    ${status}
`