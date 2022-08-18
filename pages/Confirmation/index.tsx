import { useRoute, useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { ButtonBack, Title } from './style'

interface IParams {
    transitionModal: boolean
}

function Confirmation() {
    const { transitionModal } = useRoute().params as IParams
    const navigation = useNavigation()

    return (
        <ContainerPd>
            <ButtonBack transitionModal={transitionModal} iconSize={transitionModal ? 50 : 30} iconName={transitionModal ? 'expand-less' : 'arrow-back-ios'} onClick={() => navigation.goBack()}/>
            <Title>Confirmação</Title>
        </ContainerPd>
    )
}

export default Confirmation