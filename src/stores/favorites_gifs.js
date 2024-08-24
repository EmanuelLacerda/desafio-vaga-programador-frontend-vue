import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesGIFsStore = defineStore('favorites_gifs', () => {
    const gifs = ref([]);

    function addFavoriteGif(gif_url) {
        this.gifs.push(gif_url);
    }

    return { gifs, addFavoriteGif };
})