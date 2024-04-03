"use client";

import Input from "@/app/components/Input";
import InputSearch from "@/app/components/Input";
import ProductTable from "@/app/components/ProductTable";
import RedirectButton from "@/app/components/RedirectButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProductsContent = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Productos</h1>
      <p>
        En esta sección podrás ver los productos que tenemos en stock, así como
        agregar, editar o eliminar productos.
      </p>
      <Input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Buscar"
        icon={faMagnifyingGlass}
      />
      <RedirectButton route="/products/create">Agregar</RedirectButton>
      <ProductTable />
    </div>
  );
};

export default ProductsContent;
