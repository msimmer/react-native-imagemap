import React from 'react'
import { withRouter } from 'react-router-native'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'

import { StyleSheet, Dimensions } from 'react-native'
import { accent, dark, highlight, light } from '../styles/colors'
import { height, width, margin } from '../styles/dimensions'

const app = {
    name: 'ImageMap',
}

const column = {
    height,
    width,
    marginTop: margin,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const styles = StyleSheet.create({
    container: {
        height,
        backgroundColor: dark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    columnLeft: {
        ...column,
        flex: 0.2,
    },
    columnCenter: {
        ...column,
        flex: 0.6,
    },
    columnRight: {
        ...column,
        flex: 0.2,
    },


    touchable: {
        height: height / 2,
        width: height / 2,
        borderRadius: height / 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: light,
    },
    text: {
        color: light,
    },
})

const rightIconName = (path) => {
    return {
        '/camera': 'map',
        '/terrain': 'camera',
        '/carousel': 'camera',
    }[path] || 'camera'
}

const rightButtonNavigate = (props) => {
    props.history.push({
        '/camera': '/terrain',
        '/terrain': '/camera',
        '/': '/terrain',
    }[props.history.location.pathname] || '/camera')
}

const Header = (props) => (
   <View style={styles.container}>

        <View style={styles.columnLeft}>
            { /^\/carousel/.test(props.history.location.pathname) ?
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={() => props.history.push('/terrain')}
                    underlayColor={highlight}
                >
                <View>
                    <Icon iconStyle={styles.icon} name='map' />
                </View>
            </TouchableHighlight> :
            null }
        </View>

        <View style={styles.columnCenter}>
            <View>
                <Text style={styles.text}>{ app.name }</Text>
            </View>
        </View>

        <View style={styles.columnRight}>
            <TouchableHighlight
                style={styles.touchable}
                onPress={() => rightButtonNavigate(props)}
                underlayColor={highlight}
            >
                <View>
                    { <Icon iconStyle={styles.icon} name={rightIconName(props.history.location.pathname)} /> }
                </View>
            </TouchableHighlight>
        </View>

    </View>
)

export default withRouter(Header)
