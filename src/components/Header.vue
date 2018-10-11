<template>
    <div class="header">
        <div class="header-inner">
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
            </div>
            <div class="nav">
                <div class="menu"></div>
                <div class="tool">
                    <a class="github" href="https://github.com/lihaomu/leo">
                        <Icon type="github" size="24"></Icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../components/Icon';

    export default {
        name: 'Header',
        components: { Icon }
    }
</script>