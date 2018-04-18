<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div>
    <p>Routing example</p>
    <hr>
    <!--<transition name="slide">-->
      <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>

import Header from './components/header'

export default {
  components: {
    appheader: Header
  }
}
</script>

<style>
</style>
