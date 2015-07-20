// Poker JS TEST

var age = 30;
var nickname = "arnaud";

var nowHour = new Date().getHours();
var nowDay = new Date().getDay();

var nowMonth = new Date().getMonth();
var nowDate = new Date().getDate();
var isFpsLille = nowDate == 23 && nowMonth == 6;
var isFpsEnghien = nowDay == 16 && nowMonth == 11;

var winningsTotalLastYear = 6200;
var winningsThisYear = [100,150,800,500,1200];

var totalWinningsThisYear = 0; //init needed for the "for loop" and reminderForAddict()
var playedTournamentsThisYear = 20;





if (age >= 18) {
 console.log(nowHour < 12 ? "Good Morning"+" "+nickname.toUpperCase()+", "+"welcome to the poker room":"Hello"+" "+nickname.toUpperCase()+", "+"welcome to the poker room");
} else {
  console.log("You're not allowed to play under 18, sorry");
}

// if (nickname === "pokerkid") {
//   console.log("Daniel Negreanu, it's amazing to see you here, we give you a 10000$ bonus in your cashier, enjoy !")
// } else if(nickname === "gushansen") {
//   console.log("Gus Hansen, we have a special high stakes cash game table for you, enjoy !")
// }

switch(nickname){
  case "pokerkid":
    console.log("Daniel Negreanu, it's amazing to see you here, we give you a 10000$ bonus in your cashier, enjoy !");
  break;
  case "gushansen":
    console.log("Gus Hansen, we have a special high stakes cash game table for you, enjoy !");
  break;
  default:
  console.log("We give you 15$ bonus, have a nice play!");
}



if (nowHour >= 20 && nowHour <= 23 && nowDay === 0) {
  console.log("Prizepool are bigger on Sunday night, have a look on our Multi Table Tournaments, you can still take a seat");
} else {
  console.log("Do you know that we have satellites all day long to win a seat for big tournaments, just test it !");
}



if (isFpsLille || isFpsEnghien){
  console.log("Be at your best today, live tournament is starting !");
}

// getTournamentStats takes 1 PARAMETER, the nickname of a player
// return nb paid places
// return total earned this year and nb total of games
// return the average earned by tournament

function getTournamentStats(nickname) {

  if (winningsThisYear.length > 0) {
    console.log("Congrats " + nickname + ", you were in paid places "+winningsThisYear.length+" times this year, congrats !");


    // for (i =0; i < winningsThisYear.length;i += 1) {
    //   totalWinningsThisYear = totalWinningsThisYear + winningsThisYear[i];
    // }
    var i = 0;
    while (i < winningsThisYear.length){
      totalWinningsThisYear = totalWinningsThisYear + winningsThisYear[i];
      i++;
    }
    console.log("Already "+totalWinningsThisYear+"$ earned this year in a total of "+playedTournamentsThisYear+" games played.");


    var average = totalWinningsThisYear /  playedTournamentsThisYear ;
    console.log("This makes an average of "+average+"$ earned by tournament.");
  } else
  console.log(nickname + ", you have not played yet. We have no stats");
}
// we call the function with 1 ARGUMENT
getTournamentStats("arnaud");


// limit of a MTT buy in is virtually set to 100
console.log("information: Your limit is set up to 100$ for MTT");

// playTournament takes 1 PARAMETER, the name of the tournament
// return a custom message to know which MTT we can play in function of our limit

function playTournament(tournamentName) {
  // Ex fictive Tournament Name with info message
  switch(tournamentName) {
    case "highRoller":
      var messageLimitTournamentError = "You cannot play to " + tournamentName + " because your limit is fix to a buy in of 100$, choose a lower MTT or contact support to update your limit";
      console.log(messageLimitTournamentError);
      break;
    case "midStakes":
      var messageLimitTournamentSuccessMid = "You can play to " + tournamentName + ", one MTT starts every half-hour, find yours.";
      console.log(messageLimitTournamentSuccessMid);
      break;
    case "lowStakes":
      var messageLimitTournamentSuccessLow = "You can play to " + tournamentName + ". Do you know that you can open 9 games simultaneously in only one screen with the mosaic feature.";
      console.log(messageLimitTournamentSuccessLow);
      break;
  }
}

// we call the function with 1 ARGUMENT
playTournament("highRoller");
playTournament("midStakes");
playTournament("lowStakes");


// GrowthHack for more money spending on the room
function reminderForAddict() {
  dif = winningsTotalLastYear - totalWinningsThisYear;
  if (dif > 0) {
    console.log("You have again "+dif+"$ to win to beat your personnal record of the last year, play again NOW !!!");
      }
}
reminderForAddict();