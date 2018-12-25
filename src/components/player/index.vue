<style lang="scss" scoped>
  .player {
    .normal-player{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background: #222;
      .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        filter: blur(20px);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .top{
        position: relative;
        margin-bottom: 25px;
      }
      .back{
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 50;
        .icon-back{
          display: block;
          padding: 9px;
          font-size: 22px;
          color: #ffcd32;
          transform: rotate(-90deg);
        }
      }
      .title {
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
        color: #fff
      }
      .subtitle{
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
      .middle {
        position: fixed;
        width: 100%;
        top: 80px;
        bottom: 170px;
        white-space: nowrap;
        font-size: 0;
        .middle-l {
          display: inline-block;
          vertical-align: top;
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 80%;
          .cd-wrapper {
            position: absolute;
            left: 10%;
            top: 0;
            width: 80%;
            height: 100%;
            .cd {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border: 10px solid rgba(255, 255, 255, 0.1);
              border-radius: 50%;
              &.play {
                animation: rotate 20s linear infinite
              }
              &.pause {
                animation-play-state: paused
              }
              .image {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .playing-lyric-wrapper {
            width: 80%;
            margin: 30px auto 0 auto;
            overflow: hidden;
            text-align: center;
            .playing-lyric {
              height: 20px;
              line-height: 20px;
              font-size: 14px;
              color:  rgba(255, 255, 255, 0.5);
            }
          }
        }
      }
      .middle-r{
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .lyric-wrapper {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;
          .text {
            line-height: 32px;
            color:  rgba(255, 255, 255, 0.5);
            font-size: 14px;
            & .current {
              color: #fff
            }
          }
        }

      }
      .bottom {
        position: absolute;
        bottom: 50px;
        width: 100%;
        .dot-wrapper {
          text-align: center;
          font-size: 0;
          .dot {
            display: inline-block;
            vertical-align: middle;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background:  rgba(255, 255, 255, 0.5);
            &.active {
              width: 20%;
              border-radius: 5px;
              background: rgba(255, 255, 255, 0.8);
            }
          }
        }
        .progress-wrapper{
          display: flex;
          align-items: center;
          width: 80%;
          margin: 0px auto;
          padding: 10px 0;
          .time{
            color: #fff;
            font-size: 12px;
            flex: 0 0 30px;
            line-height: 30px;
            width: 30px;
            &.time_l{
              text-align: left;
            }
            &.timie_r{
            text-align: right;
            }
          }
          .progress-bar-wrapper {
            flex: 1;
          }
        }
      }
      .operators {
        display: flex;
        align-items: center;
        .icon {
          flex: 1;
          color: #ffcd32;
          &.disabled {
            color: rgba(255, 255, 255, 0.3);
          }
          i {
            font-size: 30px;
          }
        }
        .i-left {
          text-align: right;
        }
        .i-center {
          padding: 0 20px;
          text-align: center;
          i{
            font-size: 40px;
          }
        }
        .i-right{
          text-align: left;
        }
        .icon-favorite{
          color: #d93f30;
        }
      }
      &.normal-enter-active, &.normal-leave-active {
        transition: all 0.4s;
        .top, .bottom {
          transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
        }
      }
      &.normal-enter, &.normal-leave-to{
        opacity: 0;
        .top {
          transform: translate3d(0, -100px, 0);
        }
        .bottom {
          transform: translate3d(0, 100px, 0);
        }
      }
    }

    .mini-player {
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 180;
      width: 100%;
      height: 60px;
      background: #333;
      &.mini-enter-active, &.mini-leave-active {
        transition: all 0.4s;
      }
      &.mini-enter, &.mini-leave-to{
        opacity: 0;
      }
      .icon {
        flex: 0 0 40px;
        width: 40px;
        padding: 0 10px 0 20px;
        img {
          border-radius: 50%;
          &.play {
            animation: rotate 10s linear infinite
          }
          &.pause {
            animation-play-state: paused
          }
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        text-align: left;
        .name {
          margin-bottom: 2px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
          color: #fff;
        }
        .desc {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
        }
      }
      .control {
        flex: 0 0 30px;
        width: 30px;
        padding: 0 10px;
        .icon-play-mini, .icon-pause-mini, .icon-playlist {
          font-size: 30px;
          color:  rgba(255, 205, 49, 0.5);
        }
        .icon-mini {
          font-size: 32px;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
  100% {
    transform: rotate(360deg)
  }
  }
</style>
<template>
    <div class="player" v-show="playlist.length > 0">
      <transition
        name="normal"
        enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
       <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img :src="currentSong.image">
        </div>
        <div class="top">
           <div class="back" @click="back">
              <i class="icon-back"></i>
           </div>
           <h1 class="title" v-html="currentSong.name"></h1>
           <h2 class="subtitle" v-html="currentSong.singer"></h2>
        </div>
        <div class="middle" >
          <div class="middle-l">
             <div class="cd-wrapper" ref="cdWrapper">
                <div class="cd"  :class="cdCls">
                  <img class="image" :src="currentSong.image">
                </div>
             </div>
          </div>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{formatTime(currentTime)}}</span>
            <div class="progress-bar-wrapper">
              <progress-bar :percent="percent" @percentChange="percentChangeHandle"></progress-bar>
            </div>
          </div>
           <div class="operators">
              <div class="icon i-left" @click="changePlayMode">
                <i :class="iconMode"></i>
              </div>
             <div class="icon i-left" :class="disableCls">
               <i class="icon-prev" @click="prev"></i>
             </div>
             <div class="icon i-center" :class="disableCls">
               <i @click.stop="togglePlaying" :class="playIcon"></i>
             </div>
             <div class="icon i-right" :class="disableCls">
               <i class="icon-next" @click="next"></i>
             </div>
             <div class="icon i-right">
               <i class="icon icon-not-favorite"></i>
             </div>
           </div>
        </div>
      </div>
      </transition>
      <transition name="mini">
        <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="icon" >
          <img :src="currentSong.image" :class="cdCls" width="40px" height="40px">
        </div>
        <div class="text">
          <h2 class="name" v-html="currentSong.name"></h2>
          <p class="desc" v-html="currentSong.singer"></p>
        </div>
        <div class="control">
          <progress-circle :radius="radius" :percent="percent">
            <i  class="icon-mini" :class="miniIcon" @click.stop="togglePlaying"></i>
          </progress-circle>
        </div>
          <div class="control">
            <i class="icon-playlist"></i>
          </div>
      </div>
      </transition>
      <audio ref="audio" :src="currentSong.url" @error="error"  @play="ready"  @timeupdate="updateTime" @ended="end"></audio>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import animations from 'create-keyframe-animation'
import {prefixStyle} from '@/util/dom.js'
import ProgressBar from '@/components/progressBar/index'
import ProgressCircle from '@/components/progressCircle/index'
import {playMode} from '@/util/config'
import {shuffle} from '@/util/index'
const transform = prefixStyle('transform')
// const transitionDuration = prefixStyle('transitionDuration')
export default {
  computed: {
    cdCls () {
      return this.playing ? 'play' : 'play pause'
    },
    playIcon () {
      return this.playing ? 'icon-pause' : 'icon-play'
    },
    disableCls () {
      return this.songReady ? '' : 'disable'
    },
    iconMode () {
      if (this.mode === playMode.sequence) {
        return 'icon-sequence'
      }
      if (this.mode === playMode.loop) {
        return 'icon-loop'
      }
      if (this.mode === playMode.random) {
        return 'icon-random'
      }
    },
    miniIcon () {
      return this.playing ? 'icon-pause-mini' : 'icon-play-mini'
    },
    percent () {
      return this.currentTime / this.currentSong.duration
    },
    ...mapGetters([
      'fullScreen',
      'playlist',
      'currentSong',
      'mode',
      'playing',
      'sequenceList',
      'currentIndex'
    ])
  },
  data () {
    return {
      songReady: false,
      currentTime: '',
      radius: 32
    }
  },
  components: {
    ProgressBar,
    ProgressCircle
  },
  watch: {
    currentSong (newValue, oldValue) {
      if (newValue.id === oldValue.id) {
        return
      }
      this.$nextTick (() => {
        this.$refs.audio.play()
      })
    },
    playing (newPlaying) {
      const audio = this.$refs.audio
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause()
      })
    }
  },
  methods: {
    back () {
      this.setFullScreen(false)
    },
    open () {
      this.setFullScreen(true)
    },
    enter (el, done) {
      const {x, y, scale} = this._getPosAndScale()

      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      }

      animations.registerAnimation({
        name: 'move',
        animation,
        presets: {
          duration: 400,
          easing: 'linear'
        }
      })

      animations.runAnimation(this.$refs.cdWrapper, 'move', done)
    },
    afterEnter () {
      animations.unregisterAnimation('move')
      this.$refs.cdWrapper.style.animation = ''
    },
    leave (el, done) {
      this.$refs.cdWrapper.style.transition = 'all 0.4s'
      const {x, y, scale} = this._getPosAndScale()
      this.$refs.cdWrapper.style[transform] = `translate3d(${x}px,${y}px,0) scale(${scale})`
      this.$refs.cdWrapper.addEventListener('transitionend', done)
    },
    afterLeave () {
      this.$refs.cdWrapper.style.transition = ''
      this.$refs.cdWrapper.style[transform] = ''
    },
    ready () {
      this.songReady = true
    },
    error () {
      this.songReady = true
    },
    lood () {
      this.$refs.audio.currentTime = 0
      this.$refs.audio.play()
    },
    next () {
      if (!this.songReady) {
        return
      }
      let index = this.currentIndex + 1
      if (index === this.playlist.length) {
        index = 0
      }
      this.setCurrentIndex(index)
      this.songReady = false
    },
    prev () {
      if (!this.songReady) {
        return
      }
      let index = this.currentIndex - 1
      if (index === -1) {
        index = this.playlist.length - 1
      }
      this.setCurrentIndex(index)
      this.songReady = false
    },
    togglePlaying () {
      this.setPlayingState(!this.playing)
    },
    updateTime (e) {
      this.currentTime = e.target.currentTime
    },
    formatTime (interval) {
      let time = interval | 0
      let minute = time / 60 | 0
      let secode = this._pad(time % 60)
      return `${minute}:${secode}`
    },
    _pad (num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    _getPosAndScale () {
      const targetWidth = 40
      const paddingLeft = 40
      const paddingBottom = 30
      const paddingTop = 80
      const width = window.innerWidth * 0.8
      const scale = targetWidth / width
      const x = -(window.innerWidth / 2 - paddingLeft)
      const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
      return {
        x,
        y,
        scale
      }
    },
    changePlayMode () {
      let mode = (this.mode + 1) % 3
      this.setPlayMode(mode)
      let list = []
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list)
    },
    resetCurrentIndex (list) {
      let _this = this
      let index = list.findIndex((item) => {
        return item.id === _this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    percentChangeHandle (percent) {
      const currentTime = percent * this.currentSong.duration
      this.$refs.audio.currentTime = currentTime
    },
    end () {
      if (this.mode === playMode.loop) {
        this.lood()
        return
      }
      this.next()
    },
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlayList: 'SET_PLAYLIST'
    })
  }
}
</script>
