<template>
  <div :class="`${ $LEO.prefix }-edit`">
    <div :class="`${ $LEO.prefix }-animation ${ align }`" :style="{ height: height + 'px' }">
      <transition :name="`${ $LEO.prefix }-shove-right`">
        <div v-if="edit" :class="`${ $LEO.prefix }-animation-item`" key="action">

          <o-button-group :size="size" :align="align">
            <o-button
              :icon="type === 'text' ? '' : btnIcon[2]"
              @on-click="$emit('on-cancel')"
              custom="warning"
              type="text">
              {{ type === 'icon' ? '' : btnText[2] }}
            </o-button>
            <o-button
              :icon="type === 'text' ? '' : btnIcon[1]"
              :disabled="disabled"
              @on-click="confirm"
              :loading="loading"
              custom="success"
              type="text">
              {{ type === 'icon' ? '' : btnText[1] }}
            </o-button>
          </o-button-group>

        </div>
        <div v-else :class="`${ $LEO.prefix }-animation-item`" key="edit">

          <o-button
            :icon="type === 'text' ? '' : btnIcon[0]"
            @on-click="$emit('change', true)"
            custom="primary"
            :size="size"
            type="text">
            {{ type === 'icon' ? '' : btnText[0] }}
          </o-button>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { oneOf } from '@/utils/assist';

  export default {
    name: 'Edit',
    model: {
      prop: 'edit',
      event: 'change'
    },
    props: {
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small', 'mini', ''])
        },
        default: ''
      },
      type: {
        validator (value) {
          return oneOf(value, ['text', 'icon', ''])
        },
        default: ''
      },
      align: {
        validator (value) {
          return oneOf(value, ['left', 'right'])
        },
        default: 'left'
      },
      height: {
        type: Number,
        default () {
          let height = 0;

          switch (this.size) {
            case 'large':
              height = 36;

              break;
            case 'small':
              height = 28;

              break;
            case 'mini':
              height = 24;

              break;
            default:
              height = 32
          }
          return height
        }
      },
      btnText: {
        type: Array,
        default () { return ['编辑', '确定', '取消'] }
      },
      btnIcon: {
        type: Array,
        default () { return ['edit', 'confirm', 'cancel'] }
      },
      edit: {
        type: Boolean,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false
      }
    },
    watch: {
      edit (newValue) {
        if (!newValue) this.loading = false;
      }
    },
    methods: {
      confirm () {
        if (!this.disabled) {
          this.loading = true;
          this.$emit('on-confirm');
        }
      }
    }
  }
</script>