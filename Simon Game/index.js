buttonColor = ["green","red","yellow","blue"];

var order = [];
var userClickedPattern = [];

function nextSequence(){ 
    userClickedPattern = [];

    var randomColor = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColor[randomColor];
    order.push(randomChosenColor);

    playSound(randomChosenColor);
    animatedPress(randomChosenColor);
    console.log(order);
};

var repeatColours = function(){
    $("h1").text("Level " + (order.length + 1));
    
    var repeat = 0;

    while (repeat < order.length ) {

        (function(repeat) {
            setTimeout(function(){
                animatedPress(order[repeat]);
                playSound(order[repeat]);
                console.log("Order.[repeat] em :" + order[repeat]);
            }, 1000 * repeat)
        })
        (repeat++)
    }

    setTimeout(function(){
        (nextSequence());
    },1000 * repeat);
};

function checkAnswer(currentLevel){
    if (order[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sucess");

        if (userClickedPattern.length === order.length){
            $("h1").text("Good job!");

            setTimeout(function(){
                repeatColours();
            },2000)
        }
    }

    else{
        console.log("wrong");
        gameOver();
        restart();
    }
};


function playSound(name){ 
    var chosenSong = new Audio("sounds/"+ name + ".mp3");
    chosenSong.play();

};

function animatedPress(currentColour){
    $("." + currentColour).addClass("pressed");

    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 300);

};

function gameOver(){
    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },400);

    $("h1").text("Game Over, Press Any Key to Restart.")

    playSound("wrong");
}

function restart(){
    order = [];
    userClickedPattern = [];
}

$(".btn").click(function(){
    var userChosenColor = this.id;

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatedPress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

});

document.addEventListener("keypress", function(){
    $("h1").text("Level " + (order.length + 1));
    nextSequence();
})