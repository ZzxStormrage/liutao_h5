<template>
  <div class="wrapper">
    <returnMenu :menuName="'新建地址'"
                :menuPath="'/address_list'"></returnMenu>
    <van-address-edit :area-list="areaList"
                      style="margin-top:3.8rem"
                      :address-info='address_from'
                      show-set-default
                      show-search-result
                      :area-columns-placeholder="['请选择', '请选择', '请选择']"
                      @save="onSave" />
  </div>
</template>

<script>
import { Toast } from 'vant';
import province_list from './province_list'
import new_btn from './new_btn'
export default {
  props: [],
  data() {
    return {
      areaList: province_list,
      address_from: {
        name: "",
        tel: '',
        addressDetail: '',
        isDefault: '',
        // province: '北京市',
        // city: '北京市',
        // county: "东城区",
        areaCode: '210000'
      },
      from: {
        u_id: "",
        name: "",
        phone: '',
        address: "",
        address_status: "",
        id: ''
      },
      status: null  // false是新增  true是编辑
    };
  },
  computed: {},

  created() {
    this.getRouterQuery()
  },

  methods: {
    getRouterQuery() {
      if (this.$route.query.item) {
        this.status = true
        this.from = JSON.parse(this.$route.query.item)
        this.address_from.name = JSON.parse(this.$route.query.item).name
        this.address_from.tel = JSON.parse(this.$route.query.item).phone
        this.address_from.addressDetail = JSON.parse(this.$route.query.item).address
        this.address_from.isDefault = JSON.parse(this.$route.query.item).address_status ? true : false
        console.log(this.address_from)
      } else {
        this.status = false
      }
    },
    onSave(content) {
      this.from.name = content.name
      this.from.phone = content.tel
      this.from.address = `${content.province}${content.city}${content.county}${content.addressDetail}`
      this.from.address_status = content.isDefault ? '1' : '0'
      console.log(this.from)
      this.$post('/api/address', this.from).then(res => {
        console.log(res)
      }, err => { })
    },
  },

  mounted() {
    new_btn.getBtn()
  },

  watch: {},

  components: {
    returnMenu: () => import('../../components/return_menu')
  },

};
</script>

<style scoped lang="scss">
/deep/ .van-address-edit {
  padding: 0;
  /deep/ .van-address-edit__fields {
    border-radius: 0;
  }
  /deep/ .van-address-edit__default {
    border-radius: 0;
  }
  /deep/ .van-switch {
    background-color: #bfbfbf;
  }
  /deep/ .van-switch--on {
    background-color: #0d8470;
  }
}
/deep/ .van-address-edit__buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
/deep/ .van-button {
  background: #0d8470;
  border-color: #0d8470;
  width: 80%;
}
/deep/ .van-field {
  padding: 1rem 1rem;
}
/deep/ .van-switch-cell {
  padding: 1rem 1rem;
}
</style>
