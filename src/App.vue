<template>
  <div id="app">
    <foo-com></foo-com>
    <bar-com></bar-com>
  </div>
</template>

<script>
import FooCom from '@/components/Foo'
import BarCom from '@/components/Bar'
export default {
  name: 'App',
  components: { FooCom, BarCom },
  created () {
    console.log(this.$store)
  }
}
</script>

<style lang="less">
.com {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
</style>
