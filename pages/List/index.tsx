import { useFocusEffect, useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, TextNotFound, Items } from './style'
import Item from './Item'
import useList from '../../listContext'
import { ListRenderItemInfo } from 'react-native'
import { IItemList } from '../../types'
import { useCallback, useState } from 'react'

export default function List() {
  const navigation = useNavigation()
  const { list: listOrigin, setItem } = useList()
  const [list, setList] = useState([])
  useFocusEffect(useCallback(() => setList(listOrigin), [listOrigin]))
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      {list.length < 1 && <TextNotFound>Ainda não há pratos {'\n'}no seu carrinho{'\n'}{':('}</TextNotFound>}
      <Items
        contentContainerStyle={{paddingBottom: '40%'}}
        data={list}
        keyExtractor={(item: IItemList) => item._id}
        renderItem={({ item }: ListRenderItemInfo<IItemList>) => (
          <Item onMutate={item => setItem(item)} item={item}/>
        )}
      />
    </ContainerPd>
  )
}