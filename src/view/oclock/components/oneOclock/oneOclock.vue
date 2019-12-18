<template>
  <div class="oneOclock">
    <div class="biaopan">
      <div class="fenzhen"
           :style="{transform: 'rotate('+innerFenzhen+'deg)','WebkitTransition':'0.5s'}">

      </div>
      <div class="shizhen"
           :style="{transform: 'rotate('+innerShizhen+'deg)','WebkitTransition':'0.5s'}"></div>
    </div>
    <div class="dangqianshijian">
      当前时间：______________________
    </div>
    <div class="dangqianshijian">
      半小时后：______________________
    </div>
  </div>
</template>

<script>
export default {
  name: 'oneOclock',
  props: {
    shizhen: {
      type: Number,
      default: 0
    },
    fenzhen: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data () {
    return {
      innerShizhen: 0,
      innerFenzhen: 0
    }
  },
  computed: {},
  methods: {
    init () {
      let _shizhen = 0
      let _fenzhen = 0
      if (this.shizhen === 0) {
        _shizhen = this.getRaHour()
      } else {
        _shizhen = this.shizhen
      }
      if (this.fenzhen === 0) {
        _fenzhen = this.getRaMinute()
      } else {
        _fenzhen = this.fenzhen
      }
      this.innerShizhen = this.getInnerShizhen(_shizhen, _fenzhen)
      this.innerFenzhen = this.getInnerFenzhen(_fenzhen)
    },
    getRaHour () {
      return Math.floor(Math.random() * 12)
    },
    getRaMinute () {
      const retArr = [0, 5, 10, 15, 20, 25, 30,
        35, 40, 45, 50, 55]
      const _num = Math.floor(Math.random() * 12)
      return retArr[_num]
    },
    getInnerShizhen (shizhen, fenzhen) {
      const onekedu = 360 / 60
      return onekedu * 5 * shizhen + fenzhen / (60 / 5) * onekedu
    },
    getInnerFenzhen (fenzhen) {
      const onekedu = 360 / 60
      return onekedu * fenzhen
    }
  },
  created () { },
  activated () { },
  mounted () {
    this.init()
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
.oneOclock {
  float: left;
  margin: 10px;
  .biaopan {
    position: relative;
    width: 300px;
    height: 300px;
    background-image: url(images/biaopan.jpg);
    .fenzhen {
      position: absolute;
      width: 300px;
      height: 300px;
      background-image: url(images/fenzhen.png);
      -webkit-transition: 0.5s;
    }
    .shizhen {
      position: absolute;
      width: 300px;
      height: 300px;
      background-image: url(images/shizhen.png);
    }
  }
  .dangqianshijian {
    padding-top: 50px;
    // height: 100px;
    // line-height: 100px;
    text-align: center;
  }
}
</style>
