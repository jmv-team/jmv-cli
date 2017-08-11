<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
  export default {
    name: 'jmv'
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>
