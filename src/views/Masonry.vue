<template>
    <div class="masonry-page">
        <h1>Masonry 瀑布流</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <Loader :visible="loading" fix></Loader>
                    <div class="leo-form" inline label-width="80">
                        <div class="leo-form-item">
                            <label class="leo-form-label">关键词：</label>

                            <Inputer v-model="word" style="width: 120px"></Inputer>

                        </div>
                        <div class="leo-form-item leo-form-btn">
                            <div class="leo-btn" color="success" @click="add" shadow bg>添加</div>
                            <div class="leo-btn" color="warning" @click="clear" shadow bg>清空</div>
                        </div>
                    </div>
                    <br>
                    <div v-masonry="{ width: 200, padding: 8 }" class="leo-masonry">
                        <div class="leo-masonry-item" v-for="image in images">
                            <img :src="image" class="leo-masonry-img">
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
    import Loader from '../components/Loader';
    import Inputer from '../components/Inputer';

    export default {
        name: 'Masonry',
        components: { Loader, Inputer },
        data () {
            return {
                visible: false,
                loading: false,

                images: [],
                page: 0,

                word: '赵丽颖',

                html1: `<Loader :visible="loading" fix></Loader>
                        <div class="leo-form" inline label-width="80">
                            <div class="leo-form-item">
                                <label class="leo-form-label">关键词：</label>
                                <Inputer v-model="word" style="width: 120px"></Inputer>
                            </div>
                            <div class="leo-form-item leo-form-btn">
                                <div class="leo-btn" color="success" @click="add" shadow bg>添加</div>
                                <div class="leo-btn" color="warning" @click="clear" shadow bg>清空</div>
                            </div>
                        </div>
                        <br>
                        <div v-masonry="{ width: 200, padding: 8 }" class="leo-masonry">
                            <div class="leo-masonry-item" v-for="image in images">
                                <img :src="image" class="leo-masonry-img">
                            </div>
                        </div>`,

                java1: `import Loader from '../components/Loader';
                        import Inputer from '../components/Inputer';

                        export default {
                            components: { Loader, Inputer },
                            data () {
                                return {
                                    loading: false,

                                    images: [],
                                    page: 0,

                                    word: '赵丽颖'
                                }
                            },
                            methods: {
                                add () {
                                    this.loading = true;
                                    this.ajax({
                                        method: 'GET',
                                        url: 'http://haha/api/image/',
                                        data: {
                                            num: 10,
                                            word: this.word,
                                            page: this.page ++
                                        },
                                        success: (res) => {
                                            this.showImages(res['Data'])
                                        }
                                    })
                                },
                                reset () {
                                    this.images = []
                                },
                                showImages (images, list, index) {
                                    list  = list || [];
                                    index = index || 0;

                                    if (index < images.length) {
                                        let img = new Image();
                                        img.src = images[index];

                                        img.onerror = () => {
                                            this.showImages(images, list, ++index)
                                        };
                                        img.onload = () => {
                                            list.unshift(images[index]);
                                            this.showImages(images, list, ++index)
                                        }
                                    } else {
                                        this.loading = false;
                                        this.images.unshift(...list)
                                    }
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
                this.loading = true;
                this.word === '' ? this.TXApi() : this.BDApi()
            },
            clear () {
                this.page = 1;
                this.images = []
            },
            BDApi () {
                this.ajax({
                    method: 'GET',
                    url: 'http://112.74.174.31:5235/api/image/',
                    data: {
                        num: 10,
                        word: this.word,
                        page: this.page ++
                    },
                    success: (res) => {
                        !res['Status']
                            ? this.TXApi()
                            : this.showImages(res['Data'])

                    }
                })
            },
            TXApi () {
                this.ajax({
                    method: 'GET',
                    url: 'https://api.tianapi.com/meinv/',
                    data: {
                        num: 10,
                        key: '895a630b5f7e9ad87e93c6751cf5b399'
                    },
                    success: (res) => {
                        this.showImages(res.newslist.map(item => item.picUrl))
                    }
                })
            },
            showImages (images, list, index) {
                list  = list || [];
                index = index || 0;

                if (index < images.length) {
                    console.log('第'+ (index + 1) +'张图片');

                    let img = new Image();
                    img.src = images[index];

                    img.onerror = () => {
                        console.log('加载失败');
                        this.showImages(images, list, ++index)
                    };
                    img.onload = () => {
                        list.push(images[index]);
                        this.showImages(images, list, ++index)
                    }
                } else {
                    this.loading = false;
                    this.images.unshift(...list)
                }
            }
        }
    }
</script>