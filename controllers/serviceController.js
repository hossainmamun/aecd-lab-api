const serviceSchema = require("../models/serviceModel.js");
// ! error handling function
const handleError = (response, statusCode, errMsg) => {
  return response.status(statusCode).json({ err: errMsg });
};

// !** apply (CRUD) operation
//! create operation
const service_create = async (req, res) => {
  const content = req.body;
  try {
    const services = await serviceSchema.create(content);
    res.status(201).json(services);
  } catch (error) {
    handleError(res, 401, error);
  }
};

// ! read operation
const service_read = async (req, res) => {
  try {
    const services = await serviceSchema.find({});
    res.status(200).json(services);
  } catch (error) {
    handleError(res, 400, error);
  }
};

// ! read a single operation
const service_read_by_id = async (req, res) => {
  const serviceId = req.params.id;
  try {
    const service = await serviceSchema.findById({ _id: serviceId });
    res.status(200).json(service);
  } catch (error) {
    handleError(res, 400, error);
  }
};

// ! delete operation
const service_delete = async (req, res) => {
  const serviceId = req.params.id;
  try {
    const service = await serviceSchema.findByIdAndDelete({ _id: serviceId });
    res.status(200).json(service);
  } catch (error) {
    handleError(res, 400, error);
  }
};

// ! update operation
const service_update = async (req, res) => {
  const serviceId = req.params.id;
  const { serviceTitle, serviceDetail } = req.body;
  try {
    const service = await serviceSchema.findByIdAndUpdate(
      { _id: serviceId },
      { serviceTitle, serviceDetail },
      { returnOriginal: false }
    );
    res.status(200).json(service);
  } catch (error) {
    handleError(res, 400, error);
  }
};

module.exports = {
  service_create,
  service_read,
  service_read_by_id,
  service_delete,
  service_update,
};
