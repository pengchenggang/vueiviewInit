export default {
  rows: [
    {
      cols: [
        {
          headerTitle: '婚姻现状:',
          type: 'checkbox',
          arr: getHunyinxianzhuang()
        },// 第一列
      ],// 第一行
    },
    {
      cols: [
        {
          headerTitle: '婚姻变化情况',
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
                          headerTitle: '有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 有变化 ',
                          headerWidth: '100px',
                          colWidth: '10%',
                          flex: 'auto',
                          type: 'checkbox',
                          arr: getHunyinxianzhuang()
                        },
                        {
                          span: true,
                          rows: [
                            {
                              cols: [
                                {
                                  headerTitle: '变化时间',
                                  headerWidth: '100%',
                                  hideContent: true
                                },
                              ],
                            },
                            {
                              flex: '1 1',
                              cols: [
                                {
                                  headerTitle: '变化时间bottom',
                                  hideHeader: true,
                                  type: 'date',
                                }
                              ]
                            }
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
    { code: "未婚", codeName: "未婚" },
    { code: "已婚", codeName: "已婚" },
    { code: "离异", codeName: "离异" },
    { code: "丧偶", codeName: "丧偶" },
  ]
}



// {
      //   span: true,
      //   rows: [
      //     [
      //       {
      //         headerTitle: '姓名111:',
      //         type: 'input'
      //       },// 第一列
      //       {
      //         headerTitle: '姓名2:',
      //         type: 'input'
      //       },// 第一列
      //     ]
      //   ]
      // },

      // {
      //   span: true,
      //   arr: []
      // },
      // {
      //   span: true,
      //   arr: []
      // },