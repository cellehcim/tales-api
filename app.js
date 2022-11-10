var fs = require('fs');
var data = fs.readFileSync('data.json');

var items = JSON.parse(data);
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send("<h1>Unofficial Tales of the Hunger Games API</h1>" + 
    "If you're new to this API, please read the " +
    "<a href='https://github.com/cellehcim/tales-api/blob/main/readme.md'>documentation</a> here!"
    );
  })

app.get('/api/victors', getAllVictors);
app.get('/api/victor/:id', getSpecificVictor);

app.get('/api/district_games_victors', getAllDistrictVictors);
app.get('/api/district_games_victor/:id', getSpecificDistrictVictor);
app.get('/api/district_games_victor', getTriticaMacDonaldsInfo);

function getAllVictors(req, res) {
  res.send(items["victors"])
}

function getSpecificVictor(req, res) {
  var search = req.params.id

  if (search == "75") {
    return res.status(404).json({"error": "The 75th Hunger Games does not have a Victor because the Games ended prematurely."});
  } else if (items["victors"][search]) {
    res.send(items["victors"][search]);
  } else {
    return res.status(404).json({"error": "Not found. Please check that you entered in a year between either 1-74 or 76-100."});
  }

}

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

app.listen(process.env.PORT || 3000,
    () => console.log('Server started!'));
