import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'


export const useGIFsStore = defineStore('gifs', () => {
    const gifs = ref([]);
    const favorited = ref([])

    function changeGIFsList(newGIFs){
        this.gifs = newGIFs;
    }

    function insertLocalStorageInFavoritedState(){
        if(!LocalStorage.hasItem("favoritedGIFs")){
            LocalStorage.setItem("favoritedGIFs", [])
        }

        this.favorited = LocalStorage.getItem("favoritedGIFs")
    }

    function handleActionFavorite(urlGIF){
        const findedGIF = this.gifs.find(element => element.url === urlGIF)

        if(findedGIF){
            findedGIF.wasFavorited = !findedGIF.wasFavorited

            if(!LocalStorage.hasItem("favoritedGIFs")){
                LocalStorage.setItem("favoritedGIFs", [])
            }

            const favoritedGIFsLocalStorage = LocalStorage.getItem("favoritedGIFs")

            if(this.wasTheGIFFavorited(findedGIF.url)){
                const findedGIFIndex = this.favorited.findIndex(gif => gif.url === findedGIF.url)

                this.favorited.splice(findedGIFIndex,1)
                favoritedGIFsLocalStorage.splice(findedGIFIndex,1)
            } else{
                this.favorited.push(findedGIF);
                favoritedGIFsLocalStorage.push(findedGIF);
            }

            LocalStorage.setItem("favoritedGIFs", favoritedGIFsLocalStorage)
        }
    }

    function wasTheGIFFavorited(urlGIF){
        return this.favorited.some(gif => gif.url === urlGIF)
    }

    return { gifs, favorited, changeGIFsList, insertLocalStorageInFavoritedState, handleActionFavorite, wasTheGIFFavorited };
})