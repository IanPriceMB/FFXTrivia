$(document).ready(function() {

var difNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Mt. Gagazet"];
var difLevel = ["very easy", "easy", "medium", "advanced", "expert"];
var difficulty;

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

var j=0;
var number = 20;

//creating buttons for difficulty
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
//when click to start create difficulty screen
$("body").on("click", ".origin", function(){
    $(".theBigOne").empty();
    difficultylvl();
})

//chosing difficulty level and prepping our appropriate count tracker variables
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
})

//make the divs and such to hold all our questions
function gameStart(){
    $(".theBigOne").empty();
    $(".theBigOne").append("<div class='question'>");
    for (var i = 0; i < Questions[difficulty][j].answers.length; i++){
        
        var newRow = $("<row>");
        newRow.attr("id", "row" + i);
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

//add all the appropriate words to the right spots
function populate(){
    $(".question").empty();
    $(".ans").empty();
    $(".ansLo").empty();
;    $(".question").text(Questions[difficulty][j].question);
    
    for (var i = 0; i < Questions[difficulty][j].answers.length; i++){
        $("#ansL" + i).text(Questions[difficulty][j].answers[i].a);
        $("#ansL" + i).attr("data-value", Questions[difficulty][j].answers[i].value )
        $("#ans" + i).text(i + 1);
    }
}

// check if true and update our variables appropriately. also checks if we need to go back to difficulty screen and if a difficulty needs to be taken away.
$("body").on("click", ".ansLo", function(){
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
        }
        if(j == Questions[difficulty].length){
            difficultylvl();
            console.log(veryEasyCount);
        } else {
            populate();
            console.log(veryEasyCount);
        }
    } else if (($(this).attr("data-value")) == 0){
        j++;
        console.log(j);
        if(j == Questions[difficulty].length){
            if(difficulty == 0){
                veryEasyCount = 0;
            }else if(difficulty = 1){
                easyCount = 0;
            }else if(difficulty == 2){
                mediumCount = 0;
            }else if(difficulty == 3){
                advancedCount = 0;
            }else if(difficulty == 4){
                expertCount = 0;
            }
            difficultylvl();
            console.log(veryEasyCount);
        } else {
            populate();
            console.log(veryEasyCount);
        }    
    }     
})
});