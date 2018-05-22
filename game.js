var Game = [];
var gameTeamList=[];
var gameGuess = [];
var gameAttempts = 8;
var gameGuessesLeft = 0;

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var gameTeamList = ["Huskers", "Huskies", "Cougars", "Broncos", "Sooners","Cavaliers","Volunteers","Spartans","Seminoles","Longhorns","Hawkeyes",
                    "Tigers"];
var gameWordBlank = "_ ";

var gameBlankEntry = function() {
    for(var i = 0; i <Game.Word.length; i++) {
        gameTeamList[i] = Game.word.charAt(i);

    }
}
var gameWord = gameTeamList[Math.floor(Math.random() * gameTeamList.length)]
    console.log(gameWord);
    // Sets up Number of Blanks Needed
    var gameWordBlank = "_ ".repeat(gameWord.length);
    for (var i = 0; i < gameTeamList.length; i++) {
        document.getElementById("teamNameDisplay").innerHTML = gameWordBlank;
    }
    document.onkeyup = function(event) {
        console.log(event.key);
    }
}


var Game = function () {

    for (var i = 0; i < word.length; x++) {        
        gameWord.setAttribute(gameTeamList);
        gameAttempts = document.createElement(letters);
        gameWord.setAttribute(gameTeamList, gameAttempts);
        gameWordBlank.innerHTML = "_";
        letters.push(gameAttempts);
        gameWordBlank.appendChild(answer);
        gameWord.appendChild(gameAttempts);

    }
}

var gameAttempts = function () {
    var gameAttempts = document.getElementById("modalText");
    gameAttempts.innerHTML = "You have " + gameAttempts + " guesses left.";
    var guessesLeft = document.getElementById("modalWinLoss");
    
    if (guessesLeft < 1) {
            guessesLeft.innerHTML = "You lost! Keep going to discover the word.";
    }

    for (var i = 0; i < letters.length; x++) {
        if (counter === letters.length) {
            if (guessesLeft < 1){
                gameGuessesLeft.innerHTML = "YOU LOST!";
                   if (Game === "started") {
                    games++;
                    Game = "finished"
                }

            }

            else {
                gameGuessesLeft.innerHTML = "YOU WIN!";
                if (Game === "started") {
                    wins++;
                    games++;
                    Game = "finished"
                }
            }
            
        }

        gameAttempts.innerHTML = "You have won " + wins + " out of " + games + " games.";

    }
}