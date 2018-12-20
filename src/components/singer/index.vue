<style lang="scss" scoped>
  .singer{
    width: 100%;
    height: 100%;
    top: 100px;
    bottom: 0;
    position: fixed;
  }
</style>
<template>
  <div class="singer">
      <list-view :list="list" @select="goDetail"></list-view>
      <router-view class="router-view"></router-view>
  </div>
</template>
<script>
import ListView from '@/plugins/listView/index'
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import Singer from '@/util/singerClass'
import {mapMutations} from 'vuex'
const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  components: {
    ListView
  },
  methods: {
    getList () {
      getSingerList().then((data) => {
        if (data.code === ERR_OK) {
          this.list = this.transData(data.data.list)
        }
      })
    },
    transData (list) {
      let mapList = {
        hot: {
          title: HOT_NAME,
          list: []
        }
      }
      list.map((item, index) => {
        if (index < HOT_SINGER_LEN) {
          mapList.hot.list.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        let findex = item.Findex
        if (!mapList[findex]) {
          mapList[findex] = {
            title: findex,
            list: []
          }
        }
        mapList[findex].list.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      let hot = []
      let ret = []
      for (var key in mapList) {
        var item = mapList[key]
        if (item.title.match(/[a-zA-Z]/)) {
          ret.push(item)
        } else if (item.title === HOT_NAME) {
          hot.push(item)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt()
      })
      return hot.concat(ret)
    },
    goDetail (item) {
      this.setSinger(item)
      this.$router.push('/singerDetail')
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>
