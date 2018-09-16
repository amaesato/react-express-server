const express = require("express");
const bodyParser = require("body-parser");
const bc = require("./controllers/inventory_controller.js");

const app = express();

app.use(bodyParser.json());

app.get("/api/store", bc.store);
app.post("/api/store", bc.create);
app.put("/api/store/:sku", bc.update);
app.delete("/api/store/:sku", bc.delete);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
