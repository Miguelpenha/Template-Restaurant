import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native'
import useList from '../../contexts/listContext'
import { useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Balance, InputFind, NotFoundFindMessage, Items, Title, TextNotFound, ButtonDeleteAll, IconDeleteAll, ButtonConfirm, TextButtonConfirm, Loading, ModalDeleteAll, TitleModalDeleteAll, FooterModalDeleteAll, ButtonCancelModalDeleteAll, TextButtonCancelModalDeleteAll, ButtonSubmitModalDeleteAll, TextButtonSubmitModalDeleteAll } from './style'
import Toast from 'react-native-toast-message'
import { IItemList, Inavigation } from '../../types'
import { ListRenderItemInfo, Platform } from 'react-native'
import Item from './Item'
import toFormatSafe from '../../utils/toFormatSafe'
import dinero from 'dinero.js'
import Modal from 'react-native-modal'

interface IParams {
  transitionModal: boolean
}

export default function List() {
  const navigation = useNavigation()
  const { list: listOrigin, setItem, setList: setListOrigin } = useList()
  const [openModal, setOpenModal] = useState(false)
  const [list, setList] = useState<IItemList[]>()
  const theme = useTheme()
  const [find, setFind] = useState('')
  const [balance, setBalance] = useState(0)
  let exists = false
  const { transitionModal } = useRoute().params as IParams

  function makeBalance() {
    setBalance(0)

    list && list.map(plate => setBalance(balance => plate.totalPrice+balance))
  }

  useFocusEffect(useCallback(() => {
    setList(listOrigin)
  }, [listOrigin]))

  useFocusEffect(useCallback(() => {
    makeBalance()
  }, [list]))

  list && list.map(item => {
    if (item.name.toUpperCase().includes(find.toUpperCase()) || item.description.toUpperCase().includes(find.toUpperCase())) {
      exists = true
    }
  })

  if (list) {
    return (
      <ContainerPd scroll={false}>
        <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>
        <Items
          data={list}
          ListHeaderComponent={<>
            <Title>Seu Carrinho</Title>
            {list && list.length < 1 && <TextNotFound>Ainda n??o h?? pratos {'\n'}no seu carrinho{'\n'}{':('}</TextNotFound>}
            {list && list.length >= 1 && (
              <ButtonDeleteAll onPress={() => setOpenModal(true)}>
                <IconDeleteAll name="delete" size={30}/>
              </ButtonDeleteAll>
            )}
            {list && list.length >= 1 && <Balance>Total {toFormatSafe(dinero({ amount: balance, currency: 'BRL' }))}</Balance>}
            {list && list.length >= 1 && (
              <InputFind style={{ shadowColor: theme.primary }} autoCapitalize="sentences" autoCompleteType="username" defaultValue={find} onChangeText={setFind} autoCorrect selectionColor={theme.secondary} placeholder="Pesquisar..." placeholderTextColor={theme.secondaryColor}/>
            )}
            {list && list.length >= 1 && !exists && <NotFoundFindMessage>Sem resultados {':('}</NotFoundFindMessage>}
            {list && list.length >= 1 && (
              <Modal
                isVisible={openModal}
                onBackdropPress={() => setOpenModal(false)}
                onBackButtonPress={() => setOpenModal(false)}
              >
                <ModalDeleteAll>
                  <TitleModalDeleteAll>Remover todos os pratos?</TitleModalDeleteAll>
                  <FooterModalDeleteAll>
                    <ButtonCancelModalDeleteAll onPress={() => setOpenModal(false)}>
                      <TextButtonCancelModalDeleteAll>Cancelar</TextButtonCancelModalDeleteAll>
                    </ButtonCancelModalDeleteAll>
                    <ButtonSubmitModalDeleteAll onPress={() => {
                      setListOrigin([])
  
                      Toast.show({
                        type: 'error',
                        text1: 'Todos os pratos foram deletados com sucesso'
                      })

                      setOpenModal(false)
                    }}>
                      <TextButtonSubmitModalDeleteAll>Remover</TextButtonSubmitModalDeleteAll>
                    </ButtonSubmitModalDeleteAll>
                  </FooterModalDeleteAll>
                </ModalDeleteAll>
              </Modal>
            )}
          </>}
          contentContainerStyle={{ paddingBottom: '40%' }}
          keyExtractor={(item: IItemList) => item._id}
          renderItem={({ item }: ListRenderItemInfo<IItemList>) => (item.name.toUpperCase().includes(find.toUpperCase()) || item.description.toUpperCase().includes(find.toUpperCase())) && (
            <Item onMutate={item => {
              setItem(item)
            }} item={item}/>
          )}
        />
        {list && list.length >= 1 && (
          <ButtonConfirm activeOpacity={0.5} onPress={() => navigation.navigate('Location', {
            edit: 'Confirmation',
            editParams: {
              transitionModal: true
            } as Inavigation['Confirmation'],
            transitionModal: true
          })}>
            <TextButtonConfirm>Pedir</TextButtonConfirm>
          </ButtonConfirm>
        )}
      </ContainerPd>
    )
  } else {
    return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
  }
}