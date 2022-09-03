import { IPlate } from '../../types'
import { useTheme } from 'styled-components'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Container, Footer, Name, Description, ButtonShare, IconShare, ButtonBack } from './style'
import ImageViewer from 'react-native-image-zoom-viewer'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

interface IParams {
    plate: IPlate
}

function Photo() {
    const theme = useTheme()
    const { plate } = useRoute().params as IParams
    const navigation = useNavigation()

    return (
        <Container>
            <ImageViewer backgroundColor={theme.backgroundColor} renderFooter={() => (
                <Footer>
                    <Name>{plate.name}</Name>
                    <Description>{plate.description}</Description>
                    <ButtonShare onPress={async () => {
                        const { uri } = await FileSystem.downloadAsync(
                            plate.photo.url,
                            FileSystem.documentDirectory+plate.photo.key, {}
                        )

                        await Sharing.shareAsync(uri, {
                            dialogTitle: plate.name,
                            mimeType: 'image/png',
                            UTI: 'public.png'
                        })
                    }}>
                        <IconShare name="share" size={25}/>
                    </ButtonShare>
                </Footer>
            )} renderIndicator={() => <></>} maxOverflow={0} imageUrls={[{
                url: plate.photo.url
            }]}/>
            <ButtonBack iconSize={30} onClick={() => navigation.goBack()}/>
        </Container>
    )
}

export default Photo