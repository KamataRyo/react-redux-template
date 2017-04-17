import { getMonthCalendar } from './lib'
import update from 'immutability-helper'

const initialState = {
  data  : getMonthCalendar(2100, 12),
  year  : 2100,
  month : 12
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PROGRESS_MONTH':
      const { year, month } = state
      return update(state, {
        data  : { $set: getMonthCalendar(year, month + action.payload.count) },
        month : { $set: month + action.payload.count },
      })
    default:
      return state
  }
}
