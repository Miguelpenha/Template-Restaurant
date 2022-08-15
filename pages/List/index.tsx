import { useNavigation, useFocusEffect } from '@react-navigation/native'
import useList from '../../listContext'
import { useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, ButtonDeleteAll, IconDeleteAll, TextNotFound, InputFind, NotFoundFindMessage, Items } from './style'
import Toast from 'react-native-toast-message'
import { IItemList } from '../../types'
import { ListRenderItemInfo } from 'react-native'
import Item from './Item'

export default function List() {
  const navigation = useNavigation()
  const { list: listOrigin, setItem, setList: setListOrigin } = useList()
  const [list, setList] = useState([])
  const theme = useTheme()
  let exists = false
  const [find, setFind] = useState('')
  useFocusEffect(useCallback(() => setList(listOrigin), [listOrigin]))

  list.map(item => {
    if (item.name.toUpperCase().includes(find.toUpperCase())) {
      exists = true
    }
  })
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      {list.length >= 1 && (
        <ButtonDeleteAll onPress={() => {
          setListOrigin([])

          Toast.show({
            type: 'error',
            text1: 'Todos os pratos foram deletados com sucesso'
          })
        }}>
          <IconDeleteAll name="delete" size={30}/>
        </ButtonDeleteAll>
      )}
      {list.length < 1 && <TextNotFound>Ainda não há pratos {'\n'}no seu carrinho{'\n'}{':('}</TextNotFound>}
      {list.length >= 1 && (
        <InputFind style={{ shadowColor: theme.primary }} autoCapitalize="sentences" autoCompleteType="username" defaultValue={find} onChangeText={setFind} autoCorrect selectionColor={theme.secondary} placeholder="Pesquisar..." placeholderTextColor={theme.secondaryColor}/>
      )}
      {list.length >= 1 && !exists && <NotFoundFindMessage>Sem resultados {':('}</NotFoundFindMessage>}
      <Items
        data={list}
        contentContainerStyle={{paddingBottom: '40%'}}
        keyExtractor={(item: IItemList) => item._id}
        renderItem={({ item }: ListRenderItemInfo<IItemList>) => item.name.toUpperCase().includes(find.toUpperCase()) && (
          <Item onMutate={item => setItem(item)} item={item}/>
        )}
      />
    </ContainerPd>
  )
}