// react
import React, { Component } from 'react'

// router
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

// views
import App from './containers/App'

// redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

// initialization
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

    // kick off by setting dynamic props
    store.dispatch(setLocation())

    Local.loadState().then((state) => {
        if ({}.hasOwnProperty.call(state, 'galleries')) {
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
