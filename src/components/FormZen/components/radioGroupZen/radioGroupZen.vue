<!--
* @description radioGroupZen
!-->
<template>
  <div :class="classes"
       class="positionClass">
    <RadioGroup class="fake-checkbox-other"
                style="vertical-align: top;"
                v-model="innerValue"
                @on-change="onChangeHandle">
      <!--v-show="!(disabled || item.disabled === true)"-->

      <Radio :disabled="disabled || item.disabled === true"
             v-for="(item,index) in innerDataArr"
             :title="getTitle(item.codeName)"
             :key="index"
             :label="item.code"
             style="vertical-align:top;"
             :style="calcWidth(item,index)">{{getMaxLengthStr(item.codeName)}}</Radio>
    </RadioGroup>
    <!--<CheckboxGroup v-model="innerValueArr" @on-change="onChangeHandle" style="vertical-align: top;">-->
    <!--<Checkbox-->
    <!--:disabled="disabled"-->
    <!--v-for="(item,index) in innerDataArr"-->
    <!--:key="index"-->
    <!--:label="item.code"-->
    <!--style="vertical-align:top;"-->
    <!--:style="calcWidth(item,index)"-->
    <!--&gt;{{item.codeName}}</Checkbox>-->
    <!--</CheckboxGroup>-->

    <!--<RadioGroup v-model="innerValue"-->
    <!--@on-change="radioGroupOnChangeHandle">-->
    <!--<Radio v-for="(item,index) in innerDataArr" :key="index" :label="item.code">{{ item.codeName }}</Radio>-->
    <!--</RadioGroup>-->
  </div>
</template>

