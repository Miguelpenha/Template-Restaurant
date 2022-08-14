import { ViewStyle } from 'react-native'
import { FC } from 'react'
import { Container } from './style'

interface Iprops {
    style?: ViewStyle
}

const ContainerPd: FC<Iprops> = ({ children, ...props }) => {
    return (
        <Container {...props}>{children}</Container>
    )
}

export default ContainerPd