export default {
  rows: [
    {
      cols: [
        getV('称谓', '妻子'),
        {
          span: true,
          rows: [
            {
              cols: [
                getV('姓名', '赵晓红'),
                getV('是否为共同生活子女', '本人配偶'),
                getV2('工作学习', 'kjkfdsl'),
                getV2('工作学习2', 'kjkfdsl'),
                {
                  span: true,
                  flex: '1.5 1',
                  rows: [
                    {
                      direction: 'column',
                      cols: [
                        {
                          headerTitle: '432432',
                          type: 'input'
                        }
                      ]
                    },
                    {
                      cols: [
                        {
                          headerTitle: '432432',
                          hideHeader: true,
                          type: 'input'
                        }
                      ]
                    },
                    {
                      cols: [
                        {
                          headerTitle: '432432',
                          type: 'checkbox',
                          arr: getCheckboxArr(10)
                        }
                      ]
                    },
                    {
                      cols: [
                        {
                          headerTitle: '432432',
                          type: 'input'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            getRow('证件名称', '居民身份证'),
            getRow('证件号码', '1234856789'),


          ]
        }
      ]
    }
  ]
}
function getRow (title, contentText) {
  return {
    // direction: 'column',

    cols: [
      {
        headerTitle: title, // '称谓',
        type: 'text',
        itemContent: contentText, //'妻子',
        disabled: true,
        // flex01: true,
        headerWidth: '100px',

      }
    ]
  }
}

function getV2 (title, contentText) {
  return {
    span: true,
    // flex01: true,
    // colWidth: '100px',
    rows: [
      {
        direction: 'column',
        cols: [
          {
            headerTitle: title, // '称谓',
            // headerWidth: '100px !important',
            // flex: 'auto',
            type: 'text',
            itemContent: contentText, //'妻子',
            // disabled: true,
          }
        ]
      }
    ]
  }
}


function getV (title, contentText) {
  return {
    span: true,
    flex01: true,
    colWidth: '100px',
    rows: [
      {
        direction: 'column',
        cols: [
          {
            headerTitle: title, // '称谓',
            headerWidth: '100px !important',
            flex: 'auto',
            type: 'text',
            itemContent: contentText, //'妻子',
            disabled: true,
          }
        ]
      }
    ]
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