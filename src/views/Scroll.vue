<template>
    <div class="scroll-page">

        <Header></Header>

        <div class="body">
            <div class="wrapper">

                <Sider></Sider>

                <div class="content">
                    <h1>Scroll 滚动</h1>
                    <div class="anchor">
                        <h2>代码示例</h2>
                    </div>
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="example">
                                <div class="leo-form">
                                    <div class="leo-form-item">
                                        <label class="leo-form-label">箭头位置：</label>
                                        <div class="leo-form-value">
                                            <div class="leo-btn-group">
                                                <div
                                                    v-for="x in ['top', 'default', 'bottom']"
                                                    :class="{ active: placement === x }"
                                                    @click="placement = x"
                                                    class="leo-btn">
                                                    {{ x }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div
                                    :placement="placement"
                                    style="width: 640px"
                                    class="leo-scroll"
                                    v-scroll>
                                    <div class="leo-scroll-wrapper" style="height: 100px">
                                        <div class="leo-scroll-track" :style="styleObject">
                                            <div
                                                style="width: 90px;height: 90px;border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2)"
                                                :style="{ backgroundColor: item['backgroundColor'] }"
                                                class="leo-scroll-item"
                                                v-for="item in list">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leo-scroll-control">
                                        <div
                                            :class="{ disabled: translateX >= 0 }"
                                            class="leo-scroll-arrow left"
                                            @click="scrollLeft(600)">
                                        </div>
                                        <div
                                            :class="{ disabled: translateX + totalWidth <= 600 }"
                                            class="leo-scroll-arrow right"
                                            @click="scrollRight(600)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="title"><span>传送带</span></div>
                            <div class="description">
                                切换箭头的位置默认居中。<br>
                                添加属性 <code>v-scroll</code>，通过鼠标滚轴滚动，左右滑动内容。
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
        name: 'Scroll',
        components: {
            Sider,
            Header,
        },
        data() {
            return {
                placement: 'default',

                translateX: 0,

                list: [
                    { id: 1, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 2, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 3, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 4, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 5, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 6, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 7, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 8, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 9, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 10, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 11, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 12, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 13, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 14, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 15, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 16, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 17, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 18, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 19, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                    { id: 20, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                ],

                visible: false,

                html1: `<div class="leo-form">
                            <div class="leo-form-item">
                                <label class="leo-form-label">箭头位置：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            v-for="x in ['top', 'default', 'bottom']"
                                            :class="{ active: placement === x }"
                                            @click="placement = x"
                                            class="leo-btn">
                                            {{ x }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div
                            :placement="placement"
                            style="width: 640px"
                            class="leo-scroll"
                            v-scroll>
                            <div class="leo-scroll-wrapper" style="height: 100px">
                                <div class="leo-scroll-track" :style="styleObject">
                                    <div
                                        style="width: 90px;height: 90px;border-radius: 3px;box-shadow: 0 1px 6px rgba(0, 0, 0, .2)"
                                        :style="{ backgroundColor: item['backgroundColor'] }"
                                        class="leo-scroll-item"
                                        v-for="item in list">
                                    </div>
                                </div>
                            </div>
                            <div class="leo-scroll-control">
                                <div
                                    :class="{ disabled: translateX >= 0 }"
                                    class="leo-scroll-arrow left"
                                    @click="scrollLeft(600)">
                                </div>
                                <div
                                    :class="{ disabled: translateX + totalWidth <= 600 }"
                                    class="leo-scroll-arrow right"
                                    @click="scrollRight(600)">
                                </div>
                            </div>
                        </div>`,

                java1: `export default {
                            data () {
                                return {
                                    placement: 'default',
                                    translateX: 0,
                                    list: [
                                        { id: 1, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 2, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 3, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 4, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 5, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 6, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 7, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 8, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 9, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 10, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 11, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 12, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 13, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 14, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 15, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 16, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 17, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 18, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 19, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                        { id: 20, backgroundColor: '#' + (~~ (Math.random() * (1 << 24))).toString(16) },
                                    ]
                                }
                            },
                            computed: {
                                totalWidth () {
                                    let width = 600;
                                    let lenght = this.list.length;
                                    return Math.max(width, 100 * lenght)
                                },
                                styleObject () {
                                    return {
                                        width: this.totalWidth + 'px',
                                        transform: 'translateX('+ this.translateX +'px)'
                                    }
                                }
                            },
                            directives: {
                                scroll: {
                                    inserted (el, binding, vnode) {
                                        typeof el.onmousewheel === "undefined"
                                            ? el.addEventListener('DOMMouseScroll', scroll)
                                            : el.addEventListener('mousewheel', scroll);

                                        function scroll(e) {
                                            e.preventDefault();

                                            let self = vnode.context;
                                            let delta = e.wheelDelta ? (e.wheelDelta / 120) : (- e.detail / 3);

                                            delta > 0 ? self.scrollLeft(100) : self.scrollRight(100)
                                        }
                                    }
                                }
                            },
                            methods: {
                                scrollLeft (num) {
                                    let value = this.translateX + num;
                                    this.translateX = Math.min(0, value);
                                },
                                scrollRight (num) {
                                    let width = 600;
                                    let value = this.translateX - num;
                                    this.translateX = Math.max(width - this.totalWidth, value);
                                }
                            }
                        }`

            }
        },
        computed: {
            totalWidth () {
                let width = 600;
                let lenght = this.list.length;
                return Math.max(width, 100 * lenght)
            },
            styleObject () {
                return {
                    width: this.totalWidth + 'px',
                    transform: 'translateX('+ this.translateX +'px)'
                }
            }
        },
        directives: {
            scroll: {
                inserted (el, binding, vnode) {
                    typeof el.onmousewheel === "undefined"
                        ? el.addEventListener('DOMMouseScroll', scroll)
                        : el.addEventListener('mousewheel', scroll);

                    function scroll(e) {
                        e.preventDefault();

                        let self = vnode.context;
                        let delta = e.wheelDelta ? (e.wheelDelta / 120) : (- e.detail / 3);

                        delta > 0 ? self.scrollLeft(100) : self.scrollRight(100)
                    }
                }
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
            },
            scrollLeft (num) {
                let value = this.translateX + num;
                this.translateX = Math.min(0, value);
            },
            scrollRight (num) {
                let width = 600;
                let value = this.translateX - num;
                this.translateX = Math.max(width - this.totalWidth, value);
            }
        }
    }
</script>