//create general variables
var userChooses,
    correctAnswer = 0,
    incorrectAnswer = 0,
    wins = 0,
    losses = 0,
    timer,
    click = 0
    submit;

var movieQuestions = [{
    question: "What do the Avengers refer to as Natasha's ability to calm the Hulk back into Bruce Banner?",
    choices: ["A) Smash", "B) Lullaby", "C) Always Angry", "D) Yoga"],
    wrongAnswer: ["A) Smash", "C) Always Angry", "D) Yoga"],
    validAnswer: 1
}, {
    question: "While inside Stark Towers who did Hulk say 'Puny god' to while throwing this person around like a rag doll?",
    choices: ["A) Loki", "B) Thor", "C) Iron Man", "D) Trump", "E) Both a and d"],
    wrongAnswer: ["A) Loki", "B) Thor", "C) Iron Man", "D) Trump"],
    validAnswer: 4
}, {
    question: "Who co-wrote and directed 'The Avengers'? He was also the creator of the TV series 'Firefly' and the follow-up movie 'Serenity'?",
    choices: ["A) Christopher Nolan", "B) Michael Fassbender", "C) Joss Whedon", "D) Han Zimmer"],
    wrongAnswer: ["A) Christopher Nolan", "B) Michael Fassbender", "D) Han Zimmer"],
    validAnswer: 2
}, {
    question: "What is Agent Coulson's first name?",
    choices: ["A) Donald", "B) Phil", "C) Tony", "D) Banner"],
    wrongAnswer: ["A) Donald", "C) Tony", "D) Banner"],
    validAnswer: 1
}, {
    question: "When the military pilot yelled into his radio, 'Target angry! Target angry!', to whom was he referring?",
    choices: ["A) Iron Man", "B) Black Widow", "C) Thor", "D) Hulk"],
    wrongAnswer: ["A) Iron Man", "B) Black Widow", "C) Thor"],
    validAnswer: 3
}];

//create a function to start the game in order to activate the button
$(document).ready(function(){
    //create a variable to make the 'start' button work
    $("#startGame").on('click', function(displayQuestion) {
        console.log(movieQuestions[click].validAnswer);
        $(this).hide();
        
        
        //initialize count and display and start count.
        var number = 35;
        var intervalId;
        var showNum = $("#showNum").html("<h2>" + number + "</h2>");
        var stop;

        //create the 'run' function.
        function run() {
            var showNum = intervalId;
            clearInterval(intervalId);
            intervalId = setInterval(decrement,1000);
            console.log(decrement);
        }

        //Create the 'decrement' function.
        function decrement() {
            number--;
            $("#showNum").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                alert("Times Up!!!");
            }
        }

        run();

        //Create the 'stop' function and timer stops after submitting
        function stop() {
            clearInterval(intervalId);
            $("#submit").on("click", function() {
                var intervalId = setTimeout(function() {
                    
                })
            })
        }

        movieShow();
        $(".choices").on("click", function() {
            console.log("click");
            userChooses = $($(this)).attr("value");
            console.log("userChooses", userChooses);
            if (userChooses == movieQuestions[click].validAnswer) {
                console.log("right");
                click++;
            } else {
                console.log("wrong");
                click++;
            }
        })
        
    });

})

//picking the right or wrong answers.
function movieShow() {
    for (var i = 0; i < movieQuestions.length; i++) {
        var questionDiv = $("<div>").text(movieQuestions[i].question);
        $("#movieQuestions").append(questionDiv);
        console.log(movieQuestions);
        for(var j = 0; j < movieQuestions[i].choices.length; j++) {
            console.log(movieQuestions[i].choices[j])
            var answerDiv = $("<div>").addClass("choices").text(movieQuestions[i].choices[j]).attr("value",j);
            $(questionDiv).append(answerDiv);
        }
    }
    // function submit() {
    //     $(this).val(Results)
    //     .attr()
    // }
    // var resultsContainer = document.getElementById("Results");

    //     submit.addEventListener("click", resultsContainer);
}


//Create a submit button.
// var movieShow = showResults
// $("#submit").on("click", function() {
//     var answerDiv = $(".correctAnswer", function(){

//     })
// })

//Create and show the results.
// var validAnswer = correctAnswer;
// var showResults;
// function showResults() {
// } 

