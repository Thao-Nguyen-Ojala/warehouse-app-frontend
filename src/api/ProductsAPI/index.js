import axios from 'axios'

const baseUrl= process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8000'

export const fetchProductsData = async(category) => {
  let productByCategoryUrl = baseUrl;

  if(category) {
    productByCategoryUrl = `${baseUrl}/${category}`;
  }
  const { data } = await axios.get(productByCategoryUrl, {timeout: 60 * 1000})
                      .catch(function (error) {
                        if (error.response) {
                          console.log(error.response.data);
                          console.log(error.response.status);
                          console.log(error.response.headers)
                        }
                      })

  return data 
}