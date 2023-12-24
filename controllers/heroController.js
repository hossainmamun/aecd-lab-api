const heroSchema = require("../models/HeroModel.js");

//! create hero
const postHero = async (req, res) => {
  const data = req.body;
  try {
    const herosContent = await heroSchema.create(data);
    res.status(201).json(herosContent);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
// ! find all hero
const findHero = async (req, res) => {
  try {
    const herosContent = await heroSchema.find({}).sort({ _id: -1 });
    res.status(200).json(herosContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! find single hero
const findHeroById = async (req, res) => {
  const id = req.params.id;
  try {
    const herosContent = await heroSchema.findById({ _id: id });
    res.status(200).json(herosContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! delete hero
const deleteHero = async (req, res) => {
  const heroId = req.params.id;
  try {
    const heroContent = await heroSchema.findByIdAndDelete({ _id: heroId });
    res.status(200).json(heroContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! update hero
const updateHero = async (req, res) => {
  const { heroImage, heroHeader, heroDetail } = req.body;
  const heroId = req.params.id;
  try {
    const updateContent = await heroSchema.findByIdAndUpdate(
      { _id: heroId },
      {
        heroImage,
        heroHeader,
        heroDetail,
      },
      { returnOriginal: false }
    );
    res.status(200).json(updateContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postHero,
  findHero,
  findHeroById,
  deleteHero,
  updateHero,
};
