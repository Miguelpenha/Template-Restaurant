import { IItemList } from '../../../types'
import { FC, useEffect, useState } from 'react'
import { Container, Photo, Informations, Name, Price, ContainerCount, ContainerCountIconLeft, ContainerCountIconRight, CountIcon, Count } from './style'
import { MaterialIcons } from '@expo/vector-icons'
import dinero from 'dinero.js'
import toFormatSafe from '../../../utils/toFormatSafe'
import useList from '../../../listContext'
import { useTheme } from 'styled-components'

interface Iprops {
    item: IItemList
    onMutate: (item: IItemList) => void
}

const Item: FC<Iprops> = ({ item, onMutate }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const { removeItem } = useList()
    const theme = useTheme()

    useEffect(() => onMutate({
        ...item,
        quantity,
        totalPrice: quantity*item.price,
        totalPriceConverted: toFormatSafe(dinero({ amount: quantity*item.price, currency: 'BRL' }))
    }), [quantity])

    return (
        <Container style={{ shadowColor: theme.primary }}>
            <Photo source={{
                uri: item.image
            }}/>
            <Informations>
                <Name>{item.name}</Name>
                <Price>{item.totalPriceConverted}</Price>
            </Informations>
            <ContainerCount>
                <ContainerCountIconLeft onPress={() => {
                    if (quantity > 1) {
                        setQuantity(quantity-1)
                    } else {
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