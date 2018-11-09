<template>
    <div class="leo-page" :align="align" :size="size">
        <div class="leo-page-total" v-show="showTotal">
            共 {{ total || 0 }} 条
        </div>
        <div class="leo-btn" @click="prevPage" :disabled="!canPrevPage" :size="size">
            <i class="leo-btn-icon" deg="270">&nbsp;</i>
        </div>
        <div
            :class="[{ active: currentPage === page }, typeof page === 'number' ? 'leo-btn' : 'leo-page-ellipsis']"
            @click="typeof page === 'number' && changePage(page)"
            v-for="page in pages"
            :size="size">
            {{ page }}
        </div>
        <div class="leo-btn" @click="nextPage" :disabled="!canNextPage" :size="size">
            <i class="leo-btn-icon" deg="90">&nbsp;</i>
        </div>

        <Selector
            @on-change="changePageSize"
            :options="pageSizeOptions"
            v-model="currentPageSize"
            class="leo-page-sizer"
            style="width: 88px"
            v-show="showSizer"
            :size="size">
        </Selector>

        <div v-show="showElevator" class="leo-page-elevator">
            跳至

            <Inputer
                :parser="val => val.replace(/[^0-9]/g, '')"
                @on-change="changeCurrentPage"
                v-model.number="currentPage"
                style="width: 50px"
                :size="size"
                lazy>
            </Inputer>

            页
        </div>
    </div>
</template>

<script>
    import { oneOf, isInclude, getExtremum } from '../utils/assist';

    import Inputer from '../components/Inputer';
    import Selector from '../components/Selector';

    export default {
        name: 'Pager',
        components: { Inputer, Selector },
        props: {
            total: {
                type: Number,
                default: 0
            },
            around: {
                type: Number,
                default: 1
            },
            current: {
                type: Number,
                default: 1
            },
            align: {
                validator (value) {
                    return oneOf(value, ['left', 'center', 'right']);
                },
                default: 'left'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'default', 'small']);
                },
                default: 'default'
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageSizeOpts: {
                type: Array,
                default () {
                    return [10, 20, 30, 40]
                }
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            showElevator: {
                type: Boolean,
                default: false
            },
            showSizer: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                currentPage: this.current,
                currentPageSize: this.pageSize
            }
        },
        watch: {
            total () {
                isInclude(this.currentPage, 1, this.totalPage) || this.changePage(getExtremum(this.currentPage, 1, this.totalPage))
            },
            current (val) {
                this.currentPage = val;
                isInclude(val, 1, this.totalPage) || this.changePage(getExtremum(val, 1, this.totalPage))
            },
            pageSize (val) {
                this.currentPageSize = val;
                isInclude(this.currentPage, 1, this.totalPage) || this.changePage(getExtremum(this.currentPage, 1, this.totalPage))
            }
        },
        computed: {
            totalCount () {
                return 2 * this.around + 7
            },
            totalPage () {
                return Math.ceil(this.total / this.currentPageSize) || 1;
            },
            canPrevPage () {
                return this.currentPage > 1
            },
            canNextPage () {
                return this.currentPage < this.totalPage
            },
            pageSizeOptions () {
                return this.pageSizeOpts.map(item => {
                    return { label: item + ' 条/页', value: item }
                })
            },
            pages () {
                let pages = [];
                let baseCount = this.totalCount - 4;
                let startPosition = this.around + 3;
                let endPosition = this.totalPage - this.around - 2;

                if (this.totalPage <= this.totalCount - 2) {
                    pages = Array.from({length: this.totalPage}, (v, i) => i + 1);
                } else {
                    if (this.currentPage <= startPosition) {
                        pages = [...Array.from({length: baseCount}, (v, i) => i + 1), "...", this.totalPage]
                    } else if (this.currentPage >= endPosition) {
                        pages = [1, '...', ...Array.from({length: baseCount}, (v, i) => this.totalPage - baseCount + i + 1)]
                    } else {
                        pages = [1, '...', ...Array.from({length: this.around * 2 + 1}, (v, i) => this.currentPage - this.around + i), '...', this.totalPage]
                    }
                }

                return pages
            }
        },
        methods: {
            changePage (page) {
                this.$emit('on-change', page);
            },
            prevPage () {
                let page = this.currentPage - 1;
                this.canPrevPage && this.changePage(page);
            },
            nextPage () {
                let page = this.currentPage + 1;
                this.canNextPage && this.changePage(page);
            },
            changePageSize (size) {
                this.$emit('on-page-size-change', size);
            },
            changeCurrentPage () {
                this.changePage(this.currentPage)
            }
        }
    }
</script>