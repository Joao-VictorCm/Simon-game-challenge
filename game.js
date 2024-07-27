const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber)

  var randomChosenColour = buttonColours[randomNumber];
  // console.log(randomChosenColour)
  var id = "#" + randomChosenColour;
  console.log(id);

  gamePattern.push(randomChosenColour);
  // console.log(gamePattern)

  $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence();
