import React, { Component } from 'react'
import { Route, Switch } from 'react-router-native'
import { View } from 'react-native'
import {
    CameraContainer,
    TerrainContainer,
    GalleryContainer,
} from '../containers'

import { Header } from '../components'

// styles
import styles from '../styles'

const Router = (props) => (
    <View style={styles.column}>
        <Header />
        <Switch>
            <Route exact path='/' component={CameraContainer} />
            <Route path='/camera' component={CameraContainer} />
            <Route path='/terrain' component={TerrainContainer} />
            <Route path='/gallery' component={GalleryContainer} />
        </Switch>
    </View>
)


export default Router
