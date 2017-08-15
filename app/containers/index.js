import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Camera, Terrain, Gallery } from '../components'

const actionFactory = (dispatch) => ({
    actions: bindActionCreators({ ...actions }, dispatch)
})

const connectorFactor = () => connect(
    (state) => state,
    (dispatch) => actionFactory(dispatch)
)

export const CameraContainer = connectorFactor()(Camera)
export const TerrainContainer = connectorFactor()(Terrain)
export const GalleryContainer = connectorFactor()(Gallery)
