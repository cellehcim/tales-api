var fs = require('fs');
var data = fs.readFileSync('data.json');

var items = JSON.parse(data);
const express = require("express");
const app = express();
const port = process.env.PORT

const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World!");
  })

app.get('/api/district_games_victors', getAllDistrictVictors);
app.get('/api/district_games_victor/:id', getSpecificDistrictVictor);
app.get('/api/district_games_victor', getTriticaMacDonaldsInfo)

function getAllDistrictVictors(req, res) {
  res.send(items["district_victors"]);
}

function getSpecificDistrictVictor(req, res) {
  var search = req.params.id

  if (items["district_victors"][search]) {
    res.send(items["district_victors"][search]);
  } else {
    return res.status(404).json({"error": "Not found. Please check that you entered in the correct district and gender."});
  }

}

function getTriticaMacDonaldsInfo(req, res) {
  res.send(items["district_victors"]["9f"]);
}

app.listen(port,
    () => console.log('Server start at port ' + port));
