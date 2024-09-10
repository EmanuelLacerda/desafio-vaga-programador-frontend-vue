<script setup>
import { ref, watch } from "vue";

import gifsService from "src/services/gifs";

defineOptions({
  name: "GifPainel",
});

const props = defineProps({
  max: {
    type: Number,
    required: true,
  },
  changeContentPage: {
    type: Function,
    required: true,
  },
});

const { calculateCurrentOffset } = gifsService();

const currentPage = ref(1);

watch(currentPage, function (newValue, oldValue) {
  const offset = calculateCurrentOffset(newValue);
  props.changeContentPage(offset);
});
</script>

<template>
  <q-pagination
    v-model="currentPage"
    :max="props.max"
    max-pages="6"
    direction-links
    boundary-links
    boundary-numbers
    size="x"
    class="flex justify-center my-6"
  />
</template>

<style>
.q-pagination button {
  color: #98336f !important;
}
.q-pagination button[aria-current="true"] {
  background: #98336f !important;
  color: #fff !important;
}
</style>
