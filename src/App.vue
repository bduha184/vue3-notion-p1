<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <NavigationBar/>
  <RouterView />
</template>


<style>
  #app {
    height: 100vh;
  }
  button.transparent {
    margin: 5px;
    background: transparent;
    border: none;
  }
</style>
