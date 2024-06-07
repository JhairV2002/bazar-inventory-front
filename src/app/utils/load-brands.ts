"use server";
import { revalidatePath } from "next/cache";
import { GET_BRANDS_WITH_PRODUCTS_CANT, TOKEN } from "../cons/ApiConstans";
import { BrandResProdCant } from "../dtos/BrandResProdCant";

const loadBrands = async () => {
  const response = await fetch(GET_BRANDS_WITH_PRODUCTS_CANT, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!response.ok) {
    console.log(response);
    throw new Error("Error al cargar las marcas");
  }
  const brands = await response.json();

  revalidatePath("/brands");

  return brands as BrandResProdCant[];
};

export default loadBrands;
