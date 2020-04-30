<template>
  <div>


    <div v-show="Home_Gage">
      <merchandise></merchandise>
    </div>
    <div v-show="order_Goods">
      <order_indent></order_indent>
    </div>


    <!--底部导航-->
    <div class="at_bottom">

      <div v-for="(item,index) in datalistb" :key="index"
           @click="At_boToM(index)" class="At_Bott">

        <div class="At_base">
          <van-icon size="40" :name="item.lcon"
                    :class="{Inc_Co_LOr:index == Astav}"/>
        </div>
        <div class="atb_aSE">
          {{item.name}}
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import order_indent from '@/components/order_indent/index'
import merchandise from '@/components/merchandise/index'
  export default {
    name: "index",
    components:{
      order_indent,
      merchandise
    },
    data() {
      return {
        datalistb: [{lcon: "wap-home", name: "首页"},
          {lcon: "column", name: "订单"}],
        Astav: 0,
        Home_Gage:true,
        order_Goods:false
      }
    },
    methods: {
      At_boToM(a) {
        this.Astav = a

        if(a == '1'){
          this.Home_Gage = false
          this.order_Goods =true
        }else {
          this.Home_Gage = true
          this.order_Goods =false
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .at_bottom {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    box-shadow: 10px 10px 3px 10px rgba(117, 117, 113, 0.5);
background: #ffffff;
    display: flex;
    justify-content: space-around;

    .At_Bott {
      width: 10%;
      height: 100%;
      text-align: center;
      font-size: 0.8rem;

      .At_base {
        height: 2.5rem;

        .Inc_Co_LOr {
          color: #0D8470;
        }
      }

      /*.atb_aSE{*/
      /*  width: 2rem;*/
      /*  height: 2rem;*/
      /*  background: #dde24d;*/
      /*}*/
    }
  }
</style>