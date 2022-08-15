import useList from '../../listContext'
import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo } from 'react-native'
import plates from './plates'
import { IPlate } from '../../types'
import Header from './Header'
import Plate from './Plate'

export default function Home() {
  const { list } = useList()
  const [balance, setBalance] = useState(0)
  const [find, setFind] = useState('')

  function makeBalance() {
    setBalance(0)

    list.map(plate => setBalance(balance => plate.totalPrice+balance))
  }

  useFocusEffect(useCallback(() => makeBalance(), [list]))
  
  return (
    <ContainerPd scroll={false}>
      <FlatList
        data={plates}
        keyExtractor={(item: IPlate) => item._id}
        contentContainerStyle={{ paddingBottom: '10%' }}
        ListHeaderComponent={<Header plates={plates} balance={balance} find={find} setFind={setFind}/>}
        renderItem={({ item }: ListRenderItemInfo<IPlate>) => (
          item.name.toUpperCase().includes(find.toUpperCase()) && <Plate plate={item}/>
        )}
      />
    </ContainerPd>
  )
}