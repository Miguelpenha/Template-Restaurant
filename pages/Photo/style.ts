import styled from 'styled-components/native'
import ButtonBackNotStyled from '../../components/ButtonBack'
import { Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
`

export const Footer = styled.View`
    padding: 4% 2%;
    background-color: rgba(0, 0, 0, 0.5);
    width: ${Dimensions.get('window').width}px;
`

export const Name = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.color};
`

export const Description = styled.Text`
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.color};
`

export const ButtonShare = styled.TouchableOpacity`
    top: 50%;
    right: 5%;
    margin: auto;
    position: absolute;
`

export const IconShare = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    top: 8%;
    left: 2%;
    z-index: 2;
    position: absolute;
`