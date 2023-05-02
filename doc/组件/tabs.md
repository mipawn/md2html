# Tabs 标签页
选项卡组件, 不支持v-model

## api

### props

|  参数         | 说明                          |  类型           |  默认值   |
|  ----        | ----                          |  ----          |  ----    |
|  tabs        | 选项卡数据                      |  Array<Tab>    |  []      |
|  active      | 当前选中的选项卡，非响应式         |  string        |  ''      |
|  onChange    | 选项卡切换的会调                 |  (tabValue, index) => never        |        |
|  onChange    | 选项卡切换的会调                 |  (tabValue, index) => never        |  ''      |
|  style       | 根元素 的style                  |  Record<string, any>       |        |
|  className   | 根元素 的className              |  object \| array \| string       |        |

### methods
* switchTab - 切换tab，参数为value
