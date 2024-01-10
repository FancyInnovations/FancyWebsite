<script setup lang="ts">
  import {ref} from "vue";
  import VueMarkdown from "vue-markdown-render";
  import Sidebar from "@/components/Sidebar.vue";
  const props = defineProps(["name"])

  const docs = ref("Loading ...")
  fetch("https://raw.githubusercontent.com/FancyMcPlugins/" + props.name + "/main/docs/docs.md")
    .then(res => res.text())
    .then(data => docs.value = data)
</script>

<template>
  <Sidebar :plugin="props.name"/>

  <img v-if="name.toLowerCase() == 'fancynpcs'" class="title-img" src="/src/assets/img/fancynpcs_title.png" :alt="props.name">
  <img v-else class="title-img" src="/src/assets/img/fancyholograms_title.png" :alt="props.name">

  <vue-markdown :source="docs" :options="{html: true}"/>
</template>

<style scoped>
.title-img{
  width: 50%;
  transform: translateX(50%);
  margin-bottom: 100px;
}
</style>