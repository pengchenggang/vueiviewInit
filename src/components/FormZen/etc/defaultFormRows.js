export default {
  global: {
    headerWidth: '150px', // 默认左侧宽度
    minHeight: '60px' // 最小高度
  },
  rows: [
    {
      cols: [
        {
          headerTitle: '姓名1543534534:',
          type: 'date', // input 下拉列表 slot radio checkbox date
          arr: getRadioArr(),
          slot: 'name'
        },// 第一列
      ],// 第一行
    }
  ]
}

function getRadioArr () {
  return [
    { code: "6201", codeName: "苹果笔记本" },
    { code: "6202", codeName: "联想笔记本" }
  ]
}

// function getRows () {
//   return [getRow, getRow]
// }
// function getRow () {
//   return [getCol, getCol]
// }
// function getCol () {
//   return {
//     headerTitle: 'headerTitle',
//     itemContent: 'itemContent'
//   }
// }
