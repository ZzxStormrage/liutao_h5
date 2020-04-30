<template>
  <div class="modal"
    id="demoModel">
    <div class="modal-wrap">
      <div class="modal-content">
        <div class="modal-header">
          <h5>说明</h5>
          <i @click="close()"
            class="iconfont iconclose cp hove-c"></i>
        </div>
        <div class="modal-body d-flex flex-column"
          style="border-top:1px solid rgb(240, 240, 240)">
          <div class="mt-20px">123</div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },

  components: {},

  methods: {
    ...mapMutations('model_store', ['modalHidden']),
    close() {
      this['modalHidden']('demoModel')
    }
  },

  created() {},

  mounted() {}
}
</script>
<style lang='scss'>
#demoModel {
  .modal-wrap {
    width: 760px;
  }
}
</style>