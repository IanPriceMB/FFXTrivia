$(document).ready(function() {

var difNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Mt. Gagazet"];
var difLevel = ["very easy", "easy", "medium", "advanced", "expert"];
var difficulty;
var veryEasyCount;
var j;

//creating buttons for difficulty
function difficulty(){
    for (var i = 0; i < difNames.length; i++){
       var difBtn = $("<div class='difBtn' >");
       difBtn.attr("id", "difBtn" + i);
       $(".theBigOne").append(difBtn);
       $("#difBtn" + i).append("<h2>" + difNames[i] + "</h2><p>" + difLevel[i] + "</p>");
       difBtn.attr("data-level", i);
    }
}

//when click to start create difficulty screen
$("body").on("click", ".origin", function(){
    $(".theBigOne").empty();
    difficulty();
})

//chosing difficulty level
$("body").on("click", ".difBtn", function(){
    difficulty = $(this).attr("data-level");
    gameStart();
    populate();
})

//make the divs and such to hold all our questions
function gameStart(){
    $(".theBigOne").empty();
    $(".theBigOne").append("<div class='question'>");
    for (var i = 0; i < veryEasy[difficulty].answers.length; i++){
        var newRow = $("<row>");
        newRow.attr("id", "row" + i);
        $(".theBigOne").append(newRow);
        var ansDiv = $("<div>");
        var ansLDiv = $("<div>");
        ansDiv.attr("id", "ans" + i);
        ansLDiv.attr("id", "ansL" + i);
        $("#row" + i).append(ansDiv);
        $("#row" + i).append(ansLDiv);
    }
}

//add all the appropriate words to the right spots
function populate(){
    if (difficulty = 0){
        j = 0;
        var i = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(veryEasy[j].question);
        $("#ansL" + i).text(veryEasy[i].answers[i].a);
        i++;
    }
    //  else if (difficulty = 1){
    //     for (var i = 0; i < easy[difficulty].answers.length; i ++){
    //         $("#ans" + i).text(i + 1);
    //         $("#ansL" + i).text(easy[difficulty].answers[i].a);
    //     }
    // } else if (difficulty = 2){
    //     for (var i = 0; i < medium[difficulty].answers.length; i ++){
    //         $("#ans" + i).text(i + 1);
    //         $("#ansL" + i).text(medium[difficulty].answers[i].a);
    //     }
    // } else if (difficulty = 3){
    //     for (var i = 0; i < advanced[difficulty].answers.length; i ++){
    //         $("#ans" + i).text(i + 1);
    //         $("#ansL" + i).text(advanced[difficulty].answers[i].a);
    //     } 
    // } else if (difficulty = 4){
    //     for (var i = 0; i < expert[difficulty].answers.length; i ++){
    //         $("#ans" + i).text(i + 1);
    //         $("#ansL" + i).text(expert[difficulty].answers[i].a);
    //     }
    // }
    
}

// check if true
$("body").on("click", ".ansL", function(){
    console.log(this);
    if($(this).attr(Questions[difficulty].answers[$(this).attr(value)]=true)){
        veryEasyCount++;
        j++;
    } else{

    }
})
});