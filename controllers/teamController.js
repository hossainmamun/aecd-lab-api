const teamModel = require("../models/teamModel.js");

// !* crud operation (CRUD)

// ! create team
const createMember = async (req, res) => {
  const content = req.body;
  try {
    const team = await teamModel.create(content);
    res.status(201).json(team);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// ! find all team member
const find_all_member = async (req, res) => {
  try {
    const team = await teamModel.find({}).sort({ _id: -1 });
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! find single team member
const find_member_by_id = async (req, res) => {
  const id = req.params.id;
  try {
    const single_member = await teamModel.findById({ _id: id });
    res.status(200).json(single_member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! delete a team member
const delete_member = async (req, res) => {
  const id = req.params.id;
  try {
    const single_member = await teamModel.findByIdAndDelete({ _id: id });
    res.status(200).json(single_member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! update a team member
const update_member = async (req, res) => {
  const id = req.params.id;
  const {
    teamMemberImg,
    teamMemeberName,
    teamMemberDesignation,
    teamMemberDegree,
  } = req.body;
  try {
    const single_member = await teamModel.findByIdAndUpdate(
      { _id: id },
      {
        teamMemberImg,
        teamMemeberName,
        teamMemberDesignation,
        teamMemberDegree,
      },
      { returnOriginal: false }
    );
    res.status(200).json(single_member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMember,
  find_all_member,
  find_member_by_id,
  delete_member,
  update_member,
};