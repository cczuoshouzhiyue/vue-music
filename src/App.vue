<style>
  .router-view{
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <keep-alive>
      <router-view class="router-view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/index'
import Menu from '@/components/menu/index'
export default {
  components: {
    Header,
    Menu
  }
}
</script>
