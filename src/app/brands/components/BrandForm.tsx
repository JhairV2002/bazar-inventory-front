"use client";

import createBrand from "@/app/utils/create-brand";
import useToast from "@/app/utils/hooks/useToast";
import { use, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState: {
  message: string;
  className: string;
  showToast: boolean;
} = {
  message: "",
  className: "",
  showToast: false,
};
const BrandForm = () => {
  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(createBrand, initialState);

  const [isShow, setIsShow] = useState(state.showToast);

  useEffect(() => {
    if (state.showToast) {
      setIsShow(true);
      let timer = setTimeout(() => {
        setIsShow(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [state]);

  return (
    <>
      <h3>Agregar Marca</h3>
      <form action={formAction}>
        <input
          type="text"
          name="brandName"
          placeholder="Nombre de la marca"
          className="input input-bordered input-accent w-full max-w-xs"
        ></input>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-accent mt-2"
        >
          Crear Marca
        </button>
      </form>
      <div
        className={`${
          isShow ? "opacity-100	h-fit" : "opacity-0 h-0"
        } transition-all ease-in-out my-4 duration-100`}
      >
        <div role="alert" className={`alert ${state.className} `}>
          <span>{state.message}</span>
        </div>
      </div>
    </>
  );
};

export default BrandForm;
