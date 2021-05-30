import axios from "axios";

function Post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function Get(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { Post, Get };
