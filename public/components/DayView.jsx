import React, { Component } from 'react'
import update from 'immutability-helper'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'

import actioncreators from './actioncreators'

const mapStateToProps = state => {
  return {
    year: state.year,
    month: state.month
  }
}

const mapDispatchToProps = (dispatch, state) => {
  const progressMonth = actioncreators.progressMonth // func
  return {
    progress1 : () => dispatch(progressMonth(1)),
    progress3 : () => dispatch(progressMonth(3)),
  }
}


@connect(mapStateToProps, mapDispatchToProps)
export default class DayView extends Component {

  static propTypes = {
    month : PropTypes.number.isRequired,
    year  : PropTypes.number,
    progress1 : PropTypes.func.isRequired,
    progress3 : PropTypes.func.idRequired,
  }

  static defaultProps = {
    year: 0,
  }

  render() {

    console.log(this.props);

    const { month, year } = this.props
    return (
      <div>
        <RaisedButton onClick={ this.props.progress1 } primary>{ '1ヶ月進める' }</RaisedButton>
        <RaisedButton onClick={ this.props.progress3 } secondary>{ '3ヶ月進める' }</RaisedButton>
        <dl>
          <dt>toshi</dt>
          <dd>{ year }</dd>
        </dl>
        <dl>
          <dt>tuki</dt>
          <dd>{ month }</dd>
        </dl>
      </div>
    )
  }
}
