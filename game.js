const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

$(".btn").click(function () {
  // console.log("clicado");

  var userChosenColour = this.id;

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

 playSound(userChosenColour)

});

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

playSound(randomChosenColour)
}

nextSequence();

function playSound(name){
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}
