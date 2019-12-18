<template>
  <div>

    <Button type="primary">iviewTest</Button>
    <Row>
      <Col span="24">
      test:
      <i-switch v-model="test" />
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'iviewTest',
  props: {},
  components: {},
  data () {
    return {
      test: false
    }
  },
  watch: {},
  computed: {},
  methods: {},
  filters: {},
  created () { },
  activated () { },
  mounted () {
    console.info('mounted')
   },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
