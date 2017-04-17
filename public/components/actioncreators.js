export default {

  // 月を進めるアクションのアクションクリエーター
  progressMonth: count => {
    return ({
      type    : 'PROGRESS_MONTH',
      payload : { count: count }
    })
  }

}
