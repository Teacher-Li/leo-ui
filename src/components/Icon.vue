<template>
    <svg
        @click="handleClick"
        aria-hidden="true"
        :font-size="size"
        class="leo-icon"
        :color="color">
        <use :xlink:href="'#leo-icon-' + type"></use>
    </svg>
</template>

<script>
    export default {
        name: 'Icon',
        props: {
            type: {
                type: String,
                default: ''
            },
            size: {
                type: [Number, String],
                default: 14
            },
            color: String
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }
</script>