import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ModalDeleteAll = styled.View`
    width: 95%;
    height: 40%;
    padding: 6%;
    align-self: center;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const TitleModalDeleteAll = styled.Text`
    margin-top: 2%;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const ContainerDataModalDeleteAll = styled.View`

`

export const DataModalDeleteAll = styled.Text`
    width: 95%;
    color: red;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(2.6)}px;
`

export const FooterModalDeleteAll = styled.View`
    margin-top: auto;
    flex-direction: row;
`

const ButtonModalDeleteAll = css`
    width: 35%;
    padding: 4%;
    border-radius: ${RFPercentage(1)}px;
`

export const ButtonCancelModalDeleteAll = styled.TouchableOpacity`
    ${ButtonModalDeleteAll}

    background-color: ${props => props.theme.secondary};
`

export const TextButtonCancelModalDeleteAll = styled.Text`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.backgroundColor};
`

export const ButtonSubmitModalDeleteAll = styled.TouchableOpacity`
    ${ButtonModalDeleteAll}

    margin-left: auto;
    background-color: red;
`

export const TextButtonSubmitModalDeleteAll = styled.Text`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.color};
`

export const ContainerSwitch = styled.View`
    margin-top: 2%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Switch = styled.Switch`
    margin-left: 1%;
`

interface IButton {
    loading?: boolean
}

export const Button = styled.TouchableOpacity<IButton>`
    padding: 3.5%;
    margin-top: 8%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.loading ? '#c7dffe' : props.theme.primary};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`

interface IIconUpdateButton {
    checkUpdating: boolean
}

export const IconUpdateButton = styled(IconButton)<IIconUpdateButton>`
    ${props => props.checkUpdating ? css`
        transform: rotate(90deg);
    ` : css`
        transform: rotate(0deg);
    `};
`

export const TextButton = styled.Text`
    margin-left: 1%;
    font-weight: bold;
    padding-right: 1%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Version = styled.Text`
    margin-top: auto;
    align-self: center;
    margin-bottom: 2%;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPoweredBy = styled.View`
    align-items: center;
    margin-bottom: 5%;
`

export const TextPoweredBy = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const TextPoweredByName = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`