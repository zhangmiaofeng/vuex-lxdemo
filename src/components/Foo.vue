<template>
  <div class="com">
    <h2>Foo组件</h2>
    <!-- 可以在任何组件中使用this.$store.state.count
      在模板中使用不用this
     -->
    <p>{{ $store.state.count }}</p>
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: 'FooCom'
}
</script>

<style lang="less" scoped></style>
