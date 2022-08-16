import useList from '../../listContext'
import { useState, useCallback, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useFocusEffect} from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import { IPlate } from '../../types'
import Header from './Header'
import Plate from './Plate'
import api from '../../api'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Loading } from './style'

export default function Home() {
  const { list } = useList()
  const [balance, setBalance] = useState(0)
  const [find, setFind] = useState('')
  const [plates, setPlates] = useState<IPlate[]>([])
  const theme = useTheme()
  const [refreshing, setRefreshing] = useState(false)

  async function getPlates() {
    const { data } = await api('/plates?photo=true')

    setPlates(data)
  }

  useEffect(() => {
    getPlates().then()
  }, [])

  useFocusEffect(() => {
    getPlates().then()
  })

  async function onRefreshAction() {
    setRefreshing(true)

    await getPlates()

    setRefreshing(false)
  }

  function makeBalance() {
    setBalance(0)

    list.map(plate => setBalance(balance => plate.totalPrice+balance))
  }

  useFocusEffect(useCallback(() => makeBalance(), [list]))

  if (plates) {
    return (
      <ContainerPd scroll={false}>
        <FlatList
          data={plates}
          keyExtractor={(item: IPlate) => item._id}
          contentContainerStyle={{ paddingBottom: '10%' }}
          ListHeaderComponent={<Header plates={plates} balance={balance} find={find} setFind={setFind}/>}
          renderItem={({ item }: ListRenderItemInfo<IPlate>) => (
            (item.name.toUpperCase().includes(find.toUpperCase()) || item.description.toUpperCase().includes(find.toUpperCase())) && <Plate plate={item}/>
          )}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[theme.primary]}
              onRefresh={onRefreshAction}
              progressViewOffset={RFPercentage(11.5)}
              progressBackgroundColor={theme.secondary}
            />
          )}
        />
      </ContainerPd>
    )
  } else {
    return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
  }
}