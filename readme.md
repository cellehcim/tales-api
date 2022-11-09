# Tales of the Hunger Games [District Hunger Games] API

This is a custom-written API based on Tales of the Hunger Games.

It's powered by Node.js. The data comes from what was picked up from watching the series Christian Blanco, but also used the [HUngergamestales Wiki](https://hungergamestales.fandom.com/wiki/HUngergamestales_Wiki), [Khen Siapco's tribute list](m/spreadsheets/d/1A4_ryLpuz5rJIEfPzbYad3QqHS_GuGY06Aoz2YskBYo/edit#gid=0), and a few of Solaro's YouTube comments that rank District Hunger Games tributes (including cause of death), to accelerate the corresponding data entry. 

Please note that this API contains unmarked spoilers about the series (specifically about who won each District Games and their placing in the Grand Final). User discretion is advised.

## What is *Tales of the Hunger Games* ("*Tales*")?

* *Tales* is a Hunger Games YouTube series by [Christian Blanco](https://www.youtube.com/channel/UCAkhWuczWzB3t7h8Xo5_S9g) that chronicles the seventy-three children who won the Hunger Games before Katniss and Peeta.
* *Tales* also includes a storyline twelve years after Mockingjay’s conclusion where pro-Capitol supporters retake Panem and reinstate the Hunger Games. President Paylor and five of the seven surviving canon Victors die in this universe. 
* Panem's new leader also replaces the “Quarter Quell” with a “Quinquennal Quell” that occurs every five years instead of twenty-five like in the canon. Past iterations include reaping the descendents of Victors (and their siblings), making a reaped tribute name their district partner, reaping the tributes in secret, and connecting each pair of reaped tributes to each other. 
* The 100th Hunger Games’ twist reaps sixteen tributes from each district. Like in the past ninety-nine Hunger Games, they fight each other but until one male tribute and one female tribute remains. However, those two “victors” become tributes for a “grand final” that would happen two weeks after District 1’s 100th Hunger Games. This is what the API info is currently based on. 

## Endpoints

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
  "arena_id": 2
}
```

Notes
* `height` and `weight` are given in inches and pounds respectively. 
* `nickname` is the nickname officially given by the Capitol. It does not consider fan-given nicknames.
* `grand_final_kills` and `killed_by` use IDs of the mentioned tributes.


### Return the Grand Final Victor 

`api/district_victor`

Returns information about the District Games Victor who won the Grand Final. 

## Future plans

* Catalog the remaining Hunger Games Victors in the series and design the corresponding endpoints.
* Catalog other District Hunger Games information and design the corresponding endpoints.
* Extend the API data to other fan-made continuations of the series such as Panem Reborn and After the 100th.
