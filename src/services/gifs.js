import { api } from 'boot/axios'

const baseParams = {
    limit: 15,
    offset: 0,
    rating: 'pg',
    bundle: 'messaging_non_clips'
}

export default function gifsService () {

    const listTredings = async () => {
        try {
          let { data } = await api.get('trending', {
              params: {
                api_key: process.env.API_GIPHY_KEY,
                ...baseParams
              }
          });

          data = Array.from(data.data).filter(element => element.type === "gif")
      
          return data;
          
        } catch (error) {
          throw new Error(error);
        }
    }

    const listCategories = async () => {
        try {
            let { data } = await api.get('categories', {
                params: {
                    api_key: process.env.API_GIPHY_KEY,
                }
            })
        
            return data;
            
        } catch (error) {
            throw new Error(error);
        }
    }

    const search = async (term) => {
        try {
            let { data } = await api.get('search', {
                params: {
                    api_key: process.env.API_GIPHY_KEY,
                    q: term,
                    ...baseParams
                }
            })
        
            data = Array.from(data.data).filter(element => element.type === "gif")
        
            return data;
            
        } catch (error) {
            throw new Error(error);
        }
    }



    return {
        listTredings,
        listCategories,
        search
    }
}