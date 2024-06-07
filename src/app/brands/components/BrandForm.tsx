"use client";

import CreateBrandForm from "@/app/components/CreateBrandForm";
import { Modal } from "@/app/components/Modal";
import createBrand from "@/app/utils/create-brand";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { CreateBrandFormModal } from "./CreateBrandFormModal";
import { createContext } from "react";

const initialState: {
  message: string;
  className: string;
  showToast: boolean;
  showModal: boolean;
} = {
  message: "",
  className: "",
  showToast: false,
  showModal: false,
};

export const BrandFormContext = createContext(false);

const BrandForm = () => {
  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(createBrand, initialState);

  const [isShow, setIsShow] = useState(state.showToast);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (newValue: boolean) => {
    setShowModal(!showModal);
    console.log(`showmodal : ${showModal}`);
  };

  useEffect(() => {
    if (state.showToast) {
      setIsShow(true);
      setShowModal(state.showModal);
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
      <h3>Buscar Marca</h3>
      <form className="flex flex-wrap gap-3">
        <input
          type="text"
          name="brandName"
          placeholder="Nombre de la marca"
          className="input input-bordered input-accent w-full max-w-xs self-end"
        ></input>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-ghost mt-2 w-min"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <button
        className="btn btn-outline my-3"
        onClick={() => {
          console.log(`showmodal : ${showModal}`);
          setShowModal(!showModal);
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <div
        className={`${
          isShow ? "opacity-100	h-fit" : "opacity-0 h-0"
        } transition-all ease-in-out my-4 duration-100`}
      >
        <div role="alert" className={`alert ${state.className} `}>
          <span>{state.message}</span>
        </div>
      </div>
      {showModal && (
        <CreateBrandFormModal
          formAction={formAction}
          setIsShow={handleShowModal}
        />
      )}
    </>
  );
};

export default BrandForm;
