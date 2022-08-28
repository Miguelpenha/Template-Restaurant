import styled, { css } from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 7%;
    left: 3%;
    z-index: 2;
    position: absolute;
`

export const Title = styled.Text`
    margin-top: 25%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4.8)}px;
    color: ${props => props.theme.primary};
`

export const TextNotFound = styled.Text`
    margin-top: 15%;
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