<template>
  <div>
    <div style="margin-bottom:5px;">
      <slot name="top"
            :data="innerFormData"
            :refs="$refs"></slot>
      <Button type="primary"
              @click="btnClickHandle"
              style="float:right;">确定</Button>
      <div style="clear:both;"></div>
    </div>
    <Form ref="formRef"
          :model="innerFormData"
          :rules="formRules">
      <div class="formZenTable">

        <FormRows :formRows="formRows"
                  :formData="innerFormData"
                  @getInnerValue="getInnerValue">
          <template v-for="slotNameItem in slotArr"
                    :slot="slotNameItem">
            <slot :name="slotNameItem"></slot>
          </template>
        </FormRows>

      </div>
    </Form>
  </div>
</template>

<script>
import FormRows from './FormRows'
export default {
  name: 'FormZen',
  props: {
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    formRules: {
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
    FormRows
    // FormItemTemplate
  },
  data () {
    return {
      slotArr: [],
      innerFormData: {}
    }
  },
  watch: {
    formData: {
      deep: true,
      immediate: true,
      handler () {
        this.$nextTick(() => {
          this.innerFormData = { ...this.formData }
          console.info('this.innerFormData', this.innerFormData)
        })
      }
    }
  },
  computed: {},
  methods: {
    getInnerValue (keyName, val) {
      // console.info('getInnerValue', keyName, val)
      // this.formData[keyName] = val
      this.$set(this.innerFormData, keyName, val)
      this.$emit('update:formData', { ...this.innerFormData })
      console.info('{ ...this.innerFormData }', { ...this.innerFormData })
    },
    btnClickHandle () {
      console.info('formData', this.innerFormData)
      // console.info('btnClickHandle')
      // console.info('this.$refs[formRef]', this.$refs['formRef'])
      this.$refs['formRef'].validate((valid) => {
        // console.info('valid', valid)
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    getSlotArr (rows) {
      rows.forEach(item => {
        // console.info('item', item)
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
    // console.info('this.formRows', this.formRows)
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
