<template>
  <div>
    <treeselect v-model="value"
                :multiple="true"
                :load-options="loadOptions"
                :options="options" />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'TreeselectVue',
  mixins: [],
  props: {},
  components: {
    Treeselect
  },
  data () {
    return {
      // define the default value
      value: null,
      // define options
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        }],
      }, {
        id: 'b',
        label: 'b',
        children: null
      }, {
        id: 'c',
        label: 'c',
      }],
    }
  },
  watch: {},
  computed: {},
  methods: {
    loadOptions ({ action, parentNode, callback, instanceId }) {
      // console.info('{ action, parentNode, callback, instanceId }')
      // console.info(action, parentNode, callback, instanceId)
      console.info('action', action)
      console.info('parentNode', parentNode)
      console.info('callback', callback)
      console.info('instanceId', instanceId)
      if (action === 'LOAD_CHILDREN_OPTIONS') {
        parentNode.children = [{
          id: '异步处理' + Math.random(),
          label: '异步处理' + Math.random(),
          children: null
        },
        {
          id: '异步处理' + Math.random(),
          label: '异步处理' + Math.random(),
          children: null
        }]
        callback()
      }
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
</style>
