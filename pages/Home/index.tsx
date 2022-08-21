import { useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { useFocusEffect} from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import { IPlate } from '../../types'
import Header from './Header'
import Plate from './Plate'
import { Loading } from './style'
import api from '../../api'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Footer from './Footer'

export default function Home() {
  const [find, setFind] = useState('')
  const { data: plates, mutate: mutatePlates } = api.get<IPlate[]>('/plates?photo=true')
  const theme = useTheme()
  const [refreshing, setRefreshing] = useState(false)

  useFocusEffect(useCallback(() => {
    mutatePlates().then()
  }, []))

  async function onRefreshAction() {
    setRefreshing(true)

    await mutatePlates()

    setRefreshing(false)
  }
  
  if (plates) {
    return (
      <ContainerPd scroll={false}>
        <FlatList
          data={plates}
          keyExtractor={(item: IPlate) => item._id}
          contentContainerStyle={{ paddingBottom: '25%' }}
          ListHeaderComponent={<Header plates={plates} find={find} setFind={setFind}/>}
          renderItem={({ item }: ListRenderItemInfo<IPlate>) => (
            (item.name.toUpperCase().includes(find.toUpperCase()) || item.description.toUpperCase().includes(find.toUpperCase())) && <Plate plate={item}/>
          )}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[theme.primary]}
              onRefresh={onRefreshAction}
              progressViewOffset={RFPercentage(40)}
              progressBackgroundColor={theme.secondary}
            />
          )}
        />
        <Footer/>
      </ContainerPd>
    )
  } else {
    return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
  }
}