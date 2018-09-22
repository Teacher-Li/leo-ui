<template>
    <div class="button-page">
        <h1>Button 按钮</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html1"></div>
                <div class="title"><span>按钮类型</span></div>
                <div class="description">
                    按钮类型有：默认按钮、虚线按钮、圆角按钮、文字按钮、阴影按钮以及五种颜色按钮。<br>
                    添加属性 <code>bg</code>，可设置按钮的背景色。<br>
                    添加属性 <code>round</code>，可设置为圆角按钮。<br>
                    添加属性 <code>dashed</code>，可设置为虚线按钮。<br>
                    添加属性 <code>shadow</code>，必须和属性 <code>bg</code> 以及 <code>color</code> 一起用，可设置为阴影按钮。<br>
                    通过设置 <code>color</code> 为 <code>primary</code>、 <code>info</code>、 <code>success</code>、
                    <code>warning</code>、 <code>error</code> 创建不同样式的按钮，不设置为默认按钮。
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html1" id="html1"></textarea>
                <a @click="copy($event, 'html1')">Copy</a>
                <pre>                    {{ html1 }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html2"></div>
                <div class="title"><span>长按钮</span></div>
                <div class="description">
                    添加属性 <code>long</code>，可将按钮的宽度设置为100%。<br>
                    也可以直接通过添加 <code>style</code> 来设置更细节的样式，比如定宽。
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html2" id="html2"></textarea>
                <a @click="copy($event, 'html2')">Copy</a>
                <pre>                    {{ html2 }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html2"></div>
                <div class="title"><span>禁用状态</span></div>
                <div class="description">
                    添加属性 <code>disabled</code>，可将按钮设置为不可用状态。
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html3" id="html3"></textarea>
                <a @click="copy($event, 'html3')">Copy</a>
                <pre>                    {{ html3 }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example" v-html="html4"></div>
                <div class="title"><span>按钮组</span></div>
                <div class="description">
                    和单个按钮设置一样。
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html4" id="html4"></textarea>
                <a @click="copy($event, 'html4')">Copy</a>
                <pre>                    {{ html4 }}</pre>
            </div>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-form">
                        <div class="leo-form-item">
                            <label class="leo-form-label">按钮尺寸：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        v-for="x in ['large', 'default', 'small', 'mini']"
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
                    <div class="leo-btn" :size="size" dashed>default</div>
                    <div class="leo-btn" :size="size" color="primary">primary</div>
                    <div class="leo-btn" :size="size" color="info" bg>info</div>
                    <div class="leo-btn" :size="size" color="success" round>success</div>
                    <div class="leo-btn" :size="size" color="warning" bg shadow>warning</div>
                    <div class="leo-btn" :size="size" color="error" bg round shadow>error</div>
                    <br><br>
                    <div class="leo-btn-group" :size="size" dashed>
                        <div class="leo-btn">default</div>
                        <div class="leo-btn">default</div>
                    </div>
                    <div class="leo-btn-group" :size="size" color="primary" bg>
                        <div class="leo-btn">primary</div>
                        <div class="leo-btn">primary</div>
                    </div>
                    <div class="leo-btn-group" :size="size" color="primary" bg round shadow>
                        <div class="leo-btn">primary</div>
                        <div class="leo-btn">primary</div>
                    </div>
                </div>
                <div class="title"><span>按钮尺寸</span></div>
                <div class="description">
                    按钮有四种尺寸：大、默认（中）、小、迷你。<br>
                    通过设置 <code>size</code> 为 <code>large</code> 和 <code>small</code> 以及 <code>mini</code> 将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
                </div>
            </div>
            <div class="code" :class="{ visible : visible5 }">
                <div class="html">
                    <textarea type="text" :value="html5" id="html5"></textarea>
                    <a @click="copy($event, 'html5')">Copy</a>
                    <pre>                    {{ html5 }}</pre>
                </div>
                <div class="js">
                    <textarea type="text" :value="java5" id="java5"></textarea>
                    <a @click="copy($event, 'java5')">Copy</a>
                    <pre>                    {{ java5 }}</pre>
                </div>
            </div>
            <div class="more" :class="{ open: visible5 }" @click="visible5 = !visible5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        data() {
            return {
                size: 'default',
                visible5: false,

                html1: `<div class="leo-btn">default</div>
                        <div class="leo-btn" color="primary">primary</div>
                        <div class="leo-btn" color="info">info</div>
                        <div class="leo-btn" color="success">success</div>
                        <div class="leo-btn" color="warning">warning</div>
                        <div class="leo-btn" color="error">error</div>
                        <br><br>
                        <div class="leo-btn" dashed>default</div>
                        <div class="leo-btn" color="primary" bg>primary</div>
                        <div class="leo-btn" color="info" bg>info</div>
                        <div class="leo-btn" color="success" bg>success</div>
                        <div class="leo-btn" color="warning" bg>warning</div>
                        <div class="leo-btn" color="error" bg>error</div>
                        <br><br>
                        <div class="leo-btn" round>default</div>
                        <div class="leo-btn" color="primary" bg round>primary</div>
                        <div class="leo-btn" color="info" round>info</div>
                        <div class="leo-btn" color="success" bg round>success</div>
                        <div class="leo-btn" color="warning" round>warning</div>
                        <div class="leo-btn" color="error" bg round>error</div>
                        <br><br>
                        <div class="leo-btn" text>default</div>
                        <div class="leo-btn" color="primary" bg shadow>primary</div>
                        <div class="leo-btn" color="info" bg shadow>info</div>
                        <div class="leo-btn" color="success" bg round shadow>success</div>
                        <div class="leo-btn" color="warning" bg round shadow>warning</div>
                        <div class="leo-btn" color="error" bg shadow>error</div>`,

                html2: `<div class="leo-btn" dashed style="width: 200px">default</div>
                        <br><br>
                        <div class="leo-btn" color="primary" long>primary</div>
                        <br><br>
                        <div class="leo-btn" color="info" bg long>info</div>
                        <br><br>
                        <div class="leo-btn" color="success" round long>success</div>
                        <br><br>
                        <div class="leo-btn" color="warning" bg shadow long>warning</div>
                        <br><br>
                        <div class="leo-btn" color="error" bg round shadow long>error</div>`,

                html3: `<div class="leo-btn" dashed disabled>default</div>
                        <div class="leo-btn" color="primary" disabled>primary</div>
                        <div class="leo-btn" color="info" bg disabled>info</div>
                        <div class="leo-btn" color="success" round disabled>success</div>
                        <div class="leo-btn" color="warning" bg shadow disabled>warning</div>
                        <div class="leo-btn" color="error" bg round shadow disabled>error</div>
                        <br><br>
                        <div class="leo-btn" color="error" bg round shadow long disabled>error</div>`,

                html4: `<div class="leo-btn-group">
                            <div class="leo-btn">default</div>
                            <div class="leo-btn">default</div>
                        </div>
                        <div class="leo-btn-group" dashed>
                            <div class="leo-btn">default</div>
                            <div class="leo-btn">default</div>
                        </div>
                        <div class="leo-btn-group" disabled>
                            <div class="leo-btn">default</div>
                            <div class="leo-btn">default</div>
                        </div>
                        <br><br>
                        <div class="leo-btn-group" color="primary">
                            <div class="leo-btn">primary</div>
                            <div class="leo-btn">primary</div>
                        </div>
                        <div class="leo-btn-group" color="info" bg>
                            <div class="leo-btn">info</div>
                            <div class="leo-btn">info</div>
                        </div>
                        <br><br>
                        <div class="leo-btn-group" color="success" bg round>
                            <div class="leo-btn">success</div>
                            <div class="leo-btn">success</div>
                        </div>
                        <div class="leo-btn-group" color="warning" bg round shadow>
                            <div class="leo-btn">warning</div>
                            <div class="leo-btn">warning</div>
                        </div>
                        <br><br>
                        <div class="leo-btn-group" color="error" bg round shadow long>
                            <div class="leo-btn">error</div>
                            <div class="leo-btn">error</div>
                        </div>`,

                html5: `<div class="leo-form">
                            <div class="leo-form-item">
                                <label class="leo-form-label">按钮尺寸：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in ['large', 'default', 'small', 'mini']"
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
                        <div class="leo-btn" :size="size" dashed>default</div>
                        <div class="leo-btn" :size="size" color="primary">primary</div>
                        <div class="leo-btn" :size="size" color="info" bg>info</div>
                        <div class="leo-btn" :size="size" color="success" round>success</div>
                        <div class="leo-btn" :size="size" color="warning" bg shadow>warning</div>
                        <div class="leo-btn" :size="size" color="error" bg round shadow>error</div>
                        <br><br>
                        <div class="leo-btn-group" :size="size" dashed>
                            <div class="leo-btn">default</div>
                            <div class="leo-btn">default</div>
                        </div>
                        <div class="leo-btn-group" :size="size" color="primary" bg>
                            <div class="leo-btn">primary</div>
                            <div class="leo-btn">primary</div>
                        </div>
                        <div class="leo-btn-group" :size="size" color="primary" bg round shadow>
                            <div class="leo-btn">primary</div>
                            <div class="leo-btn">primary</div>
                        </div>`,

                java5: `export default {
                            data () {
                                return {
                                    size: 'default'
                                }
                            }
                        }`
            }
        },
        methods: {
            copy(e, id) {
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