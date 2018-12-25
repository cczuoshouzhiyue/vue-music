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
}

export function createSong (musicData, vkey) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://180.101.222.18/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?guid=7981028948&vkey=${vkey}&uin=0&fromtag=66`,
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
