var repeat;

function pageScroll(s){
    var direction = 0;
    clearInterval(repeat);
    if (s == 0){
        var top = $("#aboutDiv")[0].getBoundingClientRect().top;
        $("#fourthNavTab").css("border-bottom", "medium none color");
        $("#secondNavTab").css("border-bottom", "medium none color");
        $("#thirdNavTab").css("border-bottom", "medium none color");
        $("#firstNavTab").css("border-bottom", "2.5px solid white");
    } else if (s == 1){
        var top = $("#featuresDiv")[0].getBoundingClientRect().top;
        $("#fourthNavTab").css("border-bottom", "medium none color");
        $("#firstNavTab").css("border-bottom", "medium none color");
        $("#thirdNavTab").css("border-bottom", "medium none color");
        $("#secondNavTab").css("border-bottom", "2.5px solid white");
    } else if (s == 2){
        var top = $("#theTeamDiv")[0].getBoundingClientRect().top;
        $("#fourthNavTab").css("border-bottom", "medium none color");
        $("#secondNavTab").css("border-bottom", "medium none color");
        $("#firstNavTab").css("border-bottom", "medium none color");
        $("#thirdNavTab").css("border-bottom", "2.5px solid white");
    } else if (s == 3){
        var top = $("#contactDiv")[0].getBoundingClientRect().top;
        $("#firstNavTab").css("border-bottom", "medium none color");
        $("#secondNavTab").css("border-bottom", "medium none color");
        $("#thirdNavTab").css("border-bottom", "medium none color");
        $("#fourthNavTab").css("border-bottom", "2.5px solid white");
    } else if (s==4){
        var top = $("#mainImage")[0].getBoundingClientRect().top;
        $("#fourthNavTab").css("border-bottom", "medium none color");
        $("#secondNavTab").css("border-bottom", "medium none color");
        $("#thirdNavTab").css("border-bottom", "medium none color");
        $("#firstNavTab").css("border-bottom", "medium none color");
    } 
     
    if (top>2){
        direction = 1;
    } else if (top<-2) {
        direction = 2;
    }
    repeat = setInterval(function(){
        if (s == 0){
            var yPos = $("#aboutDiv")[0].getBoundingClientRect().top;
        } else if (s == 1){
            var yPos = $("#featuresDiv")[0].getBoundingClientRect().top;
        } else if (s == 2){
            var yPos = $("#theTeamDiv")[0].getBoundingClientRect().top;
        } else if (s == 3){
            var yPos = $("#contactDiv")[0].getBoundingClientRect().top;
        } else if (s==4){
            var yPos = $("#mainImage")[0].getBoundingClientRect().top;;
        } 
        if ((yPos>36) && (direction==1)){
            window.scrollBy(0, yPos/35);
        } else if ((yPos<-36) && (direction==2)){
            window.scrollBy(0, yPos/35);
        } else {
            clearInterval(repeat);
            window.scrollBy(0, yPos);
        }
    }, 10);
}
