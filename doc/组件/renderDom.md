# RenderDom
RenderDom 是执行自定义render 的组件，主要是为了在template中使用

## 基本用法
```vue
<template>
  <RenderDom :render="render" />
</template>

<script setup>
const render = () => {
  return (
    <span>text</span>
  )
}
</script>

```


## api

### props
* render - render 函数，返回jsx