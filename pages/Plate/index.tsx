import { IPlate } from '../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Photo, Name, Description, PeoplesCount, Price, LabelNote, Note, ContainerCountAndButton, ContainerCount, ContainerCountIconLeft, ContainerCountIconRight, CountIcon, Count, ButtonSubmit, TextButtonSubmit } from './style'
import { useState } from 'react'
import dinero from 'dinero.js'

interface IParams {
  plate: IPlate
  balance: number
}

export default function Plate() {
  const navigation = useNavigation()
  const { plate, balance } = useRoute().params as IParams
  const [note, setNote] = useState('')
  const [count, setCount] = useState(1)
  const theme = useTheme()

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
      <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
      <Photo source={{
        uri: plate.image
      }}/>
      <Name>{plate.name}</Name>
      <Description>{plate.description}</Description>
      <PeoplesCount>Serve {plate.peoplesCount} {plate.peoplesCount <= 1 ? 'pessoa' : 'pessoas'}</PeoplesCount>
      <Price>{plate.priceConverted}</Price>
      <LabelNote>Alguma observação?</LabelNote>
      <Note maxLength={160} multiline autoCapitalize="sentences" autoCompleteType="username" defaultValue={note} onChangeText={setNote} autoCorrect selectionColor={theme.primary} placeholder="Observação..." placeholderTextColor={theme.secondaryColor}/>
      <ContainerCountAndButton>
        <ContainerCount>
          <ContainerCountIconLeft onPress={() => count > 1 && setCount(count-1)}>
            <CountIcon>-</CountIcon>
          </ContainerCountIconLeft>
          <Count>{count}</Count>
          <ContainerCountIconRight onPress={() => setCount(count+1)}>
            <CountIcon>+</CountIcon>
          </ContainerCountIconRight>
        </ContainerCount>
        <ButtonSubmit onPress={() => navigation.navigate('Home', {
          balance: balance+(count*plate.price)
        })}>
          <TextButtonSubmit>Adicionar{'\n'}{toFormatSafe(dinero({ amount: count*plate.price, currency: 'BRL' }))}</TextButtonSubmit>
        </ButtonSubmit>
      </ContainerCountAndButton>
    </ContainerPd>
  )
}