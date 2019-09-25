export default {
  inserted (el, { value }, vnode) {
    let self = vnode.context;
    let div  = document.createElement('div');

    div.className = `${ self.$prefix }-drag-select`;
    el.appendChild(div);

    let step = 0;
    let elements = [];
    let [ startX, startY ] = [ 0, 0 ];

    const mousedownHandler = e => {
      step = 1;
      [ startX, startY ] = [ e.clientX, e.clientY ];
    };
    const mousemoveHandler = e => {
      if (step < 1) return;
      step = 2;
      elements = [];

      const width     = e.clientX - startX;
      const height    = e.clientY - startY;
      const left      = width > 0 ? startX : e.clientX;
      const top       = height > 0 ? startY : e.clientY;
      const right     = Math.abs(width) + left;
      const bottom    = Math.abs(height) + top;
      const selectors = document.querySelectorAll(value.selector || null);

      div.style.top    = `${ top }px`;
      div.style.left   = `${ left }px`;
      div.style.width  = `${ Math.abs(width) }px`;
      div.style.height = `${ Math.abs(height) }px`;

      div.classList.add('visible');

      for (let i = 0; i < selectors.length; i++) {
        const rect = selectors[i].getBoundingClientRect();
        const isIntersect = !(
          rect.top > bottom ||
          rect.bottom < top ||
          rect.right < left ||
          rect.left > right
        );

        isIntersect && elements.push(selectors[i]);
        selectors[i].classList[isIntersect ? 'add' : 'remove'](...(value.className || []));
      }
    };
    const mouseupHandler = () => {
      if (step < 2) {
        step = 0;
        return;
      }

      step = 0;
      div.classList.remove('visible');
      self.dragSelected && self.dragSelected(elements);
      setTimeout(() => { div.style.cssText = '' }, 500);
    };

    el.__mouseup   = mouseupHandler;
    el.__mousemove = mousemoveHandler;
    el.__mousedown = mousedownHandler;
    el.addEventListener('mousemove', mousemoveHandler);
    el.addEventListener('mousedown', mousedownHandler);
    window.addEventListener('mouseup', mouseupHandler);
  },
  unbind (el, {}, vnode) {
    let self = vnode.context;
    let node = document.querySelector(`div.${ self.$prefix }-drag-select`);
    el.removeChild(node);

    el.removeEventListener('mousemove', el.__mousemove);
    el.removeEventListener('mousedown', el.__mousedown);
    window.removeEventListener('mouseup', el.__mouseup);

    delete el.__mouseup;
    delete el.__mouseout;
    delete el.__mouseover;
  }
}