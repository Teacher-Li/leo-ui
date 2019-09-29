/**
 * Created by leo on 2019/09/27.
 */

import Vue from 'vue';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';

import Component from '~/components/Preview';

const preview = {
  options: {},
  instance: null,
  galleryPicLoading: false,

  config (options = {}) {
    this.options = { ...options };
    return this;
  },
  init () {
    this.instance || this.newInstance();
  },
  destroy () {
    const pswpElement = document.querySelectorAll('.pswp')[0];
    document.body.removeChild(pswpElement);

    this.options = {};
    this.instance = null;
    this.galleryPicLoading = false;
  },
  newInstance () {
    const Preview = Vue.extend(Component);
    const galleryElements = document.querySelectorAll(`img[preview][data-preview]`);

    this.instance = new Preview({ el: document.createElement('div') });
    document.body.appendChild(this.instance.$el);

    for (let i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].onclick = () => {
        this.onThumbnailsClick();
      }
    }
  },
  onThumbnailsClick (e) {
    if (this.galleryPicLoading) return false;
    this.galleryPicLoading = true;

    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    const target = e.target || e.srcElement;
    const pid = target.getAttribute('preview');
    const galleryElements = document.querySelectorAll(`img[preview="${ pid }"]`);
    const index = [...galleryElements].findIndex(node => node === target);

    index >= 0 && this.openPhotoSwipe(index, galleryElements);
  },
  openPhotoSwipe (index, galleryElement) {
    const pswpElement = document.querySelectorAll('.pswp')[0];
    const items = this.parseThumbnailElements(galleryElement);
    const previewOptions = {
      getThumbBoundsFn: index => {
        // See Options -> getThumbBoundsFn section of documentation for more info
        const thumbnail = items[index].el; // find thumbnail
        const rect = thumbnail.getBoundingClientRect();
        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        };
      },
      index: index,
      ...this.options
    };
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, items, previewOptions);

    gallery.init();
    gallery.listen('imageLoadComplete', () => {
      this.galleryPicLoading = false;
    });
  },
  parseThumbnailElements (thumbElements) {
    return [...thumbElements].map(node => {
      const data = node.getAttribute('data-preview');
      const { large, width, height, title } = JSON.parse(data);

      return {
        el: node,
        title: title,
        w: width || 600,
        h: height || 400,
        src: large || node.getAttribute('src'),
      }
    })
  }
};

export default preview;