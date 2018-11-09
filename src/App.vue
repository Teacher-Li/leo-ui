<template>
    <div id="app">

        <Header></Header>

        <div class="body">
            <div class="wrapper">

                <Sider></Sider>

                <div class="content">
                    <transition name="leo-stack" mode="out-in" appear>
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sider from './components/Sider.vue';
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: { Sider, Header }
    }
</script>