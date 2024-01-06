<script setup lang="ts">
  import {ref} from "vue";
  import VueMarkdown from "vue-markdown-render";
  import Sidebar from "@/components/Sidebar.vue";
  const props = defineProps(["name", "title_url"])

  const docs = ref("Loading ...")
  fetch("https://raw.githubusercontent.com/FancyMcPlugins/" + props.name + "/main/docs/docs.md")
    .then(res => res.text())
    .then(data => docs.value = data)
</script>

<template>
  <Sidebar :plugin="props.name"/>

  <img class="title-img" :src="props.title_url" :alt="props.name">
  <vue-markdown :source="docs" :options="{html: true}"/>
</template>

<style scoped>
.title-img{
  width: 50%;
  transform: translateX(50%);
  margin-bottom: 100px;
}
</style>