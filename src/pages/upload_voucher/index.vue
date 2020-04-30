<template>
  <div class="wrapper bg-f8">
    <returnMenu :menuName="'上传凭证'"
                :menuPath="'/'">
    </returnMenu>
    <div style="margin-top:3.8rem">
      <div class="p-1rem d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center flex-column bg-white p-1rem">
          <img src="../../assets/img/pay_code.png"
               style="width:13rem" />
          <div class="font-500"
               style="margin-top:0.5rem">长按识别图中二维码付款</div>
        </div>
      </div>
      <div class="p-1rem">
        <div class="font-500"
             style="margin-bottom:0.8rem">上传凭证</div>
        <van-uploader multiple
                      :max-count="1"
                      :max-size="3 * 1024 * 1024"
                      class="bg-white p-1rem"
                      style=""
                      v-model="fileList"
                      :after-read="afterRead" />
      </div>
      <div class='w-100 d-flex align-items-center justify-content-center mt-2rem add_address'>
        <van-button type="primary"
                    round
                    @click="add()"
                    size="large">提交</van-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      fileList: []
    };
  },
  computed: {},

  watch: {},

  methods: {
    afterRead(file) {
      console.log(file.file)
      let fromData = new FormData()
      fromData.append('order_id', 30)
      fromData.append('img', file.file)
      this.$post('/orders/pay-proof', fromData).then(res => {
        console.log(res)
      }, err => { })
    },
    add() {

    }
  },

  created() { },

  mounted() { },

  components: {
    returnMenu: () => import('../../components/return_menu')
  },

};
</script>

<style scoped lang="scss">
/deep/ .van-uploader__upload {
  margin: 0;
}
.add_address {
  /deep/ .van-button {
    width: 80%;
    height: 2.6rem;
    line-height: 2.6rem;
    background: #0d8470;
    border-color: #0d8470 !important;
  }
}
</style>
