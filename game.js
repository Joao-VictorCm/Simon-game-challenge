const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = []





function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1
    // console.log(randomNumber)

    var randomChosenColour = buttonColours[randomNumber]
    // console.log(randomChosenColour)


    gamePattern.push(randomChosenColour)
    // console.log(gamePattern)

    console.log($("randomChosenColour"))
  

}




nextSequence()


