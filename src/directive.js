import Vue from 'vue'

// 获取input 焦点
Vue.directive('focus', {
  inserted: function(el) {
    //el表示指令所绑定的元素
    el.focus()
  },
})
