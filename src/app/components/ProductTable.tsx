import useSWR, { Fetcher } from "swr";
import { ProductResDTO } from "../dtos/ProductResDTO";
import { ITableProps } from "./PropComponents/ITableProps";
import { genericRequest } from "../utils/fetcher";
import { GET_PRODUCTS_URL } from "../cons/ApiConstans";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const ProductTable = () => {
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

  if (!data) {
    return <div>No hay productos</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {tableHeaders.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => {
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
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
