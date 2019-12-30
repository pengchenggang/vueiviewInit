<!--
* @description 年月日 日期组件 输入8位纯数字
!-->
<template>
  <div style="width: 100%; height: 100%;">
    <!--:editable="false"-->
    <DatePicker ref="datePicker"
                :value="value2"
                :disabled="disabled"
                :open="open"
                :size="size"
                :format="'yyyy'+separator+'MM'+separator+'dd'"
                @on-change="onChangeHandle"
                :options="dateOptions"
                type="date"
                style="width:100%"
                :placement="placement"
                class="dateSingleClass"
                :class="classes"
                @on-open-change="onOpenChangeHandle">
      <div @click="inputClickHandle">
        <Input v-model="value2"
               :disabled="disabled"
               clearable
               icon="ios-calendar-outline"
               @on-clear="inputOnClearHandle"
               @keyup.native="inputOnKeyUpHandle"
               @on-enter="inputOnEnterHandle"
               @on-blur="inputOnBlurHandle"
               placeholder="选择日期"
               :maxlength="10"
               :class="divClasses"
               :style="{
             lineHeight: maxHeight,
             height: maxHeight
             }"
               style="width: 100%"></Input>
      </div>
    </DatePicker>
    <Input v-show="false"></Input>
  </div>
</template>

<script>
export default {
  name: 'dateSingle',
  components: {
    // DatePicker1
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: ''
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    leftDate: {
      type: String,
      default: ''
    },
    leftDateMove: {
      type: Number,
      default: 0
    },
    rightDate: {
      type: String,
      default: ''
    },
    rightDateMove: {
      type: Number,
      default: 0
    },
    separator: {
      type: String,
      default: '-'
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isClear: false,
      open: false,
      value2: this.value,
      dateOptions: {
        disabledDate: (date) => {
          if (this.leftDate === '' && this.rightDate === '') {
            return false
          } else {
            if (this.leftDate !== '' && this.rightDate !== '') {
              let ret1 = date.getTime() > this.moveLeft(this.leftDate).getTime()
              let ret2 = date.getTime() < this.moveRight(this.rightDate).getTime()
              return ret1 || ret2
            } else {
              // 只填写了一个
              if (this.leftDate !== '') {
                return date.getTime() > this.moveLeft(this.leftDate).getTime()
              }

              if (this.rightDate !== '') {
                return date.getTime() < this.moveRight(this.rightDate).getTime()
              }

              return false
            }
          }
        }
      }
    }
  },
  watch: {
    value (val) {
      this.value2 = val
    },
    value2 (val) {
      if (val === '') {
        this.$emit('input', this.value2)
      }
    }
  },
  computed: {
    divClasses () {
      return [
        {
          'maxHeight': this.maxHeight !== ''
        }
      ]
    },
    classes () {
      return [
        {
          'noBorder': this.noBorder
        }
      ]
    }
  },
  methods: {
    moveLeft (dateStr) {
      let date = new Date(dateStr)
      date.setDate(date.getDate() + this.leftDateMove)
      return date
    },
    moveRight (dateStr) {
      let date = new Date(dateStr)
      date.setDate(date.getDate() + this.rightDateMove)
      return date
    },
    inputOnClearHandle () {
      this.isClear = true
    },
    inputOnBlurHandle (event) {
      this.$refs.datePicker.visible = false
      this.$emit('on-blur', this.value2)
      this.value2 = this.dateFormat(this.value2)
      this.$emit('input', this.value2)
    },
    inputOnKeyUpHandle (event) {
      // 398 日期组件，通用问题，输入日期后格式正确，回来手动对1个数字编辑，
      // 删除这个数字后 焦点建议保留在删除的位置，现在删除后回到最后一位。
      // 建议演示前改了 因为会经常手动修改日期
      // if (this.value2.length !== 10) {
      //   this.value2 = this.value2.replace(/[^0-9]/g, '')
      // }
    },
    checkLeftDate (date) {
      if (this.leftDate !== '') {
        return date.getTime() < new Date(this.leftDate).getTime()
      } else {
        return true
      }
    },
    dateFormat (str) {
      let _str = str
      if (!_str) return '' // null 加入兼容 之前 调length报错

      if (_str.length === 8) {
        const reg = /^(\d{4})(\d{2})(\d{2})$/
        _str = _str.replace(reg, '$1-$2-$3')
      } else {
        if (_str.length !== 10) {
          return ''
        } else {
          return _str
        }
      }

      let date
      date = new Date(_str)
      if (!this.isValidDate(date)) {
        return ''
      } else {
        if (this.checkLeftDate(date)) {
          return _str
        } else {
          return ''
        }
      }
    },
    isValidDate (date) {
      return date instanceof Date && !isNaN(date.getTime())
    },
    inputOnEnterHandle () {
      this.$emit('on-enter', this.value2)
      this.value2 = this.dateFormat(this.value2)
      this.$emit('input', this.value2)
      this.open = false
    },
    inputClickHandle () {
      if (!this.disabled) {
        if (!this.isClear) {
          this.open = true
        }

        if (this.isClear) {
          this.isClear = false
        }
      }
    },
    onOpenChangeHandle (item) {
      if (!item) {
        this.open = false
      }
    },
    onChangeHandle (date) {
      this.$emit('input', date.toString())
    }
  },
  created () { },
  mounted () {

  }
}
</script>
<style lang="less">
.noBorder .ivu-input-icon-normal + .ivu-input {
  border: 0;
}
.maxHeight {
  width: 100%;
  height: 100%;
  > i {
    height: inherit;
    line-height: inherit;
  }
  input {
    height: inherit;
  }
}
</style>
