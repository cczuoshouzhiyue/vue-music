export function getDataIndex (dom, name, val) {
  name = 'data-' + name
  if (val) {
    return dom.setAttribute(name, val)
  }
  return dom.getAttribute(name)
}
