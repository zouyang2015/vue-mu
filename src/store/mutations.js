import * as types from './mutation-types'

const mutations = {
  // 第一个参数是state,第二个是提交mutation时传的参数
  // [types.SET_SINGER]这么写是为了让eslint检测对不对的，如果写常量的话是不知道的
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },

  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }

}

export default mutations
