import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider }    from 'react-redux'

import App from './App.jsx'
import reducer from './reducer'


const store = createStore(reducer)


export default class AppContainer extends Component {
  render() {

    return (
      <Provider store={ store }>
        <App title={ 'Hello React' } />
      </Provider>
    )
  }
}
