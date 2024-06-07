import { Modal } from "@/app/components/Modal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren, useContext } from "react";
import { BrandFormContext } from "./BrandForm";

export const CreateBrandFormModal = ({
  formAction,
  setIsShow,
}: {
  formAction: any;
  setIsShow: any;
}) => {
  return (
    <Modal iconText={<FontAwesomeIcon icon={faPlus} />}>
      <h3>Crear nueva marca: </h3>
      <form action={formAction}>
        <input
          type="text"
          name="brandName"
          placeholder="Nombre de la marca"
          className="input input-bordered input-accent w-full max-w-xs self-end"
        />
        <div className="flex flex-wrap gap-3 my-4 justify-end">
          <button
            className="btn btn-secondary"
            type="submit"
            // onClick={setIsShow}
          >
            Agregar
          </button>
        </div>
      </form>
      <button className="btn" onClick={setIsShow}>
        Cerrar
      </button>
    </Modal>
  );
};
