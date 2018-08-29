<template>
  <div class="sider">
    <img src="https://file.iviewui.com/asd/asd-juejin2.png" alt="">
    <div class="navigate">
      <router-link
        class="navigate-item"
        active-class="active"
        v-for="item in list"
        :key="item.key"
        :to="item.url"
        tag="div">
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          { key: 'button', label: 'Button 按钮', url: '/button' },
          { key: 'form', label: 'Form 表单', url: '/form' },
          { key: 'table', label: 'Table 表格', url: '/table' }
        ]
      }
    }
  }
</script>
