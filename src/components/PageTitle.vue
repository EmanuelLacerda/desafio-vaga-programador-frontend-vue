<script setup>
defineOptions({
  name: "PageTitle",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <h1 class="text-5xl">{{ title }}</h1>
</template>
