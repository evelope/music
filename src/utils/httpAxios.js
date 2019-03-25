import axios from "axios";
import http from "./http";
/**
 * Get请求
 * @param { String } url
 * @param { Object } params
 */
export function sendGet(url, params = {}) {
  params = Object.assign({
    key: '579621905'
  }, params)
  return http.get(url, { params }).then(response => {
    return response.data;
  });
}

/**
 * Post 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPost(url, data = {}) {
  return http.post(url, data).then(response => {
    return response.data;
  });
}

/**
 * Put 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPut(url, data) {
  return http.put(url, data).then(response => {
    return response.data;
  });
}

/**
 * Patch 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPatch(url, data) {
  return http.patch(url, data).then(response => {
    return response.data;
  });
}

/**
 * Delete请求
 * @param { String } url
 * @param { Object } params
 */
export function sendDelete(url, params) {
  return http.delete(url, { params }).then(response => {
    return response.data;
  });
}

/**
 * All 请求
 * @param iterable 是一个可以迭代的参数如数组等
 * @param callback 要等到所有请求都完成才会执行
 */
export function sendAll(iterable, callback) {
  return axios.all(iterable).then(axios.spread(callback));
}


//axios本版本不支持jsonp 自己拓展一个
export function sendJsonp(url, data) {
  if (!url) {
    console.error('Axios.JSONP 至少需要一个url参数!')
    return;
  }
  return new Promise((resolve, reject) => {
    window.jsonCallBack = (result) => {
      resolve(result)
    }
    let params = "?" + urlEncode(data).slice(1) + "&key=579621905";
    let JSONP = document.createElement("script");
    JSONP.type = "text/javascript";
    JSONP.src = `${url}${params}&callback=jsonCallBack`;
    document.getElementsByTagName("head")[0].appendChild(JSONP);
    setTimeout(() => {
      document.getElementsByTagName("head")[0].removeChild(JSONP)
    }, 500)
  })
}

// 对象转换 url
function urlEncode(param, key, encode) {
  if (param == null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr
}
