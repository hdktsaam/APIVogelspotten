const express = require("express");
const ctrlspotten = require("../controllers/spotten");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/getOne/:ID", ctrlspotten.getOneVogel);
routes.get("/getMax", ctrlspotten.getMaxSpotted);
routes.put("/", ctrlspotten.AddVogel); // {soort}
routes.patch("/", ctrlspotten.vogelGespot); // {ID}

// exporteer het router object
module.exports = routes;
