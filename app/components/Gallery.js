import React from 'react'
import { Text, View } from 'react-native'
import { Route, Link } from 'react-router-native'

import styles from '../styles'

const Foo = ({ match }) => {
    const { id } = match.params
    return (
        <View>
            <Text>
                nested { id }
            </Text>
        </View>
    )
}

const Gallery = ({ match }) => {
    return (
        <View>
            <Link to={`${match.url}/1`}>
                <Text>link</Text>
            </Link>
            <Route path='/gallery/:id' render={props => (
                <Foo { ...props }/>
            )}/>
        </View>
    )
}

export default Gallery
