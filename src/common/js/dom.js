export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let ary = el.className.split(' ')
  ary.push(className)
  el.className = ary.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
