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
    <music-list :list="songs" :title="title" :bgImage="bgImage"></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import MusicList from '@/components/music-list/index'
import {ERR_OK} from '@/api/config'
import {createSong} from '@/api/song'
import {getSongList} from '@/api/recommond'
export default {
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  data () {
    return {
      songs: []
    }
  },
  created () {
  },
  methods: {
    _getSongList () {
      if (!this.disc) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>
