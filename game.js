const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber)

  var randomChosenColour = buttonColours[randomNumber];
  // console.log(randomChosenColour)

  gamePattern.push(randomChosenColour);
  // console.log(gamePattern)

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  audio.play();

  $(".btn").click(function (event) {
    console.log("clicado");

    var userChosenColour = event;
    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
  });
}

nextSequence();
