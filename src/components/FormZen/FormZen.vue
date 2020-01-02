<template>
  <div class="formZenTable">
    <FormRows :formRows="formRows">
      <template v-for="slotNameItem in slotArr"
                :slot="slotNameItem">
        <slot :name="slotNameItem"></slot>
      </template>
    </FormRows>
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
      slotArr: []
    }
  },
  watch: {

  },
  computed: {},
  methods: {
    getSlotArr (rows) {
      rows.forEach(item => {
        console.info('item', item)
        item.cols.forEach(col => {
          if (col.type === 'slot') {
            if (col.slot) {
              this.slotArr.push(col.slot)
            }
          }
          if (col.span) {
            this.getSlotArr(col.rows)
          }
        })
      })
      // console.info('this.slotArr', this.slotArr)
    }
  },
  filters: {},
  created () {
    console.info('this.formRows', this.formRows)
    this.getSlotArr(this.formRows.rows)
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
  text-align: left;
}
</style>
