import originJsonp from 'jsonp'
export default function jsonp (url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, options, (err, data) => {
      if (!err) {
        return resolve(data)
      }
      reject(err)
    })
  })
}

function params (data) {
  let url = ''
  for (let item in data) {
    let value = data[item] !== undefined ? data[item] : ''
    url += '&' + item + '=' + value
  }
  return url ? url.substring(1) : ''
}
