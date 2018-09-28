<template>
    <div class="masonry-page">
        <h1>Masonry 瀑布流</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-btn" @click="add" color="success" size="small" shadow bg>添加</div>
                    <div class="leo-btn" @click="remove" color="warning" size="small" shadow bg>删除</div>
                    <div class="leo-btn" @click="reset" color="primary" size="small" shadow bg>重置</div>
                    <br><br>
                    <div class="leo-masonry">
                        <div v-for="(item, i) in list" class="leo-masonry-item" style="padding: 10px">
                            <div
                                style="border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2);position: relative"
                                :style="{ height: item['height'], backgroundColor: item['backgroundColor'] }"
                                class="leo-masonry-wrapper">
                                <div
                                    style="font-size: 20px;background-color: #ccc"
                                    class="leo-avatar"
                                    center>
                                    {{ i + 1 }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    瀑布流的最简单用法。
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
    export default {
        name: 'Masonry',
        data () {
            return {
                visible: false,

                num: 0,
                list: [],

                html1: `<div class="leo-btn" @click="add" color="success" size="small" shadow bg>添加</div>
                        <div class="leo-btn" @click="remove" color="warning" size="small" shadow bg>删除</div>
                        <div class="leo-btn" @click="reset" color="primary" size="small" shadow bg>重置</div>
                        <br><br>
                        <div class="leo-masonry">
                            <div v-for="(item, i) in list" class="leo-masonry-item" style="padding: 10px">
                                <div
                                    style="border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2);position: relative"
                                    :style="{ height: item['height'], backgroundColor: item['backgroundColor'] }"
                                    class="leo-masonry-wrapper">
                                    <div
                                        style="font-size: 20px;background-color: #ccc"
                                        class="leo-avatar"
                                        center>
                                        {{ i + 1 }}
                                    </div>
                                </div>
                            </div>
                        </div>`,

                java1: `export default {
                            data () {
                                return {
                                    num: 0,
                                    list: []
                                }
                            },
                            methods: {
                                add () {
                                    this.list.push({
                                        height: parseInt(Math.random() * 200 + 50) + 'px',
                                        backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16)
                                    })
                                },
                                remove () {
                                    this.list.length > 0 && this.list.pop()
                                },
                                reset () {
                                    this.list = []
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
            add () {
                this.list.push({
                    height: parseInt(Math.random() * 200 + 50) + 'px',
                    backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16)
                })
            },
            remove () {
                this.list.length > 0 && this.list.pop()
            },
            reset () {
                this.list = []
            }
        }
    }
</script>