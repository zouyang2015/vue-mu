// VUEX入口
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getter'
import state from './state'
import mutations from './mutations'
// 每次通过mutation去修改state时，都会在控制台打印一个log,当前修改是什么，之前是什么，改成什么
// https://vuex.vuejs.org/zh-cn/plugins.html
import createLogger from 'vuex/dist/logger'

// 用Vue.use这种方式去注册这个插件
Vue.use(Vuex)

// 线下环境开启debug环境，检测state的修改是否来源于mutation，否测会报一个警告
// https://vuex.vuejs.org/zh-cn/strict.html
const debug = process.env.NODE_ENV !== 'production'

// 单例模式
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
