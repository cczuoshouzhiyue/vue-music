<style lang="scss" scoped>
  .song-list {
    .item{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 64px;
      font-size: 16px;
      line-height: 64px;
      .content {
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        text-align: left;
        .name {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #fff
        }
        .desc{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.3)
        }
      }
    }
  }
</style>
<template>
    <div class="song-list">
       <ul >
          <li v-for="(item, index) in songs" @click.stop="selectItem(item, index)" :key="index" class="item">
            <div class="content">
              <h2 class="name">{{item.name}}</h2>
              <p class="desc">{{getDesc(item)}}</p>
            </div>
          </li>
       </ul>
    </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: null
    }
  },
  methods: {
    getDesc (song) {
      console.log('getDesc +' + '触发')
      return `${song.singer}·${song.album}`
    },
    selectItem (item, index) {
      this.$emit('select', item, index)
    }
  }
}
</script>
