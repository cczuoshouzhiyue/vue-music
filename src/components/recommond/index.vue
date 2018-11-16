<style lang="scss" scoped>
  .recommend{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
  }
  .swipe{
    height: 150px;
    img{
      width: 100%;
    }
  }
  .title {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    span{
      color: #ffcd32;
    }
  }
  .list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul{
      width: 90%;
      margin-left: 5%;
      li {
        width: 100%;
        float: left;
        height: 60px;
        margin-bottom: 15px;
        .img{
          width: 60px;
          height: 60px;
          float: left;
          img{
            width: 60px;
            height: 60px;
          }
        }
        .content {
          width: 255px;
          float: left;
          h2{
            text-align: left;
            padding-left: 20px;
            font-size: 14px;
            padding-top: 10px;
          }
          p{
            text-align: left;
            padding-left: 20px;
            font-size: 14px;
            padding-top: 10px;
            color: #656565;
          }
        }
      }
      &>li:last-of-type{
        padding-bottom: 100px;
      }
    }
  }
</style>
<template>
    <div ref="recommend" class="recommend">
      <scroll ref="scroll" :data="list">
        <div>
          <swipe :auto="4000" class="swipe">
            <swipe-item v-for="item in imageArr" :key="item.linkUrl">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" class="needsclick" @load="loadImage">
              </a>
            </swipe-item>
          </swipe>
          <div class="title">
            <span>热门歌单推荐</span>
          </div>
          <div class="list">
            <ul infinite-scroll>
              <a href=""></a>
              <li v-for="item in list" :key="item.imgurl" @click="goDetail(item)">
                <div class="img">
                  <img v-lazy="item.imgurl" alt="">
                </div>
                <div class="content">
                  <h2 v-html="item.creator.name"></h2>
                  <p v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
</template>
<script>
import {getRecommond, getDiscList} from '@/api/recommond'
import {ERR_OK} from '@/api/config'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'
import Scroll from '@/plugins/scroll/index'
export default {
  components: {
    Swipe,
    SwipeItem,
    Loadmore,
    Scroll
  },
  data () {
    return {
      imageArr: [],
      list: [],
      checkloaded: false
    }
  },
  created () {
    this._getRecommond()
    this._getDiscList()
  },
  methods: {
    _getRecommond () {
      getRecommond().then((data) => {
        if (data.code === ERR_OK) {
          this.imageArr = data.data.slider
          console.log(this.imageArr)
        }
      })
    },
    _getDiscList () {
      getDiscList().then((data) => {
        if (data.code === ERR_OK) {
          this.list = data.data.list
        }
      })
    },
    loadImage () {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    goDetail (item) {
      console.log(item)
    }
  }
}
</script>
