<template>
    <div class="loading-page">
        <h1>Select 选择器</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-form" inline>
                        <div class="leo-form-item">
                            <label class="leo-form-label">状态：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        v-for="x in [{ label: '显示', value: false }, { label: '禁用', value: true }]"
                                        :class="{ active: disabled === x.value }"
                                        @click="disabled = x.value"
                                        class="leo-btn">
                                        {{ x.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">方向：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        :class="{ active: placement === x }"
                                        v-for="x in ['top', 'bottom']"
                                        @click="placement = x"
                                        class="leo-btn">
                                        {{ x }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">尺寸：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        v-for="x in ['large', 'default', 'small']"
                                        :class="{ active: size === x }"
                                        @click="size = x"
                                        class="leo-btn">
                                        {{ x }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>

                    <Selector
                        @on-change="changeSelected"
                        :placement="placement"
                        :disabled="disabled"
                        style="width: 240px"
                        :options="options"
                        v-model="value"
                        :size="size">
                    </Selector>

                    <span>{{ value }}</span>
                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    选择器尺寸有：大、默认（中）、小。<br>
                    添加属性 <code>disabled</code>，可禁用选择器。<br>
                    选中 <code>Option</code> 变化时触发 <code>on-change</code> 事件，并返回 <code>value</code>
                </div>
            </div>
            <div class="code" :class="{ visible : visible }">
                <div class="html">
                    <textarea type="text" :value="html1" id="html1"></textarea>
                    <a @click="copy($event, 'html1')">Copy</a>
                    <pre>                    {{ html1 }}</pre>
                </div>
                <div class="js">
                    <textarea type="text" :value="java1" id="java1"></textarea>
                    <a @click="copy($event, 'java1')">Copy</a>
                    <pre>                    {{ java1 }}</pre>
                </div>
            </div>
            <div class="more" :class="{ open: visible }" @click="visible = !visible"></div>
        </div>
    </div>
</template>

<script>
    import Selector from '../components/Selector';

    export default {
        name: 'Select',
        components: { Selector },
        data () {
            return {
                visible: false,

                size: 'default',
                disabled: false,
                placement: 'bottom',

                value: '',
                options: ['New York', 'London', 'Sydney', 'Ottawa', 'Paris', 'Canberra'],

                html1: `<div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">状态：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in [{ label: '显示', value: false }, { label: '禁用', value: true }]"
                                            :class="{ active: disabled === x.value }"
                                            @click="disabled = x.value"
                                            class="leo-btn">
                                            {{ x.label }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">方向：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            :class="{ active: placement === x }"
                                            v-for="x in ['top', 'bottom']"
                                            @click="placement = x"
                                            class="leo-btn">
                                            {{ x }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">尺寸：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in ['large', 'default', 'small']"
                                            :class="{ active: size === x }"
                                            @click="size = x"
                                            class="leo-btn">
                                            {{ x }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <Selector
                            @on-change="changeSelected"
                            :placement="placement"
                            :disabled="disabled"
                            style="width: 240px"
                            :options="options"
                            v-model="value"
                            :size="size">
                        </Selector>
                        <span>{{ value }}</span>`,

                java1: `import Selector from '../components/Selector';

                        export default {
                            components: { Pager, Selector },
                            data () {
                                return {
                                    size: 'default',
                                    disabled: false,
                                    placement: 'bottom',

                                    value: '',
                                    options: ['New York', 'London', 'Sydney', 'Ottawa', 'Paris', 'Canberra']
                                }
                            },
                            methods: {
                                changeSelected (value) {
                                    console.log(value)
                                }
                            }
                        }`

            }
        },
        methods: {
            copy (e, id) {
                let tag = e.target;
                if (!tag.className) {
                    document.querySelector('#' + id).select();
                    document.execCommand("Copy");

                    tag.innerHTML = 'Copied';
                    tag.className = 'success';
                    setTimeout(() => {
                        tag.className = '';
                        tag.innerHTML = 'Copy';
                    }, 5000)
                }
            },
            changeSelected (value) {
                console.log(value)
            }
        }
    }
</script>