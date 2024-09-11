<script setup>
import { ref } from "vue";

const searchTerm = ref("");

defineOptions({
  name: "SearchForm",
});
</script>
<template>
  <q-form class="mt-8 flex justify-center">
    <q-input
      name="search-input"
      type="search"
      v-model="searchTerm"
      aria-placeholder="Ex.: Gatos"
      placeholder="Ex.: Gatos"
      rounded
      outlined
      class="w-2/5 text-xl"
    >
      <template v-slot:append>
        <q-avatar>
          <i class="bi bi-search text-xl"></i>
        </q-avatar>
      </template>
    </q-input>
  </q-form>
</template>
