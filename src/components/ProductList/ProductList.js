import React from 'react'
import { DataTable } from '../../components'
import CircularProgress from '@material-ui/core/CircularProgress';


function ProductList({pageName, productData}) {
  const columns = [
    {id: 'id', label: 'ID'},
    {id: 'type', label: 'Type'},
    {id: 'name', label: 'Product Name'},
    {id: 'color', label: 'Color'},
    {id: 'price', label: 'Price'},
    {id: 'manufacturer', label: 'Manufacturer'},
    {id: 'instock', label: 'Availability'}
  ]

  return (
    <div>
      <h1>{pageName}</h1>
      { !productData || productData.length === 0 ? <CircularProgress /> : <DataTable rows={productData} columns={columns}/>}
    </div>
  )
}

export default ProductList
