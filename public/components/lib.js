import moment from 'moment'

export const getMonthCalendar = (year, month) => {
  const monthDays = []
  const idx = moment([year, month - 1, 1])
  idx.subtract(idx.weekday(), 'days').calendar()

  // 第1週から第6週までをイテレート
  for (var i = 0 ; i < 6 ; i++ ) {
    monthDays.push([])
    // 日曜から土曜までをいてレート
    for (var j = 0 ; j < 7 ; j++ ) {
      monthDays[i].push({
        day: idx.date(),
        month: idx.month() + 1,
        active: (idx.month() + 1 == month),
      })
      idx.add(1, 'days')
    }
  }
  return monthDays
}
