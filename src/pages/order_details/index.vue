<template>
  <div class="wrapper">
    <returnMenu :menuName="'订单详情'"
                :menuPath="'/'">
    </returnMenu>
    <div class="bg-white d-flex align-items-center justify-content-between"
         style="height:9.25rem;padding:1rem;margin-top:3.8rem">
      <div class="d-flex align-items-center">
        <img style="width:2.2rem;height:2.13rem"
             src="../../assets/img/address@2x.png" />
        <div style="margin-left:1.5rem;width:75%">
          <div class="font-500 nowrap">{{orderList.address_name}} {{orderList.address_phone}}</div>
          <div style="font-size:0.8rem;margin-top:0.5rem">{{orderList.address_address}}</div>
        </div>
      </div>
    </div>
    <div style="margin-top:0.8rem"
         class="bg-white">
      <div class="p-1rem">
        <div class="d-flex">
          <img :src="orderList.goods_img"
               style="width:6rem;height:6rem" />
          <div class="ml-1rem d-flex flex-column justify-content-between w-100">
            <div style="font-weight:bold;">{{orderList.goods_name}}</div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="fc-fd4442 font-500"
                   style="font-size:1.2rem;">￥{{orderList.goods_price.toFixed(1)}}</div>
              <div class="d-flex align-items-center">
                <van-icon name="cross"
                          class="fc-999"
                          style="margin-top:0.1rem" />
                <div class="fc-999 font-500"
                     style="font-size:1.3rem;">{{orderList.goods_num}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mt-2rem"
             style="border-bottom: 1px solid rgba(204,204,204,0.5);padding-bottom:0.5rem">
          <span class="fc-666 nowrap"
                style="font-size:0.9rem;">
            订单备注
          </span>
          <span class="fc-666 nowrap"
                style="font-size:0.9rem;margin-left: 1.5rem;">
            {{orderList.address_note}}
          </span>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-1rem">
          <span class="fc-666"
                style="font-size:0.9rem">实付款</span>
          <span class="fc-fd4442 font-500"
                style="font-size:1.2rem;">￥{{orderList.total_price.toFixed(1)}}</span>
        </div>
      </div>
    </div>
    <div style="margin-top:0.8rem;height:18rem"
         class="bg-white">
      <div class="d-flex align-items-center"
           style="padding:0.8rem 0.5rem">
        <div style="width:0.2rem;height:1.8rem;background:#0D8470"></div>
        <div class="font-500"
             style="margin-left:0.5rem">订单信息</div>
      </div>
      <div class="p-1rem"
           style="padding-top:0">
        <div class="d-flex fc-666"
             style="margin-top:0.8rem;font-size:0.8rem">
          <div>订单编号：</div>
          <div style="margin-left:1.5rem">{{orderList.odd_id}}</div>
        </div>
        <div class="d-flex fc-666"
             style="margin-top:0.8rem;font-size:0.8rem">
          <div>创建时间：</div>
          <div style="margin-left:1.5rem">{{orderList.t_create}}</div>
        </div>
        <div class="d-flex fc-666"
             style="margin-top:0.8rem;font-size:0.8rem">
          <div>付款时间：</div>
          <div style="margin-left:1.5rem">{{orderList.t_pay}}</div>
        </div>
        <div class="d-flex fc-666"
             v-if="orderList.order_status == '已完成'"
             style="margin-top:0.8rem;font-size:0.8rem">
          <div>发货时间：</div>
          <div style="margin-left:1.5rem">{{orderList.t_send}}</div>
        </div>
        <div class="d-flex fc-666"
             v-if="orderList.order_status == '已完成'"
             style="margin-top:0.8rem;font-size:0.8rem">
          <div>成交时间：</div>
          <div style="margin-left:1.5rem">{{orderList.t_delivery}}</div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between bg-white"
         style="padding:0.8rem 1rem;border-top:1px solid rgba(238,238,238,1);">
      <div></div>
      <div class="d-flex">
        <div @click="submit()"
             v-if="orderList.order_status == '已完成'"
             class="bg-0D8470 fc-white text-center font-500"
             style="width:6rem;height:2rem;background:rgba(13,132,112,1);border-radius:3rem;line-height:2rem">退款</div>
        <div class="d-flex"
             v-if="orderList.order_status == '已付款'">
          <div @click="submit()"
               class="bg-0D8470 fc-0D8470 text-center font-500 mr-1rem"
               style="width:6rem;height:2rem;background:#E5E5E5;border-radius:3rem;line-height:2rem">退款</div>
          <div @click="submit()"
               class="bg-0D8470 fc-white text-center font-500"
               style="width:6rem;height:2rem;background:rgba(13,132,112,1);border-radius:3rem;line-height:2rem">提醒发货</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
      orderList: {
        "id": 13,
        "t_create": "2020-04-29 14:11:15",
        "t_pay": "",
        "t_send": "",
        "t_delivery": "",
        "order_status": "已完成",
        "odd_id": "20200429141115337742",
        "u_id": 2,
        "groups_id": 12,
        "goods_name": "商品1",
        "goods_img": "img1.jpg",
        "goods_price": 20,
        "goods_num": 2,
        "total_price": 40,
        "address_name": "赵先生",
        "address_phone": "16666666666",
        "address_address": "山东济南市中区",
        "address_note": "",
        "tracking_number": "",
        "pay_img": "pay_img.jpg"
      }
    };
  },
  computed: {
  },

  created() { },

  methods: {
    submit() { }
  },

  mounted() {
    console.log(123)
  },

  watch: {},

  components: {
    returnMenu: () => import('../../components/return_menu')
  },

};
</script>

<style scoped lang="scss">
</style>
