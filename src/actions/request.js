export const REQUEST = "REQUEST";

export const request = (url, method, body) => ({
  type: REQUEST,
  url,
  method,
  body
});
