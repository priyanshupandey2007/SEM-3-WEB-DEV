
function errorHandler(error, req, res, next) {
  console.log(error.message);

  if (error.code === 11000) {
    return res.status(400).send({
      msg: "SKU already exists"
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).send({
      msg: "Invalid product data",
      error: error.message
    });
  }

  if (error.name === "CastError") {
    return res.status(400).send({
      msg: "Invalid ID format"
    });
  }

  res.status(500).send({
    msg: "Something went wrong"
  });
}

module.exports = { errorHandler };
