<script setup lang="ts">
import {ref} from "vue";
import VueMarkdown from "vue-markdown-render";
import Sidebar from "@/components/Sidebar.vue";

const props = defineProps(["name"])

const gettingStarted = ref("Loading ...")
fetch("https://raw.githubusercontent.com/FancyMcPlugins/" + props.name + "/main/docs/api/getting-started.md")
    .then(res => res.text())
    .then(data => gettingStarted.value = data)

const events = ref("Loading ...")
fetch("https://raw.githubusercontent.com/FancyMcPlugins/" + props.name + "/main/docs/api/events.md")
    .then(res => res.text())
    .then(data => events.value = data)
</script>

<template>
  <Sidebar :plugin="props.name"/>

  <vue-markdown :source="gettingStarted" :options="{html: true}"/>
  <vue-markdown :source="events" :options="{html: true}"/>
</template>

<style scoped>

</style>