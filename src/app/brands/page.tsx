"use client";

import { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import { isMobile, isTablet } from "../utils/deviceUtil";
import List from "../components/List";
import Table from "../components/Table";
import useSWR, { Fetcher } from "swr";
import { BrandResDTO } from "../dtos/BrandResDTO";
import { genericRequest } from "../utils/fetcher";
import { GET_BRANDS_WITH_PRODUCTS_CANT } from "../cons/ApiConstans";
import { CustomIcon } from "../components/CustomIcon";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import { ProductWithBrandResDTO } from "../dtos/ProductWithBrandResDTO";
import { useRouter } from "next/navigation";
import CreateBrandForm from "../components/CreateBrandForm";

const BrandPage = () => {
  const screenWidth = window.innerWidth;
  const tableHeaders = ["Nombre", "Productos"];
  const [width, setWidth] = useState(screenWidth);
  const router = useRouter();
  const fetcher: Fetcher<ProductWithBrandResDTO[]> = (url: string) =>
    genericRequest<ProductWithBrandResDTO[], null>(url, "GET");
  const { data, error, isLoading } = useSWR<ProductWithBrandResDTO[], Error>(
    GET_BRANDS_WITH_PRODUCTS_CANT,
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
    <div className="prose prose-sm">
      <h1>Brands</h1>
      <p>
        En esta sección podrá ver las marcas que tenemos en stock, así como
        agregar, editar o eliminar marcas.
      </p>
      <CreateBrandForm />
      <InputSearch />

      {isMobile(width) || isTablet(width) ? (
        <List>
          {data!.map((brand, index) => {
            return (
              <li
                key={index}
                className="list-none flex flex-col justify-center "
              >
                <div className="flex content-center justify-around">
                  <div className="flex flex-col">
                    {brand.brandName}
                    <span>{brand.cantProducts} Productos</span>
                  </div>
                  <CustomIcon icon={faUpRightFromSquare} className="w-8 h-8" />
                </div>
              </li>
            );
          })}
        </List>
      ) : (
        <Table columns={tableHeaders}>
          {data!.map((brand, index) => {
            return (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{brand.brandName}</td>
                <td>{brand.cantProducts}</td>
                <td>
                  <button className="btn btn-active btn-accent">Editar</button>
                </td>
              </tr>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default BrandPage;
