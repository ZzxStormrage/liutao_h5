import Vue from 'vue'


// 手机号 把中间的数字变成 *  
Vue.filter('phoneFilter', (val) => {
  let reg = /^(.{3}).*(.{4})$/
  return val.replace(reg, "$1****$2")
})


// 日期格式转换   Fri, 08 Nov 2019 16:14:41 GMT
Vue.filter('renderGMT', (val) => {
  let d = new Date(val);
  let month = d.getMonth() + 1 < 10 ? '0' + d.getMonth() + 1 : d.getMonth() + 1
  let date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
  let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
  let allDate = d.getFullYear() + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds;
  return allDate;
})

// 日期格式转换   2019-01-03T00:18:21.000+0000
Vue.filter('renderDate', (val) => {
  let dateNum = new Date(val).toJSON();
  return new Date(+new Date(dateNum) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
})