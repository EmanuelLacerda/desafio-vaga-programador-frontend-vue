<template>
  <q-item clickable :to="props.route" exact class="q-mx-sm row flex-center">
    <q-item-section class="q-pr-xs" v-if="props.icon" avatar>
      <i :class="props.icon" style="font-size: 24px; color: #98336f"></i>
    </q-item-section>

    <q-item-section>
      <q-item-label
        class="text-white text-weight-bold"
        style="font-size: 18px"
        >{{ props.title }}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  route: {
    type: Object,
    default: null,
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
<style>
.q-router-link--exact-active,
.q-router-link--active {
  background-color: #98336f;
  border-radius: 12px;
}

.q-router-link--exact-active .q-item__section--avatar > i,
.q-router-link--active .q-item__section--avatar > i {
  color: #fff !important;
}
</style>
