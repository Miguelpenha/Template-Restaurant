import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Items } from './style'
import Item from './Item'
import useList from '../../listContext'
import { ListRenderItemInfo } from 'react-native'
import { IItemList } from '../../types'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function List() {
  const navigation = useNavigation()
  const { list, setItem } = useList()
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
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