export default {
  rows: [
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'input'
        },
        {
          headerTitle: '标题名称:',
          type: 'date'
        }
      ]
    },
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'date'
        },
        {
          headerTitle: '标题名称:',
          type: 'checkbox',
          arr: getCheckboxArr()
        }
      ]
    },
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'input'
        },
        {
          headerTitle: '标题名称:',
          type: 'checkbox',
          arr: getCheckboxArr(5)
        }
      ]
    }
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