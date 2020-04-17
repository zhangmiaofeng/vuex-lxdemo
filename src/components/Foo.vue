<template>
  <div class="com">
    <h2>Foo组件</h2>
    <!-- 可以在任何组件中使用this.$store.state.count
      在模板中使用不用this
     -->
    <p>{{ $store.state.count }}</p>
    <!-- 过滤出的结果 -->
    <p>{{this.$store.getters.remainingCount}}</p>
    <!-- 映射后可以直接差值表达式 -->
    <p>{{remainingCount}}</p>
    <button>+</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FooCom',
  computed: {
    ...mapGetters(['remainingCount'])
  }
}
</script>

<style lang="less" scoped></style>
