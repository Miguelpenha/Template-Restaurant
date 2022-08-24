import styled, { css } from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IButtonBack {
    transitionModal: boolean
}

export const ButtonBack = styled(ButtonBackNotStyled)<IButtonBack>`
    z-index: 2;
    position: absolute;
    top: ${props => props.transitionModal ? 7 : 8}%;
    left: ${props => props.transitionModal ? -2 : 2}%;
`

export const ButtonDeleteAll = styled.TouchableOpacity`
    top: 14%;
    right: 3.5%;
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

export const Balance = styled.Text`
    margin-top: 35%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const InputFind = styled.TextInput`
    width: 80%;
    padding: 4%;
    elevation: 10;
    margin-top: 10%;
    margin-bottom: 5%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`

export const NotFoundFindMessage = styled.Text`
    padding: 3% 5%;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
    align-self: center;
    line-height: ${RFPercentage(4)}px;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Items = styled.FlatList`
    padding-top: 5%;
`

export const ButtonConfirm = styled.TouchableOpacity`
    width: 82%;
    bottom: 4%;
    padding: 4%;
    elevation: 8;
    position: absolute;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonConfirm = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const Loading = styled.ActivityIndicator`
    margin: auto;
`

export const ModalDeleteAll = styled.View`
    width: 95%;
    height: 30%;
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

export const FooterModalDeleteAll = styled.View`
    margin-top: auto;
    flex-direction: row;
`

export const ButtonModalDeleteAll = css`
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