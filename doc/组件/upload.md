# upload 文件上传
upload 可单独使用的文件上传组件，支持v-model

## api

### props
|  参数         | 说明                          |  类型           |  默认值   |
|  ----        | ----                          |  ----          |  ----    |
|  value       | 需要上传的文件列表               |  Array<File>   |  []      |
|  disabled    | 上传按钮的disable               |  boolean       |  false   |
|  uploadType  | 上传按钮的type                  |  string        |  false   |
|  uploadText  | 上传按钮的文案                   |  string        |  上传文件  |
|  multiple    | 是否上传多个                     |  boolean       | false    |
|  onChange    | 文件上传完毕回调函数               |  (fileData) => never      |     |
|  onFileClick | 文件上传列表click回调             |  (File) => never      |     |
|  onFileClick | 文件上传列表click回调             |  (File) => never      |     |
|  canPreview  | 文件上传列表click能否预览          |  boolean      |   true  |
|  canDelete   | 文件上传列表删除                   |  boolean      |   true  |
|  canDelete   | 文件上传列表删除                   |  boolean      |   true  |
|  fn          | 自定义文件上传方法                 |  (uploadParam) => never      |   true  |
|  showFileList| 自定义文件预览列表                 |  (uploadParam) => never      |   true  |
|  prefixIconShow| 是否展示上传按钮前置icon         |  boolean      |   true  |
