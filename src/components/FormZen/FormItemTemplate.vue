<template>
  <div :style="getFormItemTemplateStyle()"
       class="FormItemTemplate">

    <div v-if="!hideHeader"
         :style="getFormItemHeaderStyle()"
         class="FormItemHeader">
      {{ this.headerTitle }}
    </div>

    <div v-if="!hideContent"
         :class="FormItemContentClasses"
         class="FormItemContent">

      <FormItem :prop="keyName">

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
        <slot v-if="type==='slot'"
              :name="slotName"></slot>
        <!-- {{ this.itemContent }} -->

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
        if (oneOf(this.type, ['input', 'radio', 'date', 'radioZen'])) {
          this.innerValue = val
        }
        if (oneOf(this.type, ['checkbox'])) {
          this.innerValueArr = val.split(',')
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
