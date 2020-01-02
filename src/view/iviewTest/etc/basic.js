
export default {
  global: {
    headerWidth: '80px', // 默认左侧宽度
    minHeight: '60px' // 最小高度
  },
  rows: [
    getRow1(),
    getRow2(),
    getRow3(),
    getRow3(),
    getRow4()
  ]
}
function getRow4 () {
  return {
    cols: [
      getR4C1()
    ]
  }
}
function getR4C1 () {
  return {
    headerTitle: 'kkk',
    type: 'input'
  }
}
function getRow3 () {
  return {
    cols: [
      getR3C1()
    ]
  }
}
function getR3C1 () {
  return {
    headerTitle: '标题名称',
    type: 'radioZen',
    arr: getCheckboxArr(32)
  }
}
function getRow2 () {
  return {
    cols: [
      getR2C1()
    ]
  }
}
function getR2C1 () {
  return {
    headerTitle: '标题名称',
    type: 'slot',
    slot: 'slotName1',
    arr: getCheckboxArr(2)
  }
}
function getRow1 () {
  return {
    cols: [
      getR1C1(),
      getR1C2(),
      getR1C3()
    ]
  }
}

function getR1C1 () {
  return {
    span: true,
    flex: '1.5 1',
    rows: [
      getR1C1_Row1(),
      getR1C1_Row2()
    ]
  }
}
function getR1C1_Row2 () {
  return {
    direction: 'column',
    cols: [
      getR1C1_R2C1()
    ]
  }
}
function getR1C1_R2C1 () {
  return {
    headerTitle: '标题名称',
    type: 'input'
  }
}
function getR1C1_Row1 () {
  return {
    cols: [
      getR1C1_R1C1(),
      getR1C1_R1C2(),
      getR1C1_R1C3()
    ]
  }
}
function getR1C1_R1C3 () {
  return {
    headerTitle: '标题名称',
    flex01: true,
    hideContent: true
  }
}
function getR1C1_R1C2 () {
  return {
    headerTitle: '标题名称',
    type: 'input'
  }
}
function getR1C1_R1C1 () {
  return {
    headerTitle: '标题名称',
    type: 'radioZen',
    arr: getCheckboxArr(2)
  }
}
function getR1C2 () {
  return {
    span: true,
    rows: [
      getR1C2_Row1(),
      getR1C2_Row2()
    ]
  }
}
function getR1C2_Row2 () {
  return {
    direction: 'column',
    cols: [
      getR1C2_R2C1()
    ]
  }
}
function getR1C2_R2C1 () {
  return {
    headerTitle: '标题名称',
    type: 'input'
  }
}
function getR1C2_Row1 () {
  return {
    cols: [
      getR1C2_R1C1(),
      getR1C2_R1C2()
    ]
  }
}
function getR1C2_R1C2 () {
  return {
    headerTitle: '标题名称',
    type: 'input'
  }
}
function getR1C2_R1C1 () {
  return {
    hideHeader: true,
    type: 'checkbox',
    arr: getCheckboxArr(2)
  }
}
function getR1C3 () {
  return {
    span: true,
    rows: [
      getR1C3_Row1(),
      getR1C3_Row2()
    ]
  }
}
function getR1C3_Row2 () {
  return {
    direction: 'column',
    cols: [
      getR1C3_R2C1()
    ]
  }
}
function getR1C3_R2C1 () {
  return {
    headerTitle: '标题名称',
    type: 'input',
  }
}
function getR1C3_Row1 () {
  return {
    cols: [
      getR1C3_R1C1()
    ]
  }
}
function getR1C3_R1C1 () {
  return {
    headerTitle: '标题名称',
    type: 'checkbox',
    arr: getCheckboxArr(2)
  }
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