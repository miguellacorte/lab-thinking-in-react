
import React, { Component } from 'react';

function ProductRow (props) {

  console.log(props.filteredProducts.filteredProducts)
   
    return(

      <div>

      {props.filteredProducts.map(product => (
     <tr key={product.id}>
       <td>{product.name}</td>
       <td>{product.price}</td>
     </tr>
   ))}

      </div>    
    )
  }
  


export default ProductRow;


