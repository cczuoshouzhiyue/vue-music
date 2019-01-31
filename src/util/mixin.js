import {mapGetters} from 'vuex'
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted () {
    this.handlePlaylist(this.playlist)
  },
  activated () {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist (newValue) {
      this.handlePlaylist(newValue)
    }
  },
  method: {
    handlePlaylist () {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
