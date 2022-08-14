import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    width: 90%;
    padding: 5%;
    elevation: 10;
    margin-top: 5%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const Photo = styled.Image`
    width: 25%;
    aspect-ratio: 1;
    border-radius: 10px;
`

export const Informations = styled.View`
    width: 70%;
    margin-left: 8%;
    margin-right: auto;
`

export const Name = styled.Text`
    margin-bottom: 5%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Note = styled.Text`
    margin-bottom: 10%;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.primary};
`

export const Price = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`

export const ContainerCount = styled.View`
    width: 32%;
    margin-top: 15%;
    margin-left: auto;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    align-self: flex-end;
    border: 1px solid ${props => props.theme.secondary};
`

export const ContainerCountIconLeft = styled.TouchableOpacity`
    width: 30%;
    margin: auto;
    align-items: center;
`

export const ContainerCountIconRight = styled.TouchableOpacity`
    width: 30%;
    margin: auto;
    align-items: center;
`

export const CountIcon = styled.Text`
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const Count = styled.Text`
    margin: auto;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`