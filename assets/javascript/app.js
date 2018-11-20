// add event listener
$(document).ready(function () {


// global variables
var totalQuizQuestions = 7,
count = 40,
correct = 0,
incorrect = 0,
unanswered = 0,
answers = ["India", "Asthma","Wheat and Soybeans","92","Smog", "4.9", "62"],
data = $("input");


//for loop checks if Q an A match

      function scoreCount() {
        for (var i = 0; i < data.length; i++) {

            // If user selected an answer
            if (data[i].checked) {

                // check if what the user select is equal to the array answers

                if (answers.indexOf(data[i].value) !== -1) {
                    correct++;
                } else {
                    incorrect++;
                }
            }
        }
  //check how many questions were blank
  //subtracting the if/else values from above from TOTAL Q's
        
        var totalAnswered = correct + incorrect;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuizQuestions) {
            unanswered = totalQuizQuestions - totalAnswered;
        }

        $('#correct').html(" " + correct);
        $('#incorrect').html(" " + incorrect);
        $("#unanswered").html(" " + unanswered);
    }

   //Hide and Show events to page section

    //hide quiz class & results until click play
    $("#quiz, #results").hide();

    //questions show and timer begins
    $("#playButton").click(function() {
        $("#startButton").hide("slow");
        $("#quiz").show("slow");
        $("#count").show("slow");

        //Setup timer to countdown from 12 seconds total to answer all questions

        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

            //if incomplete answers and time is up, show correct answers and results

            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000 *2 );

    });

    //complete function button...will show score to page now

    $("#completedQuiz").click(function() {
        $("#quiz, #timer").hide("slow");
        $("#results").show("slow");
        clearInterval(timer);
        scoreCount();
    });

    //restart button refreshes page back to start screen

    $("#resetButton").click(function() {
        location.reload();
    });
});