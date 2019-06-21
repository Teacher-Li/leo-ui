<template>
  <div :class="`${ prefix }`" @click.stop="handleClick">
    <template v-if="dragable">
      <div
        @dragleave.prevent="dragOver = false"
        @dragover.prevent="dragOver = true"
        :style="{ height: height + 'px' }"
        @drop.prevent="handleDrop"
        @paste="handlePaste"
        :class="dragClasses">

          <o-icon
            :class="`${ prefix }-icon`"
            :size="iconSize"
            type="upload">
          </o-icon>

      </div>
      <div :class="`${ prefix }-text`"><slot></slot></div>
    </template>
    <template v-else>
      <div :class="selectClasses">
        <span v-if="!fileName"><slot></slot></span>
        {{ fileName }}

        <o-icon
          :class="`${ prefix }-icon`"
          :size="iconSize"
          type="upload">
        </o-icon>

      </div>
    </template>

    <input ref="file" type="file" @change="handleChange">
  </div>
</template>

<script>
  export default {
    name: 'UpLoad',
    props: {
      encode: {
        validator (value) {
          return ['GBK', 'UTF-8'].includes(value);
        },
        default: 'GBK'
      },
      size: {
        validator (value) {
          return ['large', 'small', 'mini', ''].includes(value);
        },
        default: ''
      },
      suffix: {
        type: Array,
        default: []
      },
      height: {
        type: Number,
        default: 200
      },
      dragable: {
        type: Boolean,
        default: false
      },
      pastable: {
        type: Boolean,
        default: false
      }
    },
    inject: {
      form: { default: null }
    },
    data () {
      return {
        prefix: `${ this.$LEO.prefix }-upload`,

        dragOver: false,
        fileName: null
      }
    },
    computed: {
      dragClasses () {
        return [
          `${ this.prefix }-drag`,
          {
            active: this.dragOver
          }
        ]
      },
      selectClasses () {
        return [
          `${ this.prefix }-select`,
          this.form ? this.form.size : this.size
        ]
      },
      iconSize () {
        return this.dragable
          ? 60
          : this.size === 'mini'
            ? 14
            : this.size === 'small' ? 16 : 18
      }
    },
    methods: {
      handleClick () {
        this.$refs.file.click();
      },
      handleChange (e) {
        const files = e.target.files;

        if (files.length > 0) {
          this.uploadFile(files[0]);
          this.$refs.file.value = null;
        }
      },
      handlePaste (e) {
        const files = e['clipboardData']['files'];
        this.pastable && this.uploadFile(files[0]);
      },
      handleDrop (e) {
        const files = e['dataTransfer']['files'];

        this.dragOver = false;
        this.uploadFile(files[0]);
      },
      uploadFile (file) {
        let validator = true;

        if (this.suffix.length > 0) {
          const suffix = file.name.split('.').pop().toLocaleLowerCase();
          validator = this.suffix.some(item => item.toLocaleLowerCase() === suffix);
        }

        if (validator) {
          let reader = new FileReader();

          reader.readAsText(file, this.encode);
          reader.onload = e => {
            this.fileName = file.name;
            this.$emit('on-success', Object.assign(file, { data: e.target.result }));
          }
        } else {
          this.$emit('on-error');
        }
      }
    }
  }
</script>