export const genericRequest = <T, K>(
  url: string,
  method: string,
  body?: K
): Promise<T> => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then<T>((response) => response.json());
};
