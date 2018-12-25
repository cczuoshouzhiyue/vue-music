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
import {getSingerDetail, getMusic} from '@/api/singer'
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
  data () {
    return {
      song: []
    }
  },
  methods: {
    _getDetailData () {
      if (!this.singer || !this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((data) => {
        if (data.code === ERR_OK) {
          this.detailData(data.data.list)
        }
      })
    },
    detailData (list) {
      list.map((item) => {
        let {musicData} = item
        this.getSongVkey(musicData)
      })
    },
    getSongVkey (item) {
      getMusic(item.songmid).then((data) => {
        if (data.code === 0) {
          let vkey = data.data.items[0].vkey
          this.song.push(createSong(item, vkey))
        }
      })
    }
  }
}
</script>
