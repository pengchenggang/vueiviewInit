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
      <h2>basic.表格标题</h2>
      <FormZen :formRows="basic">
        <template slot="slotName1">
          <div>
            123123
          </div>
        </template>
      </FormZen>
      <!-- <h2>7.表格标题</h2>
      <FormZen :formRows="row7"></FormZen>
      <h2>1.表格标题</h2>
      <FormZen :formRows="row1"></FormZen>
      <h2>2-1.表格标题</h2>
      <FormZen :formRows="row2_1"></FormZen>
      <h2>2-2.表格标题</h2>
      <FormZen :formRows="row2_2"></FormZen>
      <h2>3-1.表格标题</h2>
      <FormZen :formRows="row3_1"></FormZen>
      <h2>6-2.表格标题</h2>
      <FormZen :formRows="row6_2"></FormZen> -->

    </div>

    <div style="height:100px;"></div>
  </div>
</template>

<script>
import FormZen from '@/components/FormZen'
import { row1, row2_1, row2_2, row3_1, row6_2, row7, basic } from './etc'
export default {
  name: 'iviewTest',
  props: {},
  components: {
    FormZen
  },
  data () {
    return {
      basic,
      row1,
      row2_1,
      row2_2,
      row3_1,
      row6_2,
      row7,
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
    // console.info('mounted', this.row8)
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
h2 {
  margin: 20px 0 !important;
}
</style>
