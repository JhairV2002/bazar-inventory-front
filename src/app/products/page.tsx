"use client";
import { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import ProductTable from "../components/Table";
import ProductList from "../components/List";
import { ProductResDTO } from "../dtos/ProductResDTO";
import useSWR, { Fetcher } from "swr";
import { genericRequest } from "../utils/fetcher";
import Loader from "../components/Loader";
import { GET_PRODUCTS_URL } from "../cons/ApiConstans";
import { CustomIcon } from "../components/CustomIcon";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { isMobile, isTablet } from "../utils/deviceUtil";

const Page = () => {
  const screenWidth = window.innerWidth;
  const tableHeaders = ["Nombre", "Stock", "Precio"];

  const [width, setWidth] = useState(screenWidth);
  const fetcher: Fetcher<ProductResDTO[]> = (url: string) =>
    genericRequest<ProductResDTO[], null>(url, "GET");

  const { data, error, isLoading } = useSWR<ProductResDTO[], Error>(
    GET_PRODUCTS_URL,
    fetcher
  );

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="prose lg:max-w-none prose-sm lg:prose ">
      <h1>Productos</h1>
      <p>
        En esta sección podrás ver los productos que tenemos en stock, así como
        agregar, editar o eliminar productos.
      </p>
      <InputSearch />
      <button className="btn btn-active btn-accent my-6">Agregar</button>
      {isMobile(width) || isTablet(width) ? (
        <ProductList>
          {data!.map((product, index) => {
            return (
              <li
                key={index}
                className="list-none flex flex-col justify-center "
              >
                <div className="flex content-center justify-around">
                  <div className="flex flex-col">
                    {product.productName} stock: {product.productStock}
                    <span>$ {product.productSalePrice}</span>
                  </div>
                  <CustomIcon icon={faUpRightFromSquare} className="w-8 h-8" />
                </div>
              </li>
            );
          })}
        </ProductList>
      ) : (
        <ProductTable columns={tableHeaders}>
          {data!.map((product, index) => {
            return (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{product.productName}</td>
                <td>$ {product.productSalePrice}</td>
                <td>{product.productStock}</td>
                <td>
                  <button className="btn btn-active btn-accent">Editar</button>
                </td>
              </tr>
            );
          })}
        </ProductTable>
      )}
    </div>
  );
};

export default Page;
