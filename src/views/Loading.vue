<template>
    <div class="loading-page">
        <h1>Loading 加载</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-form" inline>
                        <div class="leo-form-item">
                            <label class="leo-form-label">加载状态：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div class="leo-btn" :class="{ active: loading }" @click="loading = true">显示</div>
                                    <div class="leo-btn" :class="{ active: !loading }" @click="loading = false">隐藏</div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">加载类型：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        v-for="x in ['dot', 'circular']"
                                        :class="{ active: type === x }"
                                        @click="type = x"
                                        class="leo-btn">
                                        {{ x }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative">

                        <Loader :type="type" :visible="loading" fix></Loader>

                        <div class="article">
                            <h3>登金陵凤凰台</h3>
                            <address>李白</address>
                            <article>
                                <p>凤凰台上凤凰游，凤去台空江自流。</p>
                                <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                                <p>三山半落青天外，二水中分白鹭洲。</p>
                                <p>总为浮云能蔽日，长安不见使人愁。</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    加载类型默认 <code>circular</code>。
                    添加属性 <code>fix</code>，并在父级元素上有 <code>relative</code> 或 <code>absolute</code>，可实现垂直居中效果
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
    import Loader from '../components/Loader';

    export default {
        name: 'Loading',
        components: { Loader },
        data () {
            return {
                visible: false,

                type: 'circular',
                loading: true,

                html1: `<div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">加载状态：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div class="leo-btn" :class="{ active: loading }" @click="loading = true">显示</div>
                                        <div class="leo-btn" :class="{ active: !loading }" @click="loading = false">隐藏</div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">加载类型：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in ['dot', 'circular']"
                                            :class="{ active: type === x }"
                                            @click="type = x"
                                            class="leo-btn">
                                            {{ x }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: relative">
                            <Loader :type="type" :visible="loading" fix></Loader>
                            <div class="article">
                                <h3>登金陵凤凰台</h3>
                                <address>李白</address>
                                <article>
                                    <p>凤凰台上凤凰游，凤去台空江自流。</p>
                                    <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                                    <p>三山半落青天外，二水中分白鹭洲。</p>
                                    <p>总为浮云能蔽日，长安不见使人愁。</p>
                                </article>
                            </div>
                        </div>`,

                java1: `import Loader from '../components/Loader';

                        export default {
                            components: { Loader },
                            data () {
                                return {
                                    type: 'circular',
                                    loading: true
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