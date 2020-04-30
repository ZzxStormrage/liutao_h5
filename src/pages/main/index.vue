<template>
  <div>
    <!--biao ti-->
    <div class="subject">
      <div class="get_back"><van-icon name="arrow-left" size="30" /></div>
      <div class="regist">{{ register }}</div>
    </div>

    <div class="ReGTForm">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          left-icon="manager-o"
          placeholder="请输入名称"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          left-icon="phone-o"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="validation">
          <div class="verify">
            <van-cell-group>
              <van-field
                left-icon="sign"
                v-model="value"
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

        <div style="margin-top: 16px;">
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      register: "注册",
      username: "",
      password: ""
    };
  },
  computed: {},

  created() {},

  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },

  mounted() {},

  watch: {},

  components: {}
};
</script>

<style scoped lang="scss">
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
    font-size: 1.2rem;
    font-weight: 600;
  }
}
.ReGTForm {
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
}
</style>
