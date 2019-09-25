export default {
  inserted (el, binding, vnode) {
    let length = binding.value['length'];
    let html   = el.innerHTML.replace(/(^\s*)|(\s*$)/g, '');
    let name   = binding.value['name'] || 'tooltip_' + ~~ (Math.random() * 100);

    el.setAttribute('data-name', name);
    if (html.length > length) {
      el.innerHTML = html.slice(0, length) + '...';

      if (binding.modifiers['original']) {
        el.setAttribute('title', html);
      } else {
        let self  = vnode.context;
        let div   = document.createElement('div');
        let theme = binding.value['theme'] || 'light';

        div.setAttribute('tooltip-name', name);

        div.innerHTML = html;
        div.className = `${ self.$prefix }-tooltip` + (binding.modifiers['small'] ? ' small' : '');
        div.classList.add(theme);
        document.body.appendChild(div);

        const mouseoverHandler = e => {
          div.classList.add('visible');
          div.style.top  = `${ e.clientY }px`;
          div.style.left = `${ e.clientX }px`;
          if (binding.value.width) {
            div.style.maxWidth = Math.max(binding.value.width, 120) + 'px';
          }
        };
        const mouseoutHandler = () => {
          div.classList.remove('visible')
        };

        el.__mouseout  = mouseoutHandler;
        el.__mouseover = mouseoverHandler;
        el.addEventListener('mouseout', mouseoutHandler);
        el.addEventListener('mouseover', mouseoverHandler);
      }
    }
  },
  update (el, binding, vnode) {
    let length = binding.value['length'];

    if (binding.modifiers['original']) {
      el.innerHTML = el.getAttribute('title').slice(0, length) + '...';
    } else {
      let self      = vnode.context;
      let theme     = binding.value['theme'];
      let oldTheme  = binding.oldValue['theme'];
      let oldLength = binding.oldValue['length'];
      let name      = el.getAttribute('data-name');

      let node;
      let nodes = document.querySelectorAll(`div.${ self.$prefix }-tooltip`);

      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].getAttribute('tooltip-name') === name) {
          node = nodes[i];
          break;
        }
      }

      let html = node.innerHTML.replace(/(^\s*)|(\s*$)/g, '');

      if (length !== oldLength) {
        el.innerHTML = html.slice(0, length) + (html.length > length ? '...' : '');
      }
      if (theme !== oldTheme) {
        node.classList.remove(oldTheme || 'light');
        node.classList.add(theme);
      }
    }
  },
  unbind (el, {}, vnode) {
    let self  = vnode.context;
    let nodes = document.querySelectorAll(`div.${ self.$prefix }-tooltip`);
    nodes.forEach(node => { document.body.removeChild(node) });

    el.removeEventListener('mouseout', el.__mouseout);
    el.removeEventListener('mouseover', el.__mouseover);
    delete el.__mouseout;
    delete el.__mouseover;
  }
}