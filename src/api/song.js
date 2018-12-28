import {getLyric, getMusic} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {Base64} from 'js-base64'
const site = 'http://180.101.222.18/amobile.music.tc.qq.com'
export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url, songmid}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
    this.songmid = songmid
  }
  getMusic () {
    if (this.url) {
      return Promise.resolve(this.url)
    }
    return new Promise((resolve, reject) => {
      getMusic(this.songmid).then((data) => {
        if (data.code === ERR_OK) {
          const vkey = data.data.items[0].vkey
          let url = `${site}/C400${this.songmid}.m4a?guid=7981028948&vkey=${vkey}&uin=0&fromtag=66`
          resolve(url)
        }
      })
    })
  }
  getLyric () {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.songmid).then((data) => {
        if (data.code === ERR_OK) {
          this.lyric = Base64.decode(data.lyric)
          resolve(this.lyric)
        }
      })
    })
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: '',
    songmid: musicData.songmid
  })
}

function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((item) => {
    ret.push(item.name)
  })
  return ret.join('/')
}
