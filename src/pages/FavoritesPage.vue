<script setup>
import { onMounted, watch } from "vue";

import PageTitle from "src/components/PageTitle.vue";
import PaginationCustom from "src/components/PaginationCustom.vue";
import GifPainel from "src/components/GifPainel.vue";

import { useGIFsStore } from "src/stores/gifs";
import { usePaginationStore } from "src/stores/pagination";

defineOptions({
  name: "FavoritesPage",
});

const store = useGIFsStore();
const storePagination = usePaginationStore();

const getFavoritedGIFs = (offset = 0) => {
  store.changeGIFsList(store.favorited.slice(offset, offset + 15));
};

watch(store.favorited, () => {
  getFavoritedGIFs(storePagination.offset);
});

onMounted(() => {
  getFavoritedGIFs();
});
</script>
<template>
  <q-page>
    <PageTitle title="Favoritos" />

    <PaginationCustom
      :changeContentPage="getFavoritedGIFs"
      :contendPage="store.gifs"
    />

    <GifPainel :gifs="store.gifs" />
  </q-page>
</template>
