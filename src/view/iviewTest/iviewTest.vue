<template>
  <div>

    <Button type="primary">iviewTest</Button>
    <Row>
      <Col span="24">
      test:
      <i-switch v-model="test" />
      </Col>
    </Row>
    <div style="width:80%; margin: 0 10% 0 10%;">
      <h2>1.本人的婚姻情况</h2>
      <FormZen :formRows="row1"></FormZen>
    </div>

  </div>
</template>

<script>
import FormZen from '@/components/FormZen'
import { row1 } from './etc'
export default {
  name: 'iviewTest',
  props: {},
  components: {
    FormZen
  },
  data () {
    return {
      row1,
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
    console.info('mounted', this.row8)
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
