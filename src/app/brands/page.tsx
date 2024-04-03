import { useFormState, useFormStatus } from "react-dom";
import BrandTable from "./components/BrandTable";
import createBrand from "../utils/create-brand";
import { BrandResDTO } from "../dtos/BrandResDTO";
import loadBrands from "../utils/load-brands";
import BrandForm from "./components/BrandForm";

const BrandPage = () => {
  return (
    <>
      <h1>Marcas</h1>
      <p>
        Aqui se encuentran todas las marcas registradas. Puede registrar más, o
        modificarlas.
      </p>
      <BrandForm />
      <BrandTable />
    </>
  );
};

export default BrandPage;
