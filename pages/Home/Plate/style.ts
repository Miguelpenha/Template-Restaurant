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

export const Informations = styled.View`
    
`

export const Name = styled.Text`
    width: 65%;
    margin-bottom: 1%;
    color: ${props => props.theme.color};
`

export const Description = styled.Text`
    width: 65%;
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
    width: 40%;
    aspect-ratio: 1;
    margin-right: 1%;
    margin-left: auto;
    align-self: center;
    border-radius: 10px;
`