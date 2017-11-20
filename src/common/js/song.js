import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

// 不设置成对像，设置成类有2大好处
// 1.可以把代集中到一个地方去维护，不需要在多个地方去大量的写这种代码
// 2.类的扩展性比对像要强很多，而且他是一种面向对象的编程方式
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

// 工厂方法：不直接去new,提供一个方法去,这样就不用在代码里写很多new
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,  // songid必须存在
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,  // albummid必须存在
    url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

