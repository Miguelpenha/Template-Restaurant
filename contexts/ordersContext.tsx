import { IOrder } from '../types'
import { createContext, FC, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../api/base'

interface IOrderContext {
    orders: IOrder[]
    loadOrders: () => Promise<void>
    removeOrder: (id: string) => Promise<void>
    addOrder: (order: IOrder) => Promise<void>
    setOrders: (orders: IOrder[]) => Promise<void>
}

export const OrdersContext = createContext<IOrderContext>({} as IOrderContext)

export const OrdersProvider: FC = ({ children }) => {
    const [orders, setOrders] = useState<IOrder[]>([])
    
    async function loadOrders() {
        const orders: IOrder[] = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:orders'))
        
        if (orders) {
            const ordersNew: IOrder[] = []

            await Promise.all(
                orders.map(async order => {
                    const { data: orderOrigin } = await api.get<IOrder>(`orders/${order._id}`)
                    
                    orderOrigin._id && ordersNew.push(orderOrigin)
                })
            )

            setOrdersOnStorage(ordersNew.length >= 1 ? ordersNew : null)
        } else {
            setOrders([])
        }
    }

    async function setOrdersOnStorage(orders: IOrder[]) {
        AsyncStorage.setItem('@templateRestaurant:orders', JSON.stringify(orders))

        setOrders(orders)
    }

    async function addOrder(order: IOrder) {
        const orders: IOrder[] = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:orders')) || []

        orders.push(order)

        AsyncStorage.setItem('@templateRestaurant:orders', JSON.stringify(orders))

        setOrders(orders)
    }

    async function removeOrder(id: string) {
        const orders: IOrder[] = JSON.parse(await AsyncStorage.getItem('@templateRestaurant:orders'))
        const ordersNew: IOrder[] = []

        orders.map(order => {
            if (order._id !== id) {
                ordersNew.push(order)
            }
        })

        AsyncStorage.setItem('@templateRestaurant:orders', JSON.stringify(ordersNew))

        setOrders(ordersNew)
    }

    useEffect(() => {
        loadOrders().then()
    }, [])
    
    return (
        <OrdersContext.Provider value={{orders, setOrders: setOrdersOnStorage, loadOrders, addOrder, removeOrder}}>
           {children}
        </OrdersContext.Provider>
    )
}

export function useOrders() {
    return useContext(OrdersContext)
}

export default useOrders