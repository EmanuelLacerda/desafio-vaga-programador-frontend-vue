<template>
  <section class="md:flex flex-wrap items-end">
    <GifCard
      class="md:w-1/2 xl:w-1/3 2xl:w-1/4"
      v-for="gif in props.gifs"
      :key="gif.url"
      v-bind="gif"
    />
  </section>
</template>
<script setup>
import GifCard from "src/components/GifCard.vue";

defineOptions({
  name: "GifPainel",
});

const props = defineProps({
  gifs: {
    type: Object,
    required: true,
  },
});
</script>
