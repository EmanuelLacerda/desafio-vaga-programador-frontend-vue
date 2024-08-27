<template>
  <q-page>
    <PageTitle title="Favoritos" />

    <GifPainel :gifs="store.favorited" />
  </q-page>
</template>
<script setup>
import GifPainel from "src/components/GifPainel.vue";
import { useGIFsStore } from "src/stores/gifs";

defineOptions({
  name: "FavoritesPage",
});

const store = useGIFsStore();
</script>
