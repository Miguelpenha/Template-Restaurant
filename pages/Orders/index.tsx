import { useNavigation } from '@react-navigation/native'
import useOrders from '../../contexts/ordersContext'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, TextNotFound, OrdersContainer, Loading } from './style'
import { ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import { IOrder } from '../../types'
import Order from './Order'
import { useTheme } from 'styled-components'
import { useState } from 'react'

function Orders() {
    const navigation = useNavigation()
    const { orders, loadOrders } = useOrders()
    const theme = useTheme()
    const [refreshing, setRefreshing] = useState(false)

    async function onRefreshAction() {
        setRefreshing(true)
    
        await loadOrders()
    
        setRefreshing(false)
    }

    if (orders) {
        return (
            <ContainerPd scroll={false}>
                <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
                {orders && orders.length < 1 && <TextNotFound>Ainda não há pedidos {'\n'}no seu histórico{'\n'}{':('}</TextNotFound>}
                <OrdersContainer 
                    data={orders}
                    keyExtractor={(item: IOrder) => item._id}
                    renderItem={({ item }: ListRenderItemInfo<IOrder>) => <Order order={item}/>}
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