import { Container, ButtonBack, Footer, Name, Description } from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { IPlate } from '../../types'
import ImageViewer from 'react-native-image-zoom-viewer'
import { useTheme } from 'styled-components'

interface IParams {
    plate: IPlate
}

function Photo() {
    const navigation = useNavigation()
    const { plate } = useRoute().params as IParams
    const theme = useTheme()

    return (
        <Container>
            <ImageViewer backgroundColor={theme.backgroundColor} renderFooter={() => (
                <Footer>
                    <Name>{plate.name}</Name>
                    <Description>{plate.description}</Description>
                </Footer>
            )} renderIndicator={() => <></>} maxOverflow={0} imageUrls={[{
                url: plate.photo.url
            }]}/>
            <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
        </Container>
    )
}

export default Photo