<template>
    <div class="loading-page">
        <h1>Tooltip 文字提示</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card">
            <div class="demo">
                <div class="example">
                    <span v-tooltip.original="{ length: 20 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ length: 24 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ length: 30, width: 240 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ length: 40 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br><br>
                    <span v-tooltip="{ theme: 'dark', length: 24, width: 240 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ theme: 'primary', length: 26 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ theme: 'info', length: 28, width: 240 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ theme: 'success', length: 30 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ theme: 'warning', length: 32, width: 240 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                    <br>
                    <span v-tooltip="{ theme: 'error', length: 34 }">
                        设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                    </span>
                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    通过设置 <code>length</code> 值可设置文字最大长度，文字长度未达到该值，不做任何改变。<br>
                    通过设置 <code>width</code> 值可设置窗口最大宽度，文本将会自动换行，最小宽度值为120。<br>
                    主题色有：<code>light</code>（默认）、<code>dark</code>、<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>。<br>
                    通过添加修饰符 <code>original</code> 可以禁用主题，使用浏览器自带 <code>title</code> 样式。
                </div>
            </div>
            <div class="code">
                <textarea type="text" :value="html1" id="html1"></textarea>
                <a @click="copy($event, 'html1')">Copy</a>
                <pre>                    {{ html1 }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tooltip',
        data () {
            return {
                visible: false,

                html1: `<span v-tooltip.original="{ length: 20 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ length: 24 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ length: 30, width: 240 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ length: 40 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br><br>
                        <span v-tooltip="{ theme: 'dark', length: 24, width: 240 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ theme: 'primary', length: 26 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ theme: 'info', length: 28, width: 240 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ theme: 'success', length: 30 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ theme: 'warning', length: 32, width: 240 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>
                        <br>
                        <span v-tooltip="{ theme: 'error', length: 34 }">
                            设置文字最大长度值，超出部分由省略号代替，鼠标悬停之后，会弹出全部文字窗口。
                        </span>`
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