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
      <!-- <h2>basic.表格标题</h2>
      <FormZen :formRows="basic">
        <template slot="slotName1">
          <div>
            123123
          </div>
        </template>
      </FormZen> -->
      <!-- <h2>7.表格标题</h2>
      <FormZen :formRows="row7"></FormZen>
      <h2>1.表格标题</h2>
      <FormZen :formRows="row1"></FormZen> -->
      <h2>2-1.表格标题</h2>
      <FormZen ref="formZenRef"
               :formRows="row2_1"
               :formData.sync="row2_1Data"
               :formRules="row2_1Rules">
        <template slot="top"
                  slot-scope="{ data, validate }">
          <Button type="primary"
                  @click="btnClickHandle(data, validate)"
                  style="float:left;">确定1</Button>
        </template>
        <template slot="key3">
          <Input v-model="row2_1Data.key3"
                 placeholder="请输入"
                 style="width: 100%" />
        </template>
      </FormZen>
      <!-- <h2>2-2.表格标题</h2>
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
import { row1, row2_1, row2_1Rules, row2_1Data, row2_2, row3_1, row6_2, row7, basic } from './etc'
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
      row2_1Rules,
      row2_1Data,
      row2_2,
      row3_1,
      row6_2,
      row7,
      test: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    btnClickHandle (data, validate) {
      validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        }
      })

    }
  },
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
