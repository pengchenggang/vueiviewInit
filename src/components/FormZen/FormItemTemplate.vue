<template>
  <div class="FormItemTemplate">
    <div v-if="!hideHeader"
         :style="{ width: headerWidth}"
         class="FormItemHeader">
      {{ this.headerTitle }}
    </div>
    <div v-if="!hideContent"
         class="FormItemContent">

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

      <slot v-if="type==='slot'"
            :name="slotName"></slot>
      <!-- {{ this.itemContent }} -->
    </div>
  </div>
</template>

<script>
import dateSingle from './components/dateSingle'
export default {
  name: 'FormItemTemplate',
  props: {
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
    dateSingle
  },
  data () {
    return {
      innerValue: '',
      innerValueArr: []
    }
  },
  watch: {},
  computed: {},
  methods: {},
  filters: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
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
  flex-wrap: wrap;
  // align-items: center;
  // border: 3px solid red;
  // background-color: bisque;
}
</style>
