import { Dispatch, FC, SetStateAction } from 'react'
import base from '../../../api/base'
import useOrders from '../../../contexts/ordersContext'
import { IOrder } from '../../../types'
import Toast from 'react-native-toast-message'
import { Container, Header, Balance, ContainerIconDelete, IconDelete, Note, Footer, Created, Finished, Wait } from './style'

interface Iprops {
    order: IOrder
    setOpenModal: Dispatch<SetStateAction<IOrder | null | undefined>>
}

const Order: FC<Iprops> = ({ order, setOpenModal }) => {
    const { loadOrders } = useOrders()

    return (
        <Container>
            <Header>
                <Balance>{order.balanceConverted}</Balance>
                <ContainerIconDelete onPress={() => setOpenModal(order)}>
                    <IconDelete size={30} name="delete"/>
                </ContainerIconDelete>
            </Header>
            <Note>{order.note}</Note>
            <Footer>
                <Created>Feito em {order.created.hour}</Created>
                {order.finished ? <Finished>Entregue</Finished> : <Wait>A caminho</Wait>}
            </Footer>
        </Container>
    )
}

export default Order