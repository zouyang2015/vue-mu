import {playMode} from 'common/js/config'

// 所有状态
const state = {
  singer: {}, // 跳到singer-detail是哪个歌手的数据
  playing: false, // 是否播放
  fullScreen: false,  // 播放器展开还是收起
  playList: [], // 播放列表
  sequenceList: [], // 随机播放、顺序播放(只有这时和playList列表一样）、单曲播放列表
  mode: playMode.sequence,  // 播放模式
  currentIndex: -1  // 播放的索引
}

export default state
