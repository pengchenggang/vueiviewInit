<template>
  <DatePicker :class="datePickerClassName"
              :open="datePickerState"
              :value="valueCopy"
              :disabled="disabled"
              :size="size"
              :placement="placement"
              :format="dateFormat"
              :options="options"
              :start-date="startDate"
              type="date"
              @on-change="onChangeHandle"
              @on-open-change="onOpenChangeHandle">
    <div @click="datePickerState = disabled ? false : true">
      <Input ref="input"
             :class="datePickerInputClassName"
             :value="valueCopy"
             clearable
             placeholder="选择日期"
             icon="ios-calendar-outline"
             :maxlength="10"
             :disabled="disabled"
             @on-clear="onClearHandle"
             @on-blur="onBlurHandle"
             @on-keydown="onKeyDownHandle" />
    </div>
  </DatePicker>
</template>

<script>
const legalValue = [
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'Numpad0'
]
const legalKeyMap = {
  'Digit1': '1',
  'Digit2': '2',
  'Digit3': '3',
  'Digit4': '4',
  'Digit5': '5',
  'Digit6': '6',
  'Digit7': '7',
  'Digit8': '8',
  'Digit9': '9',
  'Digit0': '0',
  'Numpad1': '1',
  'Numpad2': '2',
  'Numpad3': '3',
  'Numpad4': '4',
  'Numpad5': '5',
  'Numpad6': '6',
  'Numpad7': '7',
  'Numpad8': '8',
  'Numpad9': '9',
  'Numpad0': '0'
}
const insertSeparatorIndexes = [4, 7]
const solarMonth = [1, 3, 5, 7, 8, 10, 12]
const lunarMonth = [4, 6, 9, 11]
export default {
  name: 'dateSingleOverride',
  props: {
    startDate: {
      default: () => new Date()
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    maxHeight: {
      type: String,
      default: ''
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    leftDate: {
      type: [String, null, Date],
      default: null
    },
    rightDate: {
      type: [String, null, Date],
      default: null
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
      legalValue,
      legalKeyMap,
      insertSeparatorIndexes,
      solarMonth,
      lunarMonth,
      inputNode: null,
      valueCopy: '',
      datePickerState: false,
      options: {
        disabledDate: this.disabledDate
      }
    }
  },
  computed: {
    datePickerClassName () {
      return this.noBorder ? 'i-date-picker no-border' : 'i-date-picker'
    },
    datePickerInputClassName () {
      return this.maxHeight === '' ? 'i-date-picker-input' : 'i-date-picker-input max-height'
    },
    dateFormat () {
      const separator = this.separator
      return `yyyy${separator}MM${separator}dd`
    },
    valueLength () {
      return typeof this.value === 'string' ? this.value.length : 0
    }
  },
  methods: {
    disabledDate (date) {
      const currentDateTime = this.parseDate(date)
      if (this.leftDate && this.rightDate) {
        const leftDateTime = this.parseDate(this.leftDate)
        const rightDateTime = this.parseDate(this.rightDate)
        const leftResult = currentDateTime > leftDateTime
        const rightResult = currentDateTime < rightDateTime
        return leftResult || rightResult
      } else if (this.leftDate) {
        const leftDateTime = this.parseDate(this.leftDate)
        return currentDateTime > leftDateTime
      } else if (this.rightDate) {
        const rightDateTime = this.parseDate(this.rightDate)
        return currentDateTime < rightDateTime
      }
    },
    parseDate (date) {
      if (typeof date === 'string') {
        return Date.parse(date)
      } else if (date !== null && typeof date === 'object') {
        return date.getTime()
      }
    },
    onChangeHandle (formationDate) {
      this.valueCopy = formationDate
    },
    onOpenChangeHandle (state) {
      this.datePickerState = state
    },
    onClearHandle () {
      this.$nextTick(() => {
        this.valueCopy = ''
      })
      this.$emit('on-change', '')
    },
    onBlurHandle () {
      this.datePickerState = false
      if (this.valueLength === 10) {
        const dateArr = this.value.split('-')
        const year = parseInt(dateArr[0])
        const month = parseInt(dateArr[1])
        const day = parseInt(dateArr[2])
        const isLeapYear = this.checkLeapYear(year)
        if ((month > 12) ||
          (isLeapYear && month === 2 && day > 29) ||
          (!isLeapYear && month === 2 && day > 28) ||
          (this.solarMonth.includes(month) && day > 31) ||
          (this.lunarMonth.includes(month) && day > 30)) {
          this.errorMessageOn()
        }
      } else if (this.valueLength !== 0) {
        this.errorMessageOn()
        // 清空错误数据
        // this.$nextTick(_ => {
        //   this.valueCopy = ''
        // })
        // this.$emit('on-change', '')
      }
    },
    onKeyDownHandle (event) {
      const code = event.code
      if (this.legalValue.includes(code) && this.valueLength < 10) {
        this.insertSeparatorHandle()
        this.valueCopy += this.legalKeyMap[code]
      } else if (code === 'Backspace') {
        this.valueCopy = this.valueCopy.slice(0, -1)
      } else if (code === 'ArrowLeft' || code === 'ArrowRight') {
        this.controlInputPositionHandle()
      } else {
        const firstInsertFlag = this.valueLength === 0
        const tmpDate = this.valueCopy
        this.valueCopy = firstInsertFlag ? ' ' : ''
        this.$nextTick(() => {
          this.valueCopy = firstInsertFlag ? '' : tmpDate
          if (this.valueCopy === ' ') {
            this.$nextTick(() => {
              this.valueCopy = ''
            })
          }
        })
      }
    },
    errorMessageOn () {
      this.$Modal.confirm({
        title: '非法的日期！'
      })
    },
    controlInputPositionHandle () {
      this.inputNode.setSelectionRange(-1, -1, 'backward')
    },
    insertSeparatorHandle () {
      if (this.insertSeparatorIndexes.includes(this.valueLength)) {
        this.valueCopy += '-'
      }
    },
    checkLeapYear (year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }
  },
  watch: {
    value (value) {
      this.valueCopy = value
    },
    valueCopy (value) {
      this.$emit('on-change', value)
    }
  },
  model: {
    prop: 'value',
    event: 'on-change'
  },
  created () {
    this.valueCopy = this.value
  },
  mounted () {
    this.inputNode = this.$refs
      .input.$el.querySelector('.ivu-input')
  }
}
</script>

<style lang="less">
.i-date-picker {
  height: 100%;
  width: 100%;
  > .ivu-date-picker-rel {
    height: inherit;
    > div {
      height: inherit;
    }
  }
  .max-height {
    height: 100%;
    width: 100%;
    > .ivu-icon,
    > .ivu-input {
      height: inherit;
      line-height: inherit;
    }
    > .ivu-icon-ios-calendar-outline {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    &:hover > .ivu-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  &.no-border {
    border: none;
    .ivu-input {
      border: none;
    }
  }
}
</style>
