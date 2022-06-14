import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import reportWebVitals from 'reportWebVitals'
import { theme } from 'theme'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddlerware from 'redux-promise'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './_reducers'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const createStoreWidthMiddleware = composeWithDevTools(
    applyMiddleware(promiseMiddlerware, reduxThunk)
)(createStore)

root.render(
    <Provider store={createStoreWidthMiddleware(reducer)}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
