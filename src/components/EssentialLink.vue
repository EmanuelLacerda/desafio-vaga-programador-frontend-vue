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
    type: String,
    default: "",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
