import { ViewStyle } from 'react-native'
import { FC } from 'react'
import { Container, ContainerScroll } from './style'

interface Iprops {
    style?: ViewStyle
    scroll?: boolean
}

const ContainerPd: FC<Iprops> = ({ children, scroll=true, ...props }) => {
    if (scroll) {
        return (
            <ContainerScroll {...props}>{children}</ContainerScroll>
        )
    } else {
        return (
            <Container {...props}>{children}</Container>
        )
    }
}

export default ContainerPd