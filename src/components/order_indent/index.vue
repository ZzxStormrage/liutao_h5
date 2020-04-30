<template>
  <div class="order_gOODS">
    <!--我的订单-->
   <div class="Order_Goods">
     <div class="ordgodds">
       <div class="ORgods">我的订单</div>
       <div class="map_atlas">
         山东济南市市中区....
       </div>
     </div>


     <div class="payment">

       <div v-for="(item,index) in datalistg"
            :key="index"
            class="all_entire"
            :class="{All_Entire:index == Astavz}"
            @click="all_complete(index)">{{item.name}}</div>
     </div>



   </div>


<div class="All_complete">
  <div v-for="(item,index) in datalistAD" :key="index" class="commodity">
    <!--商品图片-->
    <div class="comdiyt">
      <img :src="item.stryu" alt=""/>
    </div>

    <!--商品情况-->
    <div class="designation">
      <!--商品名称-->
      <div class="product_name">
        <div class="Comdity_name">{{item.Name_commodity}}</div>
        <div style="white-space: nowrap;" :class="[item.payment =='未付款'?'coMdityNAme':'Terms_Payment']">{{item.payment}}</div>

      </div>
      <!--价格和详情-->
      <div class="p_od_Name">
          <div class="unit_price">
            <span style="color: red">￥{{item.price}}</span>
          </div>
          <div><van-icon name="cross" />{{item.view_details}}</div>




      </div>

    </div>

  </div>
</div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        datalistg:[{name:"全部"},
          {name:"未付款"},
          {name:"已付款"},
          {name:"已送达"}],
        Astavz:0,
        datalistAD: [
          {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            payment:"未付款",
            view_details: 5
          },
          {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            payment:"已付款",
            view_details: 5
          }, {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            payment:"已送达",
            view_details: 5
          }, {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            payment:"未付款",
            view_details: 5
          }
        ],
        Asvnct:""
      }
    },
    methods:{
      all_complete(i){
       this.Astavz =i
      }
    }
  }
</script>

<style lang="scss" scoped>

    .Order_Goods {
      width: 100%;
      height: 7rem;
      border: solid 1px black;
      background: #0D8470;
      color: #ffffff;

      .ordgodds {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem;
        .map_atlas {
          background: #796868;
          border-radius: 1rem;
          color: #fff;
          text-align: center;
          padding: 0.1rem 0.9rem;
          height: 1.6rem;
        }
      }

      .payment {
        width: 100%;
        height: 3rem;
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-around;

        .all_entire {
          padding: 1rem;

        }

        .All_Entire {
          border-bottom: solid 0.1rem #ffffff;
        }
      }
    }

    .All_complete {
      .commodity {
        width: 100%;
        height: 8rem;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        background: #ffffff;
        padding: 0.7rem;
        .comdiyt {
          width: 35%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .designation {
          width: 62%;
          height: 100%;
          display: flex;
          flex-flow: wrap;
          align-content: space-between;

          .product_name {
            width: 100%;
            height: 33%;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            .Comdity_name{
              width: 64%;
            }
            .Terms_Payment{
              padding: 0.2rem 0.8rem;
              background:#EEEEEE;
              height: 1.5rem;
              font-size: 0.8rem;
              border:solid 1px #a9a3a3;
              border-radius: 0.8rem;
            }
            .coMdityNAme{
              padding: 0.2rem 0.8rem;
              background:#FFFDDF;
              height: 1.5rem;
              font-size: 0.8rem;
              border:solid 1px #F3A012;
              border-radius: 0.8rem;
            }
          }

          .p_od_Name {
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: space-between;
            padding: 0.1rem;
            .unit_price {
              width: 40%;
              height: 100%;
              display: flex;
            }

          }

        }
      }
    }

</style>