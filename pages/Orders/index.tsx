import useOrders from '../../contexts/ordersContext'
import { useState, useCallback } from 'react'
import { IOrder } from '../../types'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import Modal from 'react-native-modal'
import { ButtonBack, TextNotFound, OrdersContainer, Loading, ModalDeleteAll, TitleModalDeleteAll, FooterModalDeleteAll, ButtonCancelModalDeleteAll, TextButtonCancelModalDeleteAll, ButtonSubmitModalDeleteAll, TextButtonSubmitModalDeleteAll } from './style'
import base from '../../api/base'
import Toast from 'react-native-toast-message'
import { ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import Order from './Order'

function Orders() {
    const { loadOrders, orders } = useOrders()
    const [refreshing, setRefreshing] = useState(false)
    const [openModal, setOpenModal] = useState<IOrder | null>()
    const navigation = useNavigation()
    const theme = useTheme()

    useFocusEffect(useCallback(() => {
        loadOrders().then()
    }, []))

    async function onRefreshAction() {
        setRefreshing(true)
    
        await loadOrders()
    
        setRefreshing(false)
    }

    if (orders) {
        return (
            <ContainerPd scroll={false}>
                <Modal
                    isVisible={openModal ? true : false}
                    onBackdropPress={() => setOpenModal(null)}
                    onBackButtonPress={() => setOpenModal(null)}
                >
                    <ModalDeleteAll>
                        <TitleModalDeleteAll>Cancelar esse pedido</TitleModalDeleteAll>
                        <FooterModalDeleteAll>
                        <ButtonCancelModalDeleteAll onPress={() => setOpenModal(null)}>
                            <TextButtonCancelModalDeleteAll>Não</TextButtonCancelModalDeleteAll>
                        </ButtonCancelModalDeleteAll>
                        <ButtonSubmitModalDeleteAll onPress={async () => {
                            await base.delete(`orders/${openModal._id}`)

                            await loadOrders()
        
                            Toast.show({
                                type: 'error',
                                text1: 'Pedido cancelado com sucesso'
                            })

                            setOpenModal(null)
                        }}>
                            <TextButtonSubmitModalDeleteAll>Cancelar</TextButtonSubmitModalDeleteAll>
                        </ButtonSubmitModalDeleteAll>
                        </FooterModalDeleteAll>
                    </ModalDeleteAll>
                </Modal>
                <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
                {orders && orders.length < 1 && <TextNotFound>Ainda não há pedidos {'\n'}no seu histórico{'\n'}{':('}</TextNotFound>}
                <OrdersContainer 
                    data={orders}
                    keyExtractor={(item: IOrder) => item._id}
                    renderItem={({ item }: ListRenderItemInfo<IOrder>) => <Order setOpenModal={setOpenModal} order={item}/>}
                    refreshControl={(
                        <RefreshControl
                          refreshing={refreshing}
                          colors={[theme.primary]}
                          onRefresh={onRefreshAction}
                          progressBackgroundColor={theme.secondary}
                        />
                      )}
                />
            </ContainerPd>
        )
    } else {
        return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
    }
}

export default Orders