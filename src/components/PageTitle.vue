<template>
  <h1 class="px-4 text-4xl">{{ title }}</h1>
</template>
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
