// Poker JS TEST

var age = 30;
var nickname = "arnaud";

var nowHour = new Date().getHours();
var nowDay = new Date().getDay();

var nowMonth = new Date().getMonth();
var nowDate = new Date().getDate();
var isFpsLille = nowDate == 23 && nowMonth == 6;
var isFpsEnghien = nowDay == 16 && nowMonth == 11;


var winningsThisYear = [150,100,90,800,1200];
var i = 0;
var totalWinningsThisYear = 0;
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



if (winningsThisYear.length > 0) {
console.log("You were in paid places "+winningsThisYear.length+" times this year, congrats !");
}


// for (i =0; i < winningsThisYear.length;i += 1) {
//   totalWinningsThisYear = totalWinningsThisYear + winningsThisYear[i];
// }
while (i < winningsThisYear.length){
  totalWinningsThisYear = totalWinningsThisYear + winningsThisYear[i];
  i++;
}
console.log("Already "+totalWinningsThisYear+"$ earned this year in a total of "+playedTournamentsThisYear+" games played.");



var average = totalWinningsThisYear /  playedTournamentsThisYear ;
console.log("This makes an average of "+average+"$ earned by tournament.");