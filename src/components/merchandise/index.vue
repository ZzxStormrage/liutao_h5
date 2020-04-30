<template>
  <div class="G-CommoDity">
    <div class="search">
      <van-cell-group>
        <van-field left-icon="search" v-model="value" placeholder="搜索商品"/>
      </van-cell-group>
    </div>


    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

      <van-list
        v-model="isUpLoading"
        :finished="upFinished"
        @load="onLoad"
        :offset="offset"
      >
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



      </van-list>
    </van-pull-refresh>



  </div>
</template>

<script>

  import { Toast } from 'vant';
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
        ],
        datalist:['a','b','c','d','e','f','g','h','j','k','l','y'],//自己定义的数组，里面存放数据，用于v-for循环
        datacontent:[], //空数组，用来储存循环出来的内容，因为没有造假数据，所以就反复循环这个数组里的内容了
        isLoading: false,//下拉刷新
        isUpLoading:false,//下拉加载
        upFinished:false,
        offset:100,

      }
    },
    methods:{
      onRefresh() { // 下拉调用此函数
        setTimeout(() => {
          this.$toast('刷新成功');  //弹出
          this.isLoading = false;
        }, 500);
      },
      onLoad () { // 上拉调用此函数
        setTimeout(() => {
          this.$toast('加载成功');//弹出
          this.isUpLoading = false;
          let dataa = this.datalist
          for (var i = 1; i < dataa.length; i++) {
            this.datacontent.push(dataa[i]) // 上拉时循环出来这个数组的三条内容，放入datacontent这个数组里，那样就一直拉一直加
            console.log(this.datacontent)
      }
        }, 500);

        // 加载完成时底部提示加载完成，禁止上拉加载。延迟器是为了避免和加载中同时执行


        setTimeout(() => {

          if (this.datacontent.length >=5) {

            this.upFinished = true;

          } else {

            this.upFinished = false;

          }

        }, 1000);

      },



    },
    mounted() {


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
                line-height: 0.8rem;
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
              line-height: 1.2rem;
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