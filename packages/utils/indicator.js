/**
 * Created by leo on 2019/06/12.
 */

import Vue from 'vue';

const indicator = {
  color: null,
  custom: null,
  instance: null,

  init () {
    this.instance || this.newInstance();
  },
  config (option = {}) {
    if (option.custom) {
      this.custom = ['primary', 'info', 'success', 'warning', 'error'].includes(option.custom)
        ? option.custom
        : 'primary';
    } else if (option.color) {
      this.color = option.color;
    } else {
      this.custom = 'primary';
    }
    return this;
  },
  destroy () {
    this.instance && document.body.removeChild(this.instance.$el);

    this.color = null;
    this.custom = null;
    this.instance = null;
  },
  newInstance () {
    const { custom, color } = this;

    this.instance = new Vue({
      data () {
        return {
          prefixCls: `${ this.$PrefixCls || 'leo' }-indicator`
        }
      },
      render (h) {
        return h('div', {
          class: `${ this.prefixCls } ${ custom || color ? custom : 'primary' }`,
          style: custom
              || {
                   backgroundImage: `linear-gradient(to right top, ${ color } 50%, transparent 50%)`
                 }
        });
      }
    }).$mount();

    document.body.style.position = 'relative';
    document.body.appendChild(this.instance.$el);
  }
};

export default indicator;