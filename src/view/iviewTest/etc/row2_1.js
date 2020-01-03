const tData = {
  d1: {
    headerTitle: '标题<br>文字:',
    key: 'key1',
    type: 'input',
    required: true,
    max: true
  },
  d2: {
    headerTitle: 'key2:',
    key: 'key2',
    type: 'date',
    required: true,
    max: true
  },
  d3: {
    headerTitle: 'key3:',
    key: 'key3',
    type: 'slot',
    slot: 'key3',
    required: true,
    max: true
  },
  d4: {
    headerTitle: 'key4:',
    key: 'key4',
    required: true,
    type: 'checkbox',
    // max: true,
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
  ]
}

function getCheckboxArr (n = 2) {
  let out = []
  for (let i = 0; i < n; i++) {
    out.push({
      code: 'N' + i,
      codeName: '勾选文字内容' + i
    })
  }
  return out
}