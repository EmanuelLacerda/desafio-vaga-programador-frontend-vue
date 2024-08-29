import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'


export const useGIFsStore = defineStore('gifs', () => {
    const gifs = ref([]);
    const favorited = ref([])

    function changeGIFsList(newGIFs){
        this.gifs = newGIFs.map(gif => {
            return {
                ...gif,
                wasFavorited: this.favorited.some((element) => element.id === gif.id ),
            }
        });
    }

    function insertLocalStorageInFavoritedState(){
        if(!LocalStorage.hasItem("favoritedGIFs")){
            LocalStorage.setItem("favoritedGIFs", [])
        }

        this.favorited = LocalStorage.getItem("favoritedGIFs")
    }

    function handleActionFavorite(idGIF){
        const findedGIF = this.gifs.find(element => element.id === idGIF)

        if(findedGIF){
            findedGIF.wasFavorited = !findedGIF.wasFavorited
        }


        if(!LocalStorage.hasItem("favoritedGIFs")){
            LocalStorage.setItem("favoritedGIFs", [])
        }
        
        const favoritedGIFsLocalStorage = LocalStorage.getItem("favoritedGIFs")

        const findedGIFIndex = this.favorited.findIndex(gif => gif.id === idGIF)

        if(findedGIFIndex === -1){
            this.favorited.push(findedGIF);
            favoritedGIFsLocalStorage.push(findedGIF);
        } else{
            this.favorited.splice(findedGIFIndex,1)
            favoritedGIFsLocalStorage.splice(findedGIFIndex,1)
        }

        LocalStorage.setItem("favoritedGIFs", favoritedGIFsLocalStorage)
    }

    return { gifs, favorited, changeGIFsList, insertLocalStorageInFavoritedState, handleActionFavorite };
})