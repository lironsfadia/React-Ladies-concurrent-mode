export function suspendable(promise) {
  // know to work with rge suspense
  let status = "pending";
  let result;

  let suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") throw promise;
      if (status === "error") throw result;
      if (status === "success") return result;
    },
  };
}

// like promise all
