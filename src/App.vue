<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from "@/components/NavigationBar.vue";

</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    width: 50%;
    padding: 50px 15px 15px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
