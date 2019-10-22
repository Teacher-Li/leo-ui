<template>
  <div class="sider">
    <img src="../assets/leo-ui.jpg" alt="leo-ui">
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
    name: 'Sider',
    data () {
      return {
        list: [
          { key: 'Button', label: 'Button 按钮', url: '/button' },
          { key: 'Input', label: 'Input 输入框', url: '/input' },
          { key: 'Select', label: 'Select 选择器', url: '/select' },
          { key: 'Upload', label: 'Upload 上传', url: '/upload' },
          { key: 'Edit', label: 'Edit 编辑', url: '/edit' },
          { key: 'Form', label: 'Form 表单', url: '/form' },
          { key: 'Table', label: 'Table 表格', url: '/table' },
          { key: 'Page', label: 'Page 分页', url: '/page' },
          { key: 'Load', label: 'Load 加载', url: '/load' },
          { key: 'Carousels', label: 'Carousels 传送带', url: '/carousels' },
          { key: 'Masonry', label: 'Masonry 瀑布流', url: '/masonry' },
          { key: 'Heart', label: 'Heart 比心', url: '/heart' },
          { key: 'Tooltip', label: 'Tooltip 文字提示', url: '/tooltip' },
          { key: 'DragSelect', label: 'DragSelect 框选', url: '/drag-select' },
          { key: 'Barrage', label: 'Barrage 弹幕', url: '/barrage' }
        ]
      }
    },
    watch: {
      $route (newValue) {
        const route = this.list.find(item => item.key === newValue.name);

        document.title = route
          ? `leo-ui${ route.label.replace(/\w/g, '') }`
          : '403'
      }
    }
  }
</script>