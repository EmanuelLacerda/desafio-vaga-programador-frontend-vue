<script setup>
import { ref } from "vue";

import gifsService from "src/services/gifs";

const { calculateCurrentOffset } = gifsService();

const currentPage = ref(1);

const props = defineProps({
  contendPage: {
    type: Array,
    required: true,
  },
  changeContentPage: {
    type: Function,
    required: true,
  },
});

const handlePageChange = async (newPage) => {
  let offset = calculateCurrentOffset(newPage);
  await props.changeContentPage(offset);

  if (props.contendPage.length === 0) {
    currentPage.value--;

    offset = calculateCurrentOffset(currentPage.value);
    await props.changeContentPage(offset);
  }
};

defineOptions({
  name: "GifPainel",
});
</script>

<template>
  <q-pagination
    v-model="currentPage"
    :max-pages="currentPage < 6 ? currentPage : 6"
    min="1"
    max="999"
    direction-links
    :boundary-numbers="false"
    size="x"
    class="flex justify-center my-6"
    @update:model-value="handlePageChange"
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
