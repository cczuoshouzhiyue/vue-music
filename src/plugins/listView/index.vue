<style scoped lang="scss">
  .title {
    width: 100%;
    clear: both;
    color: #686868;
    h2{
      width: 100%;
      text-align: left;
      padding-left: 30px;
      background: #333;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
    }
    & > li {
      padding-bottom: 30px;
    }
    & > li:last-of-type {
      padding-bottom: 120px;
    }
    .list {
      width: 100%;
      &>li {
        display: flex;
        padding: 20px 0 0 30px;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 25px;
          /*margin-left: 20px;*/

        }
        .name{
          flex: 1;
          display: inline-block;
          text-align: left;
          line-height: 50px;
          padding-left: 25px;
          font-size: 14px;
        }
      }
    }
  }
  .shortCutList {
    position: absolute;
    right: 10px;
    z-index: 10;
    font-family: Helvetica;
    font-size: 12px;
    top:10%;
    width: 20px;
    padding: 10px 0;
    text-align: center;
    background: #0000004d;
    li {
      height: 18px;
      line-height: 18px;
      color: #6d6d6d;
    }
  }
  .current{
    color: #ffcd32 !important;
  }
  .list-title {
    position: absolute;
    z-index: 11;
    top: 0px;
    width: 100%;
    height: 30px;
    background:#333;
    h2{
      width: 100%;
      text-align: left;
      padding-left: 30px;
      background: #333;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      color: #686868;
    }
  }
  .list-view {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #222;
  }
</style>
<template>
    <scroll :data="list" ref="singerScroll" :listenScroll="listenScroll" class="list-view" :probeType="probeType" @scroll="_scroll">
      <!--<div>-->
        <ul class="title">
          <li v-for="item in list" :key="item.title" ref="listGroup">
            <h2 v-html="item.title"> </h2>
            <ul class="list">
              <li v-for="child in item.list" :key="child.name" @click="selectItem(child)">
                <img class="avatar" v-lazy="child.avatar">
                <span class="name">{{child.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="shortCutList" @touchstart.stop.prevent="onShortTouchStart" @touchmove.stop.prevent="onShortTouchMove"  @touchend.stop>
          <ul>
            <li v-for="(item, index) in shortCutList" :key="index" :data-index="index" :class="{'current': currIndex === index}">{{item}}</li>
          </ul>
        </div>
        <div class="list-title" ref="fixed" v-show="fixedText">
          <h2>{{fixedText}}</h2>
        </div>
      <!--</div>-->
    </scroll>
</template>

<script>
import Scroll from '@/plugins/scroll/index'
import {getDataIndex} from '@/util/dom'
const TITLE_HEIGHT = 30
const ANCHOR_HEIGHT = 18
export default {
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  components: {
    Scroll
  },
  data () {
    return {
      listenScroll: true,
      probeType: 3,
      currIndex: 0,
      scrollY: -1,
      diff: -1,
      listHeight: []
    }
  },
  computed: {
    shortCutList () {
      return this.list.map((item) => {
        return item.title.substring(0, 1)
      })
    },
    fixedText () {
      if (this.scrollY > 0) {
        return ''
      }
      return this.list[this.currIndex] ? this.list[this.currIndex].title : ''
    }
  },
  created () {
    this.touchObj = {}
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    onShortTouchStart (e) {
      let touchStartIndex = getDataIndex(e.target, 'index')
      let touchDom = e.touches[0]
      this.touchObj.pageYStart = touchDom.pageY
      this.touchObj.currIndex = touchStartIndex
      this._scrollToElement(touchStartIndex)
    },
    onShortTouchMove (e) {
      let touchDom = e.touches[0]
      let pageYEnd = touchDom.pageY
      let dif = (pageYEnd - this.touchObj.pageYStart) / ANCHOR_HEIGHT || 0
      let index = parseInt(this.touchObj.currIndex) + parseInt(dif)
      console.log(index)
      this._scrollToElement(index)
    },
    _scrollToElement (index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      }
      if (this.listHeight.length < 1) {
        return
      }
      if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scrollY = -this.listHeight[index]
      this.$refs.singerScroll.scrollToElement(this.$refs.listGroup[index])
    },
    _scroll (pos) {
      this.scrollY = pos.y
    },
    _calcuHeight () {
      this.listHeight = []
      let listDom = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (var i = 0; i < listDom.length; i++) {
        let currentDom = listDom[i]
        height += currentDom.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    list () {
      setTimeout(() => {
        this._calcuHeight()
      }, 20)
    },
    scrollY (newY) {
      if (newY > 0) {
        this.currIndex = 0
        return
      }
      if (this.listHeight.length < 1) {
        return
      }
      for (var i = 0; i < this.listHeight.length - 1; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currIndex = i
          this.diff = height2 + newY
          return
        }
      }
      this.currIndex = this.listHeight.length - 2
    },
    diff (newValue) {
      let fixTop = (newValue > 0 && newValue < TITLE_HEIGHT) ? newValue - TITLE_HEIGHT : 0
      if (fixTop === this.fixTop) {
        return
      }
      this.fixTop = fixTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixTop}px,0)`
    }
    // list () {
    //   setTimeout(() => {
    //     this.$refs.singerScroll.refresh()
    //   })
    // }
  }
}
</script>
