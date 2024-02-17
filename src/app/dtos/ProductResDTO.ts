import { BrandResDTO } from "./BrandResDTO";

export interface ProductResDTO {
  productId: number;
  productName: string;
  productStock: number;
  productPurchasePrice: number;
  productSalePrice: number;
  productProfit: number;
  productBrand: BrandResDTO;
}
