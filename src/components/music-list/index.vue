<style lang="scss" scoped>
  .music-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #222;
    .back{
      position: absolute;
      top: 10px;
      left: 6px;
      z-index: 50;
      color: #ffe936;
      .ion-back{
        display: block;
        padding: 10px;
        font-size: 18px;
      }
    }
    .title{
      position: absolute;
      top: 0;
      left: 10%;
      z-index: 40;
      width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      line-height: 40px;
      font-size: 18px
    }
    .bg-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 70%;
      transform-origin: top;
      background-size: cover;
    }
    .bg-layer{
      position: relative;
      height: 100%;
      background: #222;
    }
    .list {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background: #222;
      .song-list-wrapper {
        padding: 20px 30px
      }
    }
  }
</style>

<template>
  <div class="music-list">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <!--<div class="play-wrapper">-->
        <!--<div ref="playBtn" v-show="songs.length>0" class="play" @click="random">-->
          <!--<i class="icon-play"></i>-->
          <!--<span class="text">随机播放全部</span>-->
        <!--</div>-->
      <!--</div>-->
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll
      class="list"
      :data="list"
      :probeType="probeType"
      :listenScroll="listenScroll"
      @scroll="scrollHandle"
      ref="list">
      <div class="song-list-wrapper">
        <song-list :songs="list" @select="selectHandle"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/plugins/scroll'
import SongList from '@/components/song-list'
import {mapActions} from 'vuex'
const RESERVED_HEIGHT = 40
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
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
  },
  data () {
    return {
      scrollY: 0
    }
  },
  components: {
    Scroll,
    SongList
  },
  computed: {
    bgStyle () {
      return `background-image:url(${this.bgImage})`
    }
  },
  mounted () {
    this.imageHeight = this.$refs.bgImage.clientHeight
    this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT
    this.$refs.list.$el.style.top = `${this.imageHeight}px`
  },
  methods: {
    back () {
      this.$router.back()
    },
    scrollHandle (pos) {
      this.scrollY = pos.y
    },
    selectHandle (item, index) {
      this.selectPlay({list: this.list, index})
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  watch: {
    scrollY (newVal) {
      let translateY = Math.max(this.minTransalteY, newVal)
      let scale = 1
      let zIndex = 0
      const percent = Math.abs(newVal / this.imageHeight)
      if (newVal > 0) {
        scale = 1 + percent
        zIndex = 10
      }
      this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
      if (newVal < this.minTransalteY) {
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = 0
        this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = 0
      }
      this.$refs.bgImage.style['transform'] = `scale(${scale})`
      this.$refs.bgImage.style.zIndex = zIndex
    }
  }
}
</script>
