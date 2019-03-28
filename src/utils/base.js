//将秒数转换为时分秒格式

export const formatSeconds = (times) => {
  var result = '00:00:00';
  var hour, minute, second
  if (times > 0) {
    hour = Math.floor(times / 3600);
    if (hour < 10) {
      hour = "0" + hour;
    }
    minute = Math.floor((times - 3600 * hour) / 60);
    if (minute < 10) {
      minute = "0" + minute;
    }

    second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
    if (second < 10) {
      second = "0" + second;
    }
    result = hour + ':' + minute + ':' + second;
  }
  return result;
}


// 设备判断
export const bRedir = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return "ios"; //移动端
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return "android"; //移动端
  } else {
    return "pc"; //PC端
  }
};

// 相对于指定父级的偏移
export const getLeft = (e, o) => {
  if (!e || !o) return;
  var offset = e.offsetLeft;
  if (e.offsetParent.className != o)
    offset += getLeft(e.offsetParent, o);
  return offset;
}
