<template>
  <q-page>
    <h1>GIFs Trending</h1>
    <section>
      <q-card
        class="my-card"
        v-for="gif in gifs"
        :key="gif.embed_url"
        v-bind="gif"
      >
        <q-card-section>
          <q-img :src="gif.images.original.url">
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ gif.title }}
            </div>
          </q-img>

          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
          </q-card-actions>
        </q-card-section>
      </q-card>
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
