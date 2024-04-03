export default interface GenericResponseDTO<T> {
  code: number;
  message: string;
  data: T;
  status: string;
}
