const express = require("express");
const serviceRoute = express.Router();
const { serviceValidation } = require("../validations/schemaValidation.js");
const validation = require("../middleware/validationMiddleware.js");
const {
  service_create,
  service_read,
  service_read_by_id,
  service_delete,
  service_update,
} = require("../controllers/serviceController.js");

serviceRoute.post(
  "/create_service",
  validation(serviceValidation),
  service_create
);
serviceRoute.get("/all_services", service_read);
serviceRoute.get("/:id", service_read_by_id);
serviceRoute.delete("/delete_service/:id", service_delete);
serviceRoute.patch("/update_service/:id", service_update);

module.exports = serviceRoute;
