import { useNavigation, useRoute } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Header, ContainerSettings, Settings, Title, Balance, Foods } from './style'
import plates from './plates'
import Plate from '../../components/Plate'
import dinero from 'dinero.js'
import { IPlate } from '../../types'
import { useEffect, useState } from 'react'

interface IParams {
  list: IPlate[]
}

export default function Home() {
  const navigation = useNavigation()
  const { list } = useRoute().params as IParams
  const [balance, setBalance] = useState(0)

  const currencySymbols = {
    BRL: 'R$'
  }

  function toFormatSafe(d) {
    const [units, subunits] = d
      .toRoundedUnit(2)
      .toString()
      .split('.')
    const currency = currencySymbols[d.getCurrency()]
    const stringified = subunits
      ? [units, subunits.padEnd(2, '0')].join('.')
      : [units, '00'].join(',')
  
    return `${currency} ${stringified}`
  }

  useEffect(() => {
    list.map(plate => setBalance(balance+plate.price))
  }, [])
  
  return (
    <ContainerPd>
      <Header>
        <ContainerSettings onPress={() => navigation.navigate('Settings')}>
          <Settings name="settings" size={40}/>
        </ContainerSettings>
      </Header>
      <Title>Modelo Para Restaurante</Title>
      <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>
      <Foods>
        {plates.map((plate, index) => <Plate list={list} plate={plate} key={index}/>)}
      </Foods>
    </ContainerPd>
  )
}