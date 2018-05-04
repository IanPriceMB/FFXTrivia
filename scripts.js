$(document).ready(function() {

var difNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Mt. Gagazet"];
var difLevel = ["very easy", "easy", "medium", "advanced", "expert"];
var difficulty;
var veryEasyCount;
var easyCount;
var mediumCount;
var advancedCount;
var expertCount;
var i = 0;
var j;
var number = 20;

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
    populate();
    populate();
    populate();
})

//make the divs and such to hold all our questions
function gameStart(){
    $(".theBigOne").empty();
    $(".theBigOne").append("<div class='question'>");
    for (var i = 0; i < veryEasy.q0.answers.length; i++){
        var newRow = $("<row>");
        newRow.attr("id", "row" + i);
        $(".theBigOne").append(newRow);
        var ansDiv = $("<div>");
        var ansLDiv = $("<div>");
        ansDiv.attr("id", "ans" + i);
        ansDiv.attr("class", "ans");
        ansLDiv.attr("id", "ansL" + i);
        ansLDiv.attr("class", "ansL");
        ansLDiv.attr("data-value", veryEasy.q0.answers[i].value)
        $("#row" + i).append(ansDiv);
        $("#row" + i).append(ansLDiv);
    }
}

//add all the appropriate words to the right spots
function populate(){
    if (difficulty == 0){
        j = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(veryEasy.q0.question);
        $("#ansL" + i).text(veryEasy.q0.answers[i].a);
        i++; 
    }
     else if (difficulty = 1){
        j = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(easy.q0.question);
        $("#ansL" + i).text(easy.q0.answers[i].a);
        i++; 
    } else if (difficulty = 2){
        j = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(medium.q0.question);
        $("#ansL" + i).text(medium.q0.answers[i].a);
        i++; 
    } else if (difficulty = 3){
        j = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(advanced.q0.question);
        $("#ansL" + i).text(advanced.q0.answers[i].a);
        i++; 
    } else if (difficulty = 4){
        j = 0;
        $("#ans" + i).text(i + 1);
        $(".question").text(expert.q0.question);
        $("#ansL" + i).text(expert.q0.answers[i].a);
        i++; 
    }
}

// check if true
$("body").on("click", ".ansL", function(){
    console.log(this);
    if($(this).attr("data-value") === true){
        //whichever count ++;
        j++;
        i=0;
        populate();
        populate();
        populate();
        populate();
    } else{
        j++;
        i=0;
        populate();
        populate();
        populate();
        populate();
    }
})

});