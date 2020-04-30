export default {
  getBtn() {
    let main = document.getElementsByClassName('van-picker')[0]
    let botton_main = document.createElement('div')
    botton_main.style.height = 3 + 'rem'
    botton_main.style.background = '#fff'
    botton_main.style.display = 'flex'
    botton_main.style.alignItems = 'center'
    botton_main.style.justifyContent = 'space-around'
    botton_main.style.padding = '0 1rem'
    main.appendChild(botton_main)

    let bottom_cancel = document.createElement('button')
    bottom_cancel.innerText = '取消'
    bottom_cancel.style.color = '#0D8470'
    bottom_cancel.style.width = '6rem'
    bottom_cancel.style.height = '2rem'
    bottom_cancel.style.borderRadius = '0.3rem'
    bottom_cancel.style.background = '#E5E5E5'
    bottom_cancel.style.textAlign = 'center'
    bottom_cancel.style.lineHeight = '2rem'
    bottom_cancel.style.border = 'none'
    botton_main.appendChild(bottom_cancel)

    let picker__cancel = document.getElementsByClassName(
      'van-picker__cancel'
    )[0]
    bottom_cancel.onclick = function() {
      picker__cancel.click()
    }

    let bottom_save = document.createElement('button')
    bottom_save.innerText = '确定'
    bottom_save.style.color = 'white'
    bottom_save.style.width = '6rem'
    bottom_save.style.height = '2rem'
    bottom_save.style.borderRadius = '0.3rem'
    bottom_save.style.background = '#0D8470'
    bottom_save.style.textAlign = 'center'
    bottom_save.style.lineHeight = '2rem'
    bottom_save.style.border = 'none'
    botton_main.appendChild(bottom_save)

    let picker__confirm = document.getElementsByClassName(
      'van-picker__confirm'
    )[0]
    bottom_save.onclick = function() {
      picker__confirm.click()
    }

    let picker__toolbar = document.getElementsByClassName(
      'van-picker__toolbar'
    )[0]
    picker__toolbar.style.opacity = 0
    picker__toolbar.style.height = 0
  },
}
