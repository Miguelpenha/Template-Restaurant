import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useRef, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import useList from '../../contexts/listContext'
import { ButtonBack, Title, Balance, ContainerSwitchWithdrawal, TextSwitchWithdrawal, SwitchWithdrawal, LabelMethodPayment, ButtonMethodOfPayment, MethodOfPayment, LabelNote, Note, ButtonSubmit, TextButtonSubmit, TitleMethod, ContainerMethods, ContainerMethod, Method } from './style'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'
import { ILocation, IOrder } from '../../types'
import { useTheme } from 'styled-components'
import { ScrollView } from 'react-native'
import { useProfile } from '../../contexts/profileContext'
import base from '../../api/base'
import Toast from 'react-native-toast-message'
import useOrders from '../../contexts/ordersContext'
import { Modalize } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import methodsOfPayments from './methodsOfPayments'

interface IParams {
    location: ILocation
    transitionModal?: boolean
}

function Confirmation() {
    const { transitionModal, location: locationOrigin } = useRoute().params as IParams
    const navigation = useNavigation()
    const [balance, setBalance] = useState(0)
    const { list, setList } = useList()
    const [order, setOrder] = useState<IOrder>()
    const theme = useTheme()
    const [withdrawal, setWithdrawal] = useState(false)
    const [note, setNote] = useState('')
    const { profile } = useProfile()
    const { addOrder } = useOrders()
    const [methodOfPayment, setMethodOfPayment] = useState('Dinheiro')
    const modalMethodOfPayment = useRef<Modalize>(null)

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
            location: locationOrigin || profile && profile.location,
            note,
            methodOfPayment,
            contact: profile.contact,
            nameUser: profile.name || ''
        }))
    }, [list, withdrawal, note, balance, methodOfPayment]))

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
                <LabelMethodPayment>Forma de pagamento</LabelMethodPayment>
                <ButtonMethodOfPayment onPress={() => modalMethodOfPayment.current.open()}>
                    <MethodOfPayment>{methodOfPayment}</MethodOfPayment>
                </ButtonMethodOfPayment>
                <LabelNote>Alguma observação?</LabelNote>
                <Note maxLength={160} multiline autoCapitalize="sentences" autoCompleteType="username" defaultValue={note} onChangeText={setNote} autoCorrect selectionColor={theme.primary} placeholder="Observação..." placeholderTextColor={theme.secondaryColor}/>
                <ButtonSubmit activeOpacity={0.5} onPress={async () => {
                    const { data: { order: orderCreated } } = await base.post<{ order: IOrder }>('/orders', order)
                    
                    await addOrder(orderCreated)

                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Home'
                            },
                            {
                                name: 'Orders'
                            }
                        ]
                    })

                    setList([])

                    Toast.show({
                        type: 'success',
                        text1: 'Pedido feito com sucesso!'
                    })
                }}>
                    <TextButtonSubmit>Confirmar</TextButtonSubmit>
                </ButtonSubmit>
            </ScrollView>
            <Modalize ref={modalMethodOfPayment} modalHeight={RFPercentage(80)} modalStyle={{backgroundColor: theme.backgroundColor}}>
                <TitleMethod>Forma de pagamento</TitleMethod>
                <ContainerMethods>
                    {methodsOfPayments.map((method, index) => (
                        <ContainerMethod key={index} onPress={() => {
                            setMethodOfPayment(method)

                            modalMethodOfPayment.current.close()
                        }}>
                            <Method>{method}</Method>
                        </ContainerMethod>
                    ))}
                </ContainerMethods>
            </Modalize>
        </ContainerPd>
    )
}

export default Confirmation