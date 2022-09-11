import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Menu = styled.View`
    padding: 0% 4%;
    margin-top: 16%;
    flex-direction: row;
    justify-content: space-between;
`

export const IconMenu = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Quantity = styled.Text`
    top: -5%;
    width: 50%;
    right: -10%;
    padding: 5%;
    text-align: center;
    position: absolute;
    border-radius: 50px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
`

export const Title = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const InputFind = styled.TextInput`
    width: 80%;
    padding: 4%;
    elevation: 10;
    margin-top: 8%;
    margin-bottom: 4%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerPeoplesCountFilterAndLabel = styled.View`
    margin-left: 10%;
`

export const LabelPeoplesCountFilter = styled.Text`
    margin-bottom: 5%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const ContainerPeoplesCountFilter = styled.View`
    width: 35%;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(3)}px;
    border: 1px solid ${props => props.theme.primary};
`

export const ContainerPeoplesCountFilterIconLeft = styled.TouchableOpacity`
    width: 22%;
    margin: auto;
    align-items: center;
`

export const ContainerPeoplesCountFilterIconRight = styled.TouchableOpacity`
    width: 22%;
    margin: auto;
    align-items: center;
`

interface IPeoplesCountFilterIcon {
    disabled?: boolean
}

export const PeoplesCountFilterIcon = styled.Text<IPeoplesCountFilterIcon>`
    font-size: ${RFPercentage(7)}px;
    color: ${props => !props.disabled ? props.theme.primary : props.theme.secondary};
`

export const PeoplesCountFilter = styled.Text`
    margin: auto;
    font-weight: bold;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const NotFoundMessage = styled.Text`
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