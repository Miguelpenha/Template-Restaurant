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
    margin-left: 6%;
    flex-direction: row;
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

export const LabelMethodPayment = styled.Text`
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const ButtonMethodOfPayment = styled.TouchableOpacity`
    width: 50%;
    margin-top: 5%;
    padding: 4% 12%;
    align-self: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const MethodOfPayment = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const LabelNote = styled.Text`
    width: 85%;
    margin-top: 5%;
    padding-top: 4%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Note = styled.TextInput`
    width: 85%;
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    margin-bottom: 65%;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.color};
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

export const TitleMethod = styled.Text`
    margin-top: 10%;
    margin-bottom: 5%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const ContainerMethods = styled.View`
    padding-bottom: 60%;
`

export const ContainerMethod = styled.TouchableOpacity`
    width: 50%;
    margin-top: 8%;
    padding: 4% 12%;
    align-self: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Method = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`