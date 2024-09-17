import { ref } from "vue"
import { defineStore } from "pinia"

export const usePaginationStore = defineStore("pagination", () => {
    const currentPage = ref(1);
    const offset = ref(0);

    return { currentPage, offset };
})