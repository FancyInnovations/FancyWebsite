<script setup lang="ts">
import {ref} from "vue";
import VueMarkdown from "vue-markdown-render";
import Sidebar from "@/components/Sidebar.vue";

const props = defineProps(["name"])

const md = ref("Loading ...")
fetch("https://raw.githubusercontent.com/FancyMcPlugins/" + props.name + "/main/docs/commands.md")
    .then(res => res.text())
    .then(data => md.value = data)
</script>

<template>
  <Sidebar :plugin="props.name"/>

  <vue-markdown :source="md" :options="{html: true}"/>
</template>

<style scoped>

</style>