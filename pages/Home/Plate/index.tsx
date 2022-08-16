import { IPlate } from '../../../types'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Container, Name, Description, PeoplesCount, Price, Photo } from './style'
import { View } from 'react-native'

interface Iprops {
    plate: IPlate
}

const Plate: FC<Iprops> = ({ plate }) => {
    const navigation = useNavigation()
    const theme = useTheme()
    
    return (
        <Container onPress={() => navigation.navigate('Plate', { plate })} style={{ shadowColor: theme.secondary }}>
            <View>
                <Name>{plate.name}</Name>
                {plate.description && (
                    <Description>{plate.description}</Description>
                )}
                <PeoplesCount>Serve {plate.peoplesCount} {plate.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
                <Price>{plate.priceConverted}</Price>
            </View>
            <Photo resizeMode="center" source={{
                uri: plate.photo.url
            }}/>
        </Container>
    )
}

export default Plate