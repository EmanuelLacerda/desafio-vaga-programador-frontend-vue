<template>
  <q-page>
    <PageTitle title="GIFs Trending" />

    <GifPainel :gifs="store.gifs" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

const gifs = ref([]);
const { listTredings } = gifsService();
const store = useGIFsStore();

const getGIFsTrending = async () => {
  try {
    let data = await listTredings();
    data = data.map(function (gif) {
      return {
        url: gif.images.original.url,
        title: gif.title,
        wasFavorited: store.wasTheGIFFavorited(gif.url),
      };
    });

    store.changeGIFsList(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
