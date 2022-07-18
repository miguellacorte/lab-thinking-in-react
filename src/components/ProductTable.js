import { Component, useState } from "react";

import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <ProductRow filteredProducts={props.filteredProducts} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
