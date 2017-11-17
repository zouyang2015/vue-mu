function getRandomInt(min, max) {
  // 如果不+1，是取到min-max之间的数，+1是为了能取到上限max的那个值
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  let _arr = arr.slice()
  // 从0-i中取一个索引，然后用这个索引的数和arr[i]作一个交换
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}
