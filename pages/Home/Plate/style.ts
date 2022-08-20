import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 90%;
    padding: 4%;
    elevation: 6;
    margin-top: 4%;
    margin-bottom: 4%;
    align-self: center;
    flex-direction: row;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColor};
`

export const Name = styled.Text`
    width: 65%;
    margin-bottom: 1%;
    color: ${props => props.theme.color};
`

export const Description = styled.Text`
    width: 70%;
    margin-bottom: 1%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const PeoplesCount = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
`

export const ContainerPriceAndAdded = styled.View`
    width: 72%;
    margin-top: auto;
    margin-bottom: 2%;
    flex-direction: row;
`

export const Price = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
`

export const Added = styled.Text`
    margin-left: 8%;
    margin-top: auto;
    font-weight: bold;
    font-size: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
`

export const Photo = styled.Image`
    width: 40%;
    aspect-ratio: 1;
    margin-right: 1%;
    margin-left: auto;
    align-self: center;
    border-radius: 10px;
`