<script>
export default {
  name: 'radioGroupZen',
  components: {},
  props: {
    codeAnotherName: {
      type: String, // 1 2
      default: ''
    },
    maxLength: {
      type: Number,
      default: 0
    },
    marginRight: {
      type: String,
      default: '10px'
    },
    letterLenBlock: {
      type: String,
      default: '15'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    itemWidth: {
      type: String,
      default: 'inherit'
    },
    dataArr: {
      type: Array,
      default () {
        return []
      }
    },
    displayBlock: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    typeFlag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      previousValue: '',
      innerDataArr: [],
      innerValue: this.value,
      innerValueArr: [],
      liveTogeArr: [{ code: '01', codeName: '是' }, { code: '02', codeName: '否' }],
      booleanArr: [{ code: '1', codeName: '是' }, { code: '0', codeName: '否' }]
    }
  },
  watch: {
    value (val) {
      this.setDefaultValue(val)
    },
    dataArr () {
      this.innerDataArr = this.dataArr
    }
  },
  computed: {
    classes () {
      return [
        {
          'displayBlock': this.displayBlock
        }
      ]
    }
  },
  methods: {
    getTitle (str) {
      if (this.maxLength === 0 || (this.maxLength > str.length)) {
        return ''
      } else {
        return str
      }
    },
    getMaxLengthStr (str) {
      if (this.maxLength === 0 || (this.maxLength > str.length)) {
        return str
      } else {
        return str.substring(0, this.maxLength) + '...'
      }
    },
    calcWidth (val, index) {
      const len = val.codeName.length
      let ret = {}
      if (len < Number(this.letterLenBlock)) {
        ret = { width: this.itemWidth }
      } else {
        ret = { display: 'block' }
      }
      if (index < (this.innerDataArr.length - 1)) {
        ret['margin-right'] = this.marginRight
      } else {
        ret['margin-right'] = '0px'
      }
      return ret
    },
    onChangeHandle (value) {
      // const len = arr.length
      // if (len === 0) {
      //   this.previousValue = ''
      // }
      //
      // if (len === 1) {
      //   this.previousValue = arr[0]
      // }
      //
      // if (len === 2) {
      //   let temp = ''
      //   if (arr[0] === this.previousValue) {
      //     temp = arr[1]
      //   }
      //
      //   if (arr[1] === this.previousValue) {
      //     temp = arr[0]
      //   }
      //
      //   this.previousValue = temp
      //
      //   // this.innerValueArr = []
      //   // this.innerValue = ''
      //   this.innerValue = this.previousValue
      // }
      this.$emit('input', value)
      this.$emit('on-change', this.getObjectByCode(value))
    },
    getObjectByCode (code) {
      let ret = {}
      this.innerDataArr.forEach(item => {
        if (item.code === code) {
          ret = item
        }
      })
      return ret
    },
    init () {
      if (this.dataArr.length === 0) {
        if (this.typeFlag) {
          if (this.typeFlag === 'boolean') {
            this.innerDataArr = this.booleanArr
          } else if (this.typeFlag === 'liveToge') {
            this.innerDataArr = this.liveTogeArr
          } else {
            this.getSysCode(this.typeFlag).then(res => {
              this.innerDataArr = res.data
              // this.setDefaultValue()
            })
          }
        }
      } else {
        this.innerDataArr = this.dataArr
        // this.setDefaultValue()
      }
    },
    setDefaultValue (val) {
      this.previousValue = val
      this.innerValue = val
      // this.innerValueArr = [this.previousValue]
      // if (this.typeFlag === 'sex') {
      // }
    },
    getSysCode (typeFlag) {
      // remark 1是不带本人2是不带本人和子女配偶  3是只有子女
      return this.$api('API/sysCode/getListSysCode', {
        typeFlag: typeFlag,
        codeAnotherName: this.codeAnotherName
      })
    }
  },
  created () { },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
.positionClass {
  .fake-checkbox-other {
    .ivu-radio-checked {
      &.ivu-radio-disabled {
        .ivu-radio-inner {
          background-color: #ccc !important;
        }
      }
    }
  }
  .fake-checkbox {
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*!*white-space: nowrap;*!*/
    /*cursor: pointer;*/
    /*line-height: 1;*/
    /*position: relative;*/
    .ivu-radio-wrapper {
      padding-left: 0.1rem;
      margin-bottom: 0.05rem;
      vertical-align: middle;
      .ivu-radio {
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        line-height: 1;
        position: relative;
        .ivu-radio-inner {
          display: inline-block;
          width: 14px;
          height: 14px;
          position: relative;
          top: 0;
          left: 0;
          border: 1px solid #dcdee2;
          border-radius: 2px;
          background-color: #fff;
          transition: border-color 0.2s ease-in-out,
            background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          &::after {
            content: "";
            display: table;
            width: 4px !important;
            height: 8px !important;
            position: absolute;
            top: 1px;
            left: 4px;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(0);
            transition: all 0.2s ease-in-out;
          }
        }
        .ivu-radio-input {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          cursor: pointer;
          opacity: 0;
        }
        &.ivu-radio-checked {
          .ivu-radio-inner {
            border-color: #2d8cf0;
            background-color: #2d8cf0;
            &::after {
              transform: rotate(45deg) scale(1);
            }
          }
        }
        &.ivu-radio-disabled {
          cursor: not-allowed;
          .ivu-radio-inner {
            border-color: #bebebe;
            background-color: #d7d7d7;
            &::after {
              border-color: #fff;
            }
          }
          .ivu-radio-input {
            cursor: not-allowed;
          }
        }
      }
    }
  }
  /*  !* add for the global title checkbox fake */
  .fake-checkbox-other {
    .ivu-radio-inner {
      display: inline-block;
      width: 14px;
      height: 14px;
      position: relative;
      top: 0;
      left: 0;
      border: 1px solid #dcdee2;
      border-radius: 2px;

      /*.ivu-radio-checked {*/
      /*.ivu-radio-inner {*/
      /*border-color: #2d8cf0;*/
      /*background-color: #2d8cf0;*/
      /*&::after {*/
      /*transform: rotate(45deg) scale(1);*/
      /*}*/
      /*}*/
      /*}*/
      /*.ivu-radio-disabled {*/
      /*cursor: not-allowed;*/
      /*.ivu-radio-inner {*/
      /*border-color: #bebebe;*/
      /*background-color: #d7d7d7;*/
      /*&::after {*/
      /*border-color: #fff;*/
      /*}*/
      /*}*/
      /*.ivu-radio-input {*/
      /*cursor: not-allowed;*/
      /*}*/
      /*}*/

      &::after {
        content: "";
        display: table;
        width: 4px;
        height: 8px;
        position: absolute;
        top: 1px;
        left: 4px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1) !important;
      }
      .ivu-radio-checked.ivu-radio-disabled {
        content: "";
        display: table;
        width: 4px;
        height: 8px;
        position: absolute;
        top: 1px;
        left: 4px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1) !important;
      }
    }

    .ivu-radio-checked .ivu-radio-inner {
      background: #2d8cf0;
    }
  }
}
.displayBlock .ivu-radio-group-item {
  display: block;
  line-height: 25px;
}
</style>
