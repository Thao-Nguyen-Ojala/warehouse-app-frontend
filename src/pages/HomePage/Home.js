import React, { useState, useEffect } from 'react'
import { NavTabs, ProductList } from '../../components'
import { fetchProductsData } from '../../api/ProductsAPI'


function Home(props) {
  const { match, history } = props;
  const { params } = match; 
  const { page } = params;

  const tabOptions = [
    {name: 'gloves'},
    {name: 'facemasks'},
    {name: 'beanies'},
  ]

  const findIndexOfPage = (page) => {
    return tabOptions.findIndex(tabOpt => tabOpt.name === page)
  }

  const [selectedTab, setSelectedTab] = useState(findIndexOfPage(page));
  const [productData, setProductData] = useState([]);

  const fetchedProductData = async (page) => {
    const fetchedProductData = await fetchProductsData(page)
    setProductData(fetchedProductData)
  }

  useEffect(() => {
    fetchedProductData(page)
  }, [page])

  const handleTabChange = async (e, newValue) => {
    history.push(`/${tabOptions[newValue].name}`)
    setSelectedTab(newValue)
  }

  const urlNameToPageName = (page) => {
    const pageName = page.toUpperCase()
    return pageName
  }

  return (
    <>
      <NavTabs selectedTab={selectedTab} tabOptions={tabOptions} onChange={handleTabChange}/>
      <ProductList pageName={urlNameToPageName(page)} productData={productData}/>
    </>
  )
}

export default Home
