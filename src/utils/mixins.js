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
        }
    }
}