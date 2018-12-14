<style lang="scss" scoped>
  .music-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #222222;
  }
</style>

<template>
  <div class="music-list">
     这是详情列表--
    {{title}}
    <img :src="bgImage" alt="">
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    }
  }
}
</script>
