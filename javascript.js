var repeat;
var condition = 0;
var w = 0;
var h = 0;

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
        if (condition != 1){
            $("#fourthNavTab").css("border-top", "0");
            $("#fourthNavTab").css("border-bottom", "0");
            $("#firstNavTab").css("border-bottom", "2px solid white");
            $("#firstNavTab").css("border-top", "2px solid white");
            $("#secondNavTab").css("border-top", "0");
            $("#secondNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-top", "0");
            condition = 1;
        }
    } else if (featureTop <= 36 && teamTop >36){
        if (condition != 2){
            $("#fourthNavTab").css("border-top", "0");
            $("#fourthNavTab").css("border-bottom", "0");
            $("#secondNavTab").css("border-bottom", "2px solid white");
            $("#secondNavTab").css("border-top", "2px solid white");
            $("#firstNavTab").css("border-top", "0");
            $("#firstNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-top", "0");
            condition = 2;
        }
    } else if (teamTop <= 36 && contactTop >36){
        if (condition != 3){
            $("#fourthNavTab").css("border-top", "0");
            $("#fourthNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-bottom", "2px solid white");
            $("#thirdNavTab").css("border-top", "2px solid white");
            $("#firstNavTab").css("border-top", "0");
            $("#firstNavTab").css("border-bottom", "0");
            $("#secondNavTab").css("border-bottom", "0");
            $("#secondNavTab").css("border-top", "0");
            condition = 3;
        }
    } else if (contactTop <= 36){
        if (condition != 4){
            $("#secondNavTab").css("border-top", "0");
            $("#secondNavTab").css("border-bottom", "0");
            $("#fourthNavTab").css("border-bottom", "2px solid white");
            $("#fourthNavTab").css("border-top", "2px solid white");
            $("#firstNavTab").css("border-top", "0");
            $("#firstNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-top", "0");
            condition = 4;
        }
    } else {
        if (condition != 0){
            $("#fourthNavTab").css("border-top", "0");
            $("#fourthNavTab").css("border-bottom", "0");
            $("#secondNavTab").css("border-bottom", "0");
            $("#secondNavTab").css("border-top", "0");
            $("#firstNavTab").css("border-top", "0");
            $("#firstNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-bottom", "0");
            $("#thirdNavTab").css("border-top", "0");
            condition = 0;
        }
    }

    var lineLength;
    var marginLength;
    if (Math.abs(aboutTop) < 400){
        lineLength = String(100 - Math.abs(aboutTop)/4);
        marginLength = String((Math.abs(aboutTop)/4));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(featureTop) < 400){
        lineLength = String(100 - Math.abs(featureTop)/4);
        marginLength = String((Math.abs(featureTop)/4));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(teamTop) < 400){
        lineLength = String(100 - Math.abs(teamTop)/4);
        marginLength = String((Math.abs(teamTop)/4));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(contactTop) < 400){
        lineLength = String(100 - Math.abs(contactTop)/4);
        marginLength = String((Math.abs(contactTop)/4));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }

}

window.onresize = function(event){
    w = $(window).width();
    h = $(window).height();
    var newHeight = String((w/5.2));
    $(".headshot").css("height", newHeight);
    
    if ($("#fourthNavTab")[0].getBoundingClientRect().top >= 20){
        $(".navTab").css("display", "none");
    }
};
