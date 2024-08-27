<template>
  <q-card-section>
    <q-img :src="props.url">
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ props.title }}
      </div>
    </q-img>

    <q-card-actions
      align="right"
      class="q-py-xs"
      style="background-color: rgb(225, 173, 1)"
    >
      <q-btn
        flat
        round
        :color="store.wasTheGIFFavorited(props.url) ? 'red' : 'white'"
        icon="favorite"
        @click="store.handleActionFavorite(props.url)"
      />
    </q-card-actions>
  </q-card-section>
</template>
<script setup>
import { useGIFsStore } from "src/stores/gifs";

defineOptions({
  name: "GifCard",
});

const props = defineProps({
  url: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  wasFavorited: {
    type: Boolean,
    required: true,
  },
});

const store = useGIFsStore();
</script>
