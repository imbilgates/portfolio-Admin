import About from '../models/About.js';

// Get about info
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create or update about info
export const upsertAbout = async (req, res) => {
  const data = req.body;

  try {
    const about = await About.findOneAndUpdate({}, data, { new: true, upsert: true });
    res.status(200).json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
