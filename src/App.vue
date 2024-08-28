<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
});

import "bootstrap-icons/font/bootstrap-icons.css";
import { useGIFsStore } from "src/stores/gifs";

const store = useGIFsStore();

store.insertLocalStorageInFavoritedState();
</script>
