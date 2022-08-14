import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useState, useCallback } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { Header, ContainerSettings, ContainerList, List, Settings, Title, Balance, Foods } from './style'
import dinero from 'dinero.js'
import plates from './plates'
import Plate from './Plate'
import useList from '../../listContext'
import toFormatSafe from '../../utils/toFormatSafe'

export default function Home() {
  const navigation = useNavigation()
  const { list } = useList()
  const [balance, setBalance] = useState(0)

  function makeBalance() {
    setBalance(0)

    list.map(plate => setBalance(balance => plate.totalPrice+balance))
  }

  useFocusEffect(useCallback(() => makeBalance(), [list]))
  
  return (
    <ContainerPd>
      <Header>
        <ContainerSettings onPress={() => navigation.navigate('Settings')}>
          <Settings name="settings" size={40}/>
        </ContainerSettings>
        <ContainerList onPress={() => navigation.navigate('List')}>
          <List name="shopping-cart" size={40}/>
        </ContainerList>
      </Header>
      <Title>Modelo Para Restaurante</Title>
      <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
      <Foods>
        {plates.map((plate, index) => <Plate plate={plate} key={index}/>)}
      </Foods>
    </ContainerPd>
  )
}