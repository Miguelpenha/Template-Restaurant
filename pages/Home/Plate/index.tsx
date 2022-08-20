import { IPlate } from '../../../types'
import { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Container, Name, Description, PeoplesCount, ContainerPriceAndAdded, Price, Added, Photo } from './style'
import { View } from 'react-native'
import useList from '../../../contexts/listContext'

interface Iprops {
    plate: IPlate
}

const Plate: FC<Iprops> = ({ plate }) => {
    const navigation = useNavigation()
    const theme = useTheme()
    const { getItem } = useList()
    const [exists, setExists] = useState(false)

    useEffect(() =>  setExists(getItem(plate._id) ? true : false), [plate])
    
    return (
        <Container onPress={() => navigation.navigate('Plate', { plate })} style={{ shadowColor: theme.secondary }}>
            <View>
                <Name>{plate.name}</Name>
                {plate.description && (
                    <Description>{plate.description}</Description>
                )}
                <PeoplesCount>Serve {plate.peoplesCount} {plate.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
                <ContainerPriceAndAdded>
                    <Price>{plate.priceConverted}</Price>
                    {exists && <Added>Já Adicionado</Added>}
                </ContainerPriceAndAdded>
            </View>
            <Photo resizeMode="center" source={{
                uri: plate.photo.url
            }}/>
        </Container>
    )
}

export default Plate