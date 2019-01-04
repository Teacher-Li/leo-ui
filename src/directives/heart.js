export default {
  inserted (el, { value }, vnode) {
    let self = vnode.context;

    el.__color     = '';
    el.__custom    = false;
    el.__className = self.$LEO.prefix + 'heart';
    if (typeof value !== 'undefined') {
      el.__color = value['color'];
      if (value['custom']) {
        el.__custom = true;
        el.__className += ' ' + value['custom']
      }
    }

    function Heart (left, top) {
      let div = document.createElement('div');
      div.className = el.__className;
      document.body.appendChild(div);

      this.scale = 1;
      this.alpha = 1;
      this.el    = div;
      this.top   = top;
      this.left  = left;
      this.color = el.__custom
        ? ''
        : (el.__color || ('#' + (~~(Math.random() * (1<<24))).toString(16)));

      this.setDOMStyle = () => {
        if (this.alpha <= 0) {
          document.body.removeChild(this.el);
          return
        }

        this.top --;
        this.scale += 0.004;
        this.alpha -= 0.013;

        this.el.style.top        = this.top + 'px';
        this.el.style.left       = this.left + 'px';
        this.el.style.opacity    = this.alpha;
        this.el.style.transform  = 'scale(' + this.scale + ') rotate(45deg)';
        this.el.style.background = this.color;

        requestAnimationFrame(this.setDOMStyle)
      }
    }

    window.requestAnimationFrame = (() =>
        window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (callback) { setTimeout(callback, 1000/60) }
    )();

    function clickHandler (e) {
      let newHeart = new Heart(e.clientX - 5, e.clientY - 5);

      requestAnimationFrame(newHeart.setDOMStyle)
    }

    el.__click = clickHandler;
    el.addEventListener('click', clickHandler)
  },
  update (el, { value }, vnode) {
    let self = vnode.context;

    el.__color     = '';
    el.__custom    = false;
    el.__className = self.$LEO.prefix + 'heart';
    if (typeof value !== 'undefined') {
      el.__color = value['color'];
      if (value['custom']) {
        el.__custom = true;
        el.__className += ' ' + value['custom']
      }
    }
  },
  unbind (el, {}, vnode) {
    let self  = vnode.context;
    let nodes = document.querySelectorAll("div." + self.$LEO.prefix + 'heart');
    nodes.forEach(node => { document.body.removeChild(node) });

    el.removeEventListener('click', el.__click);
    delete el.__click;
    delete el.__color;
    delete el.__custom;
    delete el.__className
  }
}