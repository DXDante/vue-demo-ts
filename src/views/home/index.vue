<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png" />
        <!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App"></hello-world> -->
        <h2 class="test-title">TEST</h2>
        <p>{{ testContent }}</p>
    </div>
</template>

<script lang="ts">
// , defineAsyncComponent
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        // helloWorld: defineAsyncComponent(() => import("@/components/hello-world/index.vue"))
    },
    setup () {
        const testTitleStyleMap = {
            color: '#ea5413',
            fontSize: '18px'
        }
        const testTitleFontSize = '24px';
        const testMessages: Array<string|null> = ['测试文字1', null];


        onMounted(() => {
            console.log('onMounted ', testMessages);
        })

        
        return {
            testTitleStyleMap,
            testTitleFontSize
        }
    }
});
</script>

<!-- 直接使用 setup
<script lang="ts" setup>
    /* eslint-disable */
    import { defineProps } from "vue";

    defineProps({
        message: { type: String }
    })

    const testTitleStyleMap: object = {
        color: '#ea5413',
        fontSize: '18px'
    }

    const testTitleFontSize: string = '24px';

    ref: testContent = '这是一段测试文字';
    /* eslint-disable */
</script>
-->

<style lang="scss" scoped>
    // @import "./index";

    .test-title {
        color: v-bind('testTitleStyleMap.color');
        font-size: v-bind('testTitleFontSize');
    }
</style>