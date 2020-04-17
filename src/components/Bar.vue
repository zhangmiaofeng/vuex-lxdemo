<template>
<div class='com'>
    <h2>Bar组件</h2>
    <p>{{$store.state.count}}</p>
    <p>count:{{count}}</p>
    <p>mapState-count:{{count}}</p>
    <button @click="onIncrement">+</button>
    <button @click="AsyncIncrement">Async +</button>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'BarCom',
  // mapState 返回一个对象
  // mapState 会在内部将数组中的成员转化为{ xxx () { return this.$store.state.xxx }}
  // computed: mapState(['count']),
  // computed: mapState({
  //   // 箭头函数可以使代码更简洁
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',

  //   // 为了能够使用 this 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // })
  computed: {
    a () {
      return 123
    },
    // mapState 返回一个对象
    // 在对象中使用...语法表示将该对象成员展开，放到当前定义的这个对象中
    // 将指定的对象拷贝到当前对象
    ...mapState(['count'])
  },
  // 计算属性
  // computed: {
  //   // count () {
  //   //   return this.$store.state.count
  //   // }
  // },
  methods: {
    // 加法的方法
    onIncrement () {
      // 不推荐这种方式
      // this.$store.state.count++
      // 提交mutation，调用mutation里面的方法
      // this.$store.commit('increment')
      // 调用vuex中increment函数
      this.increment()
    },
    AsyncIncrement () {
      // 使用dispatch调用action的方法
      // this.$store.dispatch('asyncincrement')
      this.asyncincrement()
    },
    // 将mutation映射increment函数
    ...mapMutations(['increment']),
    // 将容器中的action映射
    ...mapActions({
      asyncincrement: 'asyncincrement'
    })
  }
}
</script>

<style lang='less' scoped></style>
