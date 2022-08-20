import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import useList from '../../../contexts/listContext'
import { Container, Icon, Text, Balance } from './style'
import toFormatSafe from '../../../utils/toFormatSafe'
import dinero from 'dinero.js'

function Footer() {
    const { list } = useList()
    const navigation = useNavigation()
    const [balance, setBalance] = useState(0)

    function makeBalance() {
        setBalance(0)

        list.map(plate => setBalance(balance => plate.totalPrice+balance))
    }

    useFocusEffect(useCallback(() => {
        makeBalance()
    }, [list]))

    if (list.length >= 1) {
        return (
            <Container activeOpacity={0.7} onPress={() => navigation.navigate('List', {
                transitionModal: true
            })}>
                <Icon name="shopping-cart" size={25}/>
                <Text>Ver lista</Text>
                <Balance>{toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
            </Container>
        )
    } else {
        return null
    }
}

export default Footer