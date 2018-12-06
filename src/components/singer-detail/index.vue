<style lang="scss" scoped>
  .slide-enter-active, .slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
<template>
  <transition name="slide">
    <music-list :list="song" :title="title" :bgImage="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from '@/components/music-list'
import {mapGetters} from 'vuex'
import {ERR_OK} from '../../api/config'
import {getSingerDetail} from '@/api/singer'
import {createSong} from '@/api/song'
export default {
  computed: {
    title () {
      return this.singer.name
    },
    bgImage () {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  components: {
    MusicList
  },
  mounted () {
    this._getDetailData()
  },
  created () {
    this.song = []
  },
  methods: {
    _getDetailData () {
      console.log(this.singer)
      if (!this.singer || !this.singer.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then((data) => {
        if (data.code !== ERR_OK) {
          return
        }
        this.detailData(data.data.list)
      })
    },
    detailData (list) {
      list.map((item) => {
        let {musicData} = item
        this.song.push(createSong(musicData))
      })
    }
  }
}
</script>
