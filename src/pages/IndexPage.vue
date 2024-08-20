<template>
  <q-page>
    <h1 class="px-4 text-4xl">GIFs Trending</h1>

    <GifPainel :gifs="gifs" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gifsService from "src/services/gifs";
import GifPainel from "src/components/GifPainel.vue";

defineOptions({
  name: "IndexPage",
});

onMounted(() => {
  getGIFsTrending();
});

const gifs = ref([]);
const { listTredings } = gifsService();

const getGIFsTrending = async () => {
  try {
    const data = await listTredings();

    gifs.value = data.map(function (gif) {
      return { url: gif.images.original.url, title: gif.title };
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
