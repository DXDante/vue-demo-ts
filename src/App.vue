<template>
    <div id="nav">
        <router-link :to="routeItem.path" v-for="(routeItem, routeIndex) of navigates" :key="routeIndex">{{ routeItem.name }}</router-link>
    </div>
    <router-view />
</template>

<script lang="ts" setup>
    import { onMounted } from "vue";

    // 主导航数据
    const navigates: Array<{ path: string, name: string }> = [
        { path: '/home', name: 'home' },
        { path: '/about', name: 'about' },
        { path: '/learn-typescript', name: 'learn-typescript' }
    ]


    onMounted(() => {
        console.log('App onMounte ');
    })
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 15px 30px;

    a {
        margin: 0 10px;
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
