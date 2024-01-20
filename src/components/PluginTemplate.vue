<script setup lang="ts">
  import Sidebar from "@/components/Sidebar.vue";
  const props = defineProps(["name"])
</script>

<template>
  <Sidebar :plugin="props.name"/>

  <img v-if="name.toLowerCase() == 'fancynpcs'" class="title-img" src="/src/assets/img/fancynpcs_title.png" :alt="props.name">
  <img v-else class="title-img" src="/src/assets/img/fancyholograms_title.png" :alt="props.name">
</template>

<style scoped>
.title-img{
  width: 50%;
  transform: translateX(50%);
  margin-bottom: 50px;
}
</style>