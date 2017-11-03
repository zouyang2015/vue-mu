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

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
