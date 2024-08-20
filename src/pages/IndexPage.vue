<template>
  <q-page>
    <h1 class="px-4 text-4xl">GIFs Trending</h1>

    <section class="md:flex flex-wrap items-end">
      <q-card-section
        class="md:w-1/2 xl:w-1/3 2xl:w-1/4"
        v-for="gif in gifs"
        :key="gif.embed_url"
        v-bind="gif"
      >
        <q-img :src="gif.images.original.url">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ gif.title }}
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
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gifsService from "src/services/gifs";

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

    gifs.value = data;
  } catch (error) {
    console.log(error);
  }
};
</script>
