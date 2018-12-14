import { REQUEST } from "../actions/request";

const getCookieByName = name => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export const requestMiddleware = store => next => action => {
  if (action.type === REQUEST) {
    return new Promise((resolve, reject) => {
      let { url, method, body } = action;
      method = method || "GET";
      const accessToken = getCookieByName("JWT");
      body = body ? JSON.stringify(body) : null;
      let headers = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      };
      if (accessToken) {
        headers["x-auth"] = accessToken;
      }
      fetch(url, {
        method: method,
        headers: headers,
        body: body
      })
        .then(res => {
          if (!res.ok) {
            throw res;
          }
          return resolve(res);
        })
        .catch(err => {
          if (err.status < 500 && err.status !== 404 && err.status !== 401) {
            err
              .json()
              .then(result => {
                reject(result);
              })
              .catch(err => reject(err));
          } else if (err.status === 401) {
            reject(err);
          } else {
            err.text().then(errorText => {
              console.log(errorText);
            });
          }
        });
    });
  } else {
    return next(action);
  }
};
