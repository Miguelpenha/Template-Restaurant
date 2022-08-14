import { IItemList, IPlate } from '../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Main, Photo, Name, Description, PeoplesCount, Price, LabelNote, Note, ContainerCountAndButton, ContainerCount, ContainerCountIconLeft, ContainerCountIconRight, CountIcon, Count, ButtonSubmit, TextButtonSubmit } from './style'
import { useEffect, useState } from 'react'
import dinero from 'dinero.js'
import useList from '../../listContext'
import toFormatSafe from '../../utils/toFormatSafe'
import { ScrollView } from 'react-native-gesture-handler'

interface IParams {
  plate: IPlate
}

export default function Plate() {
  const navigation = useNavigation()
  const { plate } = useRoute().params as IParams
  const { list, setList, getItem, setItem: setItemOnList } = useList()
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

    item && setQuantity(item.quantity)
  }, [])
  
  return (
    <ContainerPd scroll={false}>
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      {item && (
        <Main>
          <Photo resizeMode="cover" source={{
            uri: item.image
          }}/>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
          <PeoplesCount>Serve {item.peoplesCount} {item.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
          <Price>{item.priceConverted}</Price>
          <LabelNote>Alguma observação?</LabelNote>
          <Note maxLength={160} multiline autoCapitalize="sentences" autoCompleteType="username" defaultValue={note} onChangeText={setNote} autoCorrect selectionColor={theme.primary} placeholder="Observação..." placeholderTextColor={theme.secondaryColor}/>
          <ContainerCountAndButton>
            <ContainerCount>
              <ContainerCountIconLeft onPress={() => quantity > 1 && setQuantity(quantity-1)}>
                <CountIcon>-</CountIcon>
              </ContainerCountIconLeft>
              <Count>{quantity}</Count>
              <ContainerCountIconRight onPress={() => setQuantity(quantity+1)}>
                <CountIcon>+</CountIcon>
              </ContainerCountIconRight>
            </ContainerCount>
            <ButtonSubmit onPress={() => {
              if (!item.onList) {
                setList([...list, {
                  ...item,
                  quantity,
                  totalPrice: item.price*quantity,
                  totalPriceConverted: toFormatSafe(dinero({ amount: item.price*quantity, currency: 'BRL' })),
                  note,
                  onList: true
                }])
              } else {
                setItemOnList({
                  ...item,
                  quantity,
                  totalPrice: item.price*quantity,
                  totalPriceConverted: toFormatSafe(dinero({ amount: item.price*quantity, currency: 'BRL' })),
                  note
                })
              }

              navigation.navigate('Home')
            }}>
              <TextButtonSubmit>{!item.onList ? 'Adicionar' : 'Editar'}{'\n'}{toFormatSafe(dinero({ amount: quantity*item.price, currency: 'BRL' }))}</TextButtonSubmit>
            </ButtonSubmit>
          </ContainerCountAndButton>
        </Main>
      )}
    </ContainerPd>
  )
}