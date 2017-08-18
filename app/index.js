import React, { Component } from 'react'
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import App from './containers/App'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { setLocation, loadGalleries } from './actions'
import Local from './Local'

const composeInitialState = () => ({
    locationContext: {},
    galleryContext: [],
})

const configureStore = () => {
    const combinedProps = composeInitialState()
    const combinedReducers = combineReducers(reducers)
    const store = createStore(
        combinedReducers,
        combinedProps,
        compose(applyMiddleware(thunk))
    )

    // load saved state from disk
    Local.loadState().then((state) => {
        if (state && {}.hasOwnProperty.call(state, 'galleries')) {
            store.dispatch(loadGalleries(state))
        }
    }).catch(err => console.log('Err:', err))

    return store
}

const store = configureStore()

class ImageMap extends Component {
    render() {
        return (
            <NativeRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </NativeRouter>
        )
    }
}


export default ImageMap
