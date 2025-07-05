const generateHeadline = require('../utils/generateHeadline');

exports.getBusinessData = (req, res) => {
  const { name, location } = req.body;

  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 50;
  const headline = generateHeadline(name, location);

  res.json({
    rating: parseFloat(rating),
    reviews,
    headline,
  });
};

exports.regenerateHeadline = (req, res) => {
  const { name, location } = req.query;
  const headline = generateHeadline(name, location);

  res.json({ headline });
};
