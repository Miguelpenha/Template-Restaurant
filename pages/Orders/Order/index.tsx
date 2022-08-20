import { FC } from 'react'
import api from '../../../api'
import useOrders from '../../../contexts/ordersContext'
import { IOrder } from '../../../types'
import Toast from 'react-native-toast-message'
import { Container, Header, Balance, ContainerIconDelete, IconDelete, Note, Footer, Created, Finished } from './style'

interface Iprops {
    order: IOrder
}

const Order: FC<Iprops> = ({ order }) => {
    const { loadOrders } = useOrders()

    return (
        <Container>
            <Header>
                <Balance>{order.balanceConverted}</Balance>
                <ContainerIconDelete onPress={async () => {
                    await api.delete(`orders/${order._id}`)

                    await loadOrders()

                    Toast.show({
                        type: 'error',
                        text1: 'Pedido cancelado com sucesso'
                    })
                }}>
                    <IconDelete size={30} name="delete"/>
                </ContainerIconDelete>
            </Header>
            <Note>{order.note}</Note>
            <Footer>
                <Created>Feito em {order.created.hour}</Created>
                {order.finished && <Finished>Entregue</Finished>}
            </Footer>
        </Container>
    )
}

export default Order