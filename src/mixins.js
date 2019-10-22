export default {
  data () {
    return {
      customOptions: [
        { label: 'primary', value: 'primary' },
        { label: 'info', value: 'info' },
        { label: 'success', value: 'success' },
        { label: 'warning', value: 'warning' },
        { label: 'error', value: 'error' },
        { label: 'default', value: '' }
      ],
      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ],
      propsThead: [
        { label: '属性', value: 'label' },
        { label: '类型', value: 'type' },
        { label: '说明', value: 'introduce' },
        { label: '默认值', value: 'default' }
      ],
      eventsThead: [
        { label: '事件名称', value: 'name' },
        { label: '说明', value: 'introduce' },
        { label: '返回值', value: 'return' }
      ],
      slotThead: [
        { label: '名称', value: 'name' },
        { label: '说明', value: 'introduce' }
      ],
      modifiersThead: [
        { label: '修饰符', value: 'name' },
        { label: '说明', value: 'introduce' }
      ],
      valueThead: [
        { label: '绑定值', value: 'name' },
        { label: '类型', value: 'type' },
        { label: '说明', value: 'introduce' },
        { label: '默认值', value: 'default' }
      ],
      optionsThead: [
        { label: '名称', value: 'name' },
        { label: '类型', value: 'type' },
        { label: '说明', value: 'introduce' },
        { label: '默认值', value: 'default' }
      ],
      methodsThead: [
        { label: '名称', value: 'name' },
        { label: '参数', value: 'parameter' },
        { label: '说明', value: 'introduce' }
      ]
    }
  },
  methods: {
    copy (e, id) {
      let tag = e.target;
      if (!tag.className) {
        document.querySelector('#' + id).select();
        document.execCommand("Copy");

        tag.innerHTML = 'Copied';
        tag.className = 'success';
        setTimeout(() => {
          tag.className = '';
          tag.innerHTML = 'Copy';
        }, 5000);
      }
    }
  }
}