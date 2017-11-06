import * as types from './mutation-types'

const mutations = {
  // 第一个参数是state,第二个是提交mutation时传的参数
  // [types.SET_SINGER]这么写是为了让eslint检测对不对的，如果写常量的话是不知道的
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
