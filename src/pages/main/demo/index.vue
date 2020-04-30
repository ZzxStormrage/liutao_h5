<template>
  <div>
    <upload :button_name="'上传视频'"
            @getFileUrl="getFileUrl"
            ref="child_upload"
            :file_type="'audio/mp4, video/mp4'" />
    <upload :button_name="'上传图片'"
            @getFileUrl="getImageUrl" />
    <img :src="url" />
    <div @click="getModel()">显示model</div>
    <model></model>
    <input type="text"
           v-focus>
    <div @click="getArr()">测试数组、数组对象去重</div>
    <div @click="getObj()">修改对象中的key</div>
    <video :src="video_path"
           class='w-100 h-100'
           controls="controls"></video>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: [],
  data() {
    return {
      url: '',
      video_path: ''
    }
  },
  computed: {},

  created() { },

  methods: {
    ...mapMutations('model_store', ['modalShow']),
    getModel() {
      this['modalShow']('demoModel')
    },
    getFileUrl(url, file) {
      this.video_path = url
      console.log(url)
      console.log(file)
    },
    getImageUrl(url, file) {
      this.url = url
      console.log(url)
      console.log(file)
    },
    getArr() {
      let arr = [34, 534, 123, 531, 4, 4, 56, 7, 54, 56]
      console.log(this.$util.arrRepeat(arr))

      let arrObj = [{ name: 1, age: 1 }, { name: 2, age: 1 }, { name: 3, age: 3 }, { name: 4, age: 4 }, { name: 1, age: 5 }]
      console.log(this.$util.objArrRepeat(arrObj, 'name'))
    },
    getObj() {
      let data = {
        id1: '1',
        name2: '2'
      }
      let keyMap = {
        id1: 'id',
        name2: 'name'
      }
      console.log(data)
      console.log(this.$util.changeObjKey(data, keyMap))
    }
  },

  mounted() { },

  watch: {},

  components: {
    upload: () => import('../../../components/upload/upload'),
    model: () => import('../../../components/model_forms/model')
  }
}
</script>

<style scoped lang="scss">
</style>
