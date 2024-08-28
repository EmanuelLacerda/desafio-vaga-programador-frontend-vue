<template>
  <q-page>
    <PageTitle title="Categorias" />

    <h2 class="px-4 text-2xl mt-2 mb-10">
      <span class="font-medium">Categoria Selecionada:</span>
      {{ categorySelected }}
    </h2>

    <q-list
      padding
      separator
      class="rounded-borders text-primary hidden sm:flex sm:flex-wrap sm:gap-x-0.5 sm:gap-y-2.5 sm:justify-center sm:items-stretch"
    >
      <q-item
        clickable
        v-ripple
        v-for="category in categories"
        :key="category.name"
        v-bind="category"
        :active="categorySelected === category.name"
        @click="toggleCategory(category)"
        active-class="gif-category"
        class="2xl:w-30 sm:w-1/6 w-30 sm:bg-slate-400 sm:text-white sm:text-center rounded-3xl"
      >
        <q-item-section>{{ category.name }}</q-item-section>
      </q-item>
    </q-list>

    <q-expansion-item
      expand-separator
      label="Selecione uma categoria"
      popup
      class="sm:hidden block"
    >
      <q-card>
        <q-item
          clickable
          v-ripple
          v-for="category in categories"
          :key="category.name"
          v-bind="category"
          :active="categorySelected === category.name"
          @click="toggleCategory(category)"
          active-class="gif-category"
          class="2xl:w-30 sm:w-1/6 w-30 sm:bg-slate-400 sm:text-white sm:text-center rounded-3xl"
        >
          <q-item-section>{{ category.name }}</q-item-section>
        </q-item>
      </q-card>
    </q-expansion-item>

    <GifPainel :gifs="store.gifs" class="sm:mt-8" />
  </q-page>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";

import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";

import GifPainel from "src/components/GifPainel.vue";
import PageTitle from "src/components/PageTitle.vue";

defineOptions({
  name: "CategoriasPage",
});

onMounted(() => {
  getGIFsCategories();
  store.changeGIFsList([]);
});

const categories = ref([]);
const categorySelected = ref("");
const store = useGIFsStore();

watch(categorySelected, function (newValue, oldValue) {
  if (newValue !== "") {
    getGifsByCategory(newValue);
  } else {
    store.gifs = [];
  }
});

const { listCategories, search } = gifsService();

const getGIFsCategories = async () => {
  try {
    const data = await listCategories();

    categories.value = data;
  } catch (error) {
    console.log(error);
  }
};

const getGifsByCategory = async (category) => {
  try {
    const data = await search(category);

    store.changeGIFsList(data);
  } catch (error) {
    console.log(error);
  }
};

const toggleCategory = (category) => {
  if (categorySelected.value === category.name) {
    categorySelected.value = "";
  } else {
    categorySelected.value = category.name;
  }
};
</script>
<style>
.gif-category {
  background: rgb(225, 173, 1);
}
@media (min-width: 640px) {
  .sm\:hidden {
    display: none !important;
  }
  .sm\:flex {
    display: flex !important;
  }
}
</style>
