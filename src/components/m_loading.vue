<template>
  <!-- 该组件已经在全局注册 -->
  <!-- 直接引用 -->
  <!-- :style="{width:video_options.width+'px',height:video_options.height+'px'}" -->
  <!-- 需要自己在外部设置宽高 -->
  <div class="bg-m-loading">
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {}
  },

  components: {},

  created() { },

  mounted() { }
}
</script>
<style lang='scss' scoped>
.bg-m-loading {
  width: 100%;
  height: 100%;
  min-height: 3rem;
  background-size: auto;
}
</style>