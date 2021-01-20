import axios from 'axios'

const baseUrl= process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8000'

export const fetchProductsData = async(category) => {
  console.log('going to call', category)
  let productByCategoryUrl = baseUrl;

  if(category) {
    productByCategoryUrl = `${baseUrl}/${category}`;
  }

    try {
      const { data } = await axios.get(productByCategoryUrl, {timeout: 60 * 1000})
      return data
    }

    catch (error) {
      console.log('product api error', error)
    }

}