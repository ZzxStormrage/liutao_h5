<template>
  <div>
    <!--biao ti-->
    <div class="subject">
      <div class="get_back">
        <van-icon name="arrow-left" size="30"/>
      </div>
      <div class="regist">{{ register }}</div>
    </div>

    <div class="comdity_details">
      <div v-for="(item,index) in datalistAD" :key="index" class="commodity">
        <!--商品图片-->
        <div class="comdiyt">
          <img :src="item.stryu" alt=""/>
        </div>

        <!--商品情况-->
        <div class="designation">
          <!--商品名称-->
          <div class="product_name">
            {{item.Name_commodity}}
          </div>
          <!--价格和详情-->
          <div class="p_od_Name">

            <div class="unit_price">
              ￥{{item.price}}
            </div>
            <div class="UnIT_PR">{{item.population}}人已拼</div>

          </div>

        </div>

      </div>


    </div>

    <div class="schedule"></div>

    <div v-for="(item,index) in datalisth" :key="index" class="UseRName">
      <div class="UsernME">
        <div class="Subject">用户名称</div>
        <div class="promptly">立即参团</div>
      </div>
      <div class="UsEName">
        <div class="progress">
          <van-progress :percentage="item.unty"/>
        </div>

        <div style="font-size: 0.2rem">还差1人</div>
      </div>


    </div>


    <div class="ComDiTy_priCes">
      <div class="c_prices">商品价格：<span style="color: red">￥{{cdtypries}}</span></div>
      <div class="CDTYPRES" @click="bounced">开团</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        register: "商品详情",
        datalistAD: [
          {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9.0,
            population: 5689
          }
        ],
        datalisth: [
          {unty: 50},
          {unty: 80},
          {unty: 70},
          {unty: 80},
          {unty: 30}
        ],
        cdtypries: 9
      }
    },
    methods:{
      bounced(){
        this.$dialog.alert({
          message: "开团后拼团成功才可购买该商品确定成功？", //改变弹出框的内容
          showCancelButton: true,//展示取水按钮
          confirmButtonColor:"#0D8470"

        })
          .then(() => { //点击确认按钮后的调用
            console.log("点击了确认按钮噢")
          })
          .catch(() => { //点击取消按钮后的调用
            console.log("点击了取消按钮噢")
          })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .subject {
    display: flex;
    position: relative;

    .get_back {
      position: absolute;
      left: 0.5rem;
      top: 0.9rem;
    }

    .regist {
      padding: 1rem;
      margin: auto;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .comdity_details {

    padding: 0.7rem;
    background: #fff;

    .commodity {
      width: 100%;
      height: 7rem;
      display: flex;
      justify-content: space-between;

      .comdiyt {
        width: 35%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .designation {
        width: 60%;
        height: 100%;
        display: flex;
        flex-flow: wrap;
        align-content: space-between;

        .product_name {
          width: 100%;
          height: 33%;
          font-weight: 600;
        }

        .p_od_Name {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .unit_price {
            width: 40%;
            height: 100%;
            color: red;
          }

          .UnIT_PR {
            font-size: 0.8rem;
            color: #989898;
          }
        }

      }

    }
  }
.schedule{
  height: 1rem;
}
  .UseRName {
    width: 100%;
    height: 5rem;
    padding: 1rem;
background: #ffffff;
    .UsernME {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-between;

      .promptly {
        background: #0D8470;
        color: #ffffff;
        padding: 0.6rem 0.8rem;
        height: 0.5rem;
        font-size: 0.2rem;
        border-radius: 0.7rem;
        line-height: 0.1rem;
      }
    }

    .UsEName {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;

      .progress {
        width: 80%;
        height: 100%;
        margin-top: 0.3rem;

        .van-progress {
          position: relative;
          height: 8px;
          background: #afafaf;
          border-radius: 4px;
        }
      }
    }
  }

  .ComDiTy_priCes {
    width: 100%;
    border-top: solid 0.2rem #d6d5d5;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0rem;

    .c_prices {
      padding: 1rem;

    }

    .CDTYPRES {
      background: #0D8470;
      color: #ffffff;
      padding: 1rem 3rem;
    }
  }
</style>