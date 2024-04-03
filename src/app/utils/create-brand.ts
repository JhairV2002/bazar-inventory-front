"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { POST_BRAND_URL } from "../cons/ApiConstans";
import { BrandResDTO } from "../dtos/BrandResDTO";
import { log } from "console";
import { genericRequest } from "./fetcher";
import GenericResponseDTO from "../dtos/GenericResponseDTO";
import BrandReqDTO from "../dtos/BrandReqDTO";

const createBrand = async (
  prevState: { message: string; className: string; showToast: boolean },
  formData: FormData
) => {
  const brandName = formData.get("brandName");

  const body: BrandReqDTO = {
    id: 0,
    brandName: formData.get("brandName") as string,
  };

  if (!brandName) {
    console.log("El nombre de la marca es requerido");
    console.log("prevState", prevState);
    return {
      message: "El nombre de la marca no puede estar vacío",
      className: "alert-error",
      showToast: true,
    };
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ brandName }),
  };
  try {
    const responseFetcher = await genericRequest<
      GenericResponseDTO<BrandResDTO>,
      BrandReqDTO
    >(POST_BRAND_URL, "post", body);

    console.log("fetcher", responseFetcher);

    if (!(responseFetcher.status === "CREATED")) {
      throw new Error(responseFetcher.message || "Error al crear la marca");
    }

    revalidatePath("/brands");

    return {
      message: "Marca creada",
      className: "alert-success",
      showToast: true,
    };
  } catch (error: any) {
    return {
      message: error.message || "Error al crear la marca",
      className: "alert-error",
      showToast: true,
    };
  }
};

export default createBrand;
