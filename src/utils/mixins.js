function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        componentName === child.$options.name
            ? child.$emit.apply(child, [eventName].concat(params))
            : broadcast.apply(child, [componentName, eventName].concat([params]));
    })
}

export default {
    directives: {
        // 正则
        'regexp': {
            bind (el, { value }) {
                el.addEventListener('input', () => {
                    el.value = el.value.replace(value, '');
                })
            }
        },
        // 文字提示
        'tooltip': {
            inserted (el, binding) {
                let num = binding.value.length;
                let html = el.innerHTML.replace(/(^\s*)|(\s*$)/g, "");

                if (html.length > num) {
                    el.innerHTML = html.slice(0, num) + '...';

                    if (binding.modifiers['original']) {
                        el.setAttribute('title', html)
                    } else {
                        let div = document.createElement('div');
                        let theme = binding.value.theme || 'light';

                        div.innerHTML = html;
                        div.className = 'leo-tooltip';
                        div.classList.add(theme);

                        document.body.appendChild(div);
                        el.addEventListener('mouseover', (e) => {
                            div.classList.add('visible');
                            div.style.top = e.clientY + 'px';
                            div.style.left = e.clientX + 'px';
                            if (binding.value.width) {
                                div.style.maxWidth = Math.max(binding.value.width, 120) + 'px';
                            }
                        });
                        el.addEventListener('mouseout', () => {
                            div.classList.remove('visible');
                        })
                    }
                }
            },
            unbind () {
                let nodes = document.querySelectorAll("div.leo-tooltip");
                nodes.forEach(node => { document.body.removeChild(node) })
            }
        },
        // 瀑布流
        'masonry': {
            inserted (el, binding) {
                let top = [];
                let left = [];
                let bottom = [];

                let width = binding.value.width;
                let padding = binding.value.padding;

                let cell = Math.floor(el.offsetWidth / width);

                function getMinTopIndex() {
                    let min = Math.min.apply(Math, top);
                    return top.indexOf(min)
                }
                function updatePosition() {
                    top = [];
                    left = [];
                    bottom = [];

                    for(let i = 0; i < cell; i++){
                        top.push(0);
                        left.push(i * width);
                    }

                    el.childNodes.forEach(child => {
                        let index = getMinTopIndex();

                        child.style.opacity = 1;
                        child.style.width = width + 'px';
                        child.style.padding = padding + 'px';
                        child.style.transform = 'scale(1) translate3d('+ left[index] + 'px' +',' + top[index] + 'px' + ',0)';

                        top[index] += child.offsetHeight;
                        bottom.push(top[index]);
                    });
                    el.style.margin = - padding + 'px';
                    el.style.height = (bottom.length > 0 ? Math.max.apply(Math, bottom) : 0) + 'px';
                }

                updatePosition();
                el.addEventListener('DOMSubtreeModified', updatePosition);
                window.addEventListener('resize', () => {
                    let oldCell = cell;
                    cell = Math.floor(el.offsetWidth / width);

                    oldCell !== cell && updatePosition()
                })
            }
        }
    },
    methods: {
        // ajax
        ajax (opt) {
            opt = opt || {};
            opt.method = opt.method.toUpperCase() || 'POST';
            opt.url = opt.url || '';
            opt.async = opt.async || true;
            opt.data = opt.data || null;
            opt.success = opt.success || function () {};

            let xmlHttp = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let params = [];

            for (let key in opt.data) params.push(key + '=' + opt.data[key]);

            let postData = params.join('&');
            if (opt.method.toUpperCase() === 'POST') {
                xmlHttp.open(opt.method, opt.url, opt.async);
                xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                xmlHttp.send(postData);
            } else if (opt.method.toUpperCase() === 'GET') {
                xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
                xmlHttp.send(null);
            }

            xmlHttp.onreadystatechange = () => {
                xmlHttp.readyState === 4
                && xmlHttp.status === 200
                && opt.success(JSON.parse(xmlHttp.responseText))
            }
        },
        // 派发
        dispatch (componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) name = parent.$options.name;
            }

            parent && parent.$emit.apply(parent, [eventName].concat(params));
        },
        // 广播
        broadcast (componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        },
        // 类名
        addClassName (el, className) {
            el.className += ' ' + className
        },
        removeClassName (el, className) {
            el.className = el.className.replace(' ')
        },
        // 数组
        replaceItem (arr, oldItem, newItem) {
            let index = arr.indexOf(oldItem);

            !newItem
                ? arr.splice(index, 1)
                : arr.splice(index, 1, newItem)
        }
    }
}