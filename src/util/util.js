// 用法 在组件中 this.$util.<FunctionName>
const util = {};


// 屏蔽鼠标右键，F12及其它审查元素功能
util.noViewing = () => {
  // 屏蔽F12 审查元素
  document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      alert("F12被禁用");
      event.keyCode = 0;
      event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
      window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
      alert(str + "\n请使用Del键进行字符的删除操作！");
      window.event.returnValue = false;
    }
  };
  // 禁止打开控制台
  document.onkeydown = document.onkeyup = document.onkeypress = function (
    event
  ) {
    let e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
      alert("禁止打开控制台");
      e.returnValue = false;
      return false;
    }
  };

  // 屏蔽右键菜单
  document.oncontextmenu = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      let the = event.srcElement;
      if (
        !(
          (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
          the.tagName == "TEXTAREA"
        )
      ) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
};


/**
 *  数组去重 
 *  arr -> 数组
 *  arrRepeat(arr)
 **/
util.arrRepeat = (arr) => {
  if (!Array.isArray(arr)) {
    throw 'this.$util.arrRepeat(),Type error! You must pass Array';
  }

  let result = []
  let obj = {}

  for (let i of arr) {
    if (!obj[i]) {
      result.push(i)
      obj[i] = 1
    }
  }

  return result
}


/**
 *  对象数组去重 
 *  arr -> 数组对象  key -> 对象中需要去重的key (传字符串)
 *  arrObjRepeat(arrObj, 'key')
 **/
util.objArrRepeat = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw 'this.$util.objArrRepeat(),Type error! You must pass Array[Object]';
  }

  let obj = {}
  let newArr = []
  newArr = arr.reduce((item, next) => {
    let newKey = next[key];
    obj[newKey] ? ' ' : obj[newKey] = true && item.push(next)
    return item
  }, [])
  return newArr
}


/**
 *  修改对象中的key, 不改变其中的值
 *  let data = {
 *    id1: '1',
 *    name2: '2',
 *  }
 *  
 *  let keyMap = {
 *    id1: 'id',
 *    name2: 'name'
 *  }
 *  
 *  data -> 原对象   keyMap -> 修改对象key的对象
 * 
 *  changeObjKey(data, keyMap)
 **/
util.changeObjKey = (data, keyMap) => {
  let newObj = Object.keys(data).reduce((newData, key) => {
    let newKey = keyMap[key] || key;
    newData[newKey] = data[key];
    return newData;
  }, {});
  return newObj;
};



//滚动条在Y轴上的滚动距离
util.getScrollTop = () => {
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}



//文档的总高度
util.getScrollHeight = () => {
  let scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}



//浏览器视口的高度
util.getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode == "CSS1Compat") { // 判断浏览器当前模式  BackCompat  怪异模式   CSS1Compat  标准模式
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

//下载视频
util.downloadVideo = function (url) {
  if (window.localStorage.getItem('token')) {
    var token = window.localStorage.getItem('token')
  }
  var objectUrl = url
  var btn = document.createElement('a')
  btn.setAttribute('download', '') // download属性
  btn.setAttribute('target', '_blank');
  btn.setAttribute('href', objectUrl) // href链接

  btn.click() // 自执行点击事件
}

export default util;