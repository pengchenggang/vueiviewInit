<template>
  <div :style="getFormItemTemplateStyle()"
       class="FormItemTemplate">

    <div v-if="!hideHeader"
         :style="getFormItemHeaderStyle()"
         class="FormItemHeader">
      <span v-if="required"
            style="color:red; margin-right:3px; font-size:16px;">*</span>
      <span v-html="headerTitle"></span>
      <!-- {{ this.headerTitle }} -->
    </div>

    <div v-if="!hideContent"
         :class="{'max': max}"
         class="FormItemContentWrap">
      <FormItem :prop="keyName">
        <div :class="FormItemContentClasses"
             class="FormItemContent">

          <template v-if="type==='text'">
            {{ this.itemContent}}
          </template>
          <Input v-if="type==='input'"
                 v-model="innerValue"
                 placeholder="请输入"
                 style="width: 100%" />

          <RadioGroup v-if="type==='radio'"
                      v-model="innerValue">
            <Radio v-for="(item,index) in arr"
                   :key="index"
                   :label="item.code">{{item.codeName}}</Radio>
          </RadioGroup>

          <CheckboxGroup v-if="type==='checkbox'"
                         v-model="innerValueArr">
            <Checkbox v-for="(item,index) in arr"
                      :key="index"
                      :label="item.code">
              {{item.codeName}}
            </Checkbox>
          </CheckboxGroup>

          <dateSingle v-if="type==='date'"
                      style="height:32px;"
                      v-model="innerValue"></dateSingle>
          <!-- <dateSingle no-border
                            :disabled="formDisabled"
                            max-height="58px"
                            v-model="formData.emigDate"
                            :leftDate="basicInfo.reportDate"></dateSingle> -->
          <radioGroupZen v-if="type==='radioZen'"
                         :dataArr="arr"
                         v-model="innerValue"></radioGroupZen>

          <Select v-if="type==='select'"
                  clearable
                  v-model="innerValue">
            <Option v-for="item in arr"
                    :value="item.code"
                    :key="item.code">{{ item.codeName }}</Option>
          </Select>

          <slot v-if="type==='slot'"
                :name="slotName"></slot>
          <!-- {{ this.itemContent }} -->

        </div>
      </FormItem>
    </div>

  </div>
</template>

<script>
import dateSingle from './components/dateSingle'
import radioGroupZen from './components/radioGroupZen'
import { oneOf } from './libs/tools'
export default {
  name: 'FormItemTemplate',
  props: {
    required: {
      type: Boolean,
      defalut: false
    },
    max: {
      type: Boolean,
      defalut: false
    },
    formValue: {
      type: String,
      defautl: ''
    },
    keyName: {
      type: String,
      defautl: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    global: {
      type: Object,
      default () {
        return {}
      }
    },
    itemsDirection: {
      type: String,
      default: 'rows'
    },
    arr: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default: 'slot'
    },
    slotName: {
      type: String,
      default: ''
    },
    itemContent: {
      type: String,
      default: ''
    },
    headerTitle: {
      type: String,
      default: ''
    },
    headerWidth: {
      type: String,
      default: '180px'
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideContent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    dateSingle,
    radioGroupZen
  },
  data () {
    return {
      innerValue: '',
      innerValueArr: []
    }
  },
  watch: {
    formValue: {
      handler (val) {
        if (oneOf(this.type, ['input', 'radio', 'date', 'radioZen', 'select'])) {
          this.innerValue = val
        }
        if (oneOf(this.type, ['checkbox'])) {
          if (val !== undefined) {
            this.innerValueArr = val.split(',')
          } else {
            this.innerValueArr = []
          }

        }
      },
      immediate: true
    },
    innerValue (val) {
      this.$emit('getInnerValue', this.keyName, val)
    },
    innerValueArr (arr) {
      console.info('innerValueArr', arr)
      this.$emit('getInnerValue', this.keyName, arr.join(','))
    }
  },
  computed: {
    FormItemContentClasses () {
      return {
        'FormItemContentDisabled': this.disabled
      }
    }
  },
  methods: {
    getFormItemTemplateStyle () {
      let out = {}
      if (this.itemsDirection === 'column') {
        out.flexDirection = 'column'
      }
      return out
    },
    getFormItemHeaderStyle () {
      let out = { width: this.headerWidth }
      if (this.itemsDirection === 'column') {
        out.width = 'inherit'
        // console.info('this.global', this.global)
        out.minHeight = this.global.minHeight
      }
      return out
    }
  },
  filters: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="less">
.max {
  .FormItemContent {
    padding: 0 !important;
    .ivu-select {
      height: 100% !important;
      .ivu-select-selection {
        height: 100% !important;
        align-items: center;
        display: flex;
      }
    }
    .ivu-date-picker {
      height: 100% !important;
      .ivu-icon {
        top: calc(~"50% - 16px");
      }
    }
    .ivu-input-wrapper {
      height: 100%;
      .ivu-input {
        height: 100%;
      }
    }
  }
}
.FormItemContentWrap {
  display: flex;
  flex: 1 1 auto;
  .ivu-form-item-error {
    border: 1px solid red;
    .ivu-input {
      border: 1px solid #dcdee2;
    }
  }
  .ivu-form-item {
    display: flex;
    flex: 1 1 auto;
    margin-bottom: 0;
    .ivu-form-item-content {
      display: flex;
      flex: 1 1 auto;
    }
  }
}
</style>
<style lang="less" scoped>
.FormItemContentDisabled {
  background-color: #f2f2f2;
}
.FormItemHeader {
  // flex: 1 1;
  // width: 100px;
  border-top: 1px solid #666666;
  border-left: 1px solid #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  span {
    font-size: 14px;
    font-weight: bold;
  }
}
.FormItemContent {
  flex: 1 1; // flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  border-top: 1px solid #666666;
  border-left: 1px solid #666666;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding: 10px;
}
.FormItemTemplate {
  display: flex;
  flex: 1 1;
  flex-wrap: nowrap;
  // align-items: center;
  // border: 3px solid red;
  // background-color: bisque;
}
</style>
