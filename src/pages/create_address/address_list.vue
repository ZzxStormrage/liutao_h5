<template>
  <div class="wrapper">
    <returnMenu :menuName="'地址管理'"
                :menuPath="'/pay_details'"></returnMenu>
    <div style="margin-top:3.8rem">
      <div v-for="(item,index) in list"
           :key="index"
           style="border-bottom:1px solid #EEEEEE;">
        <van-swipe-cell>
          <div class="bg-white d-flex align-items-center justify-content-between"
               style="height:5rem;padding:0 1rem">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center font-500"
                   style="font-size:0.9rem">
                <div>{{item.name}}</div>
                <div style="margin-left:0.8rem">{{item.phone}}</div>
                <img style="width:2.5rem;"
                     v-if="item.address_status == 1"
                     class='ml-1rem'
                     src="../../assets/img/default@2x.png" />
              </div>
              <div style="font-size:0.8rem;margin-top:0.3rem">{{item.address}}</div>
            </div>
            <div style="width: 3rem;text-align: end;padding:1rem 0"
                 @click="edit(item)">
              <van-icon name="edit"
                        style='font-size:1.2rem' />
            </div>
          </div>
          <template #right>
            <van-button square
                        @click="delect(item)"
                        text="删除"
                        color="#000"
                        class="delete-button" />
          </template>
        </van-swipe-cell>
      </div>
      <div class='w-100 d-flex align-items-center justify-content-center mt-5rem add_address'>
        <van-button type="primary"
                    round
                    @click="add()"
                    size="large">添加收货地址</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props: [],
  data() {
    return {
      list: [
        {
          "id": 15,
          "name": "张先生",
          "phone": "15244447777",
          "address": "北京市海淀",
          "address_status": 1,
          "u_id": 2
        },
        {
          "id": 2,
          "name": "王先生",
          "phone": "15244447777",
          "address": "山东济南",
          "address_status": 0,
          "u_id": 2
        },
      ],
    };
  },
  computed: {},

  watch: {},

  methods: {
    getAddressList() {
      let form = {
        skip: '1',
        limit: '10',
        u_id: '2'
      }
      this.$get('/api/address', { params: form }).then((res) => {
        console.log(res)
      })
    },
    goAddress(item) {
      this.$router.push({
        path: '/create_address',
        query: {
          item: JSON.stringify(item)
        }
      })
    },
    add() {
      this.goAddress()
    },
    delect(item) {
      this.$deleteRun(`/api/address/${item.id}`).then(res => {
        console.log(res)
      })
      console.log(item)
    },
    edit(item) {
      this.goAddress(item)
    }
  },

  created() {
    this.getAddressList()
  },

  mounted() {

  },

  components: {
    returnMenu: () => import('../../components/return_menu')
  },

};
</script>

<style scoped lang="scss">
/deep/ .delete-button {
  height: 100%;
  width: 5rem;
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
