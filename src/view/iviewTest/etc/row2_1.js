// import { api } from '@/api/data'
const tData = {
  d1: {
    headerTitle: '标题Input:',
    key: 'key1',
    type: 'input',
    required: true,
    max: true
  },
  d2: {
    headerTitle: '标题Date:',
    key: 'key2',
    type: 'date',
    // required: true,
    max: true
  },
  d3: {
    headerTitle: '标题slot:',
    key: 'key3',
    type: 'slot',
    slot: 'key3',
    required: true,
    max: true
  },
  d4: {
    headerTitle: '标题checkbox:',
    key: 'key4',
    required: true,
    type: 'checkbox',
    typeFlag: 'select',
    // max: true,
    arr: getCheckboxArr()
  },
  d5: {
    headerTitle: '标题select:',
    key: 'key5',
    required: true,
    type: 'select',
    typeFlag: 'select',
    max: true,
    arr: getCheckboxArr()
  }

}
export default {
  rows: [
    {
      cols: [
        tData.d1,
        tData.d2
      ]
    },
    {
      cols: [
        tData.d3,
        tData.d4
      ]
    },
    {
      cols: [
        tData.d5,
      ]
    },
  ]
}

function getCheckboxArr (n = 2) {
  // api('http://localhost:3000/select').then(res => {
  //   console.info('res', res)
  //   return res.data
  // })
  let out = []
  for (let i = 0; i < n; i++) {
    out.push({
      code: 'N' + i,
      codeName: '勾选文字内容' + i
    })
  }
  return out
}