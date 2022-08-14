import { IPlate } from '../../../types'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { Container, Informations, Name, Description, PeoplesCount, Price, Photo } from './style'

interface Iprops {
    plate: IPlate
}

const Plate: FC<Iprops> = ({ plate }) => {
    const theme = useTheme()
    const navigation = useNavigation()
    
    return (
        <Container onPress={() => navigation.navigate('Plate', { plate })} style={{ shadowColor: theme.secondary }}>
            <Informations>
                <Name>{plate.name}</Name>
                {plate.description && (
                    <Description>{plate.description}</Description>
                )}
                <PeoplesCount>Serve {plate.peoplesCount} {plate.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
                <Price>{plate.priceConverted}</Price>
            </Informations>
            <Photo resizeMode="center" source={{
                uri: plate.image
            }}/>
        </Container>
    )
}

export default Plate