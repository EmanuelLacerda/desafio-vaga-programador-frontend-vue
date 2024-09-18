import { api } from 'boot/axios'

const totalGIFsByPage = 16;

const baseParams = {
    limit: totalGIFsByPage,
    rating: 'pg',
    bundle: 'messaging_non_clips'
};

const formatDataGIF = (data) =>{
    return Array.from(data.data).filter(element => element.type === "gif").map(element => {
        return {
            id: element.id,
            url: element.images.original.url,
            title: element.title,
            user: element.user,
        };
    });
};

export default function gifsService () {

    const calculateCurrentOffset = (currentPage) => {
        return totalGIFsByPage*(currentPage-1);
    };

    const listTredings = async (offset=0) => {
        try {
            if(offset < 0){
                throw new Error("O offset deve ser maior que ou igual a 0!")
            }

            baseParams.offset = offset;

            const { data } = await api.get('trending', {
                params: {
                api_key: process.env.API_GIPHY_KEY,
                ...baseParams
                }
            });
      
          return formatDataGIF(data);
          
        } catch (error) {
          throw new Error(error);
        }
    }

    const listCategories = async () => {
        try {
            const { data } = await api.get('categories', {
                params: {
                    api_key: process.env.API_GIPHY_KEY,
                }
            })
        
            return data.data;
            
        } catch (error) {
            throw new Error(error);
        }
    }

    const search = async (term, offset=0) => {
        try {
            if(offset < 0){
                throw new Error("O offset deve ser maior que ou igual a 0!")
            }

            baseParams.offset = offset;

            const { data } = await api.get('search', {
                params: {
                    api_key: process.env.API_GIPHY_KEY,
                    q: term,
                    ...baseParams
                }
            })
        
            return formatDataGIF(data);
            
        } catch (error) {
            throw new Error(error);
        }
    }



    return {
        calculateCurrentOffset,
        listTredings,
        listCategories,
        search
    }
}