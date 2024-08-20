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
      <q-btn flat round color="white" icon="favorite" />
    </q-card-actions>
  </q-card-section>
</template>
<script setup>
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
});
</script>
