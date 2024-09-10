<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated style="background-color: #98336f">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-avatar square>
          <img src="../assets/brand-logo.png" />
        </q-avatar>

        <q-space></q-space>

        <div class="row flex-center">
          <span>Emanuel de Souza Lacerda</span>
          <q-avatar class="q-ml-sm">
            <img src="../assets/profile.jpg" alt="" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: rgb(225, 173, 1); border-top-right-radius: 8px"
    >
      <q-list class="q-mt-xl">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="*:container *:mx-auto *:mt-7 *:px-10">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </q-page-container>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Home",
    icon: "bi bi-house-door-fill",
    route: { name: "home" },
  },
  {
    title: "Favoritos",
    icon: "bi bi-heart-fill",
    route: { name: "favorites" },
  },
  {
    title: "Categorias",
    icon: "bi bi-box-seam-fill",
    route: { name: "categories" },
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style>
.q-drawer {
  border-top-right-radius: 8px;
}
</style>
