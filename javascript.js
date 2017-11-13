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
    if (Math.abs(aboutTop) < 500){
        lineLength = String(100 - Math.abs(aboutTop)/5);
        marginLength = String((Math.abs(aboutTop)/5));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(featureTop) < 500){
        lineLength = String(100 - Math.abs(featureTop)/5);
        marginLength = String((Math.abs(featureTop)/5));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(teamTop) < 500){
        lineLength = String(100 - Math.abs(teamTop)/5);
        marginLength = String((Math.abs(teamTop)/5));
        $(".titleLine1").css("width", lineLength.concat("%"));
        $(".titleLine2").css("width", lineLength.concat("%"));
        $(".titleLine2").css("margin-left", marginLength.concat("%"));
    }else if (Math.abs(contactTop) < 500){
        lineLength = String(100 - Math.abs(contactTop)/5);
        marginLength = String((Math.abs(contactTop)/5));
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
        $("#firstNavTab").css("margin-left", "2%");
    }
};

var xPos1 = 0;
var yPos1 = 0;
var yInt1 = 0;
var xPos2 = -200;
var yPos2 = 0;
var yInt2 = 0;
var xPos3 = 0;
var yPos3 = 0;
var yInt3 = 0;
var xPos4 = -200;
var yPos4 = 0;
var yInt4 = 0;
var leafAnimation = setInterval(function(){

    xPos1+=4;
    yPos1= Math.sin(xPos1/250)*100 + xPos1/5 + yInt1 + 400;
    var x1 = String(xPos1).concat("px");
    var y1 = String(yPos1).concat("px");
    $("#leaf1").css("left", x1);
    $("#leaf1").css("bottom", y1);
    if (xPos1 > 2000){
        xPos1 = 0;
        yInt1 = Math.random()*600 - Math.random()*600;
    }
    if (yPos1 > 1500){
        yInt1 = Math.random()*600 - Math.random()*600;
    }

    xPos2+=5;
    yPos2= Math.sin(xPos2/200)*75 + xPos2/5 + yInt2 + 400;
    var x2 = String(xPos2).concat("px");
    var y2 = String(yPos2).concat("px");
    $("#leaf2").css("left", x2);
    $("#leaf2").css("bottom", y2);
    if (xPos2 > 2000){
        xPos2 = 0;
        yInt2 = Math.random()*600 - Math.random()*600;
    }
    if (yPos2 > 1500){
        yInt2 = Math.random()*600 - Math.random()*600;
    }

    xPos3+=5;
    yPos3= Math.sin(xPos3/220)*100 + xPos3/5 + yInt3 + 400;
    var x3 = String(xPos3).concat("px");
    var y3 = String(yPos3).concat("px");
    $("#leaf3").css("left", x3);
    $("#leaf3").css("bottom", y3);
    if (xPos3 > 2000){
        xPos3 = 0;
        yInt3 = Math.random()*600 - Math.random()*600;
    }
    if (yPos3 > 1500){
        yInt3 = Math.random()*600 - Math.random()*600;
    }

    xPos4+=4.5;
    yPos4= Math.sin(xPos4/300)*50 + xPos4/5 + yInt4 + 400;
    var x4 = String(xPos4).concat("px");
    var y4 = String(yPos4).concat("px");
    $("#leaf4").css("left", x4);
    $("#leaf4").css("bottom", y4);
    if (xPos4 > 2000){
        xPos4 = 0;
        yInt4 = Math.random()*600 - Math.random()*600;
    }
    if (yPos4 > 1500){
        yInt4 = Math.random()*600 - Math.random()*600;
    }
}, 10);


var checkLoad = setInterval(function(){
    $('body').imagesLoaded().always(function(instance){
        setTimeout(function() {
            //your code to be executed after 1 second
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
            $('.load').animate({top: -2000}, 1500, function() {
                // Animation complete.
            });
            setTimeout(function(){
                $('.load').css('display', 'none');
            }, 1500);
            $('header').animate({top: 0}, 2000, function(){
            });
            clearInterval(checkLoad);
          }, 500);
    });
}, 10);

function submitForm(){
    $('textarea').val('');
    alert("Thank you for your feedback, a correspondent from our team will be in touch shortly!");
}