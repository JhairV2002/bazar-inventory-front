import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCubesStacked,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const initialForm = {
    descripcion: "",
    stock: 0,
    precioCompra: 0,
    precioVenta: 0,
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Creacion de productos</h1>
      <Form className="grid grid-cols-2 gap-5">
        <Input
          type="text"
          placeholder="Descripcion"
          icon={faPenNib}
          className="col-span-2"
          value={initialForm.descripcion}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Descripcion"
          icon={faPenNib}
          className="col-span-2"
          value={initialForm.descripcion}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Stock"
          icon={faCubesStacked}
          value={initialForm.stock}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Precio Compra"
          icon={faArrowTrendDown}
          value={initialForm.precioCompra}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Precio Venta"
          icon={faArrowTrendUp}
          value={initialForm.precioVenta}
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

export default Page;
