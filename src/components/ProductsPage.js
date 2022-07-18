import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((products) => {
    if (products.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h1>Store </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
