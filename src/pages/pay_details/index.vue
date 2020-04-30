<template>
  <div class="wrapper">
    <returnMenu :menuName="'支付详情'"
                :menuPath="'/'">
    </returnMenu>
    <div class="bg-white d-flex align-items-center justify-content-between"
         @click="goAddress()"
         style="height:9.25rem;padding:1rem;margin-top:3.8rem">
      <div class="d-flex align-items-center">
        <img style="width:2.2rem;height:2.13rem"
             src="../../assets/img/address@2x.png" />
        <div style="margin-left:1.5rem;width:75%">
          <div class="font-500">柳依依 18654213220</div>
          <div style="font-size:0.8rem;margin-top:0.5rem">山东省济南市市中区天桥一部国贸花园D座西单元1202室</div>
        </div>
      </div>
      <div>
        <van-icon name="arrow"
                  style="font-size:1.2rem" />
      </div>
    </div>
    <div style="margin-top:0.8rem"
         class="bg-white">
      <div class="p-1rem">
        <div class="d-flex">
          <img src="../../assets/img/address@2x.png"
               style="width:6rem;height:6rem" />
          <div class="ml-1rem d-flex flex-column justify-content-between">
            <div style="font-weight:bold;">商品名称商品名称商品名称</div>
            <div class="fc-fd4442 font-500"
                 style="font-size:1.2rem;">￥{{money.toFixed(1)}}</div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-1rem">
          <span class="fc-666"
                style="font-size:0.8rem">
            购买数量
          </span>
          <van-stepper @focus='getFocus()'
                       @blur='getBlur()'
                       v-model="number" />
        </div>
        <div class="d-flex justify-content-between align-items-center mt-1rem"
             style="border-bottom: 1px solid rgba(204,204,204,0.5)">
          <span class="fc-666 nowrap"
                style="font-size:0.8rem;">
            订单备注
          </span>
          <van-field @focus='getFocus()'
                     @blur='getBlur()'
                     style="margin-left: 0.5rem;"
                     v-model="value"
                     placeholder="填写订单备注" />
        </div>
        <div class="d-flex justify-content-between align-items-center mt-1rem">
          <span class="fc-666"
                style="font-size:0.8rem">小计（{{number}}件）</span>
          <span class="fc-fd4442 font-500"
                style="font-size:1.2rem;">￥{{sum.toFixed(1)}}</span>
        </div>
      </div>
    </div>
    <div class="p-1rem d-flex align-items-center justify-content-between fixed-bottom bg-white"
         ref="fixedBottom">
      <div class="d-flex align-items-center">
        <div style="font-size:0.8rem"
             class="fc-666">共{{number}}件，合计：</div>
        <span class="font-500 fc-fd4442"
              style="font-size:1.2rem">
          ￥{{sum.toFixed(1)}}
        </span>
      </div>
      <div @click="submit()"
           class="bg-0D8470 fc-white text-center font-500"
           style="width:6rem;height:2rem;background:rgba(13,132,112,1);border-radius:3rem;line-height:2rem;">提交订单</div>
    </div>
  </div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
      number: 1,
      money: 9,
      value: ''
    };
  },
  computed: {
    sum() {
      return this.number * this.money
    }
  },

  created() { },

  methods: {
    goAddress() {
      this.$router.push({
        path: '/address_list'
      })
    },
    submit() {
      this.$router.push({
        path: '/order_details'
      })
    },
    getFocus() {
      this.$refs.fixedBottom.style.position = 'static'
    },
    getBlur() {
      this.$refs.fixedBottom.style.position = 'fixed'
    }
  },

  mounted() { },

  watch: {},

  components: {
    returnMenu: () => import('../../components/return_menu')
  },

};
</script>

<style scoped lang="scss">
</style>
