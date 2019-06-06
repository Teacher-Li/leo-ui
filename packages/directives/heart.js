window.requestAnimationFrame = (() =>
  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (callback) { setTimeout(callback, 1000/60) }
)();

class Heart {
  constructor (data, x, y) {
    this.x = x;
    this.y = y;

    this.show(data);
  }

  show (data) {
    let scale = 1;
    let alpha = 1;
    let div = document.createElement('div');

    div.className = data.__className;
    div.style.background = data.__custom
      ? ''
      : (data.__color || ('#' + (~~(Math.random() * (1<<24))).toString(16)));

    document.body.appendChild(div);

    const animation = () => {
      if (alpha <= 0) {
        document.body.removeChild(div);
        return;
      }

      this.y --;
      scale += 0.004;
      alpha -= 0.013;

      div.style.top        = `${ this.y }px`;
      div.style.left       = `${ this.x }px`;
      div.style.opacity    = `${ alpha }`;
      div.style.transform  = `scale(${ scale }) rotate(45deg)`;

      requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }
}

export default {
  inserted (el, { value }, vnode) {
    let self = vnode.context;

    el.__color     = '';
    el.__custom    = false;
    el.__className = `${ self.$LEO.prefix }-heart`;
    if (typeof value !== 'undefined') {
      el.__color = value['color'];
      if (value['custom']) {
        el.__custom = true;
        el.__className += ` ${ value['custom'] }`;
      }
    }

    const clickHandler = e => {
      new Heart(el,e.clientX - 5, e.clientY - 5);
    };

    el.__click = clickHandler;
    el.addEventListener('click', clickHandler);
  },
  update (el, { value }, vnode) {
    let self = vnode.context;

    el.__color     = '';
    el.__custom    = false;
    el.__className = `${ self.$LEO.prefix }-heart`;
    if (typeof value !== 'undefined') {
      el.__color = value['color'];
      if (value['custom']) {
        el.__custom = true;
        el.__className += ` ${ value['custom'] }`;
      }
    }
  },
  unbind (el, {}, vnode) {
    let self  = vnode.context;
    let nodes = document.querySelectorAll(`div.${ self.$LEO.prefix }-heart`);
    nodes.forEach(node => { document.body.removeChild(node) });

    el.removeEventListener('click', el.__click);
    delete el.__click;
    delete el.__color;
    delete el.__custom;
    delete el.__className;
  }
}