<template>
  <q-page>
    <PageTitle title="GIFs Trending" />

    <GifPainel :gifs="store.gifs" />
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";

import GifPainel from "src/components/GifPainel.vue";
import PageTitle from "src/components/PageTitle.vue";

defineOptions({
  name: "IndexPage",
});

onMounted(() => {
  getGIFsTrending();
});

const { listTredings } = gifsService();
const store = useGIFsStore();

const getGIFsTrending = async () => {
  try {
    const data = await listTredings();

    store.changeGIFsList(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
