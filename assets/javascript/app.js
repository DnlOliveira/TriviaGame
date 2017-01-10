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

  }
};

// ------ *** Current Game *** ------ //
var questions = ["question1", "question2", "question3"];
var arrayOfAnswers = ["1", "2", "3"];

var currentGame = {
  homePage: function(){
    $("header").html("<h1>Trivia</h1>");
    $("#game-window").html("Welcome to trivia");
    $("#game-window").append("<br>Click the start button to play");
    $("#game-window").append("<br><button id='start'>Start Game</button>");
  },
  newGame: function(){
    $("#game-window").empty();
    
    $("#game-window").append("<br>" + questions[0] + "<br>");
    $("#game-window").append("<input id='btn0' type='radio' value='1' name='answer0'>");
    $("#game-window").append("<input id='btn1' type='radio' value='2' name='answer0'>");
    $("#game-window").append("<input id='btn2' type='radio' value='3' name='answer0'>");

    $("#game-window").append("<br>" + questions[1] + "<br>");
    $("#game-window").append("<input id='btn0a' type='radio' value='1' name='answer1'>");
    $("#game-window").append("<input id='btn1a' type='radio' value='2' name='answer1'>");
    $("#game-window").append("<input id='btn2a' type='radio' value='3' name='answer1'>");

    $("#game-window").append("<br>" + questions[2] + "<br>");
    $("#game-window").append("<input id='btn0b' type='radio' value='1' name='answer2'>");
    $("#game-window").append("<input id='btn1b' type='radio' value='2' name='answer2'>");
    $("#game-window").append("<input id='btn2b' type='radio' value='3' name='answer2'>");

    $("#game-window").append("<br><button id='submit'>Submit</button>");

  },
  endGame: function(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var count = 0;

    //Validating first question
    var answers = document.getElementsByName("answer0");
    for (var i = 0; i < answers.length; i++){
      if (answers[i].checked){
        var val = $("#btn"+i).val();
        console.log(val);
        var rightAnswer = 3;

        if (val == 3){
          correct++;
        }
        else{
          incorrect++;
        }
      }
      else{
        count++;

        if (count === 3){
          unanswered++;
        }
      }
    }
    count = 0;

    //Validating second question
    var answers = document.getElementsByName("answer1");
    for (var i = 0; i < answers.length; i++){
      if (answers[i].checked){
        var val = $("#btn"+i+"a").val();
        console.log(val);
        var rightAnswer = 3;

        if (val == 3){
          correct++;
        }
        else{
          incorrect++;
        }
      }
      else{
        count++;

        if (count === 3){
          unanswered++;
          count = 0;
        }
      }
    }
    count = 0;

    //Validating third question
    var answers = document.getElementsByName("answer2");
    for (var i = 0; i < answers.length; i++){
      if (answers[i].checked){
        var val = $("#btn"+i+"b").val();
        console.log(val);
        var rightAnswer = 3;

        if (val == 3){
          correct++;
        }
        else{
          incorrect++;
        }
      }
      else{
        count++;

        if (count === 3){
          unanswered++;
          count = 0;
        }
      }
    }
    count = 0;

    $("#game-window").html("Answered Correctly: " + correct);
    $("#game-window").append("<br>Answered Incorrectly: " + incorrect);
    $("#game-window").append("<br>Unanswered: " + unanswered);
  },
};

window.onload = function() {
  currentGame.homePage();
  
  $("#start").on("click", function(){
    timer.start();
    currentGame.newGame();    
  });

  $(document).on("click", "#submit", function(){
    clearInterval(interval);
    currentGame.endGame();
  });
}











