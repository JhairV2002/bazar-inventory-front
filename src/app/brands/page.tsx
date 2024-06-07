import BrandTable from "./components/BrandTable";
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
