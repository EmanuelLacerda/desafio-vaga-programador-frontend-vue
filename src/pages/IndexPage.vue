<script setup>
import { onMounted } from "vue";

import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";

import PageTitle from "src/components/PageTitle.vue";
import PaginationCustom from "src/components/PaginationCustom.vue";
import GifPainel from "src/components/GifPainel.vue";
import SearchForm from "src/components/SearchForm.vue";

const { listTredings } = gifsService();
const store = useGIFsStore();

const getGIFsTrending = async (offset = 0) => {
  try {
    const data = await listTredings(offset);

    store.changeGIFsList(data);
  } catch (error) {
    console.log(error);
  }
};

defineOptions({
  name: "IndexPage",
});

onMounted(() => {
  getGIFsTrending();
});
</script>

<template>
  <q-page>
    <PageTitle title="GIFs Trending" />

    <SearchForm />

    <PaginationCustom
      :changeContentPage="getGIFsTrending"
      :contendPage="store.gifs"
    />

    <GifPainel :gifs="store.gifs" />
  </q-page>
</template>
