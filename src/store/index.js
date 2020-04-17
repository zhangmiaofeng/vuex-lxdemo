// 进行vuex配置
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个Vuex实例 用来在组件外部管理共享数据的状态

const store = new Vuex.Store({
  // 类似于组件中的data 存储数据
  state: {
    count: 0,
    todos: [
      { id: 1, title: '吃饭', done: true },
      { id: 2, title: '写代码', done: false },
      { id: 3, title: '看电视', done: true },
      { id: 4, title: '刷抖音', done: false },
      { id: 5, title: '睡觉', done: true }
    ]
  },
  // 容器的计算属性
  // 注意：作用是基于原有的数据派生其他数据，而不是修改
  getters: {
    remainingCount (state) {
      return state.todos.filter(item => {
        return item.done === false
      }).length
    }
  },
  // 类似于组件中的methods 作用：修改state
  // 1.定义mutation里面的函数
  // 2.在组件中调用mutation
  mutations: {
    increment (state) {
      state.count++
    }
    // 异步操作(调试工具配合会有问题，不推荐在里面写异步操作)
    // asyncincrement (state) {
    //   // 异步操作 定时器
    //   window.setTimeout(() => {
    //     state.count++
    //   }, 1000)
    // }
  },

  //   类似于mutation
  // 作用：执行异步操作，提交mutation修改state
  // action 函数默认接收一个参数：context 其实就是state
  // 在任何组件中使用store.dispatch
  actions: {
    asyncincrement (context) {
      // console.log(context)
      // 执行异步操作
      // 不推荐使用
      // 推荐做法：异步操作和结果之后，提交mutation来修改state数据
      // 永远记住一个规则：永远通过mutation修改state
      window.setTimeout(() => {
        // context.state.count++
        // 推荐,通过调用mutation里面的方法提交修改状态数据
        context.commit('increment')
      })
    }
  }
})

export default store
