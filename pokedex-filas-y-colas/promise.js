const holaMundo = (quien) => {
  return new Promise((resolve, reject) => {
    if (quien === "😎") {
      resolve("Hola mundo! 😍");
    } else {
      reject("🤢");
    }
  });
};

holaMundo()
  .then((respuesta) => {
    console.log("Función ejecutada correctamente");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Función ejecutada con errores");
    console.log(error);
  });
