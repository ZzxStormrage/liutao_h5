<template>
  <div class="G-CommoDity">
    <div class="search">
      <van-cell-group>
        <van-field left-icon="search" v-model="value" placeholder="搜索商品"/>
      </van-cell-group>
    </div>

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

          <!--价格和详情-->
          <div class="price">
            <div class="unit_price">
              <span style="color: red">￥{{item.price}}</span>
              <div class="Open_group">{{item.nber_ple}}人团</div>
            </div>
            <div class="look_over">{{item.view_details}}</div>
          </div>

          <!--单价和一拼-->
          <div class="unit_Cost">

            <div>
              单买价￥{{item.Si_purse}}
            </div>
            <div>{{item.population}}人已拼</div>

          </div>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        value: "",
        datalistAD: [
          {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            nber_ple: 6,
            Si_purse: 8.8,
            population: 5689,
            view_details: "查看详情"
          },
          {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            nber_ple: 6,
            Si_purse: 8.8,
            population: 5689,
            view_details: "查看详情"
          }, {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            nber_ple: 6,
            Si_purse: 8.8,
            population: 5689,
            view_details: "查看详情"
          }, {
            stryu: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588155267509&di=ee80cda8bc34957e7c4cc95dd23a49da&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533138616-WjVoOFbgBP.jpg",
            Name_commodity: "商品名称商品名称商品名称商品名称",
            price: 9,
            nber_ple: 6,
            Si_purse: 8.8,
            population: 5689,
            view_details: "查看详情"
          }
        ]

      }
    }
  }
</script>

<style lang="scss" scoped>

  .G-CommoDity{
    padding: 0.4rem;
    .search {
      width: 100%;
      height: 3rem;
      .van-cell-group{
        border: solid 0.1rem #EEEEEE;
        border-radius: 0.3rem;
        background: #EEEEEE;
      }
    }

    .commodity {
      width: 100%;
      height: 9rem;
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;
      padding: 0.3rem;
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
          height: 32%;

          .price {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: space-between;

            .unit_price {
              width: 40%;
              height: 100%;
              display: flex;

              .Open_group {
                width: 55%;
                height: 1rem;
                border: solid 1px #F4A41F;
                font-size: 0.1rem;
                text-align: center;
                margin: 0.2rem;
                background: #FFFDDF;
              }
            }

            .look_over {
              padding: 0.2rem 0.5rem;
              color: #fff;
              border-radius: 0.7rem;
              background: #0D8470;
            }
          }

          .unit_Cost {
            width: 100%;
            height: 48%;
            display: flex;
            justify-content: space-between;
            color: #7d7171;
            font-size: 0.6rem;
          }
        }

      }
    }
  }

</style>