import { useFocusEffect } from '@react-navigation/native'
import { useState, useCallback } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { Plates } from './style'
import plates from './plates'
import Plate from './Plate'
import useList from '../../listContext'
import { ListRenderItemInfo } from 'react-native'
import { IPlate } from '../../types'
import Header from './Header'

export default function Home() {
  const { list } = useList()
  const [find, setFind] = useState('')
  const [balance, setBalance] = useState(0)

  function makeBalance() {
    setBalance(0)

    list.map(plate => setBalance(balance => plate.totalPrice+balance))
  }

  useFocusEffect(useCallback(() => makeBalance(), [list]))
  
  return (
    <ContainerPd scroll={false}>
      <Plates
        data={plates}
        keyExtractor={(item: IPlate) => item._id}
        contentContainerStyle={{paddingBottom: '10%'}}
        ListHeaderComponent={<Header balance={balance} find={find} setFind={setFind}/>}
        renderItem={({ item }: ListRenderItemInfo<IPlate>) => item.name.toUpperCase().includes(find.toUpperCase()) && <Plate plate={item}/>}
      />
    </ContainerPd>
  )
}