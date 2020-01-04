<template>
  <div class="FormRowsClass">
    <!-- {{ innerFormRows.rows }} -->
    <div v-for="(items,index) in innerFormRows.rows"
         :key="index"
         :style="getFormZenRowStyle(items)"
         class="formZenRow">
      <!-- {{ items }} -->
      <!-- flex01 就是 内容宽度 不进行弹性 -->
      <div v-for="(col,index2) in items.cols"
           :key="index2"
           :style="getFormZenItemStyle(col)"
           :class="{'formZenItemFlex0': col.flex01}"
           class="formZenItem">
        <!-- {{col}} -->
        <template v-if="col.span">
          <FormRows @getInnerValue="getInnerValue"
                    :formData="innerFormData"
                    :formRows="{global: innerFormRows.global,rows:[...col.rows]}"></FormRows>
        </template>
        <template v-if="!col.span">
          <FormItemTemplate :headerTitle="col.headerTitle"
                            :headerWidth="col.headerWidth ? col.headerWidth : innerFormRows.global.headerWidth"
                            :itemContent="col.itemContent"
                            :hideContent="col.hideContent"
                            :hideHeader="col.hideHeader"
                            :itemsDirection="items.direction"
                            :disabled="col.disabled"
                            :type="col.type"
                            :arr="col.arr"
                            :keyName="col.key"
                            :global="innerFormRows.global"
                            :slotName="col.slot"
                            @getInnerValue="getInnerValue"
                            :max="col.max"
                            :required="col.required"
                            :typeFlag="col.typeFlag"
                            :formValue="formData[col.key]">
            <template :slot="col.slot">
              <slot :name="col.slot"></slot>
            </template>
          </FormItemTemplate>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import FormItemTemplate from './FormItemTemplate'
import { defaultFormRows } from './etc'
export default {
  name: 'FormRows',
  props: {
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    formRows: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    FormItemTemplate
  },
  data () {
    return {
      innerFormRows: {}
    }
  },
  watch: {
    formRows: {
      deep: true,
      immediate: true,
      handler () {
        this.$nextTick(() => {
          this.updateFormRows()
        })
      }
    }
  },
  computed: {
    classes () {
      return {
        'formZenItemFlex0': true
      }
    }
  },
  methods: {
    getInnerValue (keyName, val) {
      this.$emit('getInnerValue', keyName, val)
    },
    getFormZenRowStyle (items) {
      const out = {}
      if (items.flex) {
        out.flex = items.flex
      }
      if (items.direction === 'column') {
        out.flex = '1 1'
      }
      if (items.minHeight) {
        out.minHeight = items.minHeight
      }
      return out
    },
    getFormZenItemStyle (col) {

      const out = { minHeight: this.innerFormRows.global.minHeight }
      if (col.flex) {
        out.flex = col.flex
      }
      if (col.colWidth) {
        out.width = col.colWidth
      }
      return out
    },
    updateFormRows () {
      // console.info('props this.formRows', this.formRows)
      // console.info('Object.assign(defaultFormRows, this.formRows', Object.assign(defaultFormRows, this.formRows))

      this.innerFormRows = {
        global: { ...defaultFormRows.global, ...this.formRows.global },
        rows: { ...defaultFormRows.rows, ...this.formRows.rows }
      }

      // this.innerFormRows = { ...defaultFormRows, ...this.formRows }
      // this.innerFormRows = JSON.parse(JSON.stringify(this.innerFormRows))

      // console.info('this.formRows', this.formRows)

      // console.info('this.innerFormRows', this.innerFormRows)
    },
    init () {
      this.updateFormRows()
      // console.info('this.innerFormRows', this.innerFormRows)
    }
  },
  filters: {},
  created () { },
  activated () { },
  mounted () {
    this.init()
  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
.FormRowsClass {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.formZenRow {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex: 1 1; // 解决套表格时候 不自动撑开
}
.formZenItem {
  display: flex;
  flex: 1 1;
  min-height: 60px;
  // border: 1px solid #cccccc;
  flex-wrap: nowrap;
  // background-color: aqua;
}
.formZenItemFlex0 {
  flex: 0 1 auto !important;
}
</style>
