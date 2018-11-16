<style lang="scss" scoped>
  ul{
    width: 100%;
    height: 50px;
    li{
      width: 25%;
      float: left;
      overflow: hidden;
      line-height: 50px;
      text-align: center;
      a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        width: 50%;
        height: 30px;
        line-height: 30px;
        letter-spacing: 5px;
        border-bottom: 2px solid #222 ;
      }
      & > .router-link-exact-active {
        color: #ffcd32;
        border-bottom: 2px solid #ffcd32 ;
      }
    }
  }
</style>
<template>
    <ul>
      <li><router-link :to="{ name: 'recommond'}">推荐</router-link></li>
      <li><router-link :to="{ name: 'singer'}">歌手</router-link></li>
      <li><router-link :to="{ name: 'rank'}">排行</router-link></li>
      <li><router-link :to="{ name: 'search'}">搜索</router-link></li>
    </ul>
</template>
