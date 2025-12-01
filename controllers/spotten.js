const vogels = require("../data/");

const getVogels = (req, res) => {
  res.json(vogels.map((vogel) => ({ id: vogel.id, soort: vogel.soort })));
};

const getOneVogel = (req, res) => {
  res.json(vogels.find((vogel) => vogel.id == req.params.ID));
};

const vogelGespot = (req, res) => {
  const vogel = vogels.find((vogel) => vogel.id == req.body.ID);
  vogel.aantalKeerGespot++;
  res.json({ data: "gelukt", info: vogel });
};

const AddVogel = (req, res) => {
  const newVogel = {
    id: newID(vogels, "id"),
    soort: req.body.soort,
    aantalKeerGespot: 0,
  };

  vogels.push(newVogel);
  res.json(newVogel);
};

const getMaxSpotted = (req, res) => {
  const maxGespot = Math.max(...vogels.map((vogel) => vogel.aantalKeerGespot));
  res.json(maxGespot);
};

const newID = (lijst, idIndicator) => {
  lijst.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item[idIndicator]) : (maxID = maxID);
  });
  return maxID + 1;
};

module.exports = {
  getVogels,
  getOneVogel,
  AddVogel,
  vogelGespot,
  getMaxSpotted,
};
