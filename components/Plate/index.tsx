import { IPlate } from '../../types'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { Container, Informations, Name, Description, PeoplesCount, Price, Weight, Photo } from './style'

interface Iprops {
    plate: IPlate
    balance: number
}

const Plate: FC<Iprops> = ({ plate, balance }) => {
    const theme = useTheme()
    const navigation = useNavigation()
    
    return (
        <Container onPress={() => navigation.navigate('Plate', { plate, balance })} style={{ shadowColor: theme.secondary }}>
            <Informations>
                <Name>{plate.name}</Name>
                {plate.description && (
                    <Description>{plate.description}</Description>
                )}
                <PeoplesCount>Serve {plate.peoplesCount} {plate.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
                <Price>{plate.priceConverted}</Price>
                {/* <Weight>{plate.weight}g</Weight> */}
            </Informations>
            <Photo source={{
                uri: plate.image
            }}/>
        </Container>
    )
}

export default Plate