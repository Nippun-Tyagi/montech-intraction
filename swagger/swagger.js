"use strict";

module.exports = function (app) {
  // Swagger setup
  const swaggerUi = require("swagger-ui-express");
  var swaggerDocument = require("./swagger.json");

  switch (process.env.APPLICATION_ENV) {
    case "local":
      swaggerDocument.host = `localhost:${process.env.port}`;
      break;
    case "development":
      swaggerDocument.host = `${process.env.API_HOST}`;
      break;
    case "production":
      swaggerDocument.host = `${process.env.API_HOST}`;
      break;
    default:
      break;
  }

  require("../utils/searchFile").searchFile(
    __dirname + "/.." + "/swagger/v1",
    /\.swagger.json$/,
    0,
    function (filename) {
      swaggerDocument.paths = {
        ...require(filename).paths,
        ...swaggerDocument.paths,
      };
      swaggerDocument.tags = [...swaggerDocument.tags, require(filename).tags];
    }
  );
  /* 
    docExpansion : "none" - It'll Hide everything.
    docExpansion : "list"- It'll expand/List all the operations only.
    docExpansion : "full" - It'll expand everything(Full expand as the name says).
     */
  app.use(
    "/api/v1/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, false, {
      docExpansion: "list",
    })
  );
};
