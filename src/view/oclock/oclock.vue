<template>
  <div style="margin-top:80px;">

    <oneOclock v-for="(item,index) in oItem"
               :key="index" />
  </div>
</template>

<script>
import oneOclock from './components/oneOclock'
export default {
  name: 'oclock',
  props: {},
  components: {
    oneOclock
  },
  data () {
    return {
      oItem: [0]
    }
  },
  computed: {},
  methods: {
  },
  created () { },
  activated () { },
  mounted () {
    for (let i = 0; i < 15; i++) {
      this.oItem.push(0)
    }
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
