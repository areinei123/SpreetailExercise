import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import {fetchItems} from './actions/furniture.js'
import rootReducer from './reducers/index.js'
import App from './containers/App.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(fetchItems(store.getState().filter))
.then(console.log('done'))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
)
