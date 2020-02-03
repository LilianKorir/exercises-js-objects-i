let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Pendo';
user['lastName'] = 'Wangu';
user['currentLocation'] = 'Mombasa';
user['favoriteSongs'] = ['Mapenzi ni bahari', 'Spirit', 'Lover'];
user['age'] = 302;
user['favouriteFood'] = ['Biriyani'];
user['favoriteMovies'] = ['American son', 'Moonlight', 'Who cares what!']

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}


console.log('Looks like you have great taste in music. Your favorite songs:');

for (let i = 0; i < user['favoriteSongs'].length; i += 1) {
  let songPosition = i + 1;
  let songName = user['favoriteSongs'][i];

  console.log(`${songPosition}. ${songName}`);
}
if (user['favouriteFood'] === 'Chapati') {
  console.log('You have the most fantastic taste!')
}
console.log('Looks like you have great taste for movies. Your favorite movies:');
for (let i = 0; i < user['favoriteMovies'].length; i += 1) {
  let moviePosition = i + 1;
  let movieName = user['favoriteMovies'][i];

  console.log(`${moviePosition}. ${movieName}`);

}
function printFavourites(f) {
 f = user['favoriteMovies'] + ' '+ user['favouriteFood']
  return f;

}
console.log('..............');
console.log(printFavourites('f'));
