<template>
    <div class="loading-page">
        <h1>Pagination 分页</h1>
        <div class="anchor">
            <h2>代码示例</h2>
        </div>
        <div class="card" vertical>
            <div class="demo">
                <div class="example">
                    <div class="leo-form" inline>
                        <div class="leo-form-item">
                            <label class="leo-form-label">总数：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        :class="{ active: showTotal === x.value }"
                                        @click="showTotal = x.value"
                                        v-for="x in list"
                                        class="leo-btn">
                                        {{ x.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">每页数量：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        :class="{ active: showSizer === x.value }"
                                        @click="showSizer = x.value"
                                        v-for="x in list"
                                        class="leo-btn">
                                        {{ x.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">快速跳转：</label>
                            <div class="leo-form-value">
                                <div class="leo-btn-group">
                                    <div
                                        :class="{ active: showElevator === x.value }"
                                        @click="showElevator = x.value"
                                        v-for="x in list"
                                        class="leo-btn">
                                        {{ x.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="leo-form" inline>
                        <div class="leo-form-item">
                            <label class="leo-form-label">周围个数：</label>
                            <input
                                class="leo-form-value leo-form-input"
                                v-model.number.lazy="around"
                                v-regexp="/[^0-9]/g"
                                type="text">
                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">对齐方式：</label>

                            <Selector
                                :options="['left', 'center', 'right']"
                                style="width: 120px"
                                v-model="align">
                            </Selector>

                        </div>
                        <div class="leo-form-item">
                            <label class="leo-form-label">分页尺寸：</label>

                            <Selector
                                :options="['large', 'default', 'small']"
                                style="width: 120px"
                                v-model="size">
                            </Selector>

                        </div>
                    </div>
                    <br>

                    <Pager
                        @on-page-size-change="changePageSize"
                        :show-elevator="showElevator"
                        @on-change="changePage"
                        :show-total="showTotal"
                        :show-sizer="showSizer"
                        :page-size="pageSize"
                        :current="current"
                        :around="around"
                        :total="total"
                        :align="align"
                        :size="size">
                    </Pager>

                </div>
                <div class="title"><span>基本用法</span></div>
                <div class="description">
                    分页尺寸有：大、默认（中）、小。<br>
                    对齐方式有：默认（左对齐）、右对齐和居中。<br>
                    添加属性 <code>show-total</code>，可显示总数。<br>
                    添加属性 <code>show-sizer</code>，可显示分页。<br>
                    添加属性 <code>show-elevator</code>，可显示快速跳转。<br>
                    通过设置 <code>around</code> 的值，可显示当前页码周围的页码个数。
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
    import Pager from '../components/Pager';
    import Selector from '../components/Selector';

    export default {
        name: 'Pagination',
        components: { Pager, Selector },
        data () {
            return {
                visible: false,

                total: 200,
                current: 10,
                pageSize: 10,

                around: 1,
                align: 'left',
                size: 'default',
                showTotal: false,
                showSizer: false,
                showElevator: false,
                list: [{ label: '显示', value: true }, { label: '隐藏', value: false }],

                html1: `<div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">总数：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            :class="{ active: showTotal === x.value }"
                                            @click="showTotal = x.value"
                                            v-for="x in list"
                                            class="leo-btn">
                                            {{ x.label }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">每页数量：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            :class="{ active: showSizer === x.value }"
                                            @click="showSizer = x.value"
                                            v-for="x in list"
                                            class="leo-btn">
                                            {{ x.label }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">快速跳转：</label>
                                <div class="leo-form-value">
                                    <div class="leo-btn-group">
                                        <div
                                            :class="{ active: showElevator === x.value }"
                                            @click="showElevator = x.value"
                                            v-for="x in list"
                                            class="leo-btn">
                                            {{ x.label }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leo-form" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">周围个数：</label>
                                <input
                                    class="leo-form-value leo-form-input"
                                    v-model.number.lazy="around"
                                    v-regexp="/[^0-9]/g"
                                    type="text">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">对齐方式：</label>
                                <Selector
                                    :options="['left', 'center', 'right']"
                                    style="width: 120px"
                                    v-model="align">
                                </Selector>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">分页尺寸：</label>
                                <Selector
                                    :options="['large', 'default', 'small']"
                                    style="width: 120px"
                                    v-model="size">
                                </Selector>
                            </div>
                        </div>
                        <br>
                        <Pager
                            @on-page-size-change="changePageSize"
                            :show-elevator="showElevator"
                            @on-change="changePage"
                            :show-total="showTotal"
                            :show-sizer="showSizer"
                            :page-size="pageSize"
                            :current="current"
                            :around="around"
                            :total="total"
                            :align="align"
                            :size="size">
                        </Pager>`,

                java1: `import Pager from '../components/Pager';
                        import Selector from '../components/Selector';

                        export default {
                            components: { Pager, Selector },
                            data () {
                                return {
                                    total: 200,
                                    current: 10,
                                    pageSize: 10,

                                    around: 1,
                                    align: 'left',
                                    size: 'default',
                                    showTotal: false,
                                    showSizer: false,
                                    showElevator: false,
                                    list: [{ label: '显示', value: true }, { label: '隐藏', value: false }]
                                }
                            },
                            methods: {
                                changePage (page) {
                                    this.current = page;
                                },
                                changePageSize (size) {
                                    this.pageSize = size;
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
            changePage (page) {
                this.current = page;
            },
            changePageSize (size) {
                this.pageSize = size;
            }
        }
    }
</script>