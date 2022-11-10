# Tales of the Hunger Games API

This is a custom-written API based on *Tales of the Hunger Games*, a *Hunger Games* fanfiction by Christian Blanco.

It's hosted through Heroku and powered by Node.js. The data comes from what was picked up from watching the series, but also used the [HUngergamestales Wiki](https://hungergamestales.fandom.com/wiki/HUngergamestales_Wiki), [Khen Siapco's tribute list](m/spreadsheets/d/1A4_ryLpuz5rJIEfPzbYad3QqHS_GuGY06Aoz2YskBYo/edit#gid=0), and a few of Solaro's YouTube comments that rank District Hunger Games tributes (including cause of death), to accelerate the corresponding data entry. 

Please note that:
1. I do not own *The Hunger Games* nor *Tales of the Hunger Games*. They're owned by both Suzanne Collins and Christian Blanco, respectively.
2. This API contains unmarked spoilers about the series (specifically about who won each District Games and their placing in the Grand Final). User (and reader!) discretion is advised.


## What is *Tales of the Hunger Games* ("*Tales*")?

* *Tales* is a Hunger Games YouTube series by [Christian Blanco](https://www.youtube.com/channel/UCAkhWuczWzB3t7h8Xo5_S9g) that chronicles the seventy-three children who won the Hunger Games before Katniss and Peeta.
* *Tales* also includes a storyline twelve years after *Mockingjay*’s conclusion where pro-Capitol supporters retake Panem and reinstate the Hunger Games. President Paylor and five of the seven surviving canon Victors die in this universe. 
* Panem's new leader also replaces the “Quarter Quell” with a “Quinquennal Quell” that occurs every five years instead of twenty-five like in the canon. Past iterations include reaping the descendents of past Victors (including those descended from their siblings), making a reaped tribute name their district partner, reaping the tributes in secret, and connecting each pair of reaped tributes to each other to make them "fight as one". 
* The 100th Hunger Games’ twist reaps sixteen tributes from each district. Like in the past ninety-nine Hunger Games, they fight each other but until one male tribute and one female tribute remains. However, those two “victors” become tributes for a “grand final” that would happen two weeks after District 1’s 100th Hunger Games. This is what the API info is currently based on. 

## Endpoints

### Get a list of all the Hunger Games Victors

`api/victors`

### Get a list of all the Hunger Games Victors

`api/victor/:id`

Returns information of a specific Hunger Games Victor, given the corresponding Hunger Games year (from 1-74 and 76-100). This API does not consider Irene al-Fayed despite being a Capitol Hunger Games Victor.

For example, `api/victor/1` returns:

```
{
"id": 1,
"first_name": "Cassius",
"last_name": "Heath",
"gender": "male",
"age": 16,
"district": 2,
"sustained_injuries": null,
"weapon_of_choice": "Weaponry (swords)",
"known_kills": ["Lilana (11F)", "Bruce (12M)", "Elektra (3F)", "Loom (8F)", "Unmentioned tribute", "Unmentioned tribute", "Unmentioned tribute", "Unmentioned tribute"],
"nickname": null,
"is_third_quarter_quell_tribute": false,
"third_quarter_quell_kills": null,
"alive_by_third_quarter_quell": false,
"alive_by_the_end_of_mockingjay": false,
"alive_after_the_reclamation": false,
"alive_by_the_100th_games": false,
}
```

Where:
* `id` (integer) - The Victor's ID, typically the Hunger Games iteration they won. For Katniss and Peeta, the corresponding IDs will be 74 and 75 respectively.
* `first_name` (string) - the Victor's first name.
* `last_name` (string) - the Victor's last name.
* `gender` (string) - the Victor's gender.
* `age` (integer) - the age the Victor won their Hunger Games at.
* `district` (integer) - the Victor's home district.
* `sustained_injuries` (string) - any permanent injuries that the Victor sustained that weren't healed for any reason. This value is null if the Victor does not have any of those sustained injuries. 
* `weapon_of_choice` (string) - the Victor's primary strategy for winning the Hunger Games.
* `known_kills` (array of strings) - a list of known tributes the Victor killed during their time in the arena. 
* `nickname` (string) - the Victor's in-universe nickname given by the Capitol or the Districts.
* `is_third_quarter_quell_tribute` (boolean) - whether the Victor was named tribute for the 75th Hunger Games.
* `third_quarter_quell_kills` (array of integers) - a list of known tributes (given by their API IDs) the Victor killed during the 75th Hunger Games arena. This value is set to null if the Victor did not participate in the 75th Hunger Games. 
* `alive_by_third_quarter_quell` (boolean) - whether the Victor was alive by the 3rd Quarter Quell, according to the reaping visuals from Christian's video on the 75th Hunger Games. 
* `alive_by_the_end_of_mockingjay` (boolan) - whether the Victor was alive by the conclusion of *Mockingjay*. This includes Victors who were in hiding when President Coin made seven Victors vote on whether there should be a Capitol Hunger Games. 
* `alive_after_the_reclamation"` (boolean) - whether the Victor was alive following the 76th Hunger Games (and to some extent, after Capitol supporters retake Panem). 
* `alive_by_the_100th_games` (boolean) - whether the Victor was alive at the time of the 100th Hunger Games's announcement.

### Get a list of all the District Games Victors

`api/district_games_victors`

### Return information about a specific District Games Victor

`api/district_games_victor/:id`

Returns information about a specific District Games Victor, given their home district and gender abbreviation.

For example, `api/district_games_victor/2f` returns:

```
{
  "id": "2f",
  "first_name": "Octavia",
  "last_name": "Dalton",
  "gender": "female",
  "age": 18,
  "district": 2,
  "height": 67,
  "weight": 137,
  "sustained_injuries": null,
  "weapon_of_choice": "Weaponry (arrows)",
  "nickname": "Lady Dalton",
  "eugenia_assessment_score": 8,
  "rubius_assessment_score": 7,
  "artulia_assessment_score": 7,
  "overall_assessment_score": 7,
  "district_games_direct_kills": ["Sabina Heath", "Anastasia Dalton", "Gaius Dalton", "Ismene Foacher"],
  "district_games_indirect_kills": [],
  "grand_final_kills": ["10m", "8m", "5f", "9m", "6f", "11f"],  
  "grand_final_place": 10,
  "killed_by": "11m",
}
```

Where:
* `id` (string) - The District Victor's id.
* `first_name` (string) - the District Victor's first name.
* `last_name` (string) - the District Victor's last name.
* `gender` (string) - the District Victor's gender.
* `age` (integer) - the age the District Victor won their Hunger Games at.
* `district` (integer) - the District Victor's home district.
* `height` (integer) - the District Victor's height in inches according to the District Victor spreadsheet Christian provided after each video.
* `weight` (integer) - the District Victor's weight in pounds according to the District Victor spreadsheet Christian provided after each video.
* `sustained_injuries` (string) - any permanent injuries that the District Victor sustained that weren't healed for any reason, according to the District Victor spreadsheet Christian provided after each video. This value is null if the District Victor does not have any of those sustained injuries. 
* `weapon_of_choice` (string) - the Victor's primary strategy for winning the Hunger Games according to the District Victor spreadsheet Christian provided after each video.
* `nickname` (string) - the Victor's in-universe nickname given by the Capitol or the Districts.
* `eugenia_assessment_score` (integer between 0-8) - The District Victor's interview score as given by Eugenia Ravinstill.
* `rubius_assessment_score"` (integer between 0-8) - The District Victor's interview score as given by Rubius Dalton.
* `artulia_assessment_score"` (integer between 0-8) - The District Victor's interview score as given by Artulia Fling.
* `overall_assessment_score"` (integer between 0-8) - The District Victor's overall interview score after averaging Eugenia, Rubius, and Arulia's scores and rounding that average down to the nearest integer.
* `district_games_direct_kills` (array of strings) - all tributes the Victor directly killed during their time in the arena.
* `district_games_indirect_kills` (array of strings) - all tributes the Victor indirectly killed during their time in the arena. 
* `grand_final_kills` (array of strings) - all District Victor IDs belonging to other District Victors the District Victor killed during the Grand Final. 
*  `grand_final_place` (integer between 1-24) - The District Victor's place in the Grand Final,
*  `killed_by` (string) - The ID of the District Victor who kills this District Victor. This value is null for the winner of the Grand Final

### Return the Grand Final Victor 

`api/district_games_victor`

Returns information about the District Games Victor who won the Grand Final. 

## Future plans

* Catalog the remaining Hunger Games Victors in the series.
* Catalog other District Hunger Games information and design the corresponding endpoints.
* Extend the API data to other fan-made continuations of the series such as Panem Reborn and After the 100th.
