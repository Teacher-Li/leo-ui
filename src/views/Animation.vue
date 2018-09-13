<template>
    <div class="form-page">

        <Header></Header>

        <div class="body">
            <div class="wrapper">

                <Sider></Sider>

                <div class="content">
                    <h1>Animation 动画</h1>
                    <div class="anchor">
                        <h2>代码示例</h2>
                    </div>
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="example">
                                <div class="leo-form" inline>
                                    <div class="leo-form-item">
                                        <label class="leo-form-label">推开方向：</label>
                                        <div class="leo-form-value">
                                            <div class="leo-btn-group">
                                                <div
                                                    v-for="x in ['top', 'right', 'bottom', 'left']"
                                                    :class="{ active: direction === x }"
                                                    @click="direction = x"
                                                    class="leo-btn">
                                                    {{ x }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leo-form-item">
                                        <label class="leo-form-label">过渡模式：</label>
                                        <div class="leo-form-value">
                                            <div class="leo-btn-group">
                                                <div
                                                    :class="{ active: mode === x['key'] }"
                                                    @click="mode = x['key']"
                                                    v-for="x in modes"
                                                    class="leo-btn">
                                                    {{ x['value'] }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="leo-animation" :direction="direction" style="height: 32px">
                                    <transition name="leo-animation-shove" :mode="mode">
                                        <div
                                            class="leo-btn leo-animation-item"
                                            @click="open = false"
                                            color="primary"
                                            v-if="open"
                                            key="open"
                                            shadow
                                            bg>
                                            open
                                        </div>
                                        <div
                                            class="leo-btn leo-animation-item"
                                            @click="open = true"
                                            color="warning"
                                            key="close"
                                            v-else
                                            shadow
                                            bg>
                                            close
                                        </div>
                                    </transition>
                                </div>
                                <br>
                                <div class="leo-animation" :direction="direction" style="height: 32px">
                                    <transition name="leo-animation-shove" :mode="mode">
                                        <div class="leo-btn-group leo-animation-item" v-if="edit" key="action">
                                            <div class="leo-btn" color="success" @click="edit = false" bg shadow>save</div>
                                            <div class="leo-btn" color="warning" @click="edit = false" bg shadow>cancel</div>
                                        </div>
                                        <div
                                            class="leo-btn leo-animation-item"
                                            @click="edit = true"
                                            color="primary"
                                            key="edit"
                                            shadow
                                            v-else
                                            bg>
                                            edit
                                        </div>
                                    </transition>
                                </div>
                            </div>
                            <div class="title"><span>推开效果</span></div>
                            <div class="description">
                                推开方向默认 <code>left</code>，过渡模式默认不设置
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
            </div>
        </div>
    </div>
</template>

<script>
    import Sider from '../components/Sider';
    import Header from '../components/Header';

    export default {
        name: 'Animation',
        components: {
            Sider,
            Header,
        },
        data() {
            return {
                direction: 'left',
                mode: null,
                modes: [
                    { key: 'in-out', value: 'in-out' },
                    { key: null, value: 'default' },
                    { key: 'out-in', value: 'out-in' },
                ],

                open: true,
                edit: false,
                visible: false,

                html1: `<div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">推开方向：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in ['top', 'right', 'bottom', 'left']"
                                            :class="{ active: direction === x }"
                                            @click="direction = x"
                                            class="leo-btn">
                                            {{ x }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">过渡模式：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            :class="{ active: mode === x['key'] }"
                                            @click="mode = x['key']"
                                            v-for="x in modes"
                                            class="leo-btn">
                                            {{ x['value'] }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="leo-animation" :direction="direction" style="height: 32px">
                            <transition name="leo-animation-shove" :mode="mode">
                                <div
                                    class="leo-btn leo-animation-item"
                                    @click="open = false"
                                    color="primary"
                                    v-if="open"
                                    key="open"
                                    shadow
                                    bg>
                                    open
                                </div>
                                <div
                                    class="leo-btn leo-animation-item"
                                    @click="open = true"
                                    color="warning"
                                    key="close"
                                    v-else
                                    shadow
                                    bg>
                                    close
                                </div>
                            </transition>
                        </div>
                        <br>
                        <div class="leo-animation" :direction="direction" style="height: 32px">
                            <transition name="leo-animation-shove" :mode="mode">
                                <div class="leo-btn-group leo-animation-item" v-if="edit" key="action">
                                    <div class="leo-btn" color="success" @click="edit = false" bg shadow>save</div>
                                    <div class="leo-btn" color="warning" @click="edit = false" bg shadow>cancel</div>
                                </div>
                                <div
                                    class="leo-btn leo-animation-item"
                                    @click="edit = true"
                                    color="primary"
                                    key="edit"
                                    shadow
                                    v-else
                                    bg>
                                    edit
                                </div>
                            </transition>
                        </div>`,

                java1: `export default {
                            data () {
                                return {
                                    direction: 'left',
                                    mode: null,
                                    modes: [
                                        { key: 'in-out', value: 'in-out' },
                                        { key: null, value: 'default' },
                                        { key: 'out-in', value: 'out-in' },
                                    ],

                                    open: true,
                                    edit: false
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