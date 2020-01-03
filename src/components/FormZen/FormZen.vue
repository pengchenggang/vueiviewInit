<template>
  <div>
    <div style="margin-bottom:5px;">
      <slot name="top"
            :validate="validate"
            :data="innerFormData"
            :refs="$refs"></slot>
      <!-- <Button type="primary"
              @click="btnClickHandle"
              style="float:right;">确定</Button> -->
      <div style="clear:both;"></div>
    </div>
    <Form ref="formRef"
          @submit.native.prevent
          @on-validate="onValidate"
          :show-message="false"
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
    formErrs: {
      type: Array,
      default () {
        return []
      }
    },
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
      InnerFormErrs: [],
      slotArr: [],
      innerFormData: {}
    }
  },
  watch: {
    // formErrs: {
    //   deep: true,
    //   immediate: true,
    //   handler () {
    //     this.InnerFormErrs = { ...this.formErrs }
    //     // this.$nextTick(() => {
    //     //   this.InnerFormErrs = { ...this.formErrs }
    //     //   console.info('this.InnerFormErrs', this.InnerFormErrs)
    //     // })
    //   }
    // },

    // 错误信息 外层 只需要置空 所以就不进行 深度监听 
    // formErrs (val) {
    //   console.info('formErrs (val) ', val)
    //   this.InnerFormErrs = []
    // },
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
    validate (callback) {

      let validT = false
      this.InnerFormErrs = []
      this.$refs.formRef.validate((valid) => { validT = valid })

      this.$nextTick(() => {
        console.info('this.InnerFormErrs', this.InnerFormErrs)
        if (!validT) { this.showErrorTips(this.InnerFormErrs.join('<br>')) }
        callback && callback(validT)
      })
    },
    showErrorTips (str) {
      this.$Message.error({
        closable: true,
        duration: 0, // 3,
        content: str
      })
    },
    onValidate (prop, status, error) {
      console.info('onValidate (prop, status, error)', prop, status, error)
      if (!status) {
        this.InnerFormErrs.push(error)
        // this.$emit("update:formErrs", [...this.InnerFormErrs])
      }
    },
    getInnerValue (keyName, val) {
      // console.info('getInnerValue', keyName, val)
      // this.formData[keyName] = val
      this.$set(this.innerFormData, keyName, val)
      this.$emit('update:formData', { ...this.innerFormData })
      console.info('{ ...this.innerFormData }', { ...this.innerFormData })
    },
    // btnClickHandle () {
    //   console.info('formData', this.innerFormData)
    //   // console.info('btnClickHandle')
    //   // console.info('this.$refs[formRef]', this.$refs['formRef'])
    //   this.$refs['formRef'].validate((valid) => {
    //     // console.info('valid', valid)
    //     if (valid) {
    //       this.$Message.success('Success!');
    //     } else {
    //       this.$Message.error('Fail!');
    //     }
    //   })
    // },
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
<style lang="less">
// 全局错误提示信息 位置修改
.ivu-message-error {
  .ivu-icon {
    vertical-align: top !important;
    margin-top: 2px;
  }
  span {
    display: inline-block;
    text-align: left;
  }
}

// end 全局错误信息

.FormItemContent .ivu-form-item {
  margin-bottom: 0;
}
</style>
<style lang="less" scoped>
.formZenTable {
  border-right: 1px solid #666666;
  border-bottom: 1px solid #666666;
  text-align: left;
}
</style>
