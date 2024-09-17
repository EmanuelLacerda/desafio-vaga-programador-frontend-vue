<script setup>
import { useSearchStore } from "src/stores/search";
import { usePaginationStore } from "src/stores/pagination";

const storeSearch = useSearchStore();
const storePagination = usePaginationStore();

const handleSearchButton = async () => {
  await storeSearch.getGIFsBySearch();

  if (storeSearch.searchTerm.trim()) {
    storePagination.currentPage = 1;

    storeSearch.isSearchActive = true;
  }
};

defineOptions({
  name: "SearchForm",
});
</script>
<template>
  <q-form class="mt-8 flex justify-center">
    <q-input
      name="search-input"
      type="search"
      v-model="storeSearch.searchTerm"
      aria-placeholder="Ex.: Gatos"
      placeholder="Ex.: Gatos"
      rounded
      outlined
      class="md:w-3/5 w-4/5 text-xl focus:border-pink-800"
    >
      <template v-slot:append>
        <q-avatar @click="handleSearchButton">
          <i
            class="bi bi-search text-xl cursor-pointer hover:text-pink-800"
          ></i>
        </q-avatar>
      </template>
    </q-input>
  </q-form>
</template>
<style>
.q-field__control:hover::before {
  border: 2px rgb(157, 23, 77) solid !important;
}
</style>
