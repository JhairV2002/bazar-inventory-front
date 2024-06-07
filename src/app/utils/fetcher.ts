import { TOKEN } from "../cons/ApiConstans";

export const genericRequest = <T, K>(
  url: string,
  method: string,
  body?: K
): Promise<T> => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  }).then<T>((response) => response.json());
};
