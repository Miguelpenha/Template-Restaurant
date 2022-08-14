import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 90%;
    padding: 4%;
    height: 13.5%;
    elevation: 6;
    margin-top: 8%;
    align-self: center;
    flex-direction: row;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColor};
`

export const Informations = styled.View`
    
`

export const Name = styled.Text`
    width: 75%;
    margin-bottom: 1%;
    color: ${props => props.theme.color};
`

export const Description = styled.Text`
    width: 75%;
    margin-bottom: 1%;
    color: ${props => props.theme.secondaryColor};
`

export const PeoplesCount = styled.Text`
    font-weight: bold;
    color: ${props => props.theme.color};
`

export const Price = styled.Text`
    margin-top: auto;
    font-weight: bold;
    margin-bottom: 2%;
    color: ${props => props.theme.color};
`

export const Photo = styled.Image`
    width: 30%;
    aspect-ratio: 1;
    margin-left: auto;
    align-self: center;
    margin-right: 1%;
    border-radius: 10px;
`