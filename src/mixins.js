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
    copy (e) {
      let tag = e.target;
      if (!tag.className) {
        tag.nextSibling.select();
        document.execCommand("Copy");

        tag.innerHTML = 'Copied';
        tag.className = 'success';
        setTimeout(() => {
          tag.className = '';
          tag.innerHTML = 'Copy';
        }, 5000);
      }
    },
    HLHTML (value) {
      return value
      .replace(/</g, '&lt;')
      .replace(/&lt;[^>]*>/g, val => `<em>${ val }</em>`)
      .replace(
          /\s[^=<>"]+>/g,
          val => `${ val.charAt(0) }<em error>${ val.slice(1, -1) }</em>>`
      )
      .replace(/"[^"]*"/g, val => `<em success>${ val }</em>`)
      .replace(
          /\s[^\s]+=/g,
          val => `${ val.charAt(0) }<em error>${ val.slice(1, -1) }</em>=`
      );
    },
    HTJAVA (value) {
      const val = value
      .replace(
          /if|else|var|let|const|this|true|false|return/g,
          val => `<em error>${ val }</em>`
      )
      .replace(
          /\s\d+/g,
          val => `${ val.charAt(0) }<em success>${ val.slice(1) }</em>`
      )
      .replace(/export default/g, val => `<em warning>${ val }</em>`)
      .replace(
          /\s[a-zA-Z][\w]*\s\(/g,
          val => `${ val.charAt(0) }<em warning>${ val.slice(1, -2) }</em> (`
      );

      return `<em>${ val }</em>`;
    }
  }
}