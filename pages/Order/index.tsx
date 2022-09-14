import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../api'
import { IOrder } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Name, MethodOfPayment, ItemsCount, Price, ContainerButtons, ButtonCancel, TextButtonCancel, ButtonDelivered, TextButtonDelivered, Loading } from './style'
import { ScrollView, Platform } from 'react-native'
import { useTheme } from 'styled-components'

interface IParams {
  orderID: string
}

export default function Plate() {
  const navigation = useNavigation()
  const { orderID } = useRoute().params as IParams
  const { data: order } = api.get<IOrder>(`/orders/${orderID}?location=true&list=true`)
  const theme = useTheme()
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      {order ? (
        <ScrollView>
          <Name>{order.location.neighborhood}</Name>
          <MethodOfPayment>Método de pagamento: {order.methodOfPayment}</MethodOfPayment>
          <ItemsCount>{order.list.length} {order.list.length == 1 ? 'item' : 'items'}</ItemsCount>
          <Price>{order.balanceConverted}</Price>
          <ContainerButtons>
            {!order.canceled && (
              <ButtonCancel>
                <TextButtonCancel>Cancelar pedido</TextButtonCancel>
              </ButtonCancel>
            )}
            {!order.finished && (
              <ButtonDelivered>
                <TextButtonDelivered>Pedido entregue</TextButtonDelivered>
              </ButtonDelivered>
            )}
          </ContainerButtons>
        </ScrollView>
      ) : <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>}
    </ContainerPd>
  )
}