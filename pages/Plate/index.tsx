import { IPlate, IItemList } from '../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import useList from '../../listContext'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Photo, Name, Description, PeoplesCount, Price, LabelNote, Note, ContainerCountAndButton, ContainerCount, ContainerCountIconLeft, ContainerCountIconRight, CountIcon, Count, ButtonSubmit, TextButtonSubmit } from './style'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'
import { MaterialIcons } from '@expo/vector-icons'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'

interface IParams {
  plate: IPlate
}

export default function Plate() {
  const navigation = useNavigation()
  const { plate } = useRoute().params as IParams
  const { getItem, list, setList, setItem: setItemOnList, removeItem } = useList()
  const [note, setNote] = useState('')
  const [item, setItem] = useState<IItemList>()
  const [quantity, setQuantity] = useState(1)
  const theme = useTheme()

  useEffect(() => {
    const item = getItem(plate._id)
    
    if (item) {
      setItem(item)
    } else {
      setItem({
        ...plate,
        note: '',
        quantity: 1,
        totalPrice: plate.price,
        totalPriceConverted: plate.priceConverted
      })
    }
    
    item && setNote(item.note)
    item && setQuantity(item.quantity)
  }, [])
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      {item && (
        <ScrollView>
          <Photo resizeMode="cover" source={{
            uri: item.photo.url
          }}/>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
          <PeoplesCount>Serve {item.peoplesCount} {item.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
          <Price>{item.priceConverted}</Price>
          <LabelNote>Alguma observação?</LabelNote>
          <Note maxLength={160} multiline autoCapitalize="sentences" autoCompleteType="username" defaultValue={note} onChangeText={setNote} autoCorrect selectionColor={theme.primary} placeholder="Observação..." placeholderTextColor={theme.secondaryColor}/>
          <ContainerCountAndButton>
            <ContainerCount>
              <ContainerCountIconLeft onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity-1)
                } else if (item.onList) {
                  removeItem(item._id)
                  Toast.show({
                    type: 'error',
                    text1: 'Prato removido com sucesso'
                  })
                  navigation.goBack()
                }
              }}>
                <CountIcon>
                  {quantity === 1 && item.onList ? <MaterialIcons name="delete" size={20}/> : '-'}
                </CountIcon>
              </ContainerCountIconLeft>
              <Count>{quantity}</Count>
              <ContainerCountIconRight onPress={() => setQuantity(quantity+1)}>
                <CountIcon>+</CountIcon>
              </ContainerCountIconRight>
            </ContainerCount>
            <ButtonSubmit onPress={() => {
              if (!item.onList) {
                Toast.show({
                  type: 'success',
                  text1: 'Prato adicionado com sucesso!'
                })
                setList([...list, {
                  ...item,
                  quantity,
                  totalPrice: item.price*quantity,
                  totalPriceConverted: toFormatSafe(dinero({ amount: item.price*quantity, currency: 'BRL' })),
                  note,
                  onList: true
                }])
              } else {
                Toast.show({
                  type: 'info',
                  text1: 'Prato editado com sucesso'
                })
                setItemOnList({
                  ...item,
                  quantity,
                  totalPrice: item.price*quantity,
                  totalPriceConverted: toFormatSafe(dinero({ amount: item.price*quantity, currency: 'BRL' })),
                  note
                })
              }

              navigation.goBack()
            }}>
              <TextButtonSubmit>{!item.onList ? 'Adicionar' : 'Editar'}{'\n'}{toFormatSafe(dinero({ amount: quantity*item.price, currency: 'BRL' }))}</TextButtonSubmit>
            </ButtonSubmit>
          </ContainerCountAndButton>
        </ScrollView>
      )}
    </ContainerPd>
  )
}