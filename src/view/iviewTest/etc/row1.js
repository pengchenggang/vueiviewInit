export default {
  rows: [
    {
      cols: [
        {
          headerTitle: '标题名称1:',
          type: 'checkbox',
          arr: getHunyinxianzhuang()
        },// 第一列
      ],// 第一行
    },
    {
      cols: [
        {
          headerTitle: '标题名称2',
          hideContent: true,
          flex01: true
        },
        {
          span: true,
          rows: [
            {
              cols: [
                {
                  headerTitle: '右侧框内容',
                  type: 'checkbox',
                  arr: [{ code: '1', codeName: '无变化' }],
                  hideHeader: true
                }
              ],
            },
            {
              cols: [
                {
                  span: true,
                  rows: [
                    {
                      cols: [
                        {
                          headerTitle: '变化 ',
                          headerWidth: '100px',
                          colWidth: '10%', // 单框微调右侧挤一些
                          flex: 'auto',
                          type: 'checkbox',
                          arr: getHunyinxianzhuang()
                        },
                        {
                          span: true,
                          rows: [
                            {
                              direction: 'column',
                              cols: [
                                {
                                  headerTitle: '标题名称3',
                                  type: 'input',
                                },
                              ],
                            },
                          ]
                        },
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ],
    },


  ]
}

function getHunyinxianzhuang () {
  return [
    { code: "选项1", codeName: "选项1" },
    { code: "选项2", codeName: "选项2" },
    { code: "选项3", codeName: "选项3" },
    { code: "选项4", codeName: "选项4" },
  ]
}
