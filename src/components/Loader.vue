<template>
    <transition name="leo-animation-fade">
        <div class="leo-loading" v-if="visible" :class="{ fix: fix, visible: visible }">
            <div class="leo-loading-dot" v-if="type === 'dot'"></div>
            <svg v-else viewBox="25 25 50 50" class="leo-loading-svg">
                <circle cx="50" cy="50" r="20" fill="none" class="leo-loading-circle"></circle>
            </svg>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Loader',
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: 'circular'
            },
            fix: {
                type: Boolean,
                default: false
            }
        }
    }
</script>