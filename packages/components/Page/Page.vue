<template>
  <div :class="`${ prefixCls } ${ size } ${ align }`">
    <div :class="`${ prefixCls }-total`" v-show="showTotal">
      共 {{ total || 0 }} 条
    </div>

    <o-button
      :type="simple ? 'text' : ''"
      :disabled="!canPrevPage"
      @on-click="prevPage"
      :size="size">
      <i :class="`${ $PrefixCls }-button-icon`" deg="270">&nbsp;</i>
    </o-button>

    <template v-if="simple">
      <template v-for="page in pages">
        <div
          v-if="typeof page === 'string'"
          :class="`${ prefixCls }-ellipsis`">

          <o-icon type="ellipsis" size="16"></o-icon>

        </div>

        <o-button
          :custom="currentPage === page ? 'primary' : ''"
          @on-click="changePage(page)"
          :size="size"
          type="text"
          v-else>
          {{ page }}
        </o-button>
      </template>
    </template>
    <template v-else>
      <template v-for="page in pages">
        <div
          v-if="typeof page === 'string'"
          :class="`${ prefixCls }-ellipsis`">

          <o-icon type="ellipsis" size="16"></o-icon>

        </div>

        <o-button
          :active="currentPage === page"
          @on-click="changePage(page)"
          :size="size"
          v-else>
          {{ page }}
        </o-button>
      </template>
    </template>

    <o-button
      :type="simple ? 'text' : ''"
      :disabled="!canNextPage"
      @on-click="nextPage"
      :size="size">
      <i :class="`${ $PrefixCls }-button-icon`" deg="90">&nbsp;</i>
    </o-button>

    <div v-show="showSizer" :class="`${ prefixCls }-sizer`">

      <o-select
        @on-change="changePageSize"
        :options="pageSizeOptions"
        v-model="currentPageSize"
        :placement="placement"
        style="width: 80px"
        :size="size">
      </o-select>

    </div>
    <div v-show="showElevator" :class="`${ prefixCls }-elevator`">
      跳至

      <o-input
        @on-change="changeCurrentPage"
        v-model="currentPage"
        style="width: 48px"
        formatter="number"
        :maxlength="10"
        :class="size"
        lazy>
      </o-input>

      页
    </div>
  </div>
</template>

<script>
  import oIcon from '~/components/Icon';
  import oInput from '~/components/Input';
  import oButton from '~/components/Button';
  import oSelect from '~/components/Select';

  import { isInclude, getExtremum } from '~/utils/assist';

  export default {
    name: 'oPage',
    components: { oIcon, oInput, oButton, oSelect },
    props: {
      size: {
        validator (value) {
          return ['large', 'small', 'mini', ''].includes(value);
        },
        default: ''
      },
      align: {
        validator (value) {
          return ['left', 'center', 'right'].includes(value);
        },
        default: 'left'
      },
      placement: {
        validator (value) {
          return ['top', 'bottom'].includes(value);
        },
        default: 'bottom'
      },
      total: {
        type: Number,
        default: 0
      },
      around: {
        type: Number,
        validator (value) {
          return value >= 0
        },
        default: 1
      },
      current: {
        type: Number,
        default: 1
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
      simple: {
        type: Boolean,
        default: false
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
      }
    },
    data () {
      return {
        prefixCls: `${ this.$PrefixCls }-page`,

        currentPage: this.current,
        currentPageSize: this.pageSize
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
            pages = [...Array.from({length: baseCount}, (v, i) => i + 1), "...", this.totalPage];
          } else if (this.currentPage >= endPosition) {
            pages = [1, '...', ...Array.from({length: baseCount}, (v, i) => this.totalPage - baseCount + i + 1)];
          } else {
            pages = [1, '...', ...Array.from({length: this.around * 2 + 1}, (v, i) => this.currentPage - this.around + i), '...', this.totalPage];
          }
        }

        return pages;
      }
    },
    watch: {
      total () {
        isInclude(this.currentPage, 1, this.totalPage) || this.changePage(getExtremum(this.currentPage, 1, this.totalPage));
      },
      current (val) {
        this.currentPage = val;
        isInclude(val, 1, this.totalPage) || this.changePage(getExtremum(val, 1, this.totalPage));
      },
      pageSize (val) {
        this.currentPageSize = val;
        isInclude(this.currentPage, 1, this.totalPage) || this.changePage(getExtremum(this.currentPage, 1, this.totalPage));
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
        this.changePage(this.currentPage);
      }
    }
  }
</script>