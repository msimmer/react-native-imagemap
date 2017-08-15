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
import { setLocation } from './actions'

const composeInitialState = () => ({
    historyContext: { route: '/' },
    locationContext: {},
    photoContext: [],
    markerContext: [],
    galleryContext: [],
})

const configureStore = () => {
    const combinedProps = composeInitialState()
    const combinedReducers = combineReducers(reducers)
    const store = createStore(
        combinedReducers,
        combinedProps, // { pageContext: window.__SERVER_DATA__ },
        compose(applyMiddleware(thunk))
    )

    store.dispatch(setLocation()) // kick off by setting dynamic props
    return store
}

const store = configureStore()

class MyApp extends Component {
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


export default MyApp
