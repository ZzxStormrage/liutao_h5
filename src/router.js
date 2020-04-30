import VueRouter from 'vue-router'

const Main = () =>
  import(/* webpackChunkName: "main" */ './pages/main/index.vue')
const CreateAddress = () =>
  import(/* webpackChunkName: "address" */ './pages/create_address/index.vue')
const AddressList = () =>
  import(
    /* webpackChunkName: "address" */ './pages/create_address/address_list.vue'
  )
const PayDetails = () =>
  import(/* webpackChunkName: "pay_details" */ './pages/pay_details/index.vue')
const OrderDetails = () =>
  import(
    /* webpackChunkName: "order_details" */ './pages/order_details/index.vue'
  )
const UploadVoucher = () =>
  import(
    /* webpackChunkName: "upload_voucher" */ './pages/upload_voucher/index.vue'
  )

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Main,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/create_address',
      component: CreateAddress,
      meta: {
        title: '新建地址',
      },
    },
    {
      path: '/address_list',
      component: AddressList,
      meta: {
        title: '地址管理',
      },
    },

    {
      path: '/pay_details',
      component: PayDetails,
      meta: {
        title: '支付详情',
      },
    },
    {
      path: '/order_details',
      component: OrderDetails,
      meta: {
        title: '订单详情',
      },
    },
    {
      path: '/upload_voucher',
      component: UploadVoucher,
      meta: {
        title: '上传凭证',
      },
    },
  ],
})
