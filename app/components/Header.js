import React from 'react'
import { withRouter } from 'react-router-native'
import { Text/*, TouchableHighlight*/ } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import styles from '../styles/grid'

const AppHeader = (props) => (
    <Header
        leftComponent={
            <Icon
                name='map'
                onPress={() => props.history.push('/terrain')}
            />
        }
        centerComponent={<Text>ImageMap</Text>}
        rightComponent={
            <Icon
                name='camera'
                onPress={() => props.history.push('/camera')}
            />
        }
        outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
    />
)

export default withRouter(AppHeader)
