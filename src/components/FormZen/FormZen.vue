<template>
  <div class="formZenTable">
    <FormRows :formRows="formRows"></FormRows>
  </div>
</template>

<script>
import FormRows from './FormRows'
export default {
  name: 'FormZen',
  props: {
    formRows: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    FormRows
    // FormItemTemplate
  },
  data () {
    return {

    }
  },
  watch: {

  },
  computed: {},
  methods: {

  },
  filters: {},
  created () {

  },
  activated () { },
  mounted () {

  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
.formZenTable {
  border-right: 1px solid #666666;
  border-bottom: 1px solid #666666;
}
</style>
