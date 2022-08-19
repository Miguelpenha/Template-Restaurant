import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import useList from '../../listContext'
import { ButtonBack, Title, Balance, ButtonSubmit, TextButtonSubmit } from './style'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'

interface IParams {
    transitionModal: boolean
}

function Confirmation() {
    const { transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const [balance, setBalance] = useState(0)
    const { list } = useList()

    function makeBalance() {
        setBalance(0)
    
        list.map(plate => setBalance(balance => plate.totalPrice+balance))
    }    

    useFocusEffect(useCallback(() => {
        makeBalance()
    }, [list]))

    return (
        <ContainerPd>
            <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>
            <Title>Confirmação</Title>
            <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
            <ButtonSubmit activeOpacity={0.5}>
                <TextButtonSubmit>Confirmar</TextButtonSubmit>
            </ButtonSubmit>
        </ContainerPd>
    )
}

export default Confirmation