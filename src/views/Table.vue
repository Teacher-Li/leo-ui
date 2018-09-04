<template>
    <div class="form-page">

        <Header></Header>

        <div class="body">
            <div class="wrapper">

                <Sider></Sider>

                <div class="content">
                    <h1>Table 表格</h1>
                    <div class="anchor">
                        <h2>代码示例</h2>
                    </div>
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="leo-table">
                                <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                    <div class="leo-table-head">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th v-for="column in columns">{{ column['label'] }}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="leo-table-body">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <tbody>
                                                <tr v-for="row in data">
                                                    <td v-for="column in columns">{{ row[column['key']] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="title"><span>基础用法</span></div>
                            <div class="description">
                                表格的最简单用法。
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
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="leo-table">
                                <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                    <div class="leo-table-head">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th v-for="column in columns">{{ column['label'] }}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="leo-table-body">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <tbody>
                                                <tr
                                                    :class="className[parseInt(Math.random() * className.length)]"
                                                    v-for="row in data">
                                                    <td v-for="column in columns">{{ row[column['key']] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="title"><span>行样式</span></div>
                            <div class="description">
                                样式类型有：新增行、删除行以及四种颜色背景。<br>
                                通过设置 <code>tr</code> 的 <code>class</code> 值为 <code>new</code>、 <code>old</code>、<code>active</code>、 <code>success</code>、 <code>warning</code>、 <code>error</code>
                            </div>
                        </div>
                        <div class="code" :class="{ visible : visible2 }">
                            <div class="html">
                                <textarea type="text" :value="html2" id="html2"></textarea>
                                <a @click="copy($event, 'html2')">Copy</a>
                                <pre>                    {{ html2 }}</pre>
                            </div>
                            <div class="js">
                                <textarea type="text" :value="java2" id="java2"></textarea>
                                <a @click="copy($event, 'java2')">Copy</a>
                                <pre>                    {{ java2 }}</pre>
                            </div>
                        </div>
                        <div class="more" :class="{ open: visible2 }" @click="visible2 = !visible2"></div>
                    </div>
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="leo-table" v-drag>
                                <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                    <div class="leo-table-head">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th v-for="column in columns">{{ column['label'] }}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="leo-table-body" style="max-height: 100px">
                                        <table>
                                            <colgroup>
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <tbody>
                                                <tr v-for="row in data">
                                                    <td v-for="column in columns">{{ row[column['key']] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="title"><span>固定表头</span></div>
                            <div class="description">
                                通过设置 <code>max-height</code> 给表格指定最大高度后，会自动固定表头，通过鼠标上下滚动表格。<br>
                                添加属性 <code>v-drag</code>，通过鼠标点击左右拖动表格。
                            </div>
                        </div>
                        <div class="code" :class="{ visible : visible3 }">
                            <div class="html">
                                <textarea type="text" :value="html3" id="html3"></textarea>
                                <a @click="copy($event, 'html3')">Copy</a>
                                <pre>                    {{ html3 }}</pre>
                            </div>
                            <div class="js">
                                <textarea type="text" :value="java3" id="java3"></textarea>
                                <a @click="copy($event, 'java3')">Copy</a>
                                <pre>                    {{ java3 }}</pre>
                            </div>
                        </div>
                        <div class="more" :class="{ open: visible3 }" @click="visible3 = !visible3"></div>
                    </div>
                    <div class="card" vertical>
                        <div class="demo">
                            <div class="leo-table">
                                <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                    <div class="leo-table-head">
                                        <table>
                                            <colgroup>
                                                <col width="34">
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <label
                                                            class="leo-table-checkbox"
                                                            @click="selectedAll"
                                                            :class="classObject">
                                                            <input type="checkbox" v-model="selectAll">
                                                        </label>
                                                    </th>
                                                    <th v-for="column in columns">{{ column['label'] }}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="leo-table-body">
                                        <table>
                                            <colgroup>
                                                <col width="34">
                                                <col v-for="column in columns" :width="column['width']">
                                            </colgroup>
                                            <tbody>
                                                <tr v-for="row in data">
                                                    <td>
                                                        <label
                                                            :class="{ 'checked': select.indexOf(row.id) > -1 }"
                                                            class="leo-table-checkbox">
                                                            <input type="checkbox" :value="row.id" v-model="select">
                                                        </label>
                                                    </td>
                                                    <td v-for="column in columns">{{ row[column['key']] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="title"><span>可选择</span></div>
                            <div class="description">
                                第一列是联动的选择框。
                            </div>
                        </div>
                        <div class="code" :class="{ visible : visible4 }">
                            <div class="html">
                                <textarea type="text" :value="html4" id="html4"></textarea>
                                <a @click="copy($event, 'html4')">Copy</a>
                                <pre>                    {{ html4 }}</pre>
                            </div>
                            <div class="js">
                                <textarea type="text" :value="java4" id="java4"></textarea>
                                <a @click="copy($event, 'java4')">Copy</a>
                                <pre>                    {{ java4 }}</pre>
                            </div>
                        </div>
                        <div class="more" :class="{ open: visible4 }" @click="visible4 = !visible4"></div>
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
        name: 'Table',
        components: {
            Sider,
            Header,
        },

        data () {
            return {
                select: [],
                selectAll: false,

                className: ['active', 'success', 'warning', 'error', 'new', 'old'],
                columns: [
                    { key: 'name', label: '姓名', width: 100 },
                    { key: 'sex', label: '性别', width: 100 },
                    { key: 'age', label: '年龄', width: 100 }
                ],
                data: [
                    { id: 0, name: 'Leo', sex: '男', age: 26 },
                    { id: 1, name: 'LiYu', sex: '男', age: 26 },
                    { id: 3, name: '黎宇', sex: '男', age: 26 },
                    { id: 4, name: '赵丽颖', sex: '女', age: 29 }
                ],

                visible1: false,
                visible2: false,
                visible3: false,
                visible4: false,

                html1: `<div class="leo-table">
                            <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                <div class="leo-table-head">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th v-for="column in columns">{{ column['label'] }}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="leo-table-body">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <tbody>
                                            <tr v-for="row in data">
                                                <td v-for="column in columns">{{ row[column['key']] }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`,

                html2: `<div class="leo-table">
                            <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                <div class="leo-table-head">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th v-for="column in columns">{{ column['label'] }}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="leo-table-body">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <tbody>
                                            <tr
                                                :class="className[parseInt(Math.random() * className.length)]"
                                                v-for="row in data">
                                                <td v-for="column in columns">{{ row[column['key']] }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`,

                html3: `<div class="leo-table" v-drag>
                            <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                <div class="leo-table-head">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th v-for="column in columns">{{ column['label'] }}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="leo-table-body" style="max-height: 100px">
                                    <table>
                                        <colgroup>
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <tbody>
                                            <tr v-for="row in data">
                                                <td v-for="column in columns">{{ row[column['key']] }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`,

                html4: `<div class="leo-table">
                            <div class="leo-table-wrapper" :style="{ 'min-width': minWidth + 'px' }">
                                <div class="leo-table-head">
                                    <table>
                                        <colgroup>
                                            <col width="34">
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label
                                                        class="leo-table-checkbox"
                                                        @click="selectedAll"
                                                        :class="classObject">
                                                        <input type="checkbox" v-model="selectAll">
                                                    </label>
                                                </th>
                                                <th v-for="column in columns">{{ column['label'] }}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="leo-table-body">
                                    <table>
                                        <colgroup>
                                            <col width="34">
                                            <col v-for="column in columns" :width="column['width']">
                                        </colgroup>
                                        <tbody>
                                            <tr v-for="row in data">
                                                <td>
                                                    <label
                                                        :class="{ 'checked': select.indexOf(row.id) > -1 }"
                                                        class="leo-table-checkbox">
                                                        <input type="checkbox" :value="row.id" v-model="select">
                                                    </label>
                                                </td>
                                                <td v-for="column in columns">{{ row[column['key']] }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`,

                java1: `export default {
                            data () {
                                return {
                                    columns: [
                                        { key: 'name', label: '姓名', width: 100 },
                                        { key: 'sex', label: '性别', width: 100 },
                                        { key: 'age', label: '年龄', width: 100 }
                                    ],
                                    data: [
                                        { id: 0, name: 'Leo', sex: '男', age: 26 },
                                        { id: 1, name: 'LiYu', sex: '男', age: 26 },
                                        { id: 3, name: '黎宇', sex: '男', age: 26 },
                                        { id: 4, name: '赵丽颖', sex: '女', age: 29 }
                                    ],
                                }
                            },
                            computed: {
                                minWidth () {
                                    return this.columns.map(column => column['width'])
                                        .reduce((total, item) => total + item)
                                }
                            }
                        }`,

                java2: `export default {
                            data () {
                                return {
                                    className: ['active', 'success', 'warning', 'error', 'new', 'old'],
                                    columns: [
                                        { key: 'name', label: '姓名', width: 100 },
                                        { key: 'sex', label: '性别', width: 100 },
                                        { key: 'age', label: '年龄', width: 100 }
                                    ],
                                    data: [
                                        { id: 0, name: 'Leo', sex: '男', age: 26 },
                                        { id: 1, name: 'LiYu', sex: '男', age: 26 },
                                        { id: 3, name: '黎宇', sex: '男', age: 26 },
                                        { id: 4, name: '赵丽颖', sex: '女', age: 29 }
                                    ],
                                }
                            },
                            computed: {
                                minWidth () {
                                    return this.columns.map(column => column['width'])
                                        .reduce((total, item) => total + item)
                                }
                            }
                        }`,

                java3: `export default {
                            data () {
                                return {
                                    columns: [
                                        { key: 'name', label: '姓名', width: 100 },
                                        { key: 'sex', label: '性别', width: 100 },
                                        { key: 'age', label: '年龄', width: 100 }
                                    ],
                                    data: [
                                        { id: 0, name: 'Leo', sex: '男', age: 26 },
                                        { id: 1, name: 'LiYu', sex: '男', age: 26 },
                                        { id: 3, name: '黎宇', sex: '男', age: 26 },
                                        { id: 4, name: '赵丽颖', sex: '女', age: 29 }
                                    ],
                                }
                            },
                            computed: {
                                minWidth () {
                                    return this.columns.map(column => column['width'])
                                        .reduce((total, item) => total + item)
                                }
                            },
                            directives: {
                                drag: {
                                    inserted (el) {
                                        let prevX = 0;
                                        let isDrag = false;
                                        let child = el.firstElementChild;
                                        let openHand = 'url(//webmap0.bdimg.com/image/api/openhand.cur) 8 8, default';
                                        let closeHand = 'url(//webmap0.bdimg.com/image/api/closedhand.cur) 8 8, default';

                                        el.style.cursor = openHand;
                                        el.style.userSelect = 'none';
                                        child.style.transform = 'translateX(0px)';

                                        el.addEventListener('mousedown', (e) => {
                                            isDrag = true;
                                            prevX = e.clientX;
                                            el.style.cursor = closeHand;
                                        });
                                        el.addEventListener('mousemove', (e) => {
                                            if (isDrag) {
                                                let leftWidth = el.offsetWidth - child.offsetWidth;
                                                let value = parseInt(child.style.transform.split('(')[1]);

                                                value += e.clientX - prevX;
                                                prevX = e.clientX;
                                                value = Math.min(Math.max(value, leftWidth), 0);

                                                child.style.transform = 'translateX(' + value + 'px)';
                                            }
                                        });
                                        el.addEventListener('mouseup', () => {
                                            isDrag = false;
                                            el.style.cursor = openHand;
                                        });
                                        window.addEventListener('resize', () => {
                                            let leftWidth = el.offsetWidth - child.offsetWidth;
                                            let value = parseInt(child.style.transform.split('(')[1]);

                                            value = (Math.max(leftWidth, value));

                                            child.style.transform = 'translateX(' + value + 'px)';
                                        })
                                    }
                                }
                            }
                        }`,

                java4: `export default {
                            data () {
                                return {
                                    columns: [
                                        { key: 'name', label: '姓名', width: 100 },
                                        { key: 'sex', label: '性别', width: 100 },
                                        { key: 'age', label: '年龄', width: 100 }
                                    ],
                                    data: [
                                        { id: 0, name: 'Leo', sex: '男', age: 26 },
                                        { id: 1, name: 'LiYu', sex: '男', age: 26 },
                                        { id: 3, name: '黎宇', sex: '男', age: 26 },
                                        { id: 4, name: '赵丽颖', sex: '女', age: 29 }
                                    ],
                                }
                            },
                            computed: {
                                minWidth () {
                                    return this.columns.map(column => column['width'])
                                        .reduce((total, item) => total + item)
                                },
                                classObject () {
                                    return {
                                        'checked': this.selectAll,
                                        'indeterminate': !this.selectAll && this.select.length > 0
                                    }
                                }
                            },
                            watch: {
                                'select' () {
                                    this.selectAll = this.select.length > 0 && this.select.length === this.data.length;
                                },
                            },
                            methods: {
                                selectedAll () {
                                    this.select = this.selectAll
                                        ? []
                                        : this.data.map(item => item.id);
                                }
                            }
                        }`
            }
        },
        computed: {
            minWidth () {
                return this.columns.map(column => column['width'])
                    .reduce((total, item) => total + item)
            },
            classObject () {
                return {
                    'checked': this.selectAll,
                    'indeterminate': !this.selectAll && this.select.length > 0
                }
            }
        },
        watch: {
            'select'() {
                this.selectAll = this.select.length > 0 && this.select.length === this.data.length;
            }
        },
        directives: {
            drag: {
                inserted (el) {
                    let prevX = 0;
                    let isDrag = false;
                    let child = el.firstElementChild;
                    let openHand = 'url(//webmap0.bdimg.com/image/api/openhand.cur) 8 8, default';
                    let closeHand = 'url(//webmap0.bdimg.com/image/api/closedhand.cur) 8 8, default';

                    el.style.cursor = openHand;
                    el.style.userSelect = 'none';
                    child.style.transform = 'translateX(0px)';

                    el.addEventListener('mousedown', (e) => {
                        isDrag = true;
                        prevX = e.clientX;
                        el.style.cursor = closeHand;
                    });
                    el.addEventListener('mousemove', (e) => {
                        if (isDrag) {
                            let leftWidth = el.offsetWidth - child.offsetWidth;
                            let value = parseInt(child.style.transform.split('(')[1]);

                            value += e.clientX - prevX;
                            prevX = e.clientX;
                            value = Math.min(Math.max(value, leftWidth), 0);

                            child.style.transform = 'translateX(' + value + 'px)';
                        }
                    });
                    el.addEventListener('mouseup', () => {
                        isDrag = false;
                        el.style.cursor = openHand;
                    });
                    window.addEventListener('resize', () => {
                        let leftWidth = el.offsetWidth - child.offsetWidth;
                        let value = parseInt(child.style.transform.split('(')[1]);

                        value = (Math.max(leftWidth, value));

                        child.style.transform = 'translateX(' + value + 'px)';
                    })
                }
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
                    }, 5000);
                }
            },
            selectedAll () {
                this.select = this.selectAll
                    ? []
                    : this.data.map(item => item.id)
            }
        }
    }
</script>