"use strict";
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data.

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.oddsobject, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

console.log("players 1", players1);
console.log("players 2", players2);

// Task 2
let gk = players1[0];
let fieldPlayers = [players1.slice(1)];

console.log("gk:", gk);
console.log("field players:", fieldPlayers);

// Task 3
let allPlayers = [...players1, ...players2];

console.log(allPlayers);

// Task 4
let players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final);

// Task 5
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

console.log("team1 odds", team1);
console.log("draw odds", draw);
console.log("team2 odds", team2);

// Task 6
function printGoals(...playerNames) {
  console.log(playerNames);
  console.log(playerNames.length);
}

// Task 7:

// Test data for Task 6:
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log("_______________________");
printGoals(...game.scored);
