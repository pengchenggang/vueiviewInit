export default {
  rows: [
    {
      cols: [
        {
          headerTitle: 'key1:',
          key: 'key1',
          type: 'input'
        },
        {
          headerTitle: 'key2:',
          key: 'key2',
          type: 'date'
        }
      ]
    },
    {
      cols: [
        {
          headerTitle: 'key3:',
          key: 'key3',
          type: 'slot',
          slot: 'key3',
        },
        {
          headerTitle: 'key4:',
          key: 'key4',
          type: 'checkbox',
          arr: getCheckboxArr()
        }
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