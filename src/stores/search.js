import { ref } from 'vue'
import { defineStore } from 'pinia'

import gifsService from "src/services/gifs";

import { useGIFsStore } from "src/stores/gifs";

const { search } = gifsService();


export const useSearchStore = defineStore('search', () => {
    const storeGIF = useGIFsStore();

    const searchTerm = ref("");
    const isSearchActive = ref(false);

    async function getGIFsBySearch(offset = 0) {
        try {
            this.searchTerm= this.searchTerm.trim();

            if(this.searchTerm){
                const data = await search(this.searchTerm, offset);
    
                storeGIF.changeGIFsList(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { searchTerm, isSearchActive, getGIFsBySearch }
})