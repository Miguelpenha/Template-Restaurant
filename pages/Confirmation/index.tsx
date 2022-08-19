import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import useList from '../../listContext'
import { ButtonBack, Title, Balance, ContainerSwitchWithdrawal, TextSwitchWithdrawal, SwitchWithdrawal, ButtonSubmit, TextButtonSubmit } from './style'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'
import { IRequest } from '../../types'
import { useTheme } from 'styled-components'
import { ScrollView } from 'react-native'

interface IParams {
    transitionModal: boolean
}

function Confirmation() {
    const { transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()
    const [balance, setBalance] = useState(0)
    const { list } = useList()
    const [request, setRequest] = useState<IRequest>()
    const theme = useTheme()
    const [withdrawal, setWithdrawal] = useState(false)

    function makeBalance() {
        setBalance(0)
    
        list.map(plate => setBalance(balance => plate.totalPrice+balance))
    }

    useFocusEffect(useCallback(() => {
        makeBalance()

        setRequest(request => ({...request, balance, withdrawal, list}))
    }, [list, withdrawal]))

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
                <ButtonSubmit activeOpacity={0.5} onPress={() => {
                    console.log(request)
                }}>
                    <TextButtonSubmit>Confirmar</TextButtonSubmit>
                </ButtonSubmit>
            </ScrollView>
        </ContainerPd>
    )
}

export default Confirmation