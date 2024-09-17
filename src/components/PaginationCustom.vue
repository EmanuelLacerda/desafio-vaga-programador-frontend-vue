<script setup>
import { onMounted } from "vue";

import gifsService from "src/services/gifs";
import { usePaginationStore } from "src/stores/pagination";

const { calculateCurrentOffset } = gifsService();
const storePagination = usePaginationStore();

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
  storePagination.offset = calculateCurrentOffset(newPage);
  await props.changeContentPage(storePagination.offset);

  if (props.contendPage.length === 0) {
    storePagination.currentPage--;

    storePagination.offset = calculateCurrentOffset(
      storePagination.currentPage
    );
    await props.changeContentPage(storePagination.offset);
  }
};

defineOptions({
  name: "GifPainel",
});

onMounted(() => {
  storePagination.currentPage = 1;
  storePagination.offset = 0;
});
</script>

<template>
  <q-pagination
    v-model="storePagination.currentPage"
    :max-pages="
      storePagination.currentPage < 6 ? storePagination.currentPage : 6
    "
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
  color: rgb(157 23 77) !important;
  font-size: 1.3rem !important;
}
.q-pagination button[aria-current="true"] {
  background: rgb(157 23 77) !important;
  color: #fff !important;
}
</style>
