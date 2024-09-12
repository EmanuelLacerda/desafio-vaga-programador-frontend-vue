<script setup>
import { onMounted } from "vue";

import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";
import { useSearchStore } from "src/stores/search";

import PageTitle from "src/components/PageTitle.vue";
import PaginationCustom from "src/components/PaginationCustom.vue";
import GifPainel from "src/components/GifPainel.vue";
import SearchForm from "src/components/SearchForm.vue";

const { listTredings } = gifsService();
const storeGIF = useGIFsStore();
const storeSearch = useSearchStore();

const getGIFsTrending = async (offset = 0) => {
  try {
    const data = await listTredings(offset);

    storeGIF.changeGIFsList(data);
  } catch (error) {
    console.log(error);
  }
};

defineOptions({
  name: "IndexPage",
});

onMounted(async () => {
  await getGIFsTrending();
  storeSearch.isSearchActive = false;
});
</script>

<template>
  <q-page>
    <PageTitle title="GIFs Trending" />

    <SearchForm />

    <PaginationCustom
      v-if="storeSearch.isSearchActive"
      :changeContentPage="storeSearch.getGIFsBySearch"
      :contendPage="storeGIF.gifs"
    />
    <PaginationCustom
      v-else
      :changeContentPage="getGIFsTrending"
      :contendPage="storeGIF.gifs"
    />

    <GifPainel :gifs="storeGIF.gifs" />
  </q-page>
</template>
