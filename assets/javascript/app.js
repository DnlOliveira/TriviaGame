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
var questions = ["What is the name of Harry Potter's owl?", 
"What is the street address of the Dursley home?",
"Which of the Hogwarts founders created the Chamber of Secrets?", 
"What Animagus form is taken by Sirius Black?", 
"Which of these spells is used to unlock doors? "];
var arrayOfAnswers = ["1", "2", "3", "3", "1"];

var currentGame = {
  homePage: function(){
    $("header").html("<h1>Trivia</h1>");
    $("#game-window").html("Welcome to Trivia");
    $("#game-window").append("<br>Click the start button to play");
    $("#game-window").append("<br>NOTE: <br>You have 30 seconds to answer all the questions");
    $("#game-window").append("<br><button id='start'>Start Game</button>");
  },
  newGame: function(){
    $("#game-window").empty();
    
    $("#game-window").append("<br>" + questions[0] + "<br>");
    $("#game-window").append("<input id='btn0' type='radio' value='1' name='answer0'>");
    $("#game-window").append("Hedwig   ");
    $("#game-window").append("<input id='btn1' type='radio' value='2' name='answer0'>");
    $("#game-window").append("Errol   ");
    $("#game-window").append("<input id='btn2' type='radio' value='3' name='answer0'>");
    $("#game-window").append("Crookshanks   ");
    $("#game-window").append("<br>");

    $("#game-window").append("<br>" + questions[1] + "<br>");
    $("#game-window").append("<input id='btn0a' type='radio' value='1' name='answer1'>");
    $("#game-window").append("Grimmauld Place   ");
    $("#game-window").append("<input id='btn1a' type='radio' value='2' name='answer1'>");
    $("#game-window").append("Privet Drive   ");
    $("#game-window").append("<input id='btn2a' type='radio' value='3' name='answer1'>");
    $("#game-window").append("Little Hangleton   ");
    $("#game-window").append("<br>");

    $("#game-window").append("<br>" + questions[2] + "<br>");
    $("#game-window").append("<input id='btn0b' type='radio' value='1' name='answer2'>");
    $("#game-window").append("Neville Longbottom   ");
    $("#game-window").append("<input id='btn1b' type='radio' value='2' name='answer2'>");
    $("#game-window").append("Rowena Ravenclaw   ");
    $("#game-window").append("<input id='btn2b' type='radio' value='3' name='answer2'>");
    $("#game-window").append("Salazar Slytherin   ");
    $("#game-window").append("<br>");

    $("#game-window").append("<br>" + questions[3] + "<br>");
    $("#game-window").append("<input id='btn0c' type='radio' value='1' name='answer3'>");
    $("#game-window").append("Werewolf   ");
    $("#game-window").append("<input id='btn1c' type='radio' value='2' name='answer3'>");
    $("#game-window").append("Stag   ");
    $("#game-window").append("<input id='btn2c' type='radio' value='3' name='answer3'>");
    $("#game-window").append("Dog   ");
    $("#game-window").append("<br>");

    $("#game-window").append("<br>" + questions[4] + "<br>");
    $("#game-window").append("<input id='btn0d' type='radio' value='1' name='answer4'>");
    $("#game-window").append("Alohomora   ");
    $("#game-window").append("<input id='btn1d' type='radio' value='2' name='answer4'>");
    $("#game-window").append("Accio   ");
    $("#game-window").append("<input id='btn2d' type='radio' value='3' name='answer4'>");
    $("#game-window").append("Dissendium   ");
    $("#game-window").append("<br>");

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
        var rightAnswer = arrayOfAnswers[0];

        if (val == rightAnswer){
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
        var rightAnswer = arrayOfAnswers[1];

        if (val == rightAnswer){
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
        var rightAnswer = arrayOfAnswers[2];

        if (val == rightAnswer){
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

    //Validating fourth question
    var answers = document.getElementsByName("answer3");
    for (var i = 0; i < answers.length; i++){
      if (answers[i].checked){
        var val = $("#btn"+i+"c").val();
        console.log(val);
        var rightAnswer = arrayOfAnswers[2];

        if (val == rightAnswer){
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

    //Validating fifth question
    var answers = document.getElementsByName("answer4");
    for (var i = 0; i < answers.length; i++){
      if (answers[i].checked){
        var val = $("#btn"+i+"d").val();
        console.log(val);
        var rightAnswer = arrayOfAnswers[0];

        if (val == rightAnswer){
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











