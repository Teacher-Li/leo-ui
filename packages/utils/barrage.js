/**
 * Created by leo on 2019/10/10.
 */

window.requestAnimationFrame = (() =>
  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (callback) { setTimeout(callback, 1000/60) }
)();

const barrage = {
  el: null,
  ctx: null,
  canvas: null,
  currentQueue: [],
  waitingQueue: [],
  options: {
    max: 50,
    level: 1,
    padding: 5,
    color: null,
    font: '20px Microsoft YaHei',
  },

  init (el) {
    if (this.canvas || !el) return;

    this.el = el;
    this.canvas = document.createElement('canvas');

    this.el.style.position = 'relative';
    this.canvas.style.position = 'absolute';
    this.canvas.style.pointerEvents = 'none';
    this.el.appendChild(this.canvas);

    this.resize();
    this.draw();
  },
  config (options = {}) {
    this.options = { ...this.options, ...options };
    return this;
  },
  resize () {
    const rect = this.el.getBoundingClientRect();

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.canvas.style.top = `${ rect.top }px`;
    this.canvas.style.left = `${ rect.left }px`;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = this.options.font;
  },
  clear () {
    const { width, height } = this.canvas;

    this.currentQueue = [];
    this.waitingQueue = [];
    this.ctx.clearRect(0, 0, width, height);
  },
  destroy () {
    this.canvas && this.el.removeChild(this.canvas);

    this.el = null;
    this.canvas = null;
    this.currentQueue = [];
    this.waitingQueue = [];
  },
  draw () {
    if (this.currentQueue.length) {
      const { width, height } = this.canvas;
      this.ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < this.currentQueue.length; i++) {
        let queue = this.currentQueue[i];

        if (queue.left + queue.width <= 0) {
          this.currentQueue.splice(i, 1);
          this.allot();
          i--;
          continue;
        }
        queue.left -= queue.offset;

        this.drawText(queue);
      }
    }
    this.canvas && requestAnimationFrame(this.draw.bind(this));
  },
  drawText (queue) {
    this.ctx.fillStyle = queue.color;
    this.ctx.fillText(queue.value, queue.left, queue.top);

    if (queue.isSelf) {
      const height = parseInt(this.options.font);
      const width = Math.max(queue.width, height);

      const p = this.options.padding;
      const r = height / 2 + p;
      const x = queue.left;
      const y = queue.top - 9 * height / 10;

      const Point = (x, y) => ({ x, y });
      const ptA = Point(x + r - p, y - p);
      const ptB = Point(x + width + p, y - p);
      const ptC = Point(x + width + p, y + height + p);
      const ptD = Point(x - p, y + height + p);
      const ptE = Point(x - p, y - p);

      this.ctx.beginPath();

      this.ctx.moveTo(ptA.x, ptA.y);
      this.ctx.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, r);
      this.ctx.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, r);
      this.ctx.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, r);
      this.ctx.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, r);

      this.ctx.strokeStyle = queue.color;
      this.ctx.stroke();
    }
  },
  allot (queue) {
    if (queue) {
      this.currentQueue.length < this.options.max
        ? this.currentQueue.push(queue)
        : this.waitingQueue.push(queue);
    } else {
      this.waitingQueue.length
        && this.currentQueue.push(this.waitingQueue.shift());
    }
  },
  shoot (value, isSelf = false) {
    const top = this.getTop();
    const color = this.getColor();
    const offset = this.getOffset();
    const width = Math.ceil(this.ctx.measureText(value).width);

    this.allot({
      value,
      top,
      color,
      offset,
      width,
      isSelf,
      left: this.canvas.width
    });
  },
  getColor () {
    return this.options.color || ('#' + (~~(Math.random() * (1<<24))).toString(16));
  },
  getTop () {
    const height = this.canvas.height / this.options.level;

    return Math.floor(Math.random() * (height - 30)) + 30;
  },
  getOffset () {
    return +(Math.random() * 4).toFixed(1) + 1;
  }
}

export default barrage;