$(document).ready(function() {
//these arrays are for dynamically filling the difficulty buttons
var difNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Mt. Gagazet"];
var difLevel = ["very easy", "easy", "medium", "advanced", "expert"];
//This variable will pic the appropriate array of questions from the main question array
var difficulty;
//count variables are used to keep score and ensure players can only clear a level with a perfect score
//hide variables are used to hide levels once they have been completed
var veryEasyCount;
var vehide = 0;
var easyCount;
var ehide = 0;
var mediumCount;
var mhide = 0;
var advancedCount;
var ahide = 0;
var expertCount;
var exhide = 0;
var bossCount = 0;
//j is used to get into the unnamed arry so that we can access the appropriate objects
var j=0;
//number is for the timer functions
var number = 15;
//this is for shot handing the boss later as well as allowing for future questions
var veryeasyQ = Questions[0].length;
var easyQ = Questions[1].length;
var mediumQ = Questions[2].length;
var advancedQ = Questions[3].length;
var expertQ = Questions[4].length;
//timers
var number = 30;
var intervalId;
//creating buttons for difficulty and filling them in
function difficultylvl(){
    $(".theBigOne").empty();
    for (var i = 0; i < difNames.length; i++){
       var difBtn = $("<div class='difBtn' >");
       difBtn.attr("id", "difBtn" + i);
       $(".theBigOne").append(difBtn);
       $("#difBtn" + i).append("<h2>" + difNames[i] + "</h2><p>" + difLevel[i] + "</p>");
       difBtn.attr("data-level", i);
    }
//this will hide buttons if we get enough points in a particular catagory the sequential times around
    if(veryEasyCount == Questions[vehide].length){
        $("#difBtn" + vehide).attr("class", "hidden");
    }
    if(easyCount == Questions[ehide].length){
        $("#difBtn" + ehide).attr("class", "hidden");
    }
    if(mediumCount == Questions[mhide].length){
        $("#difBtn" + mhide).attr("class", "hidden");
    }
    if(advancedCount == Questions[ahide].length){
        $("#difBtn" + ahide).attr("class", "hidden");
    }
    if(expertCount == Questions[exhide].length){
        $("#difBtn" + exhide).attr("class", "hidden");
    }
}
//when click start create difficulty buttons
$("body").on("click", ".origin", function(){
    $(".theBigOne").empty();
    difficultylvl();
})
//chosing difficulty level and prepping our appropriate count tracker variables
//define on call in case they get answers wrong
$("body").on("click", ".difBtn", function(){
    difficulty = $(this).attr("data-level");
    j=0;
    gameStart();
    populate();
    if(difficulty == 0){
        veryEasyCount = 0;
    }
    if(difficulty == 1){
        easyCount = 0;
    }
    if(difficulty == 2){
        mediumCount = 0;
    }
    if(difficulty == 3){
        advancedCount = 0;
    }
    if(difficulty == 4){
        expertCount = 0;
    }
    if(difficulty == 5){
        bossCount = 0;
    }
})
//make the divs and such to hold all our questions and answers
function gameStart(){
    $(".theBigOne").empty();
    $(".theBigOne").append("<div class='question'>");
    $("body").append("<div class='timer'>");  
    for (var i = 0; i < Questions[difficulty][j].answers.length; i++){
        var newRow = $("<row>");
        newRow.attr("id", "row" + i);
        newRow.attr("class", "clearfix");
        $(".theBigOne").append(newRow);
        var ansDiv = $("<div>");
        var ansLDiv = $("<div>");
        ansDiv.attr("id", "ans" + i);
        ansDiv.attr("class", "ans");
        ansLDiv.attr("id", "ansL" + i);
        ansLDiv.attr("class", "ansLo");  
        $("#row" + i).append(ansDiv);
        $("#row" + i).append(ansLDiv);
    }
}
//add all the appropriate words to the right spots this will work reguardless of difficulty level chosen
function populate(){
    $(".question").empty();
    $(".ans").empty();
    $(".ansLo").empty();
    $(".tiemr").empty()
;    $(".question").text(Questions[difficulty][j].question);
    run();

    for (var i = 0; i < Questions[difficulty][j].answers.length; i++){
        $("#ansL" + i).text(Questions[difficulty][j].answers[i].a);
        $("#ansL" + i).attr("data-value", Questions[difficulty][j].answers[i].value )
        $("#ans" + i).text(i + 1);
    }
}
//create a button to unleash the boss
function boss(){
    $(".theBigOne").empty();
    var bossBtn = $("<div class='bossBtn'>");
    $(".theBigOne").append(bossBtn);
    $(".bossBtn").html("<h1>Sin has been sighted!</h1><br><h2>Prepare to engage!</h2>");
}
//unlease the boss
$("body").on("click", ".bossBtn", function(){
    $(".theBigOne").empty();
    $(".pic").attr("src", 'sin.png');
    $("#audioContainer").attr("src", sinMusic.mp3)
    difficulty = 5;
    j = 0;
    $(".theBigOne").append("<div class='question'>");
    for (var i = 0; i < Questions[difficulty][j].answers.length; i++){
        var newRow = $("<row>");
        newRow.attr("id", "row" + i);
        newRow.attr("class", "clearfix");
        $(".theBigOne").append(newRow);
        var ansDiv = $("<div>");
        var ansLDiv = $("<div>");
        ansDiv.attr("id", "ans" + i);
        ansDiv.attr("class", "ans");
        ansLDiv.attr("id", "ansL" + i);
        ansLDiv.attr("class", "ansLo");  
        $("#row" + i).append(ansDiv);
        $("#row" + i).append(ansLDiv);
    }
    populate();
})
//this section sets up the timers 
function run() {
    number = 15;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $(".timer").html("<h3>Timer: " + number + "</h3>");
    if (number == 0) {
        stop();
        j++;
        if(difficulty == 0){
            veryEasyCount = 0;
        }else if(difficulty == 1){
            easyCount = 0;
        }else if(difficulty == 2){
            mediumCount = 0;
        }else if(difficulty == 3){
            advancedCount = 0;
        }else if(difficulty == 4){
            expertCount = 0;
        }
        if(j == Questions[difficulty].length && difficulty == 5){      
            $(".theBigOne").empty();
            var youLose = $("<div class='lose'>")
            $(".theBigOne").append(youLose);
            $(".lose").text('YOU LOSE!');
            $("#audioContainer").attr("src", loseMusic.mp3)
        }else if (j == Questions[difficulty].length){
            difficultylvl();
        }else {
            populate();
        }
    }
} 
function stop() {
  clearInterval(intervalId);
}
//check if true and update our variables appropriately. also checks if we need to go back to difficulty screen and if a difficulty needs to be taken away.
//also win conditions and boss monster
$("body").on("click", ".ansLo", function(){
    stop();
    if(($(this).attr("data-value")) == 1){
        j++;
        if(difficulty == 0){
            veryEasyCount ++;
            if(veryEasyCount >= Questions[difficulty].length){
                vehide = difficulty;
            }
        }else if(difficulty == 1){
            easyCount++;
            if(easyCount >= Questions[difficulty].length){
                ehide = difficulty;
            }
        }else if(difficulty == 2){
            mediumCount++;
            if(mediumCount >= Questions[difficulty].length){
                mhide = difficulty;
            }
        }else if(difficulty == 3){
            advancedCount++;
            if(advancedCount >= Questions[difficulty].length){
                ahide = difficulty;
            }
        }else if(difficulty == 4){
            expertCount++;
            if(expertCount >= Questions[difficulty].length){
                exhide = difficulty;
            }
        }else if(difficulty == 5){
            bossCount++;
            console.log(bossCount);
        }
        if(j == Questions[difficulty].length && easyCount == easyQ && veryEasyCount == veryeasyQ && mediumCount == mediumQ && advancedCount == advancedQ && expertCount == expertQ){
            boss();
            veryEasyCount = 0;
            easyCount = 0;
            mediumCount = 0;
            advancedCount = 0;
            expertCount = 0;
        }else if(j == Questions[difficulty].length && difficulty == 5 && bossCount == Questions[difficulty].length){
            $(".theBigOne").empty();
            var youWin = $("<div class='win'>")
            $(".theBigOne").append(youWin);
            $(".win").text('YOU WIN!');
            $("#audioContainer").attr("src", winMusic.mp3)
        }
        else if (j == Questions[difficulty].length){
            difficultylvl();
       }else {
            populate();
        }
    } else if (($(this).attr("data-value")) == 0){
        j++;
        if(difficulty == 0){
            veryEasyCount = 0;
        }else if(difficulty == 1){
            easyCount = 0;
        }else if(difficulty == 2){
            mediumCount = 0;
        }else if(difficulty == 3){
            advancedCount = 0;
        }else if(difficulty == 4){
            expertCount = 0;
        }
        if(j == Questions[difficulty].length && difficulty == 5){      
            $(".theBigOne").empty();
            var youLose = $("<div class='lose'>")
            $(".theBigOne").append(youLose);
            $(".lose").text('YOU LOSE!');
            $("#audioContainer").attr("src", loseMusic.mp3)
        }else if (j == Questions[difficulty].length){
                difficultylvl();
        } else {
            populate();
        }    
    }     
})
});