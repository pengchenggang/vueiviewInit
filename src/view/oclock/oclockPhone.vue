<template>
  <div style="margin-top:80px;"
       @click="clickPhoneHandle">
    <oneOclock ref='oOclock'
               v-if="oVif" />
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
      oVif: true
    }
  },
  computed: {},
  methods: {
    clickPhoneHandle () {
      // this.oVif = false
      // this.$nextTick(() => {
      //   this.oVif = true
      // })
      this.$refs.oOclock.init()
    }
  },
  created () { },
  activated () { },
  mounted () {
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
