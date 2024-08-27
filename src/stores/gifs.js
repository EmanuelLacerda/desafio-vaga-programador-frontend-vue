import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGIFsStore = defineStore('gifs', () => {
    const gifs = ref([]);
    const favorited = ref([])

    function changeGIFsList(newGIFs){
        this.gifs = newGIFs;
    }

    function handleActionFavorite(urlGIF){
        const findedGIF = this.gifs.find(element => element.url === urlGIF)

        if(findedGIF){
            findedGIF.wasFavorited = !findedGIF.wasFavorited

            if(this.wasTheGIFFavorited(findedGIF.url)){
                const findedGIFIndex = this.favorited.findIndex(gif => gif.url === findedGIF.url)

                this.favorited.splice(findedGIFIndex,1)
            } else{
                this.favorited.push(findedGIF);
            }
        }
    }

    function wasTheGIFFavorited(urlGIF){
        return this.favorited.some(gif => gif.url === urlGIF)
    }

    return { gifs, favorited, changeGIFsList, handleActionFavorite, wasTheGIFFavorited };
})