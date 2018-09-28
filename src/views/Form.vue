<template>
    <div class="form-page">
        <h1>Form 表单</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-form" inline>
                        <div class="leo-form-item">
                            <label class="leo-form-label">表单尺寸：</label>

                            <Selector
                                :options="['large', 'default', 'small']"
                                style="width: 120px"
                                v-model="size">
                            </Selector>

                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">label 宽度：</label>

                            <Selector
                                :options="['80', '90', '100', '110', '120']"
                                style="width: 120px"
                                v-model="width">
                            </Selector>

                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">label 位置：</label>

                            <Selector
                                :options="['left', 'right', 'top', 'top-left', 'top-right', 'bottom-left', 'bottom-right']"
                                style="width: 120px"
                                v-model="placement">
                            </Selector>

                        </div>
                    </div>
                    <br>
                    <div class="leo-form" :size="size" :label-width="width" :label-placement="placement">
                        <div class="leo-form-item">
                            <label class="leo-form-label">用户姓名：</label>
                            <input type="text" class="leo-form-value leo-form-input" value="leo">
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">用户性别：</label>
                            <input type="text" class="leo-form-value leo-form-input" value="男" disabled>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">用户年龄：</label>
                            <span class="leo-form-value leo-form-span" bg>26</span>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">用户职业：</label>
                            <span class="leo-form-value leo-form-span">Web 前端工程师</span>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">用户简介：</label>
                            <textarea class="leo-form-value leo-form-input" style="padding: 8px; height: 64px;"></textarea>
                        </div>
                        <div class="leo-form-item leo-form-btn">
                            <div class="leo-btn" color="primary" :size="size" bg shadow>确定</div>
                        </div>
                    </div>
                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    表单有三种尺寸：大、默认（中）、小。<br>
                    <code>label</code> 宽度值有：80、90、默认（100）、110、120。 <br>
                    <code>label</code> 对齐方式有：左对齐、默认（右对齐）、上对齐、下对齐和置于顶部。 <br>
                </div>
            </div>
            <div class="code" :class="{ visible : visible1 }">
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
            <div class="more" :class="{ open: visible1 }" @click="visible1 = !visible1"></div>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html2"></div>
                <div class="title"><span>行内表单</span></div>
                <div class="description">添加属性 <code>inline</code>，表单元素可以水平排列。</div>
            </div>
            <div class="code">
                <textarea type="text" :value="html2" id="html2"></textarea>
                <a @click="copy($event, 'html2')">Copy</a>
                <pre>                    {{ html2 }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html3"></div>
                <div class="title"><span>必填</span></div>
                <div class="description">
                    添加属性 <code>required</code>，可设置全局或者局部必填项
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html3" id="html3"></textarea>
                <a @click="copy($event, 'html3')">Copy</a>
                <pre>                    {{ html3 }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import Selector from '../components/Selector';

    export default {
        name: 'Form',
        components: { Selector },
        data () {
            return {
                visible1: false,

                sex: '男',

                size: 'default',
                width: '100',
                placement: 'right',

                html1: `<div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">表单尺寸：</label>
                                <Selector
                                    :options="['large', 'default', 'small']"
                                    style="width: 120px"
                                    v-model="size">
                                </Selector>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">label 宽度：</label>
                                <Selector
                                    :options="['80', '90', '100', '110', '120']"
                                    style="width: 120px"
                                    v-model="width">
                                </Selector>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">label 位置：</label>
                                <Selector
                                    :options="['left', 'right', 'top', 'top-left', 'top-right', 'bottom-left', 'bottom-right']"
                                    style="width: 120px"
                                    v-model="placement">
                                </Selector>
                            </div>
                        </div>
                        <br>
                        <div class="leo-form" :size="size" :label-width="width" :label-position="position">
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户姓名：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="leo">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户性别：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="男" disabled>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户年龄：</label>
                                <span class="leo-form-value leo-form-span" bg>26</span>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户职业：</label>
                                <span class="leo-form-value leo-form-span">Web 前端工程师</span>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户简介：</label>
                                <textarea class="leo-form-value leo-form-input" style="padding: 8px; height: 64px;"></textarea>
                            </div>
                            <div class="leo-form-item leo-form-btn">
                                <div class="leo-btn" color="primary" :size="size" bg shadow>确定</div>
                            </div>
                        </div>`,

                html2: `<div class="leo-form" label-width="80" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">账户：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">密码：</label>
                                <input type="password" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item leo-form-btn">
                                <div class="leo-btn" color="primary" bg shadow>确定</div>
                            </div>
                        </div>`,

                html3: `<div class="leo-form" required>
                            <div class="leo-form-item">
                                <label class="leo-form-label">必填项：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">必填项：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                        </div>
                        <div class="leo-form">
                            <div class="leo-form-item">
                                <label class="leo-form-label">非必填项：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label" required>必填项：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                        </div>`,

                java1: `import Selector from '../components/Selector';

                        export default {
                            components: { Selector },
                            data () {
                                return {
                                    size: 'default',
                                    width: '100',
                                    placement: 'right',
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
            }
        }
    }
</script>