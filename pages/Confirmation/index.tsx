import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import useList from '../../contexts/listContext'
import { ButtonBack, Title, Balance, ContainerSwitchWithdrawal, TextSwitchWithdrawal, SwitchWithdrawal, LabelNote, Note, ButtonSubmit, TextButtonSubmit } from './style'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'
import { IOrder } from '../../types'
import { useTheme } from 'styled-components'
import { ScrollView } from 'react-native'
import useLocation from '../../contexts/locationContext'
import api from '../../api'
import Toast from 'react-native-toast-message'
import useOrders from '../../contexts/ordersContext'

interface IParams {
    transitionModal: boolean
}

function Confirmation() {
    const { transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const [balance, setBalance] = useState(0)
    const { list, setList } = useList()
    const [order, setOrder] = useState<IOrder>()
    const theme = useTheme()
    const [withdrawal, setWithdrawal] = useState(false)
    const [note, setNote] = useState('')
    const { location } = useLocation()
    const { addOrder } = useOrders()

    function makeBalance() {
        setBalance(0)
    
        list.map(plate => setBalance(balance => plate.totalPrice+balance))
    }

    useFocusEffect(useCallback(() => {
        makeBalance()

        setOrder(order => ({
            ...order,
            balance,
            withdrawal,
            list,
            balanceConverted: toFormatSafe(dinero({ amount: balance, currency: 'BRL' })),
            location,
            note
        }))
    }, [list, withdrawal, note, balance]))

    return (
        <ContainerPd scroll={false}>
            <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>
            <ScrollView>
                <Title>Confirmação</Title>
                <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
                <ContainerSwitchWithdrawal>
                    <TextSwitchWithdrawal>Retirada no Local</TextSwitchWithdrawal>
                    <SwitchWithdrawal
                        value={withdrawal}
                        thumbColor={theme.primary}
                        onChange={() => setWithdrawal(!withdrawal)}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                    />
                </ContainerSwitchWithdrawal>
                <LabelNote>Alguma observação?</LabelNote>
                <Note maxLength={160} multiline autoCapitalize="sentences" autoCompleteType="username" defaultValue={note} onChangeText={setNote} autoCorrect selectionColor={theme.primary} placeholder="Observação..." placeholderTextColor={theme.secondaryColor}/>
                <ButtonSubmit activeOpacity={0.5} onPress={async () => {
                    const { data: { order: orderCreated } } = await api.post<{ order: IOrder }>('/orders', order)
                    
                    await addOrder(orderCreated)

                    navigation.navigate('Home')

                    setList([])

                    Toast.show({
                        type: 'success',
                        text1: 'Pedido feito com sucesso!'
                    })
                }}>
                    <TextButtonSubmit>Confirmar</TextButtonSubmit>
                </ButtonSubmit>
            </ScrollView>
        </ContainerPd>
    )
}

export default Confirmation