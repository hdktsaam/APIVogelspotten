const express = require("express");
const ctrlspotten = require("../controllers/spotten");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/:ID", ctrlspotten.getOneVogel);
routes.put("/", ctrlspotten.AddVogel); // {soort}
routes.patch("/", ctrlspotten.vogelGespot); // {ID}

// exporteer het router object
module.exports = routes;
