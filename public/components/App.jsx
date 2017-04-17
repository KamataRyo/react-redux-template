import React, { Component } from 'react'
import update from 'immutability-helper'
import AppBar from 'material-ui/AppBar'
import DayView from './DayView.jsx'

/**
 * App Container
 * @type {ReactComponent}
 */
export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      title: props.title
    }
  }

  changeTitle = () => {
    this.setState(update(this.state, { title: { $set : 'aaaa' } }))
  }


  /**
   * Render
   * @return {ReactDomElement} React DOM Element
   */
  render() {


    return (
      <div>
        <AppBar
          title={ this.state.title }
          onLeftIconButtonTouchTap={ this.changeTitle }
        />
        <DayView foo={ 'bar' } />
        <p>{ 'hello!' }</p>
      </div>
    )
  }

}
