const buttonColours = ["red", "blue", "green", "yellow"]



function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    var randomChosenColour = buttonColours[randomNumber]
    console.log(randomChosenColour)
}


nextSequence()


