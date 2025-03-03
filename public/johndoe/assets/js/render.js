const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("localhost:483/index", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
