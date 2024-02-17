import { useState } from "react";
import { IBrandForm } from "./PropComponents/IBrandForm";
import { CustomIcon } from "./CustomIcon";

const CreateBrandForm = () => {
  const [brandForm, setForm] = useState<IBrandForm>({
    brandName: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...brandForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(brandForm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        Nombre
        <input
          type="text"
          className="grow"
          placeholder="Pelikan"
          name="brandName"
          onChange={handleInputChange}
        />
      </label>
      <input
        className="btn btn-active btn-accent my-6"
        type="submit"
        value="Enviar"
      />
    </form>
  );
};

export default CreateBrandForm;
