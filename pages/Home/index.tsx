import { useNavigation, useRoute } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Header, ContainerSettings, Settings, Title, Balance, Foods } from './style'
import plates from './plates'
import Plate from '../../components/Plate'
import dinero from 'dinero.js'

interface IParams {
  balance: number
}

export default function Home() {
  const navigation = useNavigation()
  const { balance } = useRoute().params as IParams

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
        {plates.map((plate, index) => <Plate balance={balance} plate={plate} key={index}/>)}
      </Foods>
    </ContainerPd>
  )
}