// 进行vuex配置
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个Vuex实例 用来在组件外部管理共享数据的状态

const store = new Vuex.Store({
  // 类似于组件中的data 存储数据
  state: {},

  // 类似于组件中的methods 作用：修改state
  mutations: {},

  //   类似于mutation
  // 作用：执行异步操作，提交mutation修改state
  actions: {}
})

export default store
