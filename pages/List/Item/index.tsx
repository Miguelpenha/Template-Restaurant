import { IItemList } from '../../../types'
import { FC, useState, useCallback, useEffect } from 'react'
import useList from '../../../listContext'
import { useTheme } from 'styled-components'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import toFormatSafe from '../../../utils/toFormatSafe'
import dinero from 'dinero.js'
import { Container, Photo, Informations, Name, Note, Price, ContainerCount, ContainerCountIconLeft, ContainerCountIconRight, CountIcon, Count } from './style'
import Toast from 'react-native-toast-message'
import { MaterialIcons } from '@expo/vector-icons'

interface Iprops {
    item: IItemList
    onMutate: (item: IItemList) => void
}

const Item: FC<Iprops> = ({ item, onMutate }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const { removeItem } = useList()
    const theme = useTheme()
    const navigation = useNavigation()

    useEffect(() => onMutate({
        ...item,
        quantity,
        totalPrice: quantity*item.price,
        totalPriceConverted: toFormatSafe(dinero({ amount: quantity*item.price, currency: 'BRL' }))
    }), [quantity])

    useFocusEffect(useCallback(() => {
        setQuantity(item.quantity)
    }, [item]))

    return (
        <Container onPress={() => navigation.navigate('Plate', { plate: item })} style={{ shadowColor: theme.primary }}>
            <Photo source={{
                uri: item.image
            }}/>
            <Informations>
                <Name>{item.name}</Name>
                {item.note.length >= 1 && <Note>Obs: {item.note}</Note>}
                <Price>{item.totalPriceConverted}</Price>
            </Informations>
            <ContainerCount>
                <ContainerCountIconLeft onPress={() => {
                    if (quantity > 1) {
                        setQuantity(quantity-1)
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Prato removido com sucesso'
                        })
                        removeItem(item._id)
                    }
                }}>
                    <CountIcon>{quantity === 1 ? <MaterialIcons name="delete" size={20}/> : '-'}</CountIcon>
                </ContainerCountIconLeft>
                <Count>{quantity}</Count>
                <ContainerCountIconRight onPress={() => setQuantity(quantity+1)}>
                    <CountIcon>+</CountIcon>
                </ContainerCountIconRight>
            </ContainerCount>
        </Container>
    )
}

export default Item