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

app.get('/api/pre_reclamation_victors', getAllPreReclamationVictors)

app.get('/api/district_games_victors', getAllDistrictVictors);
app.get('/api/district_games_victor/:id', getSpecificDistrictVictor);
app.get('/api/district_games_victor', getTriticaMacDonaldsInfo);

function getAllVictors(req, res) {
  res.send(items["victors"])
}

function getSpecificVictor(req, res) {
  var search = req.params.id

  if (search == "75") {
    return res.status(400).json({"error": "The 75th Hunger Games does not have a Victor because the Games ended prematurely."});
  } else if (search == "74") {
    let jsonObjects = {};
    jsonObjects["74a"] = items["victors"]["74a"];
    jsonObjects["74b"] = items["victors"]["74b"];
    res.send(jsonObjects);
  }
  else if (items["victors"][search]) {
    res.send(items["victors"][search]);
  } else {
    return res.status(404).json({"error": "Not found. Please check that you entered in a year between either 1-74 or 76-100."});
  }

}

function getAllPreReclamationVictors(req, res) {
  NUMBER_OF_PRE_RECLAMATION_HUNGER_GAMES = 74;
  let jsonObjects = {};
  
  for (var key in items["victors"]) {
    if (parseInt(key) < NUMBER_OF_PRE_RECLAMATION_HUNGER_GAMES || key == "74a" || key == "74b")
    jsonObjects[key] = items["victors"][key]
  }

  res.send(jsonObjects)
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
