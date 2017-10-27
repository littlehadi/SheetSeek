var repeat;

function pageScroll(s){
    var direction = 0;
    clearInterval(repeat);
    if (s == 0){
        var top = $("#aboutDiv")[0].getBoundingClientRect().top;
    } else if (s == 1){
        var top = $("#featuresDiv")[0].getBoundingClientRect().top;
    } else if (s == 2){
        var top = $("#theTeamDiv")[0].getBoundingClientRect().top;
    } else if (s == 3){
        var top = $("#contactDiv")[0].getBoundingClientRect().top;
    } else if (s==4){
        var top = $("#mainImage")[0].getBoundingClientRect().top;
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

window.onscroll = function(e){
    var featureTop = $("#featuresDiv")[0].getBoundingClientRect().top;
    var aboutTop = $("#aboutDiv")[0].getBoundingClientRect().top;
    var teamTop = $("#theTeamDiv")[0].getBoundingClientRect().top;
    var contactTop = $("#contactDiv")[0].getBoundingClientRect().top;
    if (aboutTop <= 36 && featureTop >36){
        $("#fourthNavTab").css("border-top", "0");
        $("#fourthNavTab").css("border-bottom", "0");
        $("#firstNavTab").css("border-bottom", "2px solid white");
        $("#firstNavTab").css("border-top", "2px solid white");
        $("#secondNavTab").css("border-top", "0");
        $("#secondNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-top", "0");
    } else if (featureTop <= 36 && teamTop >36){
        $("#fourthNavTab").css("border-top", "0");
        $("#fourthNavTab").css("border-bottom", "0");
        $("#secondNavTab").css("border-bottom", "2px solid white");
        $("#secondNavTab").css("border-top", "2px solid white");
        $("#firstNavTab").css("border-top", "0");
        $("#firstNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-top", "0");
    } else if (teamTop <= 36 && contactTop >36){
        $("#fourthNavTab").css("border-top", "0");
        $("#fourthNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-bottom", "2px solid white");
        $("#thirdNavTab").css("border-top", "2px solid white");
        $("#firstNavTab").css("border-top", "0");
        $("#firstNavTab").css("border-bottom", "0");
        $("#secondNavTab").css("border-bottom", "0");
        $("#secondNavTab").css("border-top", "0");
    } else if (contactTop <= 36){
        $("#secondNavTab").css("border-top", "0");
        $("#secondNavTab").css("border-bottom", "0");
        $("#fourthNavTab").css("border-bottom", "2px solid white");
        $("#fourthNavTab").css("border-top", "2px solid white");
        $("#firstNavTab").css("border-top", "0");
        $("#firstNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-top", "0");
    } else {
        $("#fourthNavTab").css("border-top", "0");
        $("#fourthNavTab").css("border-bottom", "0");
        $("#secondNavTab").css("border-bottom", "0");
        $("#secondNavTab").css("border-top", "0");
        $("#firstNavTab").css("border-top", "0");
        $("#firstNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-bottom", "0");
        $("#thirdNavTab").css("border-top", "0");
    }
}
