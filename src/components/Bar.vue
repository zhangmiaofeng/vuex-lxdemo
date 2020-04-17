<template>
<div class='com'>
    <h2>Bar组件</h2>
    <p>{{$store.state.count}}</p>
    <button @click="onIncrement">+</button>
    <button @click="AsyncIncrement">Async +</button>
</div>
</template>

<script>
export default {
  name: 'BarCom',
  methods: {
    // 加法的方法
    onIncrement () {
      // 不推荐这种方式
      // this.$store.state.count++
      // 提交mutation，调用mutation里面的方法
      this.$store.commit('increment')
    },
    AsyncIncrement () {
      // 使用dispatch调用action的方法
      this.$store.dispatch('asyncincrement')
    }
  }
}
</script>

<style lang='less' scoped></style>
