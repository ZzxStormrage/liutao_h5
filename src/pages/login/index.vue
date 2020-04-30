<template>
  <div>

<div class="symbol">
  logo
</div>

    <div class="register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          left-icon="manager-o"
          placeholder="请输入名称"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <div class="validation">
          <div class="verify">
            <van-cell-group>
              <van-field
                left-icon="sign"
                v-model="valuere"
                placeholder="请输入验证码"
              />
            </van-cell-group>
          </div>
          <div class="obtain">
            获取验证码
          </div>
        </div>
        <div class="privacy">
          <div class="pr-vay">
            <van-icon name="checked" color="#0D8470" />
          </div>
          <div class="reading">请认真阅读 <span>《隐私政策》</span></div>
        </div>

        <div style="margin-top: 32px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
          <div class="enroll">
            注册
          </div>
        </div>
      </van-form>
    </div>


  </div>
  
</template>

<script>
  import {tututu} from '@/api/api.js'
  export default {
    name: "index",
    data(){
      return{
        username: "",
        valuere: ""
      }
    },
    methods:{

      async tt(){
        console.log('123455689')
        try{
          console.log('963852')

          let res = await tututu.mumu({})

          console.log(res)

        }catch (e) {

          console.log(e)
        }


      },

      onSubmit(values) {
        console.log("submit", values);
      }
    },
    mounted(){
      console.log('5689')
      this.tt()
    }
  }
</script>

<style lang="scss" scoped>
.symbol{
  padding: 5rem;
  text-align: center;
  font-weight: 600;
  font-size: 4rem;
}
  .register {
    padding: 0.8rem;

    .validation {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      .verify {
        width: 70%;
        height: 100%;
        border-radius: 0.3rem;
      }

      .obtain {
        background: #0d8470;
        border-radius: 0.3rem;
        padding: 0.7rem 0.4rem;
        color: #ffffff;
      }
    }

    .privacy {
      display: flex;
      margin-top: 0.5rem;

      .reading {
        font-size: 0.1rem;
        margin-left: 1rem;

        span {
          color: #0d8470;
        }
      }
    }
    .van-button--info {
      color: #fff;
      background-color: #0d8470;
      border: solid 0.1rem #0d8470;
      box-shadow: inset 0px 0px 11px 1px #352626;
    }
    .van-button--round {
      border-radius: 0.3rem;
    }
    .enroll{
      text-align: center;
      padding: 0.6rem;
      margin-top: 0.2rem;
    }
    .enroll:active{
      background-color: #0D8470;
      color: #ffffff;
    }
  }
</style>