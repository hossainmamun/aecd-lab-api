const researcherModel = require("../models/researcherModel.js");

// !* crud operation (CRUD)

// ! create researcher
const create_researcher = async (req, res) => {
  const content = req.body;
  try {
    const researcher = await researcherModel.create(content);
    res.status(201).json(researcher);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// ! find researcher
const find_researcher = async (req, res) => {
  try {
    const researchers = await researcherModel.find({}).sort({ _id: -1 });
    res.status(200).json(researchers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! fin researcher by id
const find_researcher_by_id = async (req, res) => {
  const id = req.params.id;
  try {
    const researcher = await researcherModel.findById({ _id: id });
    res.status(200).json(researcher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! delete researcher
const delete_researcher = async (req, res) => {
  const id = req.params.id;
  try {
    const researcher = await researcherModel.findByIdAndDelete({ _id: id });
    res.status(200).json(researcher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! update researcher
const update_researcher = async (req, res) => {
  const id = req.params.id;
  const { researcherImg, researcherName, designation, degree, expertise } =
    req.body;
  try {
    const researcher = await researcherModel.findByIdAndUpdate(
      { _id: id },
      {
        researcherImg,
        researcherName,
        designation,
        degree,
        expertise,
      },
      { returnOriginal: false }
    );
    res.status(200).json(researcher);
  } catch (error) {}
};

module.exports = {
  create_researcher,
  find_researcher,
  find_researcher_by_id,
  delete_researcher,
  update_researcher,
};
