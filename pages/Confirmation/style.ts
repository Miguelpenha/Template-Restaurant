import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IButtonBack {
    transitionModal: boolean
}

export const ButtonBack = styled(ButtonBackNotStyled)<IButtonBack>`
    z-index: 2;
    position: absolute;
    top: ${props => props.transitionModal ? 7 : 7}%;
    left: ${props => props.transitionModal ? -3 : 2}%;
`

export const Title = styled.Text`
    margin-top: 20%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const Balance = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const ContainerSwitchWithdrawal = styled.View`
    margin-top: 8%;
    align-self: center;
    flex-direction: row;
    margin-bottom: 142%;
`

export const TextSwitchWithdrawal = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const SwitchWithdrawal = styled.Switch`
    margin-left: 4%;
    margin-right: auto;
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 82%;
    bottom: 8%;
    padding: 4%;
    elevation: 8;
    position: absolute;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonSubmit = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`