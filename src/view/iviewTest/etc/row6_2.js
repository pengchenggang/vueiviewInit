export default {
  rows: [
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'checkbox',
          // disabled: true,
          arr: getCheckboxArr(20)
        },
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
          type: 'date'
        }
      ]
    },
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'checkbox',
          arr: getCheckboxArr(2)
        },
        {
          headerTitle: '标题名称:',
          type: 'input'
        }
      ]
    },
    {
      cols: [
        {
          headerTitle: '标题名称:',
          type: 'checkbox',
          arr: getCheckboxArr(20)
        },
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