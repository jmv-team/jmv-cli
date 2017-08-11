<template>
    <div class="page-index">
        <img src="../assets/logo.png" class="logo">
        <h1>\{{ title }}</h1>
        <p>\{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                title: 'Welcome to use jmv to build your Vue.js App',
                text: "It's a webpack&vue&vuex&vue-router project.",
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .page-index {
        overflow: hidden;
        text-align: center;
        .logo {
            margin-top: 30px;
        }
        h1 {
            font-size: 18px;
        }
    }
</style>