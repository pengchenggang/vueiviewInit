<template>
  <div>
    JsonServerDemo
    <div>
      {{ jsonData }}
    </div>
    <div>
      <Button type="primary"
              @click="jsonClickHandle">添加JsonData</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonServerDemo',
  mixins: [],
  props: {},
  components: {},
  data () {
    return {
      jsonData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    jsonClickHandle () {
      const jsonDataTemp = {
        "id": Math.random().toString(),
        "code": "N2Insert",
        "codeName": "N2名字Insert"
      }
      this.$api('select', { method: 'post', data: jsonDataTemp }).then(() => {
        // this.jsonData = res.data
        this.getSelect()
      })
    },
    dataInit () {
      this.getSelect()
    },
    getSelect () {
      this.$api('select').then(res => {
        this.jsonData = res.data
      })
    }
  },
  filters: {},
  created () {
    this.dataInit()
  },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
