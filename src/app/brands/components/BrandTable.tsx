import { CustomIcon } from "@/app/components/CustomIcon";
import loadBrands from "@/app/utils/load-brands";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const BrandTable = async () => {
  const brands = await loadBrands();

  return (
    <table className="table text-center transition-all ease-in-out duration-100">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Productos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brand, index) => (
          <tr key={index} className="hover">
            <td>{index + 1}</td>
            <td>{brand.brandName}</td>
            <td>{brand.cantProducts}</td>
            <td>
              <button className="btn btn-ghost">
                <CustomIcon icon={faPencilAlt} className="w-4 h-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BrandTable;
