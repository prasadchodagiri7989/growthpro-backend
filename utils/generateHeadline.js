const headlines = require('../data/headlines');

const capitalizeWords = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const generateHeadline = (name, location) => {
  const random = Math.floor(Math.random() * headlines.length);
  const capitalizedName = capitalizeWords(name);
  const capitalizedLocation = capitalizeWords(location);

  return headlines[random]
    .replace(/Cake & Co/g, capitalizedName)
    .replace(/Mumbai/g, capitalizedLocation);
};

module.exports = generateHeadline;