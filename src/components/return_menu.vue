<template>
  <div style="height:3rem; position: fixed; top:0;z-index:1"
       class="bg-white d-flex align-items-center w-100 justify-content-center">
    <van-icon name="arrow-left"
              @click="routerReturn"
              style="position: absolute;left:1rem; font-size:1.2rem;font-weight:400" />
    <span style="ffont-weight:400">{{menuName}}</span>
  </div>
</template>

<script>
export default {
  props: {
    menuName: {
      type: String,
      default: '测试名字'
    },
    menuPath: {
      type: String,
      default: '/'
    },
  },
  data() {
    return {

    };
  },
  computed: {},

  created() { },

  methods: {
    routerReturn() {
      this.$router.push({
        path: `${this.menuPath}`
      })
    }
  },

  mounted() { },

  watch: {},

  components: {},

};
</script>

<style scoped lang="scss">
</style>
