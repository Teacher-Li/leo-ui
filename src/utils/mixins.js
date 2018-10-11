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
            bind (el, binding, vnode) {
                el.addEventListener('input', () => {
                    let value = el.value;
                    el.value = value.replace(binding.value, '');
                })
            }
        },
        // 文字提示
        'tooltip': {
            inserted (el, binding, vnode) {
                let num = binding.value.length;
                let html = el.innerHTML.replace(/(^\s*)|(\s*$)/g, "");

                if (html.length > num) {
                    el.innerHTML = html.slice(0, num) + '...';

                    if (!binding.value.theme) {
                        el.setAttribute('title', html)
                    } else {
                        let div = document.createElement('div');
                        div.innerHTML = html;

                        div.className = 'leo-tooltip';
                        div.classList.add(binding.value.theme);

                        document.body.appendChild(div);
                        el.addEventListener('mouseover', (e) => {
                            div.classList.add('visible');
                            div.style.top = e.clientY + 'px';
                            div.style.left = e.clientX + 'px';
                            if (binding.value.width) {
                                div.style.maxWidth = binding.value.width + 'px';
                            }
                        });
                        el.addEventListener('mouseout', () => {
                            div.classList.remove('visible');
                        })
                    }
                }
            }
        }
    },
    methods: {
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
        }
    }
}