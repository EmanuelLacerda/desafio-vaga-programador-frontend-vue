<script setup>
import { useGIFsStore } from "src/stores/gifs";

defineOptions({
  name: "GifCard",
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    default: null,
  },
  wasFavorited: {
    type: Boolean,
    required: true,
  },
});

const store = useGIFsStore();
</script>
<template>
  <q-card-section>
    <q-img :src="props.url">
      <div class="absolute-top bg-transparent">
        <img src="../../public/icons/Poweredby_small.png" />
      </div>
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ props.title }}
        <a v-if="props.user" :href="props.user.profile_url" target="_blank">
          | Mais por @{{ props.user.username }}</a
        >
      </div>
    </q-img>

    <q-card-actions
      align="right"
      class="q-py-xs bg-amber-400 flex justify-between"
    >
      <q-btn
        type="button"
        :unelevated="true"
        text-color="white"
        class="text-xl"
        :href="props.url"
        target="_blankg"
      >
        <i class="bi bi-box-arrow-up-left"></i>
        <q-tooltip anchor="top middle"> Ver no Giphy </q-tooltip>
      </q-btn>
      <q-btn
        flat
        round
        :color="props.wasFavorited ? 'red' : 'white'"
        icon="favorite"
        @click="store.handleActionFavorite(props.id)"
      />
    </q-card-actions>
  </q-card-section>
</template>
