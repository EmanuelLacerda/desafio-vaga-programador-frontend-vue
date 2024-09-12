<script setup>
import { ref, onMounted } from "vue";

import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";
import { useSearchStore } from "src/stores/search";
import { usePaginationStore } from "src/stores/pagination";

import PageTitle from "src/components/PageTitle.vue";
import PaginationCustom from "src/components/PaginationCustom.vue";
import GifPainel from "src/components/GifPainel.vue";

const { listCategories } = gifsService();
const storeGIF = useGIFsStore();
const storeSearch = useSearchStore();
const storePagination = usePaginationStore();

const categories = ref([]);
const categorySelected = ref("");

const getGIFsCategories = async () => {
  try {
    const data = await listCategories();
    categories.value = data;
  } catch (error) {
    console.log(error);
  }
};

const getGifsOfCategorySelected = async (offset = 0) => {
  try {
    storeSearch.searchTerm = categorySelected.value;

    storeSearch.getGIFsBySearch(offset);
  } catch (error) {
    console.log(error);
  }
};

const toggleCategory = (category) => {
  if (categorySelected.value === category.name) {
    categorySelected.value = "";

    storeGIF.changeGIFsList([]);
  } else {
    categorySelected.value = category.name;

    getGifsOfCategorySelected();
  }

  storePagination.currentPage = 1;
};

defineOptions({
  name: "CategoriasPage",
});

onMounted(() => {
  getGIFsCategories();
  storeGIF.changeGIFsList([]);
});
</script>
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

    <PaginationCustom
      v-if="categorySelected"
      :changeContentPage="getGifsOfCategorySelected"
      :contendPage="storeGIF.gifs"
    />

    <GifPainel :gifs="storeGIF.gifs" class="sm:mt-8" />
  </q-page>
</template>
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
