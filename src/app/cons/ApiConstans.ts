export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJRdWludGVuX1NjaGFkZW5AaG90bWFpbC5jb20iLCJuYmYiOjE3MTc3Mzc0NzAsImlzcyI6IkFVVEgwSldULUJBQ0tFTkQiLCJleHAiOjE3MTc4MjM4NzAsImlhdCI6MTcxNzczNzQ3MCwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOLENSRUFURSIsImp0aSI6IjFlZWNmZjZjLWU2YjAtNDQwNC1iYjQ5LTgzMmVjOWYxNTUzZCJ9.0RKGyTNutngqpzPRWI6yaj7l1BEIolQWZz3WepWnwUM";

export const API_URL = "http://localhost:8080/";
export const API_PRODUCTS = `${API_URL}products`;
export const API_BRANDS = `${API_URL}brands`;
export const API_BILLS = `${API_URL}bills`;

// Products
export const GET_PRODUCTS_URL = `${API_PRODUCTS}/list-all/`;
export const GET_PRODUCTS_BY_ID_URL = `${API_PRODUCTS}/list-by-id/`;
export const POST_PRODUCT_URL = `${API_PRODUCTS}/create/`;
export const PUT_PRODUCT_URL = `${API_PRODUCTS}/update/`;
export const DELETE_PRODUCT_URL = `${API_PRODUCTS}/delete/`;

// Brands

export const GET_BRANDS_URL = `${API_BRANDS}/list-all/`;
export const GET_BRANDS_BY_ID_URL = `${API_BRANDS}/list-by-id/`;
export const GET_BRANDS_WITH_PRODUCTS_URL = `${API_BRANDS}/list-with-products/`;
export const GET_BRANDS_WITH_PRODUCTS_CANT = `${API_BRANDS}/list-with-products-cant/`;
export const POST_BRAND_URL = `${API_BRANDS}/create/`;
export const PUT_BRAND_URL = `${API_BRANDS}/update/`;
export const DELETE_BRAND_URL = `${API_BRANDS}/delete/`;

// Bills
export const GET_BILLS_URL = `${API_BILLS}/list-all/`;
export const POST_BILL_URL = `${API_BILLS}/create/`;
