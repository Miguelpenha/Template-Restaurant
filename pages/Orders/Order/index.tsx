import { IOrder } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import { Container, Header, Balance, ContainerIconDelete, IconDelete, Note, Footer, Created, FinishedStatus, WaitStatus } from './style'
import { TouchableOpacityProps } from 'react-native'

interface Iprops extends TouchableOpacityProps {
    order: IOrder
    setOpenModal: Dispatch<SetStateAction<IOrder | null | undefined>>
}

const Order: FC<Iprops> = ({ order, setOpenModal, ...props }) => {
    return (
        <Container {...props}>
            <Header>
                <Balance>{order.balanceConverted}</Balance>
                {!order.finished && (
                    <ContainerIconDelete onPress={() => setOpenModal(order)}>
                        <IconDelete size={30} name="delete"/>
                    </ContainerIconDelete>
                )}
            </Header>
            <Note>{order.note}</Note>
            <Footer>
                <Created>Feito em {order.created.hour}</Created>
                {order.finished ? <FinishedStatus>Entregue</FinishedStatus> : <WaitStatus>A caminho</WaitStatus>}
            </Footer>
        </Container>
    )
}

export default Order