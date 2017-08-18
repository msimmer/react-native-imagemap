import React, { Component } from 'react'
import { Route, Switch } from 'react-router-native'
import { View } from 'react-native'
import {
    CameraContainer,
    TerrainContainer,
    CarouselContainer,
} from '../containers'

import { Header } from '../components'
import g from '../styles/grid'

const Router = (props) => (
    <View style={g.column}>
        <Header />
        <Switch>
            <Route exact path='/' component={CameraContainer} />
            <Route path='/camera' component={CameraContainer} />
            <Route path='/terrain/:coords?' component={TerrainContainer} />
            <Route path='/carousel/:id' component={CarouselContainer} />
        </Switch>
    </View>
)


export default Router
