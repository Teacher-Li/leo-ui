<template>
    <div class="preview-page">
        <h1>Preview 预览</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-preview" v-drag>
                        <div class="leo-animation" style="height: 240px">
                            <transition name="leo-animation-shove">
                                <div
                                    class="leo-preview-wrapper leo-animation-item"
                                    v-if="parsed"
                                    key="parsed">
                                    <div
                                        @click="clearFile"
                                        class="leo-btn"
                                        color="warning"
                                        size="small"
                                        shadow
                                        bg>
                                        取消
                                    </div>
                                    <br><br>
                                    <div class="leo-table">
                                        <div class="leo-table-track">
                                            <div class="leo-table-head">
                                                <table>
                                                    <colgroup>
                                                        <col v-for="column in fileData['key']" width="100">
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th v-for="column in fileData['key']">{{ column }}</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                            <div class="leo-table-body" style="max-height: 158px">
                                                <table>
                                                    <colgroup>
                                                        <col v-for="column in fileData['key']" width="100">
                                                    </colgroup>
                                                    <tbody>
                                                        <tr v-for="row in fileData['value']">
                                                            <td v-for="cell in row">{{ cell }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="leo-preview-csv leo-animation-item"
                                    @dragleave.prevent="dragOver = false"
                                    @dragover.prevent="dragOver = true"
                                    style="width: 520px; height: 240px"
                                    :class="{ active: dragOver }"
                                    @click="$refs.file.click()"
                                    key="drag"
                                    v-else>
                                    <input ref="file" type="file" @change="changeFile">
                                    <div class="leo-preview-tip">将文件拖到此处，或<em>点击上传</em></div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="title"><span>CSV 文件预览</span></div>
                <div class="description">
                    最基本用法，点击上传，一次选择一个文件。<br>
                    添加属性 <code>v-drag</code>，可以拖拽上传文件。<a @click="downloadCSV">(去下载CSV示例)</a>
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
    import csv from '../utils/csv';

    export default {
        name: 'Preview',
        data () {
            return {
                visible: false,

                parsed: false,
                dragOver: false,

                fileData: null,

                html1: `<div class="leo-preview" v-drag>
                            <div class="leo-animation" style="height: 240px">
                                <transition name="leo-animation-shove">
                                    <div
                                        class="leo-preview-wrapper leo-animation-item"
                                        v-if="parsed"
                                        key="parsed">
                                        <div
                                            @click="clearFile"
                                            class="leo-btn"
                                            color="warning"
                                            size="small"
                                            shadow
                                            bg>
                                            取消
                                        </div>
                                        <br><br>
                                        <div class="leo-table">
                                            <div class="leo-table-track">
                                                <div class="leo-table-head">
                                                    <table>
                                                        <colgroup>
                                                            <col v-for="column in fileData['key']" width="100">
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th v-for="column in fileData['key']">{{ column }}</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="leo-table-body" style="max-height: 158px">
                                                    <table>
                                                        <colgroup>
                                                            <col v-for="column in fileData['key']" width="100">
                                                        </colgroup>
                                                        <tbody>
                                                            <tr v-for="row in fileData['value']">
                                                                <td v-for="cell in row">{{ cell }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="leo-preview-csv leo-animation-item"
                                        @dragleave.prevent="dragOver = false"
                                        @dragover.prevent="dragOver = true"
                                        style="width: 520px; height: 240px"
                                        :class="{ active: dragOver }"
                                        @click="$refs.file.click()"
                                        key="drag"
                                        v-else>
                                        <input ref="file" type="file" @change="changeFile">
                                        <div class="leo-preview-tip">将文件拖到此处，或<em>点击上传</em></div>
                                    </div>
                                </transition>
                            </div>
                        </div>`,

                java1: `import csv from '../utils/csv';

                        export default {
                            data () {
                                return {
                                    parsed: false,
                                    dragOver: false,

                                    fileData: null
                                }
                            },
                            computed: {

                            },
                            directives: {
                                drag: {
                                    inserted (el, binding, vnode) {
                                        el.addEventListener('drop', (e) => {
                                            let self = vnode.context;
                                            let files = e['dataTransfer']['files'];

                                            e.preventDefault();
                                            self.dragOver = false;
                                            files.length > 0 && self.uploadFile(files[0])
                                        });
                                    }
                                }
                            },
                            methods: {
                                changeFile (e) {
                                    let files = e.target.files;

                                    if (files.length > 0) {
                                        this.uploadFile(files[0]);
                                        this.$refs.file.value = null;
                                    }
                                },
                                uploadFile (file) {
                                    let type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
                                    if (type.indexOf(file.type) < 0) {
                                        console.log("您拖的不是CSV文件！");
                                    } else {
                                        let reader = new FileReader();
                                        reader.readAsText(file, "GBK");
                                        reader.onload = (e) => {
                                            this.parsed = true;
                                            this.fileData = CSV.parse(e.target.result);
                                        }
                                    }
                                },
                                clearFile () {
                                    this.parsed = false;
                                    this.fileData = null;
                                }
                            }
                        }`

            }
        },
        directives: {
            drag: {
                inserted (el, binding, vnode) {
                    el.addEventListener('drop', (e) => {
                        let self = vnode.context;
                        let files = e['dataTransfer']['files'];

                        e.preventDefault();
                        self.dragOver = false;
                        files.length > 0 && self.uploadFile(files[0])
                    });
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
                    }, 5000)
                }
            },
            downloadCSV () {
                this.$router.push({ name: 'Table', params: { download: true }});
            },
            changeFile (e) {
                let files = e.target.files;

                if (files.length > 0) {
                    this.uploadFile(files[0]);
                    this.$refs.file.value = null;
                }
            },
            uploadFile (file) {
                let type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
                if (type.indexOf(file.type) < 0) {
                    console.log("您拖的不是CSV文件！");
                } else {
                    let reader = new FileReader();
                    reader.readAsText(file, "GBK");
                    reader.onload = (e) => {
                        this.parsed = true;
                        this.fileData = csv.parse(e.target.result);
                    }
                }
            },
            clearFile () {
                this.parsed = false;
                this.fileData = null;
            }
        }
    }
</script>