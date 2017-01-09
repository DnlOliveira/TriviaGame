window.onload = function() {
  currentGame.homePage();
  
  $("#start").on("click", function(){
    timer.start();
    currentGame.newGame();    
  });

  $("#submit").click(currentGame.endGame);
  };

// ------ *** Timer *** ------ //
var interval;

var timer = {
  time: 30,

  start: function(){
    interval = setInterval(timer.count, 1 * 1000);
  },
  count: function(){
    timer.time--;
    $("#display").html(":"+timer.time);

    if (timer.time === 0){
      clearInterval(interval);
      currentGame.endGame();
    }

    console.log(timer.time);
  }
};

// ------ *** Current Game *** ------ //
var questions = ["question1", "question2", "question3"];
var answers = ["answer1", "answer2", "answer3"];

var currentGame = {
  homePage: function(){
    $("header").html("<h1>Trivia</h1>");
    $("#game-window").html("Welcome to trivia");
    $("#game-window").append("<br>Click the start button to play");
    $("#game-window").append("<br><button id='start'>Start Game</button>");
  },
  newGame: function(){
    $("#game-window").empty();

    for(var i = 0; i < questions.length; i++){
      $("#game-window").append("<br>" + questions[i]);

      $("#game-window").append("<br><input type='radio' name='answer" +i+ "'>");
      $("#game-window").append("<input type='radio' name='answer" +i+ "'>");
      $("#game-window").append("<input type='radio' name='answer" +i+ "'>");
    }

    $("#game-window").append("<br><button id='submit'>Submit</button>");

  },
  endGame: function(){

  },
};











