m = 0;

function animateGraph() {
    //$("#grgrafiekkl").attr("transform","translate(150,25)");

    setTimeout(
            function() {
                showGroteGrafiek()
            }, 1500);
    /*$( "#layer5" ).show('fast',function(){
     $( "#layer5" ).animate({
     width: "toggle",
     height: "toggle"
     }, {
     duration: 5000,
     specialEasing: {
     width: "linear",
     height: "easeOutBounce"
     }
     }); 
     });*/



}

function animateCar() {
    alert("test");
}

function showGroteGrafiek() {
    $("#grgrafiekgr").slideDown();
    $("#GrafiekTitel tspan").text("");
    $("#GrafiekTitel").hide();
    $(".assemblyOverlay img").attr("src", "images/css/overlay3.png").show();
    checkCookie3();
}

function showKleineGrafiek() {
    $("#grgrafiekkl").attr({
        x: $("input[name='grafiekx']").val(),
        y: $("input[name='grafieky']").val()

    });
    $("#grgrafiekgr").slideUp();
    $("#grgrafiekkl").slidedown();
}

/*/function stepping() {
 //    $("#grgrafiekkl").animate({
 //        top: "50px"
 //    }, "fast", {
 //        step: function () {
 //            stepone();
 //        }
 //    }).animate({
 //        top: "50px"
 //    }, {
 //        duration: "fast",
 //        step: function () {
 //            steptwo();
 //        }
 //    });
 //    //console.log("stepping");
 //}
 //
 //function stepone() {
 //    $("#grgrafiekkl").attr("transform", "translate(160,25)");
 //    setTimeout(function () {
 //        steponea()
 //    }, 5);
 //}
 //
 //function steponea() {
 //    $("#grgrafiekkl").attr("transform", "translate(170,25)");
 //    setTimeout(function () {
 //        steponeb()
 //    }, 5);
 //}
 //
 //function steponeb() {
 //    $("#grgrafiekkl").attr("transform", "translate(180,25)");
 //    setTimeout(function () {
 //        steponec()
 //    }, 5);
 //}
 //
 //function steponec() {
 //    $("#grgrafiekkl").attr("transform", "translate(190,25)");
 //    setTimeout(function () {
 //        steponed()
 //    }, 5);
 //}
 //
 //function steponed() {
 //    $("#grgrafiekkl").attr("transform", "translate(200,25)");
 //    setTimeout(function () {
 //        steponee()
 //    }, 5);
 //}
 //
 //function steponee() {
 //    $("#grgrafiekkl").attr("transform", "translate(210,25)");
 //    setTimeout(function () {
 //        steponef()
 //    }, 5);
 //}
 //
 //function steponef() {
 //    $("#grgrafiekkl").attr("transform", "translate(220,25)");
 //    setTimeout(function () {
 //        steponeg()
 //    }, 5);
 //}
 //
 //function steponeg() {
 //    $("#grgrafiekkl").attr("transform", "translate(230,25)");
 //    setTimeout(function () {
 //        steponeh()
 //    }, 5);
 //}
 //
 //function steponeh() {
 //    $("#grgrafiekkl").attr("transform", "translate(240,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //
 //}
 //
 //function steponei() {
 //    $("#grgrafiekkl").attr("transform", "translate(250,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //}
 //
 //function steponej() {
 //    $("#grgrafiekkl").attr("transform", "translate(260,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //}
 //
 //function steponek() {
 //    $("#grgrafiekkl").attr("transform", "translate(280,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //}
 //
 //function steponel() {
 //    $("#grgrafiekkl").attr("transform", "translate(290,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //}
 //
 //function steponem() {
 //    $("#grgrafiekkl").attr("transform", "translate(300,25)");
 //    setTimeout(function () {
 //        steptwo()
 //    }, 5);
 //}
 //
 //function steptwo() {
 //    $("#grgrafiekkl").attr("transform", "translate(300,500)");
 //    setTimeout(function () {
 //        stepthree()
 //    }, 5);
 //}
 //
 //function stepthree() {
 //    $("#grgrafiekkl").attr("transform", "scale(2)");
 //    setTimeout(function () {
 //        $("#grgrafiekkl").hide();
 //        $("#layer5").show();
 //    }, 100);
 //}*/

function showAHT() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");


    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("AHT");
    $("#GrafiekTitel").show();
//Bereken breedte van tekst om tekst te centreren in kader
    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));
    /*if (breedteKader>breedte)
     {
     // nieuweBreedte= breedte + 50;
     //$("#GrafiekTitel rect").attr("width", nieuweBreedte);
     var verschilKader=breedteKader-breedte;
     verschilKader=verschilKader/2;
     
     //$("#GrafiekTitel rect").attr("width", nieuweBreedte);
     $("#GrafiekTitel text, #GrafiekTitel tspan").attr( "x",(posKader + verschilKader));
     $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x"))+2));
     } 
     else
     {
     nieuweBreedte = breedte + 10;
     
     $("#GrafiekTitel rect").attr
     (
     {
     width:nieuweBreedte,
     x:posKader-(nieuweBreedte/3)
     }
     );
     
     $("#GrafiekTitel text, #GrafiekTitel tspan").attr( "x",posXtext-(nieuweBreedte/3));
     $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x"))+2));
     }*/



    if ($("#grafiekAHT").css("display") == "none") {
        $("#car").show();
        $("#grafiekAHT").show();
        $("#grafiekGrootFocus").css("fill", "#D22630");
        $("#grafiekMRT, #grafiekVerzuim, #grafiekDoelen, #grafiekAdherence, #grafiekGespr, #grafiekACW, #car-blauw, #car-purple").hide();
        //console.log($("#grafiekAHT").css("display"));

    } else {
        $("#car").hide();

        $("#grafiekAHT").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
    }

    setItem();
}
function showGespr() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");

    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("Gesprekstijd");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 20;

    posXtext = calcCenter(breedte, 440) + 40;
    posKader = calcCenter(breedteKader, 440) + 40;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));




    if ($("#grafiekGespr").css("display") == "none") {
        hideAllExceptme(6);
//        $("#car-blauw").show();
//        $("#grafiekGespr").show();
//        $("#grafiekGrootFocus").css("fill", "#D22630");
//        $("#grafiekMRT, #grafiekVerzuim, #grafiekDoelen, #grafiekAdherence, #grafiekAHT, #grafiekACW, #car, #car-purple").hide();
        //console.log($("#grafiekAHT").css("display"));

    } else {
 hideAllExceptme(8);
//        $("#car-blauw").hide();
//        $("#grafiekGespr").hide();
//        $("#grafiekGrootFocus").css("fill", "#005566");
//        $("#GrafiekTitel tspan").text("");
    }

    setItem();
}
function showACW() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");
    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("Nawerktijd");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;//posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));






    if ($("#grafiekACW").css("display") == "none") {
        hideAllExceptme(7);
        //$("#car-purple").show();
        //$("#grafiekACW").show();
        $("#grafiekGrootFocus").css("fill", "#D22630");
        //$("#grafiekMRT, #grafiekVerzuim, #grafiekDoelen, #grafiekAdherence, #grafiekAHT, #grafiekGespr, #car, #car-blauw").hide();
        //console.log($("#grafiekAHT").css("display"));

    } else {
hideAllExceptme(8);
        //$("#car-purple").hide();
        //$("#grafiekACW").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
    }

    setItem();
}
function showMRT() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");

    var factory = 5.32;
    var factorstop = 0.0815;
    var startpunt = 0.95;
    var thispoint = 0;

    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("MRT");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));







    if ($("#grafiekMRT").css("display") == "none") {
        hideAllExceptme(1);
//        hideInfoBallon();
//        $("#car").hide();
//        $("#car-purple").hide();
//
//        $("#grafiekMRT").show();
//        $("#grafiekAHT, #grafiekVerzuim, #grafiekDoelen, #grafiekAdherence, #grafiekGespr, #grafiekACW, #car-blauw").hide();
//        $("#grafiekGrootFocus").css("fill", "#D22630");

        //console.log($("#grafiekAHT").css("display"));

    } else {
        //$("#car").hide();
        $("#grafiekMRT").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
    }

    setItem();
//Calc Average MRT
    var strAbrev = "Jan,Feb,Maa,Apr,Mei,Jun,Jul,Aug,Sep,Okt,Nov,Dec";

    var ArrAbrev = strAbrev.split(",");
    var acc = 0;
    var iter = 0;
    for (var i = 0; i < ArrAbrev.length; i++)
    {
        if ($("#mrt-" + ArrAbrev[i]).attr("perc"))
        {
            acc += parseFloat($("#mrt-" + ArrAbrev[i]).attr("perc"));
            iter++;
        }
    }

    if (iter !== 0)
    {
        var mrtAvg = Math.round(acc / iter * 100) / 100;
        mrtAvg = mrtAvg.toFixed(2);
        $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(mrtAvg + "%");


        thispoint = 700 - (mrtAvg * factory);
        if (thispoint < 41)
        {
            thispoint = 43;
            //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
            $("#linearGradient5682").attr("y2", thispoint);
        }
        else
        {
            //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
            $("#linearGradient5682").attr("y2", thispoint);
        }
    }
}
function showVerzuim() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");

    $("#refresh-button").hide();
    $("#GrafiekTitel tspan").text("Verzuim");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));







    if ($("#grafiekVerzuim").css("display") == "none") {
        hideInfoBallon();
        $("#car").hide();
        $("#car-purple").hide();

        $("#grafiekVerzuim").show();
        $("#grafiekAHT,  #grafiekMRT, #grafiekDoelen, #grafiekAdherence, #grafiekGespr, #grafiekACW, #car-blauw").hide();
        $("#grafiekGrootFocus").css("fill", "#D22630");

        //console.log($("#grafiekAHT").css("display"));

    } else {
        //$("#car").hide();
        $("#grafiekVerzuim").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
    }

    setItem();
}
function showDoelen() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");

    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("KPI");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));







    if ($("#grafiekDoelen").css("display") == "none") {
        hideInfoBallon();
        $("#car").hide();
        $("#car-purple").hide();

        $("#grafiekDoelen").show();
        $("#grafiekAHT,  #grafiekMRT, #grafiekVerzuim, #grafiekAdherence, #grafiekGespr, #grafiekACW, #car-blauw").hide();
        $("#grafiekGrootFocus").css("fill", "#D22630");

        //console.log($("#grafiekAHT").css("display"));

    } else {
        //$("#car").hide();
        $("#grafiekDoelen").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
    }

    setItem();
}
function showAdherence() {
    var original = $("#text3012 tspan").text();
    var naam_compleet = replaceall(original, " ", "_");
    //console.log("GrafiekAHTData runned");

    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("Adherence");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));







    if ($("#grafiekAdherence").css("display") == "none") {
        hideInfoBallon();
        $("#car").hide();
        $("#car-purple").hide();

        $("#grafiekAdherence").show();
        $("#grafiekAHT,  #grafiekMRT, #grafiekDoelen, #grafiekVerzuim, #grafiekGespr, #grafiekACW, #car-blauw").hide();
        $("#grafiekGrootFocus").css("fill", "#D22630");
hideAllExceptme(0);
        //console.log($("#grafiekAHT").css("display"));

    } else {
        //$("#car").hide();
        $("#grafiekAdherence").hide();
        $("#grafiekGrootFocus").css("fill", "#005566");
        $("#GrafiekTitel tspan").text("");
        hideAllExceptme(8);
    }

    setItem();
}
function showQM(){
    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("Coaching");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 50;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));
    
    
    
    
   
    switch(true)
    {
        case $("#bronzenplak").css("display")=="inline":
            $("#bronzenplak").hide().show(1000);
            
            break;
        case $("#zilveren").css("display")=="inline":
            $("#zilveren").hide().show(1000);
            
            break;            
        case $("#goudenplak").css("display")=="inline":
            $("#goudenplak").hide().show(1000);
            
            break;            
        
    }
 //Icoon van Qm wordt dan de icoon van CM    
    $("#grqm, #grcm").toggle();
    // Tekst van icoon wijzigen
    $("#txtQM tspan").text("Qm");
    hideAllExceptme(4);
    
}
function showCM(){
    $("#refresh-button").show();
    $("#GrafiekTitel tspan").text("QM-model");
    $("#GrafiekTitel").show();

    var breedte = calcTextWidth($("#text5637 tspan").text());

    var posXtext = parseInt($("#text5637").attr("x"));
    var posKader = parseInt($("#GrafiekTitel rect").attr("x"));

    var verschil = posXtext - posKader;
    var breedteKader = breedte + 75;
    posXtext = calcCenter(breedte, 440) + 40;
    posKader = posXtext - 10;

    $("#GrafiekTitel rect").attr
            (
                    {
                        width: breedteKader,
                        x: posKader
                    }
            );

    $("#GrafiekTitel text, #GrafiekTitel tspan").attr("x", posXtext);
    $("#text4747, text4747 tspan").attr("x", (parseInt($("#text4747").attr("x")) + 2));
    
    
    
    
    $("#grqm, #grcm").toggle();
     $("#txtQM tspan").text("Qm");
    hideAllExceptme(5);
    setItem();
}
function hideAllExceptme(number){
    
    var waarde=parseInt(number);
    var strGrafieken="grafiekAdherence,grafiekMRT,grafiekVerzuim,grafiekDoelen,grafiekQM,grafiekQMCor,grafiekGespr,grafiekACW";
    var ArrGrafieken= strGrafieken.split(",");
    
    
    
    //blauwe auto is Gespr en paarse auto is ACW
    var strCars="car-blauw,car-purple";
    var ArrCars=strCars.split(",");
    
    
        //$("#grafiekAdherence").show();
        //$("#grafiekAHT,  #grafiekMRT, #grafiekDoelen, #grafiekVerzuim, #grafiekGespr, #grafiekACW, #car-blauw").hide();
        $("#"+ArrCars[0]+", #"+ArrCars[1]).hide();
        for (var i=0;i<ArrGrafieken.length;i++){
            
            if (i==waarde){
                $("#"+ArrGrafieken[i]).show();
                if(i==6){
                    $("#"+ArrCars[0]).show();
                    //console.log(ArrCars[0]);
                }
                if(i==7){
                    $("#"+ArrCars[1]).show();
                }                
            }
            else{
                $("#"+ArrGrafieken[i]).hide();
            }
            
        }

    
}
function calcPositiononGrid() {

}

function returnMaanden() {
    var weeknr = (new Date()).getWeek();
    //////////////////////////NIET VERGETEN DIT TE HERSTELLEN NA TESTEN NAAR!!!!! var maand = (new Date()).getMonth()
    var maand = (new Date()).getMonth();
    var year = (new Date().getFullYear());
    $.getJSON("js/maanden.js", function(data)

    {
        $("input[name='AHTMaanden']").val("");

        //console.log(mijndata);
        var nummer = 0;
        $.each(data, function(key, val) {
            $.each(val, function(key2, val2) {
                if (maand > 1) {
                    if ((val2.cijfer - 1) == maand - 3 || (val2.cijfer - 1) == maand - 2 || (val2.cijfer - 1) == maand - 1 || (val2.cijfer - 1) == maand) {
                        nummer = parseInt(val2.cijfer) - 1;
                        if ($("input[name='AHTMaanden']").val()) {
                            $("input[name='AHTMaanden']").val($("input[name='AHTMaanden']").val() + "," + UCaseFirst(data.maanden[nummer].naam));
                        } else {
                            $("input[name='AHTMaanden']").val(UCaseFirst(data.maanden[nummer].naam));
                        }
                    }
                } else {
                    if (maand == 0) {

                        if ((val2.cijfer - 1) == 9(val2.cijfer - 1) == 10 || (val2.cijfer - 1) == 10 || (val2.cijfer - 1) == 11 || (val2.cijfer - 1) == maand) {
                            nummer = parseInt(val2.cijfer) - 1;
                            if ($("input[name='AHTMaanden']").val()) {
                                $("input[name='AHTMaanden']").val($("input[name='AHTMaanden']").val() + "," + UCaseFirst(data.maanden[nummer].naam));
                            } else {
                                $("input[name='AHTMaanden']").val(UCaseFirst(data.maanden[nummer].naam));
                            }

                        }
                    } else if (maand = 1) {
                        if (((val2.cijfer - 1) == 10 || val2.cijfer - 1) == 11 || (val2.cijfer - 1) == maand - 1 || (val2.cijfer - 1) == maand) {
                            nummer = parseInt(val2.cijfer) - 1;

                            if ($("input[name='AHTMaanden']").val()) {
                                $("input[name='AHTMaanden']").val($("input[name='AHTMaanden']").val() + "," + UCaseFirst(data.maanden[nummer].naam));
                            } else {
                                $("input[name='AHTMaanden']").val(UCaseFirst(data.maanden[nummer].naam));
                            }

                        }
                    }
                }
            });
        });

    });

}

function retrieveWeken() {
    return $("input[name='AHTweken']").val();
}

function retrieveAHTcijfers() {
    return $("input[name='AHTcijfers']").val();
}
/*===================================================
 //function GrafiekAHTData(Userfolder) { //test all 12 points with different heights
 //
 //    var weeknr = (new Date()).getWeek();
 //    var maand = (new Date()).getMonth();
 //    var year = (new Date().getFullYear());
 //
 //    var startpunty = 90;
 //    var startpuntx = 50;
 //
 //    var eindpunty = 540;
 //    var eindpuntx = 630;
 //
 //    var factorstage1 = 6.6666667; //groen
 //    var factorstage2 = 10.6666667; //geel
 //    var factorstage3 = 4.537; //rood
 //
 //    var limiet1 = 240;
 //    var limiet2 = 255;
 //    var limiet3 = 600;
 //
 //    var intervalx = 40;
 //    //$("input[name='AHTMaanden']").val("");
 //    $("input[name='AHTcijfers']").val("");
 //    $("input[name='AHTweken']").val("");
 //    //Get 4 month folders
 //
 //
 //    var strtoSearch = new Array();
 //    var weeks = new Array();
 //
 //    for (var i = weeknr - 14; i < weeknr - 1; i++) {
 //
 //        weeks.push(i);
 //    }
 //
 //
 //    var arrAHTMaanden = new Array();
 //    arrAHTMaanden = $("input[name='AHTMaanden']").val().split(",");
 //
 //    //console.log("arrAHTMaanden");
 //
 //
 //
 //    for (iteratie = 0; iteratie < arrAHTMaanden.length; iteratie++) {
 //        //console.log(arrAHTMaanden[iteratie]);
 //        //console.log("users/cijfers/" + year + "/" + arrAHTMaanden[iteratie] + "/" + Userfolder + "/AHT.js");
 //        $.getJSON("users/cijfers/" + year + "/" + arrAHTMaanden[iteratie] + "/" + Userfolder + "/AHT.js", function (data) {
 //            var resultArrweeks = new Array();
 //            var resultArrAHTinsec = new Array();
 //
 //
 //            $.each(data.AHTCijfers, function (key, val) {
 //                var a = weeks.indexOf(parseInt(val.weeknr));
 //                //console.log("a =" + a);
 //
 //                if (a > 0) {
 //                    /*console.log(val.weeknr);
 //			console.log(val.Gesprekstijd);
 //			console.log(val.ACW);
 //			console.log(val.AHT);
 //			console.log(val.AHT_in_sec);
 //                    if ($("input[name='AHTcijfers']").val()) {
 //                        $("input[name='AHTcijfers']").val($("input[name='AHTcijfers']").val() + "," + val.AHT_in_sec);
 //                        $("input[name='AHTweken']").val($("input[name='AHTweken']").val() + "," + val.weeknr);
 //
 //                    } else {
 //                        $("input[name='AHTcijfers']").val(val.AHT_in_sec);
 //                        $("input[name='AHTweken']").val(val.weeknr);
 //                    }
 //                    resultArrweeks.push(val.weeknr);
 //                    resultArrAHTinsec.push(val.AHT_in_sec);
 //                }
 //
 //                var path = "m ";
 //
 //                // var startpunty = 90;
 //                // var startpuntx = 50;
 //
 //                // var eindpunty = 540;
 //                // var eindpuntx = 630;
 //
 //                // var factorstage1 = 6.6666667;//groen
 //                // var factorstage2 = 10.6666667;//geel
 //                // var factorstage3 = 4.537; //rood
 //
 //                // var limiet1 = 240;
 //                // var limiet2 = 255;
 //                // var limiet3 = 600;	
 //                //console.log("aantalweken " + resultArrweeks.length)
 //                for (var i = 0; i < resultArrweeks.length - 1; i++) {
 //                    //console.log(resultArrweeks[i]);
 //                    p = i + 1;
 //                    waarde = parseInt(resultArrAHTinsec[i]);
 //                    //console.log("waarde is " + waarde);
 //                    //==========================
 //                    // bereken startpunt
 //                    //==========================
 //
 //
 //                    switch (true) {
 //                        case (waarde < 226):
 //                            //use 225
 //
 //                            switch (i) {
 //                                case 0:
 //                                    startpunt = "50,490";
 //                                    break;
 //                                case 1:
 //                                    startpunt = "90,490";
 //                                    break;
 //                                case 2:
 //                                    startpunt = "130,490";
 //                                    break;
 //                                case 3:
 //                                    startpunt = "170,490";
 //                                    break;
 //                                case 4:
 //                                    startpunt = "210,490";
 //                                    break;
 //                                case 5:
 //                                    startpunt = "250,490";
 //                                    break;
 //                                case 6:
 //                                    startpunt = "290,490";
 //                                    break;
 //                                case 7:
 //                                    startpunt = "330,490";
 //                                    break;
 //                                case 8:
 //                                    startpunt = "370,490";
 //                                    break;
 //                                case 9:
 //                                    startpunt = "410,490";
 //                                    break;
 //                                case 10:
 //                                    startpunt = "450,490";
 //                                    break;
 //                                case 11:
 //                                    startpunt = "490,490";
 //                                    break;
 //
 //
 //                            }
 //
 //                            //console.log("week is " + i, "waarde is " + waarde, "startpunt is " + startpunt);
 //                            break;
 //
 //                        case (waarde > 225 && waarde < 241):
 //                            //use waarde
 //                            switch (i) {
 //                                case 0:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "50," + gebied1;
 //
 //                                    break;
 //                                case 1:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "90," + gebied1;
 //                                    break;
 //                                case 2:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "130," + gebied1;
 //                                    break;
 //                                case 3:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "170," + gebied1;
 //                                    break;
 //                                case 4:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "210," + gebied1;
 //                                    break;
 //                                case 5:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "250," + gebied1;
 //                                    break;
 //                                case 6:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "290," + gebied1;
 //                                    break;
 //                                case 7:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "330," + gebied1;
 //                                    break;
 //                                case 8:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "370," + gebied1;
 //                                    break;
 //                                case 9:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "410," + gebied1;
 //                                    break;
 //                                case 10:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "450," + gebied1;
 //                                    break;
 //                                case 11:
 //                                    gebied1 = 490 - ((waarde - 225) * factorstage1);
 //                                    startpunt = "490," + gebied1;
 //                                    break;
 //
 //
 //                            }
 //                            //console.log("week is " + i, "waarde is " + waarde, "startpunt is " + startpunt);
 //                            break;
 //
 //                        case (waarde > 240 && waarde < 256):
 //                            //use waarde
 //                            gebied1 = 490 - (15 * factorstage1);
 //                            gebied2 = gebied1 - (waarde - 240) * factorstage2;
 //                            switch (i) {
 //                                case 0:
 //
 //                                    startpunt = "50," + gebied2;
 //
 //                                    break;
 //                                case 1:
 //
 //                                    startpunt = "90," + gebied2;
 //                                    break;
 //                                case 2:
 //
 //                                    startpunt = "130," + gebied2;
 //                                    break;
 //                                case 3:
 //
 //                                    startpunt = "170," + gebied2;
 //                                    break;
 //                                case 4:
 //
 //                                    startpunt = "210," + gebied2;
 //                                    break;
 //                                case 5:
 //
 //                                    startpunt = "250," + gebied2;
 //                                    break;
 //                                case 6:
 //
 //                                    startpunt = "290," + gebied2;
 //                                    break;
 //                                case 7:
 //
 //                                    startpunt = "330," + gebied2;
 //                                    break;
 //                                case 8:
 //
 //                                    startpunt = "370," + gebied2;
 //                                    break;
 //                                case 9:
 //
 //                                    startpunt = "410," + gebied2;
 //                                    break;
 //                                case 10:
 //
 //                                    startpunt = "450," + gebied2;
 //                                    break;
 //                                case 11:
 //
 //                                    startpunt = "490," + gebied2;
 //                                    break;
 //
 //
 //                            }
 //
 //
 //                            //console.log("week is " + i, "waarde is " + waarde, "startpunt is " + startpunt);
 //                            break;
 //
 //                        case (waarde > 255 && waarde < 600):
 //                            //use waarde
 //
 //                            gebied1 = 490 - (15 * factorstage1);
 //                            gebied2 = gebied1 - (15 * factorstage2);
 //                            gebied3 = gebied2 - (waarde - 255) * factorstage3;
 //                            switch (i) {
 //                                case 0:
 //
 //                                    startpunt = "50," + gebied3;
 //
 //                                    break;
 //                                case 1:
 //
 //                                    startpunt = "90," + gebied3;
 //                                    break;
 //                                case 2:
 //
 //                                    startpunt = "130," + gebied3;
 //                                    break;
 //                                case 3:
 //
 //                                    startpunt = "170," + gebied3;
 //                                    break;
 //                                case 4:
 //
 //                                    startpunt = "210," + gebied3;
 //                                    break;
 //                                case 5:
 //
 //                                    startpunt = "250," + gebied3;
 //                                    break;
 //                                case 6:
 //
 //                                    startpunt = "290," + gebied3;
 //                                    break;
 //                                case 7:
 //
 //                                    startpunt = "330," + gebied3;
 //                                    break;
 //                                case 8:
 //
 //                                    startpunt = "370," + gebied3;
 //                                    break;
 //                                case 9:
 //
 //                                    startpunt = "410," + gebied3;
 //                                    break;
 //                                case 10:
 //
 //                                    startpunt = "450," + gebied3;
 //                                    break;
 //                                case 11:
 //
 //                                    startpunt = "490," + gebied3;
 //                                    break;
 //
 //
 //                            }
 //                            //console.log("week is " + i, "waarde is " + waarde, "startpunt is " + startpunt);
 //                            break;
 //
 //                        case (waarde > 600):
 //                            //use 600
 //                            switch (i) {
 //                                case 0:
 //                                    startpunt = "50,90";
 //                                    break;
 //                                case 1:
 //                                    startpunt = "90,90";
 //                                    break;
 //                                case 2:
 //                                    startpunt = "130,90";
 //                                    break;
 //                                case 3:
 //                                    startpunt = "170,90";
 //                                    break;
 //                                case 4:
 //                                    startpunt = "210,90";
 //                                    break;
 //                                case 5:
 //                                    startpunt = "250,90";
 //                                    break;
 //                                case 6:
 //                                    startpunt = "290,90";
 //                                    break;
 //                                case 7:
 //                                    startpunt = "330,90";
 //                                    break;
 //                                case 8:
 //                                    startpunt = "370,90";
 //                                    break;
 //                                case 9:
 //                                    startpunt = "410,90";
 //                                    break;
 //                                case 10:
 //                                    startpunt = "450,90";
 //                                    break;
 //                                case 11:
 //                                    startpunt = "490,90";
 //                                    break;
 //
 //
 //                            }
 //                            //console.log("week is " + i, "waarde is " + waarde, "startpunt is " + startpunt);
 //                            break;
 //                    }
 //
 //                    //alert(waarde);
 //
 //                    /* if (waarde<226) 
 //						{
 //
 //							waarde=225;
 //							//strtoSearch.push( "Week"+p+"waarde<"+waarde);
 //							startpunt = "Week1waarde<"+waarde;
 //							
 //							console.log("Dit");
 //						} 
 //					else if(waarde>225 || waarde<255)
 //						{
 //							//strtoSearch.push( "Week"+p+"waarde"+waarde);
 //							startpunt = "Week1waarde<"+waarde;
 //							
 //							console.log("Dat");
 //						}
 //					else
 //					
 //						{
 //							
 //							waarde=255;
 //							startpunt = "Week1waarde<"+waarde;
 //							//strtoSearch.push("Week"+p+"waarde>"+waarde);
 //						} 
 //
 //
 //                    /* 				$.getJSON("js/grid.js",
 //					function(json)
 //					{
 //
 //						$.each(json.grid,
 //							function(key,val)
 //								{
 //							
 //									$.each(val,
 //										function(key1,val1)
 //											{
 //									
 //												//alert(key1);
 //												//console.log(strtoSearch, key1);
 //												a=strtoSearch.indexOf(key1);
 //												if (a>0)
 //													{
 //														console.log(val1);
 //                                                        // "m 53.44624,494 c 46.6582,-59.42345 114.44117,-31.60175 178,-14 38.63762,-16.82442 119.83628,-67.64937 206,-9"
 //                                                                                                                
 //                                                        console.log(val1);s                                                       
 //                                                        path=path+val1+" ";
 //                                                        $("#asfalt").attr("d",path);
 //													}
 //											}
 //											);
 //
 //
 //								}
 //								);
 //
 //					}
 //					);  
 //                    //$("#asfalt").attr("d", path);
 //
 //                }
 //
 //
 //
 //
 //            });
 //
 //        });
 //    }
 //
 //
 //
 //
 //
 //
 //    //var waarde=0;
 //    //var n=retrieveAHTcijfers();
 //    //var w=retrieveWeken();
 //
 //
 //
 //
 //
 //
 //
 //
 //}*/

/*/function GrafiekAHTData1(Userfolder) {
 //    var runonce = 1;
 //    var weeknr = (new Date()).getWeek();
 //    var maand = (new Date()).getMonth();
 //    var year = (new Date().getFullYear());
 //    var weeks = new Array();
 //	
 //
 //    //Haal Maanden op
 //
 //    var LoopMaanden = new Array();
 //    var alpha = $("input[name='AHTMaanden']").val();
 //    LoopMaanden = alpha.split(",");
 //    var path = "M 0,0";
 //    var pathOnderdelen = new Array();
 //    //populate weeks
 //    
 //    for (var i = weeknr - 13; i < weeknr ; i++) {
 //
 //        weeks.push(i);
 //    }
 //
 //    // Loop weken 
 //	
 //    for (var b = 0; b < 12; b++) { //console.log("b is "+b);
 //        var ArrWeeks = new Array();
 //        var ArrAHTinsec = new Array();
 //        var ArrAHT=new Array();
 //        var ArrACW=new Array();
 //        var ArrACWinsec=new Array();
 //        var ArrGespr=new Array();
 //        var ArrGesprinsec=new Array();
 //        
 //        for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {
 //            $.getJSON("users/cijfers/" + year + "/" + LoopMaanden[iteratie] + "/" + Userfolder + "/AHT.js",
 //
 //            function (data) {
 //                $.each(data.AHTCijfers,
 //
 //                function (key, val) {
 //                    var a = weeks.indexOf(parseInt(val.weeknr));
 //
 //                    //console.log("a =" + a);
 //
 //                    if (a > 0) {
 //                        var alinArr = ArrWeeks.indexOf(val.weeknr);
 //                        if (alinArr < 0)
 //
 //                        {
 //                            ArrWeeks.push(val.weeknr);
 //                            ArrGespr.push(val.Gesprekstijd);
 //                            ArrACW.push(val.ACW);
 //                            ArrAHT.push(val.AHT);
 //                            ArrAHTinsec.push(val.AHT_in_sec);
 //                            ArrACWinsec.push(val.ACW_in_sec);
 //                            ArrGesprinsec.push(val.Gespr_in_sec);
 //                            
 //                        }
 //
 //                    }
 //
 //
 //                });
 //                //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
 //                //
 //                //console.log(b, ArrAHTinsec);
 //                var sum = 0;
 //                for (var v = 0; v < ArrAHTinsec.length; v++) {
 //                    sum += parseInt(ArrAHTinsec[v]);
 //                }
 //
 //                var avg = sum / ArrAHTinsec.length;
 //                changeTraffic(avg);
 //
 //                path = "M 0,0";
 //                $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7, #bullet8, #bullet9, #bullet10, #bullet11, #bullet12").hide();
 //                for (var item in ArrWeeks) {
 //
 //                    pathOnderdelen = path.split(" ");
 //
 //                    // Maak hier berekening
 //                    var laatste = pathOnderdelen.length - 1;
 //                    
 //                    if (pathOnderdelen[laatste] == "0,0") {
 //                        /*var startpunty=90;
 //			var startpuntx=50;
 //			
 //			var eindpunty =540;
 //			var eindpuntx = 630;
 //			
 //                        var factorstage1 = 6.6666667;//groen
 //                        var factorstage2 = 10.6666667;//geel
 //                        var factorstage3 = 4.537; //rood
 //                        
 //			var limiet1 = 240;
 //			var limiet2 = 255;
 //			var limiet3 = 600;
 //			var intervalx = 40;
 //
 //                        var startpunt = calcPosition("", parseInt(ArrAHTinsec[item]), 1);
 //                        //console.log("startpunt is "+ startpunt);
 //                        path = "M " + startpunt;
 //                        var bulletpos = startpunt.split(",");
 //                        var bulletposx = parseInt(bulletpos[0]);
 //                        var bulletposy = parseInt(bulletpos[1]);
 //                        var inhoud = $("#bullet1").attr("d");
 //                        var splitinhoud = inhoud.split(" ", 3);
 //                        inhoud = inhoud.replace(splitinhoud[1], (bulletposx+7) + "," + (bulletposy));
 //                        $("#bullet1").attr("d", inhoud);
 //                        $("#bullet1").attr(
 //                                {
 //                                    weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    Gespr_in_sec:ArrGesprinsec[item],
 //                                    ACW:ArrACW[item],
 //                                    ACW_in_sec:ArrACWinsec[item],
 //                                    AHT:ArrAHT[item],
 //                                    AHT_in_sec:ArrAHTinsec[item],
 //                                    onmouseover:"showInfoBallon(1," +bulletposy+")",
 //                                    onclick: "setInfoBallon(1," +bulletposy+")"
 //                                    
 //                                    
 //                                });
 //                        $("#bullet1").removeAttr("transform");
 //                        $("#bullet1").show();
 //                        
 //                        //$("#bullet1").mouseover(showInfoBallon(1,1));
 //                        
 //                    } else {
 //                        var nextpunt = calcPosition(pathOnderdelen[laatste], parseInt(ArrAHTinsec[item]), item);
 //                        var teller = parseInt(item) + 1;
 //                        bulletpos = nextpunt.split(",");
 //                        bulletposx = parseInt(bulletpos[0])+10;
 //                        bulletposy = parseInt(bulletpos[1]);
 //                        inhoud = $("#bullet" + teller).attr("d");
 //                        splitinhoud = inhoud.split(" ", 3);
 //
 //                        inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
 //                        $("#bullet" + teller).attr("d", inhoud);
 //                        $("#bullet"+teller).attr(
 //                                {
 //                                    weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    Gespr_in_sec:ArrGesprinsec[item],
 //                                    ACW:ArrACW[item],
 //                                    ACW_in_sec:ArrACWinsec[item],
 //                                    AHT:ArrAHT[item],
 //                                    AHT_in_sec:ArrAHTinsec[item],
 //                                    onmouseover:"showInfoBallon("+ teller + "," +bulletposy+")",
 //                                    onclick: "setInfoBallon("+ teller + "," +bulletposy+")"
 //                                });                        
 //                        
 //                        
 //                        
 //                        
 //                        $("#bullet" + teller).removeAttr("transform");
 //                        $("#bullet" + teller).show();
 //
 //                        //console.log("nextpunt is"+ nextpunt);
 //						
 //                        path = path + " " + nextpunt;
 //                        //==========================================================================
 //                        //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
 //                        //haal positie van bullet1 op vergelijk deze met deze bullet
 //                        //Als lastbullet y is lager dan corrigeer y met -4
 //                        //===========================================================================
 //                        
 //                        var lastbullet=$("#bullet"+(teller-1)).attr("d").split(" ",3);
 //                        var lastbullety=lastbullet[1].split(",");
 //                        
 //                        if(lastbullety[1]>bulletposy)//stijgen
 //                        {
 //                            //console.log(lastbullety[1],"stijgen",bulletposy);
 //                            var nieuwey=parseInt(lastbullety[1])+3;
 //                            inhoud=$("#bullet"+(teller-1)).attr("d");
 //                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 //                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
 //                        }
 //                        else if(lastbullety[1]==bulletposy) //gelijk
 //                        { 
 ////                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
 ////                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
 //                            //console.log(lastbullety[1],"gelijk",bulletposy);
 //                        }
 //                        else // dalen
 //                        {
 //                            //console.log(lastbullety[1],"dalen",bulletposy);
 //                            inhoud=$("#bullet"+(teller-1)).attr("d");
 //                            nieuwey=parseInt(lastbullety[1])-4;
 //                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 //                            $("#bullet"+(teller-1)).attr("d",inhoud);
 //                            
 //                        }
 //                    }
 //                }
 //
 //				
 //					$("#asfalt").attr("d", path);
 //					$("#animatieStraat").attr("d", path);
 //				
 //
 //
 //                //console.log(path);   
 //            });
 //        }
 //
 //    }
 //
 //} */
function GrafiekAHTData1(Userfolder) {
    var runonce = 1;
    var weeknr = (new Date()).getWeek();
    var maand = (new Date()).getMonth();
    var year1 = (new Date().getFullYear());
    var weeks = new Array();


    //Haal Maanden op

    var LoopMaanden = new Array();
    var alpha = $("input[name='AHTMaanden']").val();
    LoopMaanden = alpha.split(",");
    var path = "M 0,0";
    var pathOnderdelen = new Array();


    //populate weeks
    switch (true)
    {
        case(weeknr < 13):
            // verschil1 is 12weeks - weeknr in order to calculate how many week we need from previous year
            var verschil1 = 12 - weeknr;
            var verschil2 = 53 - verschil1;
            for (var i = verschil2; i < 53; i++)
            {
                weeks.push(i);
            }
            for (var i = 1; i < weeknr + 1; i++)
            {
                weeks.push(i);


            }
            break;

        default:
            for (var i = weeknr - 12; i < weeknr; i++)
            {

                weeks.push(i);
            }
            break;
    }
    //for (var i = weeknr - 13; i < weeknr ; i++) {

    //      weeks.push(i);
    // }

    // Loop weken 

    for (var b = 0; b < 12; b++) { //console.log("b is "+b);
        var ArrWeeks = new Array();
        var ArrAHTinsec = new Array();
        var ArrAHT = new Array();
        var ArrACW = new Array();
        var ArrACWinsec = new Array();
        var ArrGespr = new Array();
        var ArrGesprinsec = new Array();
        //console.log(b);
        switch (true)
        {
            case (weeks[b] > weeknr):
                var year = year1 - 1;
                var mijnMaand = Weeknr2month(weeks[b], year);
                //console.log (mijnMaand);

                break;

            default:
                year = year1;
                mijnMaand = Weeknr2month(weeks[b], year);
                //console.log ("altijd "  + mijnMaand);

                break;
        }
        //var mijnMaand= Weeknr2month(weeks[b],year);


        //for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {
        console.log("getting JSON of ", year, mijnMaand);
        $.getJSON("users/cijfers/" + year + "/" + mijnMaand + "/" + Userfolder + "/AHT.js",
                function(data) {
                    $.each(data.AHTCijfers,
                            function(key, val) {
                                var a = weeks.indexOf(parseInt(val.weeknr));

                                //console.log("a =" + a);

                                if (a > 0) {
                                    var alinArr = ArrWeeks.indexOf(val.weeknr);
                                    if (alinArr < 0)

                                    {
                                        ArrWeeks.push(val.weeknr);
                                        ArrGespr.push(val.Gesprekstijd);
                                        ArrACW.push(val.ACW);
                                        ArrAHT.push(val.AHT);
                                        ArrAHTinsec.push(val.AHT_in_sec);
                                        ArrACWinsec.push(val.ACW_in_sec);
                                        ArrGesprinsec.push(val.Gespr_in_sec);

                                    }

                                }


                            });
                    //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
                    //
                    //console.log(b, ArrAHTinsec);
                    var sum = 0;
                    for (var v = 0; v < ArrAHTinsec.length; v++) {
                        sum += parseInt(ArrAHTinsec[v]);
                    }

                    var avg = sum / ArrAHTinsec.length;
                    changeTraffic(avg);

                    path = "M 0,0";
                    $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7, #bullet8, #bullet9, #bullet10, #bullet11, #bullet12").hide();
                    for (var item in ArrWeeks) {

                        pathOnderdelen = path.split(" ");

                        // Maak hier berekening
                        var laatste = pathOnderdelen.length - 1;

                        if (pathOnderdelen[laatste] == "0,0") {
                            /*var startpunty=90;
                             var startpuntx=50;
                             
                             var eindpunty =540;
                             var eindpuntx = 630;
                             
                             var factorstage1 = 6.6666667;//groen
                             var factorstage2 = 10.6666667;//geel
                             var factorstage3 = 4.537; //rood
                             
                             var limiet1 = 240;
                             var limiet2 = 255;
                             var limiet3 = 600;
                             var intervalx = 40;*/

                            var startpunt = calcPosition("", parseInt(ArrAHTinsec[item]), 1);
                            //console.log("startpunt is "+ startpunt);
                            path = "M " + startpunt;
                            var bulletpos = startpunt.split(",");
                            var bulletposx = parseInt(bulletpos[0]);
                            var bulletposy = parseInt(bulletpos[1]);
                            var inhoud = $("#bullet1").attr("d");
                            var splitinhoud = inhoud.split(" ", 3);
                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx + 7) + "," + (bulletposy));
                            $("#bullet1").attr("d", inhoud);
                            $("#bullet1").attr(
                                    {
                                        weeknr: ArrWeeks[item],
                                        Gesprekstijd: ArrGespr[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        ACW: ArrACW[item],
                                        ACW_in_sec: ArrACWinsec[item],
                                        AHT: ArrAHT[item],
                                        AHT_in_sec: ArrAHTinsec[item],
                                        onmouseover: "showInfoBallon(1," + bulletposy + ")",
                                        onclick: "setInfoBallon(1," + bulletposy + ")"


                                    });
                            $("#bullet1").removeAttr("transform");
                            $("#bullet1").show();

                            //$("#bullet1").mouseover(showInfoBallon(1,1));

                        } else {
                            var nextpunt = calcPosition(pathOnderdelen[laatste], parseInt(ArrAHTinsec[item]), item);
                            var teller = parseInt(item) + 1;
                            console.log("teller = "+teller + "item = "+ parseInt(item));
                            bulletpos = nextpunt.split(",");
                            bulletposx = parseInt(bulletpos[0]) + 10;
                            bulletposy = parseInt(bulletpos[1]);
                            inhoud = $("#bullet" + teller).attr("d");
                            splitinhoud = inhoud.split(" ", 3);

                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
                            $("#bullet" + teller).attr("d", inhoud);
                            $("#bullet" + teller).attr(
                                    {
                                        weeknr: ArrWeeks[item],
                                        Gesprekstijd: ArrGespr[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        ACW: ArrACW[item],
                                        ACW_in_sec: ArrACWinsec[item],
                                        AHT: ArrAHT[item],
                                        AHT_in_sec: ArrAHTinsec[item],
                                        onmouseover: "showInfoBallon(" + teller + "," + bulletposy + ")",
                                        onclick: "setInfoBallon(" + teller + "," + bulletposy + ")"
                                    });




                            $("#bullet" + teller).removeAttr("transform");
                            $("#bullet" + teller).show();

                            //console.log("nextpunt is"+ nextpunt);

                            path = path + " " + nextpunt;
                            //==========================================================================
                            //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
                            //haal positie van bullet1 op vergelijk deze met deze bullet
                            //Als lastbullet y is lager dan corrigeer y met -4
                            //===========================================================================

                            var lastbullet = $("#bullet" + (teller - 1)).attr("d").split(" ", 3);
                            var lastbullety = lastbullet[1].split(",");

                            if (lastbullety[1] > bulletposy)//stijgen
                            {
                                //console.log(lastbullety[1],"stijgen",bulletposy);
                                var nieuwey = parseInt(lastbullety[1]) + 3;
                                inhoud = $("#bullet" + (teller - 1)).attr("d");
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1)).attr("d", inhoud);
                            }
                            else if (lastbullety[1] == bulletposy) //gelijk
                            {
//                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
//                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
                                //console.log(lastbullety[1],"gelijk",bulletposy);
                            }
                            else // dalen
                            {
                                //console.log(lastbullety[1],"dalen",bulletposy);
                                inhoud = $("#bullet" + (teller - 1)).attr("d");
                                nieuwey = parseInt(lastbullety[1]) - 4;
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1)).attr("d", inhoud);

                            }
                        }
                    }


                    $("#asfalt").attr("d", path);
                    $("#animatieStraat").attr("d", path);



                    //console.log(path);   
                });
        //} removed for 

    }

}
function GrafiekAHTData2(Userfolder) {
    var runonce = 1;
    var weeknr = (new Date()).getWeek();
    var maand = (new Date()).getMonth();
    var year1 = (new Date().getFullYear());
    var weeks = new Array();


    //Haal Maanden op

    var LoopMaanden = new Array();
    var alpha = $("input[name='AHTMaanden']").val();
    LoopMaanden = alpha.split(",");
    var path = "M 0,0";
    var pathOnderdelen = new Array();


    //populate weeks
    switch (true)
    {
        case(weeknr < 13):
            // verschil1 is 12weeks - weeknr in order to calculate how many week we need from previous year
            var verschil1 = 12 - weeknr;
            var verschil2 = 53 - verschil1;
            for (var i = verschil2; i < 53; i++)
            {
                weeks.push(i);
            }
            for (var i = 1; i < weeknr + 1; i++)
            {
                weeks.push(i);


            }
            break;

        default:
            for (var i = weeknr - 13; i < weeknr; i++)
            {

                weeks.push(i);
            }
            break;
    }
    //for (var i = weeknr - 13; i < weeknr ; i++) {

    //      weeks.push(i);
    // }

    // Loop weken 

    for (var b = 0; b < 12; b++) { //console.log("b is "+b);
        var ArrWeeks = new Array();
        var ArrAHTinsec = new Array();
        var ArrAHT = new Array();
        var ArrACW = new Array();
        var ArrACWinsec = new Array();
        var ArrGespr = new Array();
        var ArrGesprinsec = new Array();
        //console.log(b);
        switch (true)
        {
            case (weeks[b] > weeknr):
                var year = year1 - 1;
                var mijnMaand = Weeknr2month(weeks[b], year);
                //console.log (mijnMaand);

                break;

            default:
                year = year1;
                mijnMaand = Weeknr2month(weeks[b], year);
                //console.log ("altijd "  + mijnMaand);

                break;
        }
        //var mijnMaand= Weeknr2month(weeks[b],year);


        //for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {
        //console.log("getting JSON of ", year, mijnMaand);
        $.getJSON("users/cijfers/" + year + "/" + mijnMaand + "/" + Userfolder + "/AHT.js",
                function(data) {
                    $.each(data.AHTCijfers,
                            function(key, val) {
                                var a = weeks.indexOf(parseInt(val.weeknr));

                                //console.log("a =" + a);

                                if (a > 0) {
                                    var alinArr = ArrWeeks.indexOf(val.weeknr);
                                    if (alinArr < 0)

                                    {
                                        ArrWeeks.push(val.weeknr);
                                        ArrGespr.push(val.Gesprekstijd);
                                        ArrACW.push(val.ACW);
                                        ArrAHT.push(val.AHT);
                                        ArrAHTinsec.push(val.AHT_in_sec);
                                        ArrACWinsec.push(val.ACW_in_sec);
                                        ArrGesprinsec.push(val.Gespr_in_sec);

                                    }

                                }


                            });
                    //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
                    //
                    //console.log(b, ArrAHTinsec);
                    var sum = 0;
                    for (var v = 0; v < ArrAHTinsec.length; v++) {
                        sum += parseInt(ArrAHTinsec[v]);
                    }

                    var avg = sum / ArrAHTinsec.length;
                    changeTraffic(avg);

                    path = "M 0,0";
                    $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7, #bullet8, #bullet9, #bullet10, #bullet11, #bullet12").hide();
                    for (var item in ArrWeeks) {

                        pathOnderdelen = path.split(" ");

                        // Maak hier berekening
                        var laatste = pathOnderdelen.length - 1;

                        if (pathOnderdelen[laatste] == "0,0") {
                            /*var startpunty=90;
                             var startpuntx=50;
                             
                             var eindpunty =540;
                             var eindpuntx = 630;
                             
                             var factorstage1 = 6.6666667;//groen
                             var factorstage2 = 10.6666667;//geel
                             var factorstage3 = 4.537; //rood
                             
                             var limiet1 = 240;
                             var limiet2 = 255;
                             var limiet3 = 600;
                             var intervalx = 40;*/

                            var startpunt = calcPosition("", parseInt(ArrAHTinsec[item]), 1);
                            //console.log("startpunt is "+ startpunt);
                            path = "M " + startpunt;
                            var bulletpos = startpunt.split(",");
                            var bulletposx = parseInt(bulletpos[0]);
                            var bulletposy = parseInt(bulletpos[1]);
                            var inhoud = $("#bullet1").attr("d");
                            var splitinhoud = inhoud.split(" ", 3);
                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx + 7) + "," + (bulletposy));
                            $("#bullet1").attr("d", inhoud);
                            $("#bullet1").attr(
                                    {
                                        weeknr: ArrWeeks[item],
                                        Gesprekstijd: ArrGespr[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        ACW: ArrACW[item],
                                        ACW_in_sec: ArrACWinsec[item],
                                        AHT: ArrAHT[item],
                                        AHT_in_sec: ArrAHTinsec[item],
                                        onmouseover: "showInfoBallon(1," + bulletposy + ")",
                                        onclick: "setInfoBallon(1," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"


                                    });
                            $("#bullet1").removeAttr("transform");
                            $("#bullet1").show();

                            //$("#bullet1").mouseover(showInfoBallon(1,1));

                        } else {
                            var nextpunt = calcPosition(pathOnderdelen[laatste], parseInt(ArrAHTinsec[item]), item);
                            var teller = parseInt(item) + 1;
                            //console.log("teller = "+teller + "item = "+ parseInt(item));
                            bulletpos = nextpunt.split(",");
                            bulletposx = parseInt(bulletpos[0]) + 10;
                            bulletposy = parseInt(bulletpos[1]);
                            inhoud = $("#bullet" + teller).attr("d");
                            splitinhoud = inhoud.split(" ", 3);

                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
                            $("#bullet" + teller).attr("d", inhoud);
                            $("#bullet" + teller).attr(
                                    {
                                        weeknr: ArrWeeks[item],
                                        Gesprekstijd: ArrGespr[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        ACW: ArrACW[item],
                                        ACW_in_sec: ArrACWinsec[item],
                                        AHT: ArrAHT[item],
                                        AHT_in_sec: ArrAHTinsec[item],
                                        onmouseover: "showInfoBallon(" + teller + "," + bulletposy + ")",
                                        onclick: "setInfoBallon(" + teller + "," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"
                                    });




                            $("#bullet" + teller).removeAttr("transform");
                            $("#bullet" + teller).show();

                            //console.log("nextpunt is"+ nextpunt);

                            path = path + " " + nextpunt;
                            //==========================================================================
                            //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
                            //haal positie van bullet1 op vergelijk deze met deze bullet
                            //Als lastbullet y is lager dan corrigeer y met -4
                            //===========================================================================

                            var lastbullet = $("#bullet" + (teller - 1)).attr("d").split(" ", 3);
                            var lastbullety = lastbullet[1].split(",");

                            if (lastbullety[1] > bulletposy)//stijgen
                            {
                                //console.log(lastbullety[1],"stijgen",bulletposy);
                                var nieuwey = parseInt(lastbullety[1]) + 3;
                                inhoud = $("#bullet" + (teller - 1)).attr("d");
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1)).attr("d", inhoud);
                            }
                            else if (lastbullety[1] == bulletposy) //gelijk
                            {
//                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
//                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
                                //console.log(lastbullety[1],"gelijk",bulletposy);
                            }
                            else // dalen
                            {
                                //console.log(lastbullety[1],"dalen",bulletposy);
                                inhoud = $("#bullet" + (teller - 1)).attr("d");
                                nieuwey = parseInt(lastbullety[1]) - 4;
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1)).attr("d", inhoud);

                            }
                        }
                    }


                    $("#asfalt").attr("d", path);
                    $("#animatieStraat").attr("d", path);



                    //console.log(path);   
                });
        //} removed for 

    }

}
/*function GrafiekACWData1(Userfolder) {
 var runonce = 1;
 var weeknr = (new Date()).getWeek();
 var maand = (new Date()).getMonth();
 var year = (new Date().getFullYear());
 var weeks = new Array();
 
 
 //Haal Maanden op
 
 var LoopMaanden = new Array();
 var alpha = $("input[name='AHTMaanden']").val();
 LoopMaanden = alpha.split(",");
 var path = "M 0,0";
 var pathOnderdelen = new Array();
 //populate weeks
 
 for (var i = weeknr - 13; i < weeknr ; i++) {
 
 weeks.push(i);
 }
 
 // Loop weken 
 
 for (var b = 0; b < 12; b++) { //console.log("b is "+b);
 var ArrWeeks = new Array();
 var ArrACWinsec = new Array();
 //        var ArrAHT=new Array();
 //        var ArrACW=new Array();
 //        var ArrGespr=new Array();
 for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {
 $.getJSON("users/cijfers/" + year + "/" + LoopMaanden[iteratie] + "/" + Userfolder + "/AHT.js",
 
 function (data) {
 $.each(data.AHTCijfers,
 
 function (key, val) {
 var a = weeks.indexOf(parseInt(val.weeknr));
 
 //console.log("a =" + a);
 
 if (a > 0) {
 var alinArr = ArrWeeks.indexOf(val.weeknr);
 if (alinArr < 0)
 
 {
 ArrWeeks.push(val.weeknr);
 //                            ArrGespr.push(val.Gesprekstijd);
 //                            ArrACW.push(val.ACW);
 //                            ArrAHT.push(val.AHT);
 ArrACWinsec.push(val.ACW_in_sec);
 
 }
 
 }
 
 
 });
 //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
 //
 //console.log(b, ArrAHTinsec);
 var sum = 0;
 for (var v = 0; v < ArrACWinsec.length; v++) {
 sum += parseInt(ArrACWinsec[v]);
 }
 
 var avg = sum / ArrACWinsec.length;
 changeTrafficACW(avg);
 
 path = "M 0,0";
 $("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").hide();
 
 for (var item in ArrWeeks) {
 
 pathOnderdelen = path.split(" ");
 
 // Maak hier berekening
 var laatste = pathOnderdelen.length - 1;
 
 if (pathOnderdelen[laatste] == "0,0") {
 /*var startpunty=90;
 var startpuntx=50;
 
 var eindpunty =540;
 var eindpuntx = 630;
 
 var factorstage1 = 18;//groen
 var factorstage2 = 32;//geel
 var factorstage3 = 8.125; //rood
 
 var limiet1 = 240;
 var limiet2 = 255;
 var limiet3 = 600;
 var intervalx = 40;
 
 var startpunt = calcPositionACW("", parseInt(ArrACWinsec[item]), 1);
 //console.log("startpunt is "+ startpunt);
 path = "M " + startpunt;
 var bulletpos = startpunt.split(",");
 var bulletposx = parseInt(bulletpos[0]);
 var bulletposy = parseInt(bulletpos[1]);
 var inhoud = $("#bullet1-acw").attr("d");
 var splitinhoud = inhoud.split(" ", 3);
 inhoud = inhoud.replace(splitinhoud[1], (bulletposx+7) + "," + (bulletposy));
 $("#bullet1-acw").attr("d", inhoud);
 $("#bullet1-acw").attr(
 {
 weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    ACW:ArrACW[item],
 //                                    AHT:ArrAHT[item],
 AHT_in_sec:ArrACWinsec[item],
 onmouseover:"showInfoBallon(1," +bulletposy+")",
 onclick: "setInfoBallon(1," +bulletposy+")"
 
 
 });
 $("#bullet1-acw").removeAttr("transform");
 $("#bullet1-acw").show();
 
 //$("#bullet1").mouseover(showInfoBallon(1,1));
 
 } else {
 var nextpunt = calcPositionACW(pathOnderdelen[laatste], parseInt(ArrACWinsec[item]), item);
 var teller = parseInt(item) + 1;
 bulletpos = nextpunt.split(",");
 bulletposx = parseInt(bulletpos[0])+10;
 bulletposy = parseInt(bulletpos[1]);
 inhoud = $("#bullet" + teller+"-acw").attr("d");
 splitinhoud = inhoud.split(" ", 3);
 
 inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
 $("#bullet" + teller +"-acw").attr("d", inhoud);
 $("#bullet"+teller +"-acw").attr(
 {
 weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    ACW:ArrACW[item],
 //                                    AHT:ArrAHT[item],
 AHT_in_sec:ArrACWinsec[item],
 onmouseover:"showInfoBallon("+ teller + "," +bulletposy+")",
 onclick: "setInfoBallon("+ teller + "," +bulletposy+")"
 });                        
 
 
 
 
 $("#bullet" + teller +"-acw").removeAttr("transform");
 $("#bullet" + teller +"-acw").show();
 
 //console.log("nextpunt is"+ nextpunt);
 
 path = path + " " + nextpunt;
 //==========================================================================
 //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
 //haal positie van bullet1 op vergelijk deze met deze bullet
 //Als lastbullet y is lager dan corrigeer y met -4
 //===========================================================================
 
 var lastbullet=$("#bullet"+(teller-1)+"-acw").attr("d").split(" ",3);
 var lastbullety=lastbullet[1].split(",");
 
 if(lastbullety[1]>bulletposy)//stijgen
 {
 //console.log(lastbullety[1],"stijgen",bulletposy);
 var nieuwey=parseInt(lastbullety[1])+3;
 inhoud=$("#bullet"+(teller-1)+"-acw").attr("d");
 inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 $("#bullet"+(teller-1)+"-acw").attr("d",inhoud);                            
 }
 else if(lastbullety[1]==bulletposy) //gelijk
 { 
 //                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
 //                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
 //console.log(lastbullety[1],"gelijk",bulletposy);
 }
 else // dalen
 {
 //console.log(lastbullety[1],"dalen",bulletposy);
 inhoud=$("#bullet"+(teller-1)+"-acw").attr("d");
 nieuwey=parseInt(lastbullety[1])-4;
 inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 $("#bullet"+(teller-1)+"-acw").attr("d",inhoud);
 
 }
 }
 }
 
 
 $("#asfalt-acw").attr("d", path);
 $("#animatieStraat-acw").attr("d", path);
 
 
 
 //console.log(path);   
 });
 }
 
 }
 
 } */
function GrafiekACWData1(Userfolder) {
    var runonce = 1;
    var weeknr = (new Date()).getWeek();
    var maand = (new Date()).getMonth();
    var year1 = (new Date().getFullYear());
    var weeks = new Array();


    //Haal Maanden op

    var LoopMaanden = new Array();
    var alpha = $("input[name='AHTMaanden']").val();
    LoopMaanden = alpha.split(",");
    var path = "M 0,0";
    var pathOnderdelen = new Array();
    //populate weeks
    switch (true)
    {
        case(weeknr < 13):
            // verschil1 is 12weeks - weeknr in order to calculate how many week we need from previous year
            var verschil1 = 12 - weeknr;
            var verschil2 = 53 - verschil1;
            for (var i = verschil2; i < 53; i++)
            {
                weeks.push(i);
            }
            for (var i = 1; i < weeknr + 1; i++)
            {
                weeks.push(i);


            }
            break;

        default:
            for (var i = weeknr - 13; i < weeknr; i++)
            {

                weeks.push(i);
            }
            break;
    }
//    for (var i = weeknr - 13; i < weeknr ; i++) {
//
//        weeks.push(i);
//    }

    // Loop weken 

    for (var b = 0; b < 12; b++) { //console.log("b is "+b);
        var ArrWeeks = new Array();
        var ArrACWinsec = new Array();
//        var ArrAHT=new Array();
//        var ArrACW=new Array();
//        var ArrGespr=new Array();
        //for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {

        switch (true)
        {
            case (weeks[b] > weeknr):
                var year = year1 - 1;
                var mijnMaand = Weeknr2month(weeks[b], year);
                //console.log (mijnMaand);

                break;

            default:
                year = year1;
                mijnMaand = Weeknr2month(weeks[b], year);
                //console.log ("altijd "  + mijnMaand);

                break;
        }


        $.getJSON("users/cijfers/" + year + "/" + mijnMaand + "/" + Userfolder + "/AHT.js",
                function(data) {
                    $.each(data.AHTCijfers,
                            function(key, val) {
                                var a = weeks.indexOf(parseInt(val.weeknr));

                                //console.log("a =" + a);

                                if (a > 0) {
                                    var alinArr = ArrWeeks.indexOf(val.weeknr);
                                    if (alinArr < 0)

                                    {
                                        ArrWeeks.push(val.weeknr);
//                            ArrGespr.push(val.Gesprekstijd);
//                            ArrACW.push(val.ACW);
//                            ArrAHT.push(val.AHT);
                                        ArrACWinsec.push(val.ACW_in_sec);

                                    }

                                }


                            });
                    //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
                    //
                    //console.log(b, ArrAHTinsec);
                    var sum = 0;
                    for (var v = 0; v < ArrACWinsec.length; v++) {
                        sum += parseInt(ArrACWinsec[v]);
                    }

                    var avg = sum / ArrACWinsec.length;
                    changeTrafficACW(avg);

                    path = "M 0,0";
                    $("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").hide();

                    for (var item in ArrWeeks) {

                        pathOnderdelen = path.split(" ");

                        // Maak hier berekening
                        var laatste = pathOnderdelen.length - 1;

                        if (pathOnderdelen[laatste] == "0,0") {
                            /*var startpunty=90;
                             var startpuntx=50;
                             
                             var eindpunty =540;
                             var eindpuntx = 630;
                             
                             var factorstage1 = 18;//groen
                             var factorstage2 = 32;//geel
                             var factorstage3 = 8.125; //rood
                             
                             var limiet1 = 240;
                             var limiet2 = 255;
                             var limiet3 = 600;
                             var intervalx = 40;*/

                            var startpunt = calcPositionACW1("", parseInt(ArrACWinsec[item]), 1);
                            //console.log("startpunt is "+ startpunt);
                            path = "M " + startpunt;
                            var bulletpos = startpunt.split(",");
                            var bulletposx = parseInt(bulletpos[0]);
                            var bulletposy = parseInt(bulletpos[1]);
                            var inhoud = $("#bullet1-acw").attr("d");
                            var splitinhoud = inhoud.split(" ", 3);
                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx + 7) + "," + (bulletposy));
                            $("#bullet1-acw").attr("d", inhoud);
                            $("#bullet1-acw").attr(
                                    {
                                        weeknr: ArrWeeks[item],
//                                    Gesprekstijd:ArrGespr[item],
//                                    ACW:ArrACW[item],
//                                    AHT:ArrAHT[item],
                                        AHT_in_sec: ArrACWinsec[item],
                                        onmouseover: "showInfoBallon(1," + bulletposy + ")",
                                        onclick: "setInfoBallon(1," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"


                                    });
                            $("#bullet1-acw").removeAttr("transform");
                            $("#bullet1-acw").show();

                            //$("#bullet1").mouseover(showInfoBallon(1,1));

                        } else {
                            var nextpunt = calcPositionACW1(pathOnderdelen[laatste], parseInt(ArrACWinsec[item]), item);
                            var teller = parseInt(item) + 1;
                            bulletpos = nextpunt.split(",");
                            bulletposx = parseInt(bulletpos[0]) + 10;
                            bulletposy = parseInt(bulletpos[1]);
                            inhoud = $("#bullet" + teller + "-acw").attr("d");
                            splitinhoud = inhoud.split(" ", 3);

                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
                            $("#bullet" + teller + "-acw").attr("d", inhoud);
                            $("#bullet" + teller + "-acw").attr(
                                    {
                                        weeknr: ArrWeeks[item],
//                                    Gesprekstijd:ArrGespr[item],
//                                    ACW:ArrACW[item],
//                                    AHT:ArrAHT[item],
                                        AHT_in_sec: ArrACWinsec[item],
                                        onmouseover: "showInfoBallon(" + teller + "," + bulletposy + ")",
                                        onclick: "setInfoBallon(" + teller + "," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"
                                    });




                            $("#bullet" + teller + "-acw").removeAttr("transform");
                            $("#bullet" + teller + "-acw").show();

                            //console.log("nextpunt is"+ nextpunt);

                            path = path + " " + nextpunt;
                            //==========================================================================
                            //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
                            //haal positie van bullet1 op vergelijk deze met deze bullet
                            //Als lastbullet y is lager dan corrigeer y met -4
                            //===========================================================================

                            var lastbullet = $("#bullet" + (teller - 1) + "-acw").attr("d").split(" ", 3);
                            var lastbullety = lastbullet[1].split(",");

                            if (lastbullety[1] > bulletposy)//stijgen
                            {
                                //console.log(lastbullety[1],"stijgen",bulletposy);
                                var nieuwey = parseInt(lastbullety[1]) + 3;
                                inhoud = $("#bullet" + (teller - 1) + "-acw").attr("d");
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1) + "-acw").attr("d", inhoud);
                            }
                            else if (lastbullety[1] == bulletposy) //gelijk
                            {
//                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
//                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
                                //console.log(lastbullety[1],"gelijk",bulletposy);
                            }
                            else // dalen
                            {
                                //console.log(lastbullety[1],"dalen",bulletposy);
                                inhoud = $("#bullet" + (teller - 1) + "-acw").attr("d");
                                nieuwey = parseInt(lastbullety[1]) - 4;
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1) + "-acw").attr("d", inhoud);

                            }
                        }
                    }


                    $("#asfalt-acw").attr("d", path);
                    $("#animatieStraat-acw").attr("d", path);



                    //console.log(path);   
                });
        // }

    }

}
/*function GrafiekGesprData1(Userfolder) {
 var runonce = 1;
 var weeknr = (new Date()).getWeek();
 var maand = (new Date()).getMonth();
 var year = (new Date().getFullYear());
 var weeks = new Array();
 
 
 //Haal Maanden op
 
 var LoopMaanden = new Array();
 var alpha = $("input[name='AHTMaanden']").val();
 LoopMaanden = alpha.split(",");
 var path = "M 0,0";
 var pathOnderdelen = new Array();
 //populate weeks
 
 for (var i = weeknr - 13; i < weeknr ; i++) {
 
 weeks.push(i);
 }
 
 // Loop weken 
 
 for (var b = 0; b < 12; b++) { //console.log("b is "+b);
 var ArrWeeks = new Array();
 var ArrGesprinsec = new Array();
 //        var ArrAHT=new Array();
 //        var ArrACW=new Array();
 //        var ArrGespr=new Array();
 for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {
 $.getJSON("users/cijfers/" + year + "/" + LoopMaanden[iteratie] + "/" + Userfolder + "/AHT.js",
 
 function (data) {
 $.each(data.AHTCijfers,
 
 function (key, val) {
 var a = weeks.indexOf(parseInt(val.weeknr));
 
 //console.log("a =" + a);
 
 if (a > 0) {
 var alinArr = ArrWeeks.indexOf(val.weeknr);
 if (alinArr < 0)
 
 {
 ArrWeeks.push(val.weeknr);
 //                            ArrGespr.push(val.Gesprekstijd);
 //                            ArrACW.push(val.ACW);
 //                            ArrAHT.push(val.AHT);
 ArrGesprinsec.push(val.Gespr_in_sec);
 
 }
 
 }
 
 
 });
 //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
 //
 //console.log(b, ArrAHTinsec);
 var sum = 0;
 for (var v = 0; v < ArrGesprinsec.length; v++) {
 sum += parseInt(ArrGesprinsec[v]);
 }
 
 var avg = sum / ArrGesprinsec.length;
 changeTrafficGespr(avg);
 
 path = "M 0,0";
 $("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").hide();
 
 for (var item in ArrWeeks) {
 
 pathOnderdelen = path.split(" ");
 
 // Maak hier berekening
 var laatste = pathOnderdelen.length - 1;
 
 if (pathOnderdelen[laatste] == "0,0") {
 /*var startpunty=90;
 var startpuntx=50;
 
 var eindpunty =540;
 var eindpuntx = 630;
 
 var factorstage1 = 18;//groen
 var factorstage2 = 32;//geel
 var factorstage3 = 8.125; //rood
 
 var limiet1 = 240;
 var limiet2 = 255;
 var limiet3 = 600;
 var intervalx = 40;
 
 var startpunt = calcPositionGespr("", parseInt(ArrGesprinsec[item]), 1);
 //console.log("startpunt is "+ startpunt);
 path = "M " + startpunt;
 var bulletpos = startpunt.split(",");
 var bulletposx = parseInt(bulletpos[0]);
 var bulletposy = parseInt(bulletpos[1]);
 var inhoud = $("#bullet1-gespr").attr("d");
 var splitinhoud = inhoud.split(" ", 3);
 inhoud = inhoud.replace(splitinhoud[1], (bulletposx+7) + "," + (bulletposy));
 $("#bullet1-gespr").attr("d", inhoud);
 $("#bullet1-gespr").attr(
 {
 weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    ACW:ArrACW[item],
 //                                    AHT:ArrAHT[item],
 Gespr_in_sec:ArrGesprinsec[item],
 onmouseover:"showInfoBallon(1," +bulletposy+")",
 onclick: "setInfoBallon(1," +bulletposy+")"
 
 
 });
 $("#bullet1-gespr").removeAttr("transform");
 $("#bullet1-gespr").show();
 
 //$("#bullet1").mouseover(showInfoBallon(1,1));
 
 } else {
 //console.log("calcPositionGespr("+pathOnderdelen[laatste], parseInt(ArrGesprinsec[item]), item +")");
 var nextpunt = calcPositionGespr(pathOnderdelen[laatste], parseInt(ArrGesprinsec[item]), item);
 
 var teller = parseInt(item) + 1;
 bulletpos = nextpunt.split(",");
 bulletposx = parseInt(bulletpos[0])+10;
 bulletposy = parseInt(bulletpos[1]);
 inhoud = $("#bullet" + teller+"-gespr").attr("d");
 splitinhoud = inhoud.split(" ", 3);
 
 inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
 $("#bullet" + teller +"-gespr").attr("d", inhoud);
 $("#bullet"+teller +"-gespr").attr(
 {
 weeknr:ArrWeeks[item],
 //                                    Gesprekstijd:ArrGespr[item],
 //                                    ACW:ArrACW[item],
 //                                    AHT:ArrAHT[item],
 Gespr_in_sec:ArrGesprinsec[item],
 onmouseover:"showInfoBallon("+ teller + "," +bulletposy+")",
 onclick: "setInfoBallon("+ teller + "," +bulletposy+")"
 });                        
 
 
 
 
 $("#bullet" + teller +"-gespr").removeAttr("transform");
 $("#bullet" + teller +"-gespr").show();
 
 //console.log("nextpunt is"+ nextpunt);
 
 path = path + " " + nextpunt;
 //==========================================================================
 //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
 //haal positie van bullet1 op vergelijk deze met deze bullet
 //Als lastbullet y is lager dan corrigeer y met -4
 //===========================================================================
 
 var lastbullet=$("#bullet"+(teller-1)+"-gespr").attr("d").split(" ",3);
 var lastbullety=lastbullet[1].split(",");
 
 if(lastbullety[1]>bulletposy)//stijgen
 {
 //console.log(lastbullety[1],"stijgen",bulletposy);
 var nieuwey=parseInt(lastbullety[1])+3;
 inhoud=$("#bullet"+(teller-1)+"-gespr").attr("d");
 inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 $("#bullet"+(teller-1)+"-gespr").attr("d",inhoud);                            
 }
 else if(lastbullety[1]==bulletposy) //gelijk
 { 
 //                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
 //                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
 //console.log(lastbullety[1],"gelijk",bulletposy);
 }
 else // dalen
 {
 //console.log(lastbullety[1],"dalen",bulletposy);
 inhoud=$("#bullet"+(teller-1)+"-gespr").attr("d");
 nieuwey=parseInt(lastbullety[1])-4;
 inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
 $("#bullet"+(teller-1)+"-gespr").attr("d",inhoud);
 
 }
 }
 }
 
 
 $("#asfalt-gespr").attr("d", path);
 $("#animatieStraat-gespr").attr("d", path);
 
 
 
 //console.log(path);   
 });
 }
 
 }
 
 } */
function GrafiekGesprData1(Userfolder) {
    var runonce = 1;
    var weeknr = (new Date()).getWeek();
    var maand = (new Date()).getMonth();
    var year1 = (new Date().getFullYear());
    var weeks = new Array();


    //Haal Maanden op

    var LoopMaanden = new Array();
    var alpha = $("input[name='AHTMaanden']").val();
    LoopMaanden = alpha.split(",");
    var path = "M 0,0";
    var pathOnderdelen = new Array();
    //populate weeks
    switch (true)
    {
        case(weeknr < 13):
            // verschil1 is 12weeks - weeknr in order to calculate how many week we need from previous year
            var verschil1 = 12 - weeknr;
            var verschil2 = 53 - verschil1;
            for (var i = verschil2; i < 53; i++)
            {
                weeks.push(i);
            }
            for (var i = 1; i < weeknr + 1; i++)
            {
                weeks.push(i);


            }
            break;

        default:
            for (var i = weeknr - 13; i < weeknr; i++)
            {

                weeks.push(i);
            }
            break;
    }
//    for (var i = weeknr - 13; i < weeknr ; i++) {
//
//        weeks.push(i);
//    }

    // Loop weken 

    for (var b = 0; b < 12; b++) { //console.log("b is "+b);
        var ArrWeeks = new Array();
        var ArrGesprinsec = new Array();
//        var ArrAHT=new Array();
//        var ArrACW=new Array();
//        var ArrGespr=new Array();
        //for (var iteratie = 0; iteratie < LoopMaanden.length; iteratie++) {

        switch (true)
        {
            case (weeks[b] > weeknr):
                var year = year1 - 1;//(new Date().getFullYear())-1;
                var mijnMaand = Weeknr2month(weeks[b], year);
                //console.log(mijnMaand, year);

                break;

            default:
                year = year1;//(new Date().getFullYear());
                mijnMaand = Weeknr2month(weeks[b], year);
               // console.log("altijd " + mijnMaand, year, weeks[b]);

                break;
        }

        $.getJSON("users/cijfers/" + year + "/" + mijnMaand + "/" + Userfolder + "/AHT.js",
                function(data) {
                    $.each(data.AHTCijfers,
                            function(key, val) {
                                var a = weeks.indexOf(parseInt(val.weeknr));

                                //console.log("a =" + a);

                                if (a > 0) {
                                    var alinArr = ArrWeeks.indexOf(val.weeknr);
                                    if (alinArr < 0)

                                    {
                                        ArrWeeks.push(val.weeknr);
                                        //console.log("wknr: "+val.weeknr,val.Gespr_in_sec,mijnMaand);
//                            ArrGespr.push(val.Gesprekstijd);
//                            ArrACW.push(val.ACW);
//                            ArrAHT.push(val.AHT);
                                        ArrGesprinsec.push(val.Gespr_in_sec);

                                    }

                                }


                            });
                    //console.log (LoopMaanden[iteratie-1],LoopMaanden[LoopMaanden.length-1]);
                    //
                    //console.log(b, ArrAHTinsec);
                    var sum = 0;
                    for (var v = 0; v < ArrGesprinsec.length; v++) {
                        sum += parseInt(ArrGesprinsec[v]);
                    }

                    var avg = sum / ArrGesprinsec.length;
                    console.log("avg :"+avg);
                    changeTrafficGespr(avg);

                    path = "M 0,0";
                    $("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").hide();

                    for (var item in ArrWeeks) {
                                //console.log(parseInt(item));
                        pathOnderdelen = path.split(" ");

                        // Maak hier berekening
                        var laatste = pathOnderdelen.length - 1;

                        if (pathOnderdelen[laatste] == "0,0") {
                            /*var startpunty=90;
                             var startpuntx=50;
                             
                             var eindpunty =540;
                             var eindpuntx = 630;
                             
                             var factorstage1 = 18;//groen
                             var factorstage2 = 32;//geel
                             var factorstage3 = 8.125; //rood
                             
                             var limiet1 = 240;
                             var limiet2 = 255;
                             var limiet3 = 600;
                             var intervalx = 40;*/

                            var startpunt = calcPositionGespr("", parseInt(ArrGesprinsec[item]), 1);
                            //console.log("startpunt is "+ startpunt);
                            path = "M " + startpunt;
                            var bulletpos = startpunt.split(",");
                            var bulletposx = parseInt(bulletpos[0]);
                            var bulletposy = parseInt(bulletpos[1]);
                            var inhoud = $("#bullet1-gespr").attr("d");
                            var splitinhoud = inhoud.split(" ", 3);
                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx + 7) + "," + (bulletposy));
                            $("#bullet1-gespr").attr("d", inhoud);
                            $("#bullet1-gespr").attr(
                                    {
                                        weeknr: ArrWeeks[item],
//                                    Gesprekstijd:ArrGespr[item],
//                                    ACW:ArrACW[item],
//                                    AHT:ArrAHT[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        onmouseover: "showInfoBallon(1," + bulletposy + ")",
                                        onclick: "setInfoBallon(1," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"


                                    });
                            $("#bullet1-gespr").removeAttr("transform");
                            $("#bullet1-gespr").show();

                            //$("#bullet1").mouseover(showInfoBallon(1,1));

                        } else {
                            var teller = teller|| 2;
                            //console.log("calcPositionGespr("+pathOnderdelen[laatste], parseInt(ArrGesprinsec[item]), teller +")");
                            var nextpunt = calcPositionGespr(pathOnderdelen[laatste], parseInt(ArrGesprinsec[item]), teller);

                            //parseInt(item) +1;
                            //console.log("teller =" + teller);
                            bulletpos = nextpunt.split(",");
                            bulletposx = parseInt(bulletpos[0]) + 10;
                            bulletposy = parseInt(bulletpos[1]);
                            inhoud = $("#bullet" + teller + "-gespr").attr("d");
                            splitinhoud = inhoud.split(" ", 3);

                            inhoud = inhoud.replace(splitinhoud[1], (bulletposx) + "," + (bulletposy));
                            $("#bullet" + teller + "-gespr").attr("d", inhoud);
                            $("#bullet" + teller + "-gespr").attr(
                                    {
                                        weeknr: ArrWeeks[item],
//                                    Gesprekstijd:ArrGespr[item],
//                                    ACW:ArrACW[item],
//                                    AHT:ArrAHT[item],
                                        Gespr_in_sec: ArrGesprinsec[item],
                                        onmouseover: "showInfoBallon(" + teller + "," + bulletposy + ")",
                                        onclick: "setInfoBallon(" + teller + "," + bulletposy + ")",
                                        onmouseout: "hideInfoBallon()"
                                    });




                            $("#bullet" + teller + "-gespr").removeAttr("transform");
                            $("#bullet" + teller + "-gespr").show();

                            //console.log("nextpunt is"+ nextpunt);

                            path = path + " " + nextpunt;
                            //==========================================================================
                            //corrigeer last bullet indien nodig lastbullet is te vinden met teller-1
                            //haal positie van bullet1 op vergelijk deze met deze bullet
                            //Als lastbullet y is lager dan corrigeer y met -4
                            //===========================================================================

                            var lastbullet = $("#bullet" + (teller - 1) + "-gespr").attr("d").split(" ", 3);
                            var lastbullety = lastbullet[1].split(",");

                            if (lastbullety[1] > bulletposy)//stijgen
                            {
                                //console.log(lastbullety[1],"stijgen",bulletposy);
                                var nieuwey = parseInt(lastbullety[1]) + 3;
                                inhoud = $("#bullet" + (teller - 1) + "-gespr").attr("d");
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1) + "-gespr").attr("d", inhoud);
                            }
                            else if (lastbullety[1] == bulletposy) //gelijk
                            {
//                            inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + (lastbullety[1]+3));
//                            $("#bullet"+(teller-1)).attr("d",inhoud);                            
                                //console.log(lastbullety[1],"gelijk",bulletposy);
                            }
                            else // dalen
                            {
                                //console.log(lastbullety[1],"dalen",bulletposy);
                                inhoud = $("#bullet" + (teller - 1) + "-gespr").attr("d");
                                nieuwey = parseInt(lastbullety[1]) - 4;
                                inhoud = inhoud.replace(lastbullet[1], (lastbullety[0]) + "," + nieuwey);
                                $("#bullet" + (teller - 1) + "-gespr").attr("d", inhoud);

                            }
                            teller++;
                        }
                    }


                    $("#asfalt-gespr").attr("d", path);
                    $("#animatieStraat-gespr").attr("d", path);



                    //console.log(path);   
                });
        // }

    }

}

function GrafiekMRTData(Userfolder)
{//Reset
    $("#gemiddelde-mrt, #gemiddelde-mrt path[id^='maand']").hide();
    
    var factory = 5.32;
    var factorstop = 0.0815;
    var startpunt = 0.95;
    var thispoint = 0;


    var maand = UCaseFirst($("#tspanMaand").text());
    var year = $("#textJaar tspan").text(); // (new Date().getFullYear());  // Get System 2014 Ready
    $("#mrtMeter").css("fill", "url(#linearGradient5682)");
//    $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "MRT.js",
//                function(data)
//                {
//                    $.each(data.MRTCijfers,
//                            function(key,val)
//                            {
//                               $.each(val,
//                               function(key1,val1){
//                                  // console.log(key1, val1);
//                                   if (key1=="Percentage")
//                                   {
//                                       thispoint=700-(val1*factory);
//                                       if (thispoint<41)
//                                           {
//                                               thispoint=43;
//                                       //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);
//                                           }
//                                           else
//                                           {
//                                       //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);        
//                                           }
//                                   }
//                               });
//                            }
//                            );
//                }
//            );
    //Calculate percentage
    //e.g. 85%

    //Calc Average MRT
    var strAbrev = "Jan,Feb,Maa,Apr,Mei,Jun,Jul,Aug,Sep,Okt,Nov,Dec";

    var ArrAbrev = strAbrev.split(",");
    var acc = 0;
    var iter = 0;
    for (var i = 0; i < ArrAbrev.length; i++)
    {
        if ($("#mrt-" + ArrAbrev[i]).attr("perc"))
        {
            acc += parseFloat($("#mrt-" + ArrAbrev[i]).attr("perc"));
            iter++;
        }
    }

    if (iter !== 0)
    {
        var mrtAvg = Math.round(acc / iter * 100) / 100;
        mrtAvg = mrtAvg.toFixed(2);
        $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(mrtAvg + "%");


        thispoint = 700 - (mrtAvg * factory);
        if (thispoint < 41)
        {
            thispoint = 43;
            //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
            $("#linearGradient5682").attr("y2", thispoint);
        }
        else
        {
            //$("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
            $("#linearGradient5682").attr("y2", thispoint);
        }
        $("#gemiddelde-mrt").show();
        for (var t=1;t<iter+1;t++){
            
            $("#maand-mrt-"+t).show();
        }
    }



}
function GrafiekVerzuimData(Userfolder)
{
//    var factory = 5.32;
//    var factorstop=0.0815;
//    var startpunt=0.95;
//    var thispoint=0;
//    
//        
//    var maand = UCaseFirst($("#tspanMaand").text());
//    var year = (new Date().getFullYear());  // Get System 2014 Ready
    resetVerzuim();


    $.getJSON("users/Verzuim.json", //+ year + "/" + maand + "/" + Userfolder + "/" + "MRT.js",
            function(data)
            {
                $.each(data.Verzuim,
                        function(key, val)
                        {
                            //console.log(val);
                            $.each(val,
                                    function(key1, val1) {
                                        // console.log(key1, val1);
                                        if (key1 == "Naam" && val1 === Userfolder)
                                        {
                                            $("#text-Verzuim tspan, #text-Verzuim-schaduw tspan").text(val.Percentage + "%");

                                            //thispoint=700-(val1*factory);
//                                       if (thispoint<41)
//                                           {
//                                               thispoint=43;
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);
//                                           }
//                                           else
//                                           {
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);        
//                                           }



                                        }
                                    });
                        }
                );
            }
    );
    //Calculate percentage
    //e.g. 85%




}
/*function GrafiekADHData(Userfolder)
 { console.log("runned",Userfolder);
 $("input[name='ADHcijfers']").val("");
 resetADH();
 var factory = 3.71;
 //    var factorstop=0.0815;
 //    var startpunt=0.95;
 //    var thispoint=0;
 //    
 //        
 //    var maand = UCaseFirst($("#tspanMaand").text());
 var year = $("#textJaar tspan").text();    //(new Date().getFullYear());  // Get System 2014 Ready
 
 var startweek=(new Date()).getWeek()-1;
 var hoogtes=new Array();
 //Weeknr2month(weeknr,year) Zoek week nr bestand in Mappen van users 
 //resetVerzuim();
 
 for (var i = startweek - 12; i < startweek ; i++)
 { var maand = Weeknr2month(i,year);
 
 $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADH_"+i+".json",
 function(data,i)
 { //alert(data);
 $.each(data.ADH,
 function(key,val,i)
 { q= (startweek-i);
 var hoogte=(parseInt(val.Percentage)*factory);
 var thisvalue=$("input[name='ADHcijfers']").val();
 if (thisvalue!==""){
 
 //$("#text"+number).attr("ADH",$("#text"+number).attr("ADH")+"/"+hoogte+":"+val.Percentage+":"+val.Week);
 $("input[name='ADHcijfers']").val($("input[name='ADHcijfers']").val()+"/"+hoogte+":"+val.Percentage+":"+val.Week);
 }
 else
 {//$("#text"+number).attr("ADH",hoogte+":"+val.Percentage+":"+val.Week);
 console.log(val.Week,val.Percentage);
 $("input[name='ADHcijfers']").val(hoogte+":"+val.Percentage+":"+val.Week);
 }
 //$("#adh-Week"+q).attr("height",hoogte);
 
 //console.log(val);
 //$.each(val,
 // function(key1,val1){
 // console.log(key1, val1);
 //if (key1=="Naam" && val1===Userfolder)
 
 //alert(val.Percentage+"%");
 
 //thispoint=700-(val1*factory);
 //                                       if (thispoint<41)
 //                                           {
 //                                               thispoint=43;
 //                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
 //                                       $("#linearGradient5682").attr("y2",thispoint);
 //                                           }
 //                                           else
 //                                           {
 //                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
 //                                       $("#linearGradient5682").attr("y2",thispoint);        
 //                                           }
 
 
 
 
 // });
 }
 );
 
 }
 );
 
 
 } 
 
 
 //Calculate percentage
 //e.g. 85%
 
 
 
 
 }*/
function GrafiekADHData(Userfolder)
{ //console.log("runned",Userfolder);
    $("input[name='ADHcijfers']").val("");
    resetADH();
    var factory = 3.71;
//    var factorstop=0.0815;
//    var startpunt=0.95;
//    var thispoint=0;
//    
//        
//    var maand = UCaseFirst($("#tspanMaand").text());
    var year1 = (new Date().getFullYear());// $("#textJaar tspan").text();    //(new Date().getFullYear());  // Get System 2014 Ready

    var startweek = (new Date()).getWeek() - 1;






    var hoogtes = new Array();
    //Weeknr2month(weeknr,year) Zoek week nr bestand in Mappen van users 
//resetVerzuim();

    for (var i = startweek - 12; i < startweek; i++)
    {
        switch (true)
        {
            case(i < 1):
                var b = 52 + i;
                var year = year1 - 1;
                //console.log(b,i);
                break;

            default:
                b = i;
                year = year1;
                break;
        }

        var maand = Weeknr2month(b, year);
        //console.log (maand,b, year, Userfolder);
        $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADH_" + b + ".json",
                function(data, b)
                { //alert(data);
                    $.each(data.ADH,
                            function(key, val, b)
                            {
                                q = (startweek - b);
                                var hoogte = (parseInt(val.Percentage) * factory);
                                var thisvalue = $("input[name='ADHcijfers']").val();
                                if (thisvalue !== "") {

                                    //$("#text"+number).attr("ADH",$("#text"+number).attr("ADH")+"/"+hoogte+":"+val.Percentage+":"+val.Week);
                                    $("input[name='ADHcijfers']").val($("input[name='ADHcijfers']").val() + "/" + hoogte + ":" + val.Percentage + ":" + val.Week);
                                }
                                else
                                {//$("#text"+number).attr("ADH",hoogte+":"+val.Percentage+":"+val.Week);
                                    // console.log(val.Week,val.Percentage);
                                    $("input[name='ADHcijfers']").val(hoogte + ":" + val.Percentage + ":" + val.Week);
                                }
                                //$("#adh-Week"+q).attr("height",hoogte);

                                //console.log(val);
                                //$.each(val,
                                // function(key1,val1){
                                // console.log(key1, val1);
                                //if (key1=="Naam" && val1===Userfolder)

                                //alert(val.Percentage+"%");

                                //thispoint=700-(val1*factory);
//                                       if (thispoint<41)
//                                           {
//                                               thispoint=43;
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);
//                                           }
//                                           else
//                                           {
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);        
//                                           }




                                // });
                            }
                    );

                }
        );


    }


    //Calculate percentage
    //e.g. 85%




}
function GrafiekADHData1(Userfolder)
{ //console.log("runned",Userfolder);
    $("input[name='ADHcijfers']").val("");
    resetADH();
    var factory = 3.71;
//    var factorstop=0.0815;
//    var startpunt=0.95;
//    var thispoint=0;
//    
//        
//    var maand = UCaseFirst($("#tspanMaand").text());
    var year1 = (new Date().getFullYear());// $("#textJaar tspan").text();    //(new Date().getFullYear());  // Get System 2014 Ready

    var startweek = (new Date()).getWeek() - 1;






    var hoogtes = new Array();
    //Weeknr2month(weeknr,year) Zoek week nr bestand in Mappen van users 
//resetVerzuim();

    for (var i = startweek - 12; i < startweek; i++)
    {
        switch (true)
        {
            case(i < 1):
                var b = 52 + i;
                var year = year1 - 1;
                //console.log(b,i);
                break;

            default:
                b = i;
                year = year1;
                break;
        }

        var maand = Weeknr2month(b, year);
        //console.log (maand,b, year, Userfolder);
        $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADH_" + b + ".json",
                function(data, b)
                { //alert(data);
                    $.each(data.ADH,
                            function(key, val, b)
                            {
                                q = (startweek - b);
                                var hoogte = (parseInt(val.Percentage) * factory);
                                var thisvalue = $("input[name='ADHcijfers']").val();
                                if (thisvalue !== "") {

                                    //$("#text"+number).attr("ADH",$("#text"+number).attr("ADH")+"/"+hoogte+":"+val.Percentage+":"+val.Week);
                                    $("input[name='ADHcijfers']").val($("input[name='ADHcijfers']").val() + "/" + hoogte + ":" + val.Percentage + ":" + val.Week);
                                }
                                else
                                {//$("#text"+number).attr("ADH",hoogte+":"+val.Percentage+":"+val.Week);
                                    // console.log(val.Week,val.Percentage);
                                    $("input[name='ADHcijfers']").val(hoogte + ":" + val.Percentage + ":" + val.Week);
                                }
                                //$("#adh-Week"+q).attr("height",hoogte);

                                //console.log(val);
                                //$.each(val,
                                // function(key1,val1){
                                // console.log(key1, val1);
                                //if (key1=="Naam" && val1===Userfolder)

                                //alert(val.Percentage+"%");

                                //thispoint=700-(val1*factory);
//                                       if (thispoint<41)
//                                           {
//                                               thispoint=43;
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);
//                                           }
//                                           else
//                                           {
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);        
//                                           }




                                // });
                            }
                    );

                }
        );


    }


    //Calculate percentage
    //e.g. 85%




}
function GrafiekADHData2(Userfolder)
{ //console.log("runned",Userfolder);
    $("input[name='ADHcijfers']").val("");
    resetADH();
    var factory = 12.366//3.71;
//    var factorstop=0.0815;
//    var startpunt=0.95;
//    var thispoint=0;
//    
//        
//    var maand = UCaseFirst($("#tspanMaand").text());
    var year1 = (new Date().getFullYear());// $("#textJaar tspan").text();    //(new Date().getFullYear());  // Get System 2014 Ready

    var startweek = (new Date()).getWeek() - 1;






    var hoogtes = new Array();
    //Weeknr2month(weeknr,year) Zoek week nr bestand in Mappen van users 
//resetVerzuim();

    for (var i = startweek - 12; i < startweek; i++)
    {
        switch (true)
        {
            case(i < 1):
                var b = 52 + i;
                var year = year1 - 1;
                //console.log(b,i);
                break;

            default:
                b = i;
                year = year1;
                break;
        } //switch (true)

        var maand = Weeknr2month(b, year);

        //console.log (maand,b, year, Userfolder);
        $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADH_" + b + ".json",
                function(data, b)
                { //alert(data);
                    $.each(data.ADH,
                            function(key, val, b)
                            {
                                q = (startweek - b);
                                var hoogte = 471 - ((parseInt(val.Percentage) - 70) * factory);
                                var thisvalue = $("input[name='ADHcijfers']").val();
                                if (thisvalue !== "") {

                                    //$("#text"+number).attr("ADH",$("#text"+number).attr("ADH")+"/"+hoogte+":"+val.Percentage+":"+val.Week);
                                    $("input[name='ADHcijfers']").val($("input[name='ADHcijfers']").val() + "/" + hoogte + ":" + val.											 									Percentage + ":" + val.Week);
                                }
                                else
                                {//$("#text"+number).attr("ADH",hoogte+":"+val.Percentage+":"+val.Week);
                                    // console.log(val.Week,val.Percentage);
                                    $("input[name='ADHcijfers']").val(hoogte + ":" + val.Percentage + ":" + val.Week);
                                } //if (thisvalue !== "")
								
                                //$("#adh-Week"+q).attr("height",hoogte);

                                //console.log(val);
                                //$.each(val,
                                // function(key1,val1){
                                // console.log(key1, val1);
                                //if (key1=="Naam" && val1===Userfolder)

                                //alert(val.Percentage+"%");

                                //thispoint=700-(val1*factory);
//                                       if (thispoint<41)
//                                           {
//                                               thispoint=43;
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);
//                                           }
//                                           else
//                                           {
//                                       $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text(val1 + "%");
//                                       $("#linearGradient5682").attr("y2",thispoint);        
//                                           }




                                // });
                                 
                                 
                                ////// Add ADH data to txtQM /////
                                //
                                var wekenreeks=Month2Weeknrs((new Date).getMonth(),(new Date).getFullYear());
                                var ArrWekenreeks=wekenreeks.split(",");
                                var inReeks=ArrWekenreeks.indexOf(val.Week);
                                //console.log("b= "+val.Week+"wekenreeks= "+wekenreeks+" inReeks= "+inReeks);
                                if(inReeks>-1)
                                {
                                    // Nieuwe gedeelte van functie txtQM.attr Adh wordt overgeschreven zie Nieuwe section
                                        if($("#txtQM").attr("ADH"))
                                        {
                                           // $("#txtQM").attr("ADH",$("#txtQM").attr("ADH")+","+val.Percentage);
                                        }
                                        else
                                        {
                                           // $("#txtQM").attr("ADH",val.Percentage);
                                        } // if($("#txtQM").attr("ADH"))
                                } //if(inReeks>-1)
                                //
                                ////////////////////////////////////
                            } // function(key, val, b)
                    ); //$.each(data.ADH

                } // function(data, b)
        ); //$.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADH_" + b + ".json"


    } // for (var i = startweek - 12; i < startweek; i++)


    //Calculate percentage
    //e.g. 85%
// Nieuwe section txtQM.attr ADH wordt hier over geschreven
var Today = new Date();
var QMmaand = UCaseFirst(getMonthStr(Today.getMonth()-1));

$.getJSON("users/cijfers/" + year + "/" + QMmaand + "/" + Userfolder + "/" + "ADHMaand.json",
                function(json)
				{ 
					$.each(json.ADH,
						function(key,val)
						{
							
							$("#txtQM").attr("ADH",val.Percentage);
						} //function(key,val)
					); // $.each(json.ADH
					
					//$("#txtQM").attr("ADH",json.Percentage);
				} //function(json, val)
);//$.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "ADHMaand.json",

} //function GrafiekADHData2(Userfolder)

function GrafiekDoelenZoom(item)
{
//Groep houding en gedrag
// #f1900f oranje
// Groep Vaardigheden
// #67b6e1 licht blauw
// Groep Resultaat
// #306873 groen

//item 1 QM Call #0077b7
//item 2 QM Email en Chat #0077b7
//item 3 KTO
//item 4 MRT Registratie
//item 5 Adherence
//item 6 Gesprekstijd
//item 7 ACW(nawerktijd)
//item 8 Registraties te laat
//item 9 Ziekteverzuim
    var Titels = "QM Call,QM Email en Chat,KTO,MRT Registratie,Adherence," +
            "Gesprekstijd,ACW(nawerktijd),Registraties te laat,Ziekteverzuim";
    var Kleuren = "#67b6e1,#67b6e1,#67b6e1,#306873,#306873,#306873,#306873,#f1900f,#f1900f";
    $("#Zoom").show();

    var waarde = parseInt(item);

    var ArrWaarden = new Array();
    var ArrTitels = new Array();
    var ArrPlaceholders = new Array();
    var ArrKleuren = new Array();

    var stringWaarden = " 90 - 100%, 80 -   89%, 60 -   79%,< 59%," +
            " 90 - 100%, 80 -   89%, 60 -   79%,< 59%," +
            "           5,           4,           3,< 2," +
            "105 - 115%,100 - 105%,  95 - 100%,< 95%," +
            "  96 - 100%,  93 -   95%,  90 -   92%,< 90%," +
            "        < 200,  200 - 210,  210 - 219,≥ 220," +
            "        < 25,   25 -  30,   30 -  39,≥ 40," +
            "           0,        ≤ 2,           3,≥ 4," +
            "        < 3%,      3 - 4%,      4 - 5%,> 5%";

    var placeholders = "#textUitstekend tspan,#textGoed tspan,#textVoldoende tspan,#textOnvoldoende tspan";

    ArrWaarden = stringWaarden.split(",");

    ArrTitels = Titels.split(",");

    ArrKleuren = Kleuren.split(",")

    ArrPlaceholders = placeholders.split(",");

    switch (waarde)
    {
        case 1:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);

            break;
        case 2:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);

            break;
        case 3:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 4:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 5:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 6:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 7:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 8:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
        case 9:
            var top = waarde * 4;
            var start = top - 4;
            var stap = 0;

            for (var i = start; i < top; i++)
            {
                $(ArrPlaceholders[stap]).text(ArrWaarden[i]);
                stap++;
            }

            $("#ZoomTitel tspan, #ZoomTitel-schaduw tspan").text(ArrTitels[waarde - 1]);
            $("#ZoomTitel").css("fill", ArrKleuren[waarde - 1]);
            break;
    }

}
 function GrafiekQM(Userfolder)
{
    
    //QM lijnen 
//    var lijn89= "m 50,331.5 640,0";
//    var lijn79= "m 50,276.5 640,0";
//    var lijn59= "m 50,206.5 640,0";
//    $("#lijn-59").attr("d",lijn59);
//    $("#lijn-79").attr("d",lijn79);
//    $("#lijn-89").attr("d",lijn89);

//reset plakken
$("#bronzenplak, #zilverenplak, #goudenplak").hide();
//reset lijn
$("#qm-lijn, #qm-lijn-schaduw").attr("d", "m 71.389565,121.7965 608.746205,0");
// reset gemiddelde
$("#Qm-Avg, #Qm-Avg-schaduw").hide();
// hide all labels
$("text[id^='Qm-meting'], text[id^='Qm-waarde']").hide();

    var path="M ";
    var pathOnderdeely = new Array();
    var ArrScores = new Array();
    var keyArr= new Array();
    var year =(new Date().getFullYear());
    $.getJSON("users/cijfers/" + year +  "/QM/" + Userfolder + ".json", 
    function(json){
        var metingen = json.QM.length;
        
        //////// Show values of QM score /////////
        if (metingen>0)
        {
            $("#Qm-waarde-groep").show(); 
            //$("#Cor-schakelaar").show(); 
            
        } 

        //////////////////////////////////////////
        //check length and remove all extra labels
        //////////////////////////////////////////
        
        $.each($("text[id^='Qm-meting']"), 
        function(index)
        {
            var number = $(this).attr("id");
            number= number.substr(parseInt(number.length-1,number.length));
            if (number>json.QM.length)
            {
                $(this).remove();
            }
        });
        
         $.each($("text[id^='Qm-waarde']"), 
        function(index)
        {
            var number = $(this).attr("id");
            number= number.substr(parseInt(number.length-1,number.length));
            if (number>json.QM.length)
            {
                $(this).remove();
            }
        });
        //////////////////////////////////////////
        //////////////////////////////////////////
        //////////////////////////////////////////
        var som=0;
        var gemiddelde;
        var temp=0;
        
        $.each(json.QM, 
        function(key, val){
            var waarde = val.score;
            ArrScores.push(waarde);
            if(isNaN(waarde)==false)
            {
                //alert(waarde);
                temp=parseInt(waarde);
                som+=parseInt(waarde);
                var factory= 490- (temp*3.7)
                //console.log("factory: "+factory);
                pathOnderdeely.push(factory);
                
            }
            else
            {
                //alert("isnumeric");
                
                //keyArr.push(key);
                
                if(pathOnderdeely.length==0)
                {
                    temp=parseInt(json.QM[0,1].score);
                    factory=490-(temp*3.7);
                 pathOnderdeely.push(factory);   
                }
                else
                {
                   var temp2=parseInt(pathOnderdeely[pathOnderdeely.length-1]) ;
                   pathOnderdeely.push(temp2);
                }
                keyArr.push(key);
                metingen--;
            }

            
        });
        
        //alert(keyArr.length);
        if (keyArr.length>0)
        {
            var factorx=620/(json.QM.length-1);
        }
        else
        {
             factorx=620/(metingen-1);
        }
            var pathOnderdeelx = 70;
            
            var labelQmy=489.45721;
            
            //Remove all medals before start
            $("g[id^='History-medal']").remove();
            
            for (var i=0;i<json.QM.length;i++)
            {
                if (i>0)
                {
                    var myX=parseInt($("#Qm-text"+(i)).attr("x"));
                    
                    textLabelQmMeting(i+1,pathOnderdeelx-40, labelQmy, i+2);
                    textLabelQmWaarde(ArrScores[i],pathOnderdeelx-20, pathOnderdeely[i]-10, i+2);
                    textLabelQmWaardeHistory(ArrScores[i],myX+50, 232, i+1);
                    //$(".goldmedal").clone().appendTo("#grafiekHistory").attr("id","History-medal3")
                    
                    switch(true)
                    {
                        case ArrScores[i]<60:
                            
                            break;
                        case ArrScores[i]>59 && ArrScores[i]<80:
//                            $(".bronzemedal").clone().appendTo("#grafiekHistory").attr("id","History-medal"+(i+1)).show();
//                            $("#History-medal"+(i+1)).attr({transform: "translate("+(160+(50*i)) +",110) scale(.3)"});
//                            $("#History-medal"+(i+1)).removeAttr("class");
                            //#ffffff schaduw
                            //#b3b3b3 brons   


                            break;
                        case ArrScores[i]>79 && ArrScores[i]<90:
//                            $(".silvermedal").clone().appendTo("#grafiekHistory").attr("id","History-medal"+(i+1)).show();
//                            $("#History-medal"+(i+1)).attr({transform: "translate("+(160+(50*i)-70) +",137) scale(.3)"});
//                            $("#History-medal"+(i+1)).removeAttr("class");
                            //#ffffff schaduw
                            //#b3b3b3 zilver
                            break;
                        case ArrScores[i]>89:
//                            $(".goldmedal").clone().appendTo("#grafiekHistory").attr("id","History-medal"+(i+1)).show();
//                            $("#History-medal"+(i+1)).attr({transform: "translate("+(160+(50*i)-70) +",137) scale(.3)"});
//                            $("#History-medal"+(i+1)).removeAttr("class");
                            //#f3f33a schaduw
                            //#ffb380 goud

                            break;                
                    }                    
                } 
                else
                {
                    $("#Qm-meting1 tspan, #Qm-meting1-schaduw tspan").text(i+1).show();
                    $("#Qm-waarde1 tspan, #Qm-waarde1-schaduw tspan").text(ArrScores[i]).show();
                    $("#Qm-text1 tspan").text(ArrScores[i]).show();
                    $("#Qm-waarde1, #Qm-waarde1 tspan, #Qm-waarde1-schaduw, #Qm-waarde1-schaduw tspan").attr("y",pathOnderdeely[0]-10);
                    switch(true)
                    {
                        case ArrScores[i]<60:
                            
                            break;
                        case ArrScores[i]>59 && ArrScores[i]<80:
//                            $(".bronzemedal").clone().appendTo("#grafiekHistory").attr("id","History-medal1").show();
//                            $("#History-medal1").attr({transform: "translate(160,110) scale(.3)"});
//                            $("#History-medal1").removeAttr("class");
                            //#ffffff schaduw
                            //#b3b3b3 brons   


                            break;
                        case ArrScores[i]>79 && ArrScores[i]<90:
//                            $(".silvermedal").clone().appendTo("#grafiekHistory").attr("id","History-medal1").show();
//                            $("#History-medal1").attr({transform: "translate(90,137) scale(.3)"});
//                            $("#History-medal1").removeAttr("class");
                            //#ffffff schaduw
                            //#b3b3b3 zilver
                            break;
                        case ArrScores[i]>89:
//                            $(".goldmedal").clone().appendTo("#grafiekHistory").attr("id","History-medal1").show();
//                            $("#History-medal1").attr({transform: "translate(90,137) scale(.3)"});
//                            $("#History-medal1").removeAttr("class");
                            //#f3f33a schaduw
                            //#ffb380 goud

                            break;                
                    }                    
                    
                }
                path += pathOnderdeelx + "," + pathOnderdeely[i]+" ";
                pathOnderdeelx += factorx;
                
                
            }
            
            ///Add Laatste QM to txtQm attribute
            // This will be used by QMCor Module
            //alert(ArrScores[ArrScores.length-1]);
                $("#txtQM").attr("QM-data",ArrScores[ArrScores.length-1]);
            //
            ///////////////////////////////////////////
            //path += pathOnderdeelx + "," + pathOnderdeely+" ";
            gemiddelde=som/metingen;
            $("#qm-lijn, #qm-lijn-schaduw").attr("d", path)
            
            switch(true)
            {
                case gemiddelde<60:
                    $("#bronzenplak, #zilverenplak, #goudenplak").hide();
                    $("#Qm-Avg, #Qm-Avg-schaduw").show();
                    $("#Qm-Avg tspan, #Qm-Avg-schaduw tpan").text(Math.round(gemiddelde)+"%");
                    break;
                case gemiddelde>59 && gemiddelde<80:
                    $("#zilverenplak, #goudenplak").hide();
                    $("#bronzenplak").show(1000);
                    
                    $("#Qm-Avg, #Qm-Avg-schaduw").show();
                    $("#Qm-Avg tspan, #Qm-Avg-schaduw tpan").text(Math.round(gemiddelde)+"%");
                    //#ffffff schaduw
                    //#b3b3b3 brons   
                    
                    
                    break;
                case gemiddelde>79 && gemiddelde<90:
                    $("#bronzenplak, #goudenplak").hide();
                    $("#zilverenplak").show(1000);
                    
                    $("#Qm-Avg, #Qm-Avg-schaduw").show();
                    $("#Qm-Avg tspan, #Qm-Avg-schaduw tpan").text(Math.round(gemiddelde)+"%");
                    //#ffffff schaduw
                    //#b3b3b3 zilver
                    break;
                case gemiddelde>89:
                    $("#bronzenplak, #zilverenplak").hide();
                    $("#goudenplak").show(1000);
                    
                    $("#Qm-Avg, #Qm-Avg-schaduw").show();
                    $("#Qm-Avg tspan, #Qm-Avg-schaduw tpan").text(Math.round(gemiddelde)+"%");
                    
                    //#f3f33a schaduw
                    //#ffb380 goud
                    
                    break;                
            }
        //console.log("gemiddelde: "+gemiddelde, metingen, som);
    } ).fail(function(jqxhr, textStatus, error){
            $("#Qm-waarde-groep").hide();
            $("#Cor-schakelaar").hide(); 
        console.log("Request failed"+ textStatus + " " + error);
    });
    
}
function GrafiekQMCOR(Userfolder)
{$("#Cor-schakelaar").hide();
   //Reset QMCor all text
    //$("#grafiekQMCor text tspan").text("-").hide(1000);

 //Reset QMCor
Covertohide(0);
    //standard text of label
    //ADH: //
    //  QM: //
    //console.log("gestart");
    var ADHtxt="ADH: ";
    var ADHtxt1="  || afgelopen maand";
    var QMtxt="  QM: ";
    var QMtxt1="  || laatste coaching";
    //find ADH input[name='ADHcijfers']
    
    //Calc A1,A,B,C,D
    var Qm = parseInt($("#txtQM").attr("QM-data"));
    //console.log("gestart"+parseInt($("#txtQM").attr("QM-data")));
	
    if(Qm===undefined)
    {
        //alert(Qm);
        //console.log("Ik ben bij Qm uitgestapt");
        return;
    }
	if($("#txtQM").attr("QM-data") ==="CZS")
	{
		alert("Medewerker heeft op dit moment geen score");
	}
    var strAdh = $("#txtQM").attr("ADH");
    //console.log("gestart"+$("#txtQM").attr("ADH"));
    
    if(strAdh===undefined)
    {
        //console.log("Ik ben bij Adh uitgestapt");
        return;
    }
    else
    {
    
        //var ArrAdh= strAdh.split(",");
    //console.log("gestart"+ArrAdh[0]);    
 /*       var newArrAdh = new Array();
        for (var i=0;i<ArrAdh.length;i++)
        {
            
            newArrAdh.push(ArrAdh[i]);
        }*/
        //strAdh=newArrAdh.toString();
        
        var Adh= parseFloat($("#txtQM").attr("ADH"));// returnAvgArr(strAdh);
		//alert(Adh);
        $("#Cor-schakelaar").show();
   //console.log(Qm,Adh);

        if (Qm < 80 && Adh < 93) {
            //D
            $("#Cover2, #Cover3, #Cover4").show(1000);
            $("#Cover1").hide(1000);
            $("#Cor-starAgent").hide(500);
            $("#lbltxt-D").show();
            $("#lbltxt-D text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%" + ADHtxt1).show();
            $("#lbltxt-D text:last tspan").text(QMtxt + Qm + "%" + QMtxt1).show();
            $("#textD tspan").text("D");
            $("#textD-glow tspan").text("D");
            return;
        }
        
        if (Qm < 80 && Adh > 92) {
            //C
            $("#Cover1, #Cover3, #Cover4").show(1000);
            $("#Cover2").hide(1000);
            $("#Cor-starAgent").hide(500);
            $("#lbltxt-C").show();
            $("#lbltxt-C text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%" + ADHtxt1).show();
            $("#lbltxt-C text:last tspan").text(QMtxt + Qm + "%" + QMtxt1).show();
            $("#textC tspan").text("C");
            $("#textC-glow tspan").text("C");
            return;
        }
        if (Qm > 79 && Adh < 93) {
            //B
            $("#Cover1, #Cover2, #Cover4").show(1000);
            $("#Cover3").hide(1000);
            $("#Cor-starAgent").hide(500);
            $("#lbltxt-B").show();
            $("#lbltxt-B text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%" + ADHtxt1).show();
            $("#lbltxt-B text:last tspan").text(QMtxt + Qm + "%" + QMtxt1).show();
            $("#textB tspan").text("B");
            $("#textB-glow tspan").text("B");
            return;
        }
        if (Qm > 79 && Adh > 92)
        {// A & A+
            if (Adh < 96)
            {
                $("#Cover1, #Cover2, #Cover3").show(1000);
                $("#Cover4").hide(1000);
                $("#Cor-starAgent").hide(500);
                $("#lbltxt-A").show();
                $("#lbltxt-A text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%" + ADHtxt1).show();
                $("#lbltxt-A text:last tspan").text(QMtxt + Qm + "%" + QMtxt1).show();
                $("#textA tspan").text("A");
                $("#textA-glow tspan").text("A");
                return;
            }
            else {
                if (Qm > 89 && Adh > 95) {
                   // console.log("A1");
                    $("#Cover1, #Cover2, #Cover3").show(1000);
                    $("#Cover4").hide(1000);
                    $("#Cor-starAgent").show(500);
                    $("#lbltxt-A1").show();
                    $("#lbltxt-A1 text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%").show();
                    $("#lbltxt-A1 text:last tspan").text(QMtxt + Qm + "%").show();
                    $("#lbltxt-A text:first tspan").text("Adherence" + ADHtxt1).show();
                    $("#lbltxt-A text:last tspan").text("QM" + QMtxt1).show();
                    $("#textAplus tspan").text("A+");
                    $("#textAplus-glow tspan").text("A+");
                    return;
                }
                else
                {
                    
                    //alert("Qm = " + Qm + " Adh = " + Adh);
                $("#Cover1, #Cover2, #Cover3").show(1000);
                $("#Cover4").hide(1000);
                $("#Cor-starAgent").hide(500);
                $("#lbltxt-A").show();
                $("#lbltxt-A text:first tspan").text(ADHtxt + (Adh.toFixed(1)) + "%" + ADHtxt1).show();
                $("#lbltxt-A text:last tspan").text(QMtxt + Qm + "%" + QMtxt1).show();
                $("#textA tspan").text("A");
                $("#textA-glow tspan").text("A");
                return;
                }
            }


        }
    }
    
}

function textLabelQmMeting(tekst,posx, posy, numberID)
{
    //      <text
//         sodipodi:linespacing="125%"
//         id="Qm-meting1"
//         y="489.45721"
//         x="81.112572"
//         style="font-size:20px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;font-family:Kartika;-inkscape-font-specification:Kartika"
//         xml:space="preserve"><tspan
//           style="fill:#ffffff"
//           y="489.45721"
//           x="81.112572"
//           id="tspan11065"
//           sodipodi:role="line">-</tspan></text>

 
    
    //Send object to place in design
    //grafiekQM
    if ($("#Qm-meting"+numberID).html())
    {
        $("#Qm-meting"+numberID).show();
    }
    else
    {
     $(".Qm-meting").clone().appendTo("#grafiekQM").attr({id:"Qm-meting"+numberID,
                                                      x:posx,
                                                      y: posy
                                                        });
      $(".Qm-meting").show();
        $("#Qm-meting"+numberID).removeAttr("class");
      
    }

                                                        
    $("#Qm-meting"+numberID+" tspan").attr({x:posx,y:posy}).text(tekst);
   
    
                                                      


}
function textLabelQmWaarde(tekst,posx, posy, numberID)
{
//      <text
//         sodipodi:linespacing="125%"
//         id="Qm-meting1"
//         y="489.45721"
//         x="81.112572"
//         style="font-size:20px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;font-family:Kartika;-inkscape-font-specification:Kartika"
//         xml:space="preserve"><tspan
//           style="fill:#ffffff"
//           y="489.45721"
//           x="81.112572"
//           id="tspan11065"
//           sodipodi:role="line">-</tspan></text>

 
    
    //Send object to place in design
    //grafiekQM
    if ($("#Qm-waarde"+numberID).html())
    {
        $("#Qm-waarde"+numberID).show() ;
    }
    else
    {
     $(".Qm-waarde").clone().appendTo("#Qm-waarde-groep").attr({id:"Qm-waarde"+numberID,
                                                      x:posx,
                                                      y: posy
                                                        });
      $(".Qm-waarde").show();
        $("#Qm-waarde"+numberID).removeAttr("class");
      
    }

                                                        
    $("#Qm-waarde"+numberID+" tspan").attr({x:posx,y:posy}).text(tekst);
   
    
                                                      


}
function textLabelQmWaardeHistory(tekst,posx, posy, numberID)
{
//      <text
//         sodipodi:linespacing="125%"
//         id="Qm-meting1"
//         y="489.45721"
//         x="81.112572"
//         style="font-size:20px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;font-family:Kartika;-inkscape-font-specification:Kartika"
//         xml:space="preserve"><tspan
//           style="fill:#ffffff"
//           y="489.45721"
//           x="81.112572"
//           id="tspan11065"
//           sodipodi:role="line">-</tspan></text>

 
    
    //Send object to place in design
    //grafiekQM
    if ($("#Qm-text"+numberID).html())
    {
        $("#Qm-text"+numberID).show() ;
    }
    else
    {
     $(".Qm-history").clone().appendTo("#Qm-waarde-History-groep").attr({id:"Qm-text"+numberID,
                                                      x:posx,
                                                      y: posy
                                                        });
      $(".Qm-text").show();
        $("#Qm-text"+numberID).removeAttr("class");
      
    }

                                                        
    $("#Qm-text"+numberID+" tspan").attr({x:posx,y:posy}).text(tekst);
   
    
                                                      


}

function CancelAnimation()
{//function hides Zoom box
    $("#Zoom").hide();
}
function retrieveADHhoogtes()
{
    var hoogtes = new Array(), perc = new Array();
    var stringofval = $("input[name='ADHcijfers']").val();
    //$("#text"+number).attr("ADH");
    hoogtes = stringofval.split("/");

    for (var q = 0; q < hoogtes.length; q++)
    {
        var a = q + 1;
        var stringofperc = hoogtes[q];
        perc = stringofperc.split(":");
        var cijfer = parseInt(perc[1]);
        var punt = 122 + (100 - cijfer) * 3.71;

        $("#adh-Week" + a).attr(
                {
                    height: perc[0],
                    y: punt
                });
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text("-");
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text(perc[2]);
        $("#text-adh-waarde-Week" + a + " tspan").text(cijfer);

        $("#text-adh-waarde-Week" + a + "-schaduw tspan").text(cijfer);
        switch (true)
        {
            case (cijfer < 90):
                $("#adh-Week" + a).css("fill", "#FF0000");
                break;
            case (cijfer > 89 && cijfer < 93):
                $("#adh-Week" + a).css("fill", "#FF6600");
                break;
            case (cijfer > 92 && cijfer < 96):
                $("#adh-Week" + a).css("fill", "#00FF00");
                break;
            case (cijfer > 95 && cijfer < 101):
                $("#adh-Week" + a).css("fill", "#178d17");
                break;
        }

    }
}
function retrieveADHhoogtes1()
{
    var hoogtes = new Array(), perc = new Array();
    var stringofval = $("input[name='ADHcijfers']").val();
    //$("#text"+number).attr("ADH");
    hoogtes = stringofval.split("/");
    var stringPath = "M";
    var stringofx = "71,136,188,239,287.5,350,401,442.5,493,545,595.5,657";
    var x = new Array();
    x = stringofx.split(",");
    for (var q = 0; q < hoogtes.length; q++)
    {
        var a = q + 1;
        var stringofperc = hoogtes[q];
        perc = stringofperc.split(":");
        var cijfer = parseInt(perc[1]);
        var punt = 122 + (100 - cijfer) * 3.71;

        $("#adh-Week" + a).attr(
                {
                    height: perc[0],
                    y: punt
                });
        stringPath = stringPath + " " + x[q] + "," + punt;
        $("#ADH-graph, #ADH-graph-schaduw").attr("d", stringPath);
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text("-");
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text(perc[2]);
        $("#text-adh-waarde-Week" + a + " tspan, #text-adh-waarde-Week" + a + "-schaduw tspan,#text-adh-waarde-Week" + a + "-schaduw, #text-adh-waarde-Week" + a).attr("y", (punt - 12));
        $("#text-adh-waarde-Week" + a + " tspan").text(cijfer);

        $("#text-adh-waarde-Week" + a + "-schaduw tspan").text(cijfer);
        switch (true)
        {
            case (cijfer < 90):
                $("#adh-Week" + a).css("fill", "#FF0000");
                break;
            case (cijfer > 89 && cijfer < 93):
                $("#adh-Week" + a).css("fill", "#FF6600");
                break;
            case (cijfer > 92 && cijfer < 96):
                $("#adh-Week" + a).css("fill", "#00FF00");
                break;
            case (cijfer > 95 && cijfer < 101):
                $("#adh-Week" + a).css("fill", "#178d17");
                break;
        }

    }
}
function retrieveADHhoogtes2()
{
    var hoogtes = new Array(), perc = new Array();
    var stringofval = $("input[name='ADHcijfers']").val();
    //$("#text"+number).attr("ADH");
    hoogtes = stringofval.split("/");
    var stringPath = "M";
    var stringofx = "71,136,188,239,287.5,350,401,442.5,493,545,595.5,657";
    var x = new Array();
    x = stringofx.split(",");
    ///
    for (var t=1;t<13;t++)
    {$("#maand-" +t).hide();}
    //Show average display
    $("#gemiddelde-adh").show()
    //===========================
//accumulative for average
    var acc = 0;
//========================
    for (var q = 0; q < hoogtes.length; q++)
    {
        var a = q + 1;
        var stringofperc = hoogtes[q];
        perc = stringofperc.split(":");
        var cijfer = parseInt(perc[1]);
        //var punt = 122+(100-(cijfer))*12.366;
        acc += cijfer;
        var punt = 471 - ((cijfer - 70) * 11.6333);
        $("#adh-Week" + a).attr(
                {
                    height: perc[0],
                    y: punt
                });
                //klokje vullen
                $("#maand-" + (q + 1)).show();
                ///////////////////////
        //$("#gemiddelde-adh ).show()
        
        
        stringPath = stringPath + " " + x[q] + "," + punt;
        $("#ADH-graph, #ADH-graph-schaduw").attr("d", stringPath);
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text("-");
        $("#text-adh-Week" + a + " tspan, #text-adh-Week" + a + "-schaduw tspan").text(perc[2]);
        $("#text-adh-waarde-Week" + a + " tspan, #text-adh-waarde-Week" + a + "-schaduw tspan,#text-adh-waarde-Week" + a + "-schaduw, #text-adh-waarde-Week" + a).attr("y", (punt - 12));
        $("#text-adh-waarde-Week" + a + " tspan").text(cijfer);

        $("#text-adh-waarde-Week" + a + "-schaduw tspan").text(cijfer);
        switch (true)
        {
            case (cijfer < 90):
                $("#adh-Week" + a).css("fill", "#FF0000");
                break;
            case (cijfer > 89 && cijfer < 93):
                $("#adh-Week" + a).css("fill", "#FF6600");
                break;
            case (cijfer > 92 && cijfer < 96):
                $("#adh-Week" + a).css("fill", "#00FF00");
                break;
            case (cijfer > 95 && cijfer < 101):
                $("#adh-Week" + a).css("fill", "#178d17");
                break;
        }

    }
    //calc average
    var average = Math.round(acc / hoogtes.length * 10) / 10;
    average = average.toFixed(1);
    $("#Gemiddelde-adh-cijfer tspan").text(average);
    $("#Gemiddelde-adh_zoom text:first tspan").text(average);
    $("#Gemiddelde-adh_zoom text:last tspan:last").text(hoogtes.length + " weken");
    //=========================
}
function calcPosition(Vorigepos, AHT, week) {
    //week is gelijk aan x
    //x interval is 40 week 1 begin bij 50
    var y;
    var factorstage1 = 6.6666667; //groen
    var factorstage2 = 10.6666667; //geel
    var factorstage3 = 0.40579; //rood
    var x = 0;

    if (Vorigepos == "") {
        x = 10 + (week * 40);
        //We gaan initiëren
        switch (true) {
            case (AHT < 226):
                y = 490;
                break;
            case (AHT > 225 && AHT < 240):
                y = 490 - ((AHT - 225) * factorstage1);
                break;
            case (AHT > 239 && AHT < 256):
                y = 390 - ((AHT - 240) * factorstage2);
                break;
            case (AHT > 255 && AHT < 600):
                y = 230 - ((AHT - 255) * factorstage3);

                break;
            case (AHT > 600):
                y = 90;
                break;
        }
        return x + "," + y;

    } else {
        x = 50 + (40 * week);
        var Onderdelen = Vorigepos.split(",");
        var yVanOnderdeel = parseInt(Onderdelen[Onderdelen.length - 1]);

        switch (true) {
            case (AHT < 226):
                y = 490;
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }                
                break;
            case (AHT > 225 && AHT < 240):
                y = 490 - ((AHT - 225) * factorstage1);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (AHT > 239 && AHT < 256):
                y = 390 - ((AHT - 240) * factorstage2);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (AHT > 255 && AHT < 600):
                y = 230 - ((AHT - 255) * factorstage3);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                  console.log("AHT is" + AHT,y,yVanOnderdeel);
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                  console.log("AHT is" + AHT,y);
                //                }


                break;
            case (AHT > 600):

                y = 90;

                if (y < yVanOnderdeel) {

                    y = yVanOnderdeel - y;
                } else {
                    y = yVanOnderdeel + y;
                }
                break;
        }
        return x + "," + y;
    }



}

function calcPositionACW1(Vorigepos, ACW, week) {
    //week is gelijk aan x
    //x interval is 40 week 1 begin bij 50
    var y;
    var factorstage1 = 20;//groen
    var factorstage2 = 16.6666;//geel
    var factorstage3 = 15; //rood
    var x = 0;

    if (Vorigepos == "") {
        x = 10 + (week * 40);
        //We gaan initiëren
        switch (true) {
            case (ACW < 25):
                y = 490;
                break;
            case (ACW > 24 && ACW < 30):
                y = 490 - ((ACW - 24) * factorstage1);
                break;
            case (ACW > 29 && ACW < 40):
                y = 390 - ((ACW - 29) * factorstage2);
                break;
            case (ACW > 39 && ACW < 50):
                y = 240 - ((ACW - 39) * factorstage3);

                break;
            case (ACW > 49):
                y = 90;
                break;
        }
        return x + "," + y;

    } else {
        x = 50 + (40 * week);
        var Onderdelen = Vorigepos.split(",");
        var yVanOnderdeel = parseInt(Onderdelen[Onderdelen.length - 1]);

        switch (true) {
            case (ACW < 25):
                y = 490;
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }                
                break;
            case (ACW > 24 && ACW < 30):
                y = 490 - ((ACW - 24) * factorstage1);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (ACW > 29 && ACW < 40):
                y = 390 - ((ACW - 29) * factorstage2);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (ACW > 39 && ACW < 50):
                y = 240 - ((ACW - 39) * factorstage3);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //  
                break;
            case (ACW > 49):

                y = 90;

                /*if (y < yVanOnderdeel) {
                 
                 y = yVanOnderdeel - y;
                 } else {
                 y = yVanOnderdeel + y;
                 }*/
                break;
        }
        return x + "," + y;
    }



}
function calcPositionACW(Vorigepos, ACW, week) {
    //week is gelijk aan x
    //x interval is 40 week 1 begin bij 50
    var y;
    var factorstage1 = 18;//groen
    var factorstage2 = 32;//geel
    var factorstage3 = 8.125; //rood
    var x = 0;

    if (Vorigepos == "") {
        x = 10 + (week * 40);
        //We gaan initiëren
        switch (true) {
            case (ACW < 25):
                y = 490;
                break;
            case (ACW > 24 && ACW < 30):
                y = 490 - ((ACW - 24) * factorstage1);
                break;
            case (ACW > 29 && ACW < 35):
                y = 390 - ((ACW - 29) * factorstage2);
                break;
            case (ACW > 34 && ACW < 50):
                y = 240 - ((ACW - 34) * factorstage3);

                break;
            case (ACW > 49):
                y = 90;
                break;
        }
        return x + "," + y;

    } else {
        x = 50 + (40 * week);
        var Onderdelen = Vorigepos.split(",");
        var yVanOnderdeel = parseInt(Onderdelen[Onderdelen.length - 1]);

        switch (true) {
            case (ACW < 25):
                y = 490;
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }                
                break;
            case (ACW > 24 && ACW < 30):
                y = 490 - ((ACW - 24) * factorstage1);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (ACW > 29 && ACW < 35):
                y = 390 - ((ACW - 29) * factorstage2);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (ACW > 34 && ACW < 50):
                y = 240 - ((ACW - 34) * factorstage3);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //  
                break;
            case (ACW > 49):

                y = 90;

                /*if (y < yVanOnderdeel) {
                 
                 y = yVanOnderdeel - y;
                 } else {
                 y = yVanOnderdeel + y;
                 }*/
                break;
        }
        return x + "," + y;
    }



}
function calcPositionGespr(Vorigepos, Gespr, week) {
    //week is gelijk aan x
    //x interval is 40 week 1 begin bij 50
    var y;
    var factorstage1 = 9;//groen
    var factorstage2 = 16;//geel
    var factorstage3 = 4.3333; //rood
    var x = 0;

    if (Vorigepos == "") {
        x = 10 + (week * 40);
        //We gaan initiëren
        switch (true) {
            case (Gespr < 200):
                y = 490;
                break;
            case (Gespr > 199 && Gespr < 211):
                y = 490 - ((Gespr - 199) * factorstage1);
                break;
            case (Gespr > 210 && Gespr < 221):
                y = 400 - ((Gespr - 210) * factorstage2);
                break;
            case (Gespr > 220 && Gespr < 250):
                y = 240 - ((Gespr - 220) * factorstage3);
                break;
            case (Gespr > 249):
                y = 90;
                break;
        }
        return x + "," + y;

    } else {
        x = 10 + (40 * week);
        var Onderdelen = Vorigepos.split(",");
        var yVanOnderdeel = parseInt(Onderdelen[Onderdelen.length - 1]);

        switch (true) {
            case (Gespr < 200):
                y = 490;
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }                
                break;
            case (Gespr > 199 && Gespr < 211):
                y = 490 - ((Gespr - 199) * factorstage1);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                // 
                //                
                //                                              }
                break;
            case (Gespr > 210 && Gespr < 221):
                y = 390 - ((Gespr - 210) * factorstage2);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //                }
                break;
            case (Gespr > 220 && Gespr < 250):
                y = 240 - ((Gespr - 220) * factorstage3);
                //                if (y<yVanOnderdeel)
                //                {
                //                    
                //                  y=yVanOnderdeel-y;   
                //                }
                //                else
                //                {
                //                  y=yVanOnderdeel+y;
                //  
                break;
            case (Gespr > 249):

                y = 90;

                /* if (y < yVanOnderdeel) {
                 
                 y = yVanOnderdeel - y;
                 } else {
                 y = yVanOnderdeel + y;
                 }*/
                break;
        }

        return x + "," + y;
    }



}
function getFocus(myelement) {
    var waarde = parseInt(myelement);
    switch (waarde)

    {
        case 1:
            //Adherence
            var myX = parseInt($("#gradherence-center").attr("sodipodi:cx"));





            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");
            if ($("#grafiekAdherence").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }


            break;
        case 2:
            //MRT
            myX = parseInt($("#grmrt-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");

            if ($("#grafiekMRT").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
        case 3:
            //Verzuim
            myX = parseInt($("#grverzuim-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");


            if ($("#grafiekVerzuim").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
        case 4:
            //Doelen
            myX = parseInt($("#grdoelen-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");

            if ($("#grafiekDoelen").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
        case 5:
            //AHT
            myX = parseInt($("#graht-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");

            if ($("#grafiekAHT").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
        case 6:
            //Gesprekstijd
            myX = parseInt($("#grgesprekstijd-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");

            if ($("#grafiekGespr").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
        case 7:
            //ACW
            myX = parseInt($("#gracw-center").attr("sodipodi:cx"));
            $("#grafiekGrootFocus").show();
            $("#grafiekGrootFocus").attr("sodipodi:cx", myX);
            $("#grafiekGrootFocus").attr("d", "m " + (36.5 + myX) + ",527.5 a 36.5,30.5 0 1 1 -73,0 36.5,30.5 0 1 1 73,0 z");

            if ($("#grafiekACW").css("display") === "none")
            {
                $("#grafiekGrootFocus").css("fill", "#005566");
            }
            else
            {
                $("#grafiekGrootFocus").css("fill", "#D22630");
            }

            break;
    }
}

function GrafiekLoosefocus() {
    $("#grafiekGrootFocus").hide();
    //console.log("uitgevoerd");
}

function changeTraffic(average) {
    var waarde = parseInt(average);
    switch (true) {
        case (waarde < 226):
            //groen aan
            $("#stoplicht-rood").attr("style", "display:none");
            $("#stoplicht-rood-uit").attr("style", "");
            $("#stoplicht-oranje").attr("style", "display:none");
            $("#stoplicht-oranje-uit").attr("style", "");
            $("#stoplicht-groen").attr("style", "");
            $("#stoplicht-groen-uit").attr("style", "display:none");
            //console.log("groen");
            break;
        case (waarde > 226 && waarde < 256):
            //oranje aan
            $("#stoplicht-rood").attr("style", "display:none");
            $("#stoplicht-rood-uit").attr("style", "");
            $("#stoplicht-oranje").attr("style", "");
            $("#stoplicht-oranje-uit").attr("style", "display:none");
            $("#stoplicht-groen").attr("style", "display:none");
            $("#stoplicht-groen-uit").attr("style", "");
            //console.log("oranje");
            break;
        case (waarde > 255):
            //rood aan
            $("#stoplicht-rood").attr("style", "");
            $("#stoplicht-rood-uit").attr("style", "display:none");
            $("#stoplicht-oranje").attr("style", "display:none");
            $("#stoplicht-oranje-uit").attr("style", "");
            $("#stoplicht-groen").attr("style", "display:none");
            $("#stoplicht-groen-uit").attr("style", "");
            //console.log("rood");
            break;
    }
}
function changeTrafficACW(average) {
    var waarde = parseInt(average);
    switch (true) {
        case (waarde < 30):
            //groen aan
            $("#stoplicht-rood-acw").attr("style", "display:none");
            $("#stoplicht-rood-uit-acw").attr("style", "");
            $("#stoplicht-oranje-acw").attr("style", "display:none");
            $("#stoplicht-oranje-uit-acw").attr("style", "");
            $("#stoplicht-groen-acw").attr("style", "");
            $("#stoplicht-groen-uit-acw").attr("style", "display:none");
            //console.log("groen");
            break;
        case (waarde > 29 && waarde < 40):
            //oranje aan
            $("#stoplicht-rood-acw").attr("style", "display:none");
            $("#stoplicht-rood-uit-acw").attr("style", "");
            $("#stoplicht-oranje-acw").attr("style", "");
            $("#stoplicht-oranje-uit-acw").attr("style", "display:none");
            $("#stoplicht-groen-acw").attr("style", "display:none");
            $("#stoplicht-groen-uit-acw").attr("style", "");
            //console.log("oranje");
            break;
        case (waarde > 39):
            //rood aan
            $("#stoplicht-rood-acw").attr("style", "");
            $("#stoplicht-rood-uit-acw").attr("style", "display:none");
            $("#stoplicht-oranje-acw").attr("style", "display:none");
            $("#stoplicht-oranje-uit-acw").attr("style", "");
            $("#stoplicht-groen-acw").attr("style", "display:none");
            $("#stoplicht-groen-uit-acw").attr("style", "");
            //console.log("rood");
            break;
    }
}
function changeTrafficGespr(average) {
    var waarde = parseInt(average);
    console.log("waarde :"+waarde);
    switch (true) {
        case (waarde < 211):
            //groen aan
            $("#stoplicht-rood-gespr").attr("style", "display:none");
            $("#stoplicht-rood-uit-gespr").attr("style", "");
            $("#stoplicht-oranje-gespr").attr("style", "display:none");
            $("#stoplicht-oranje-uit-gespr").attr("style", "");
            $("#stoplicht-groen-gespr").attr("style", "");
            $("#stoplicht-groen-uit-gespr").attr("style", "display:none");
            //console.log("groen");
            break;
        case (waarde > 210 && waarde < 220):
            //oranje aan
//            $("#stoplicht-rood-gespr").attr("style", "display:none");
//            $("#stoplicht-rood-uit-gespr").attr("style", "");
//            $("#stoplicht-oranje-gespr").attr("style", "");
//            $("#stoplicht-oranje-uit-gespr").attr("style", "display:none");
//            $("#stoplicht-groen-gespr").attr("style", "display:none");
//            $("#stoplicht-groen-uit-gespr").attr("style", "");

                $("#stoplicht-rood-gespr").css("display","none");
                $("#stoplicht-oranje-uit-gespr").css("display","none");
                $("#stoplicht-groen-gespr").css("display","none");
                $("#stoplicht-rood-uit-gespr").css("display","inline");
                $("#stoplicht-oranje-gespr").css("display","inline");
                $("#stoplicht-groen-uit-gespr").css("display","inline");
                
            console.log("oranje");
            break;
        case (waarde > 220):
            //rood aan
            $("#stoplicht-rood-gespr").attr("style", "");
            $("#stoplicht-rood-uit-gespr").attr("style", "display:none");
            $("#stoplicht-oranje-gespr").attr("style", "display:none");
            $("#stoplicht-oranje-uit-gespr").attr("style", "");
            $("#stoplicht-groen-gespr").attr("style", "display:none");
            $("#stoplicht-groen-uit-gespr").attr("style", "");
            //console.log("rood");
            break;
    }
}
function showInfoBallon(bullet, y)
{
    var waarde = parseInt(y);


    $("#groupInfoBallon").show();

    var teksten = "Week: " + $("#bullet" + bullet).attr("weeknr") + " \n"
            + "Gesprekstijd: " + $("#bullet" + bullet).attr("Gesprekstijd") + " \n"
            + "Nawerk: " + $("#bullet" + bullet).attr("ACW") + " \n"
            + "AHT: " + $("#bullet" + bullet).attr("AHT") + " \n"
            + "AHT in seconden: " + $("#bullet" + bullet).attr("AHT_in_sec") + " \n"
            + "ACW in seconden:" + $("#bullet" + bullet).attr("ACW_in_sec") + " \n"
            + "Gesprekstijd in seconden: " + $("#bullet" + bullet).attr("Gespr_in_sec")
            ;

    var textarr = teksten.split("\n");

    for (var i = 0; i < textarr.length; i++)
    {
        var a = i + 1;
        $("#inforegel" + a + " tspan").text(textarr[i]);
    }
    for (var i = textarr.length + 1; i < 11; i++)
    {
        $("#inforegel" + i + " tspan").text("");
    }
    $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5,#bullet6,#bullet7,#bullet8,#bullet9,#bullet10,#bullet11,#bullet12").css("fill", "#ffffff");
    $("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").css("fill", "#ffffff");
    $("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").css("fill", "#ffffff");
    $("#bullet" + bullet + ", #bullet" + bullet + "-acw" + ", #bullet" + bullet + "-gespr").css("fill", "#005566");

//Als laatste toegevevoegd
//$("#groupInfoBallon").hide(30000);   
}
function setInfoBallon(bullet, y)
{
    var waarde = parseInt(y);

    $("#groupInfoBallon").hide();
    $("#groupInfoBallon").toggle;
    $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5,#bullet6,#bullet7,#bullet8,#bullet9,#bullet10,#bullet11,#bullet12").css("fill", "#ffffff");
    $("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").css("fill", "#ffffff");
    $("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").css("fill", "#ffffff");

}
function hideInfoBallon() {

    $("#groupInfoBallon").hide();
    $("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5,#bullet6,#bullet7,#bullet8,#bullet9,#bullet10,#bullet11,#bullet12").css("fill", "#ffffff");
    //console.log("HideBallon");
}
//MRT Grafiek

function zetSchakelaaruit()
{

    $("#schakelaar-aan").toggle();
    $("#schakelaar-uit").toggle();

    $("#mrtRadar").toggle();
    //ß$("#mrtRadar-vulling").toggle(); 
    //$("#mrtTekst, #mrtTekst-schaduw").toggle();
    $("#mrtMeter").css("fill", "#005566");
    getRadar();

    correctRadar();
}
function zetSchakelaarAan()
{
    console.log("zetSchakelaarAan");
    $("#schakelaar-aan").toggle();
    $("#schakelaar-uit").toggle();

    $("#mrtRadar").toggle();
    //$("#mrtRadar-vulling").toggle();
    //$("#mrtTekst, #mrtTekst-schaduw").toggle();

    $("#mrtMeter").css("fill", "url(#linearGradient5682)");
    correctRadar();

}
function zetLegendaGesprUit()
{
    $("#Legenda-Gespr, #Legenda-Aan-gespr, #Legenda-Uit-gespr").toggle();
}
function zetLegendaGesprAan()
{
    $("#Legenda-Gespr, #Legenda-Aan-gespr, #Legenda-Uit-gespr").toggle();
}
function zetLegendaAHTUit()
{
    $("#Legenda-AHT, #Legenda-Aan-aht, #Legenda-Uit-aht").toggle();
}
function zetLegendaAHTAan()
{
    $("#Legenda-AHT, #Legenda-Aan-aht, #Legenda-Uit-aht").toggle();
}
function zetLegendaACWUit()
{
    $("#Legenda-ACW, #Legenda-Aan-acw, #Legenda-Uit-acw").toggle();
}
function zetLegendaACWAan()
{
    $("#Legenda-ACW, #Legenda-Aan-acw, #Legenda-Uit-acw").toggle();
}
//M 195,430 180,410 160,355 163,330 175,260 207,204 261,163 340,130 410,115 492,107  560,158 609,197 607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z
/*
 * m 43.400124,370.32853 c 69.416196,36.09591 235.857256,39.23468 235.857256,39.23468
 M 43.400124,234.57653 c 0,0 83.787776,88.21239 143.565306,104.36426 59.77753,16.15187 178.27335,30.60305 178.27335,30.60305
 M 97.828713,46.250044 c 0,0 15.776427,53.359166 48.118077,94.947926 32.34162,41.58878 104.12425,98.87142 133.31059,118.48875 29.18635,19.61735 89.13668,53.35918 110.43482,61.20611 21.29815,7.84694 78.09319,32.17244 78.09319,32.17244
 M 293.45615,48.604128 c 0,0 43.20527,94.942812 104.91308,164.785672 61.70778,69.84285 136.46587,142.02955 136.46587,142.02955
 M 476.26354,46.451859 c 0,0 8.92448,82.674461 16.17562,105.423821 7.25114,22.74934 35.14015,95.99116 42.39128,109.86271 7.25114,13.87156 42.39128,95.4363 42.39128,95.4363
 m 39.74988,3.5479 -15.85516,-227.7116
 M 615,355 600,120 // December
 
 ==================-_ * December * _-======================================
 
 Xfactor = -15/130
 
 -0.11
 
 Yfactor = - 250/130
 
 - 1.92307
 
 50*0.11 =  5.5
 50*1.92307= 96.1535
 
 0%==== x 622.5 ===== y 385 ===================
 
 622.5 - 5.5  = 617
 
 385 - 96.1535 = 288.8495
 =================-_* November *_-============================================
 M 554.56418,47.465334 c 0,0 2.81799,105.371976 6.32553,131.043836 2.86061,20.93693 22.66491,104.49105 26.09288,115.34997 3.8189,12.09735 21.3487,61.99084 21.3487,61.99084
 **/

function calcRadarMRT(Maand, percentage)
{
    var answer;

    switch (Maand)
    {
        case "Januari":
            //console.log("Januari");  
            answer = calcPercentageJan(percentage);
            return answer;
            break;
        case "Februari":
            //console.log("Februari"); 
            answer = calcPercentageFeb(percentage);
            return answer;
            break;
        case "Maart":
            answer = calcPercentageMaa(percentage);
            return answer;
            break;
        case "April":
            answer = calcPercentageApr(percentage);
            return answer;
            break;

        case "Mei":
            answer = calcPercentageMei(percentage);
            return answer;
            break;
        case "Juni":
            answer = calcPercentageJun(percentage);
            return answer;
            break;
        case "Juli":
            answer = calcPercentageJul(percentage);
            return answer;
            break;
        case "Augustus":
            answer = calcPercentageAug(percentage);
            return answer;
            break;
        case "September":
            answer = calcPercentageSep(percentage);
            return answer;
            break;
        case "Oktober":
            answer = calcPercentageOkt(percentage);
            return answer;
            break;
        case "November":

            answer = calcPercentageNov(percentage);
            return answer;


            break;
        case "December":
            answer = calcPercentageDec(percentage);
            return answer;
            break;

    }

}

/*m 55.63688,427.25707 c 172.37108,14.12462 222.18474,-9.41636 222.18474,-9.41636 
 * M 46.939258,327.60098 C 266.75192,400.57751 369.54201,377.82141 369.54201,377.82141 
 * M 47.729952,161.24591 c 0,0 79.859988,83.17753 162.092068,120.84282 90.62999,41.51185 180.27801,70.62248 209.53365,72.19181 29.25564,1.56944 51.39505,4.70821 51.39505,4.70821 
 * M 175.82222,48.250022 c 0,0 47.44159,76.115288 89.34831,113.780588 41.90673,37.66529 120.97603,103.57956 177.11524,140.46016 56.13921,36.88061 87.76693,57.28265 87.76693,57.28265 
 * M 374.28618,49.819408 c 0,0 56.92988,108.287732 74.32513,135.752002 17.39525,27.46428 124.1388,175.77135 124.1388,175.77135 
 * M 554.56418,47.465334 c 0,0 2.81799,105.371976 6.32553,131.043836 2.86061,20.93693 22.66491,104.49105 26.09288,115.34997 3.8189,12.09735 21.3487,61.99084 21.3487,61.99084
 * */
function calcPercentageJan(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 71):
            x = 464.5;
            y = 425;
            factorx = 2.73;
            factory = 0.043;

            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 70 && percentage < 91):
            percentage = percentage - 70;
            x = 273.5;
            y = 422;
            factorx = 2.73;
            factory = 0.15;

            x = x - (factorx * percentage);
            y = y + (factory * percentage);
            break;
        case(percentage > 90 && percentage < 131):
            percentage = percentage - 90;
            x = 222;
            y = 431;
            factorx = 2.64;
            factory = 0.15;
            x = (x - (factorx * percentage));

            break;
        case(percentage > 130):
            x = 115;
            y = 431;
            break;


    }

    return x + "," + y;
}
function calcPercentageFeb(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 71):
            x = 466.5;
            y = 410;
            factorx = 2.8785;
            factory = 0.029;

            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 70 && percentage < 131):
            percentage = percentage - 70;
            x = 265;
            y = 408;
            factorx = 2.88;
            factory = 0.383;

            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
//          case(percentage>90 && percentage<131):
//              percentage=percentage-90;
//              x=222;
//              y=431;
//                factorx=2.64;
//                factory=0.15; 
//                x=(x-(factorx*percentage));
//                
//              break;
        case(percentage > 130):
            x = 92;
            y = 385;
            break;

    }

    return x + "," + y;
}

function calcPercentageMaa(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 31):

            x = 469.5;
            y = 390;
            factorx = 3.15;
            factory = 0.5;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 30 && percentage < 51):
            percentage = percentage - 30;
            x = 375;
            y = 375;
            factorx = 3;
            factory = 0.25;
            x = x - (factorx * percentage);
            y = y + (factory * percentage);

            break;
        case(percentage > 50 && percentage < 101):
            percentage = percentage - 50;
            x = 315;
            y = 380;
            factorx = 2.9;
            factory = 0.38;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 100 && percentage < 131):
            percentage = percentage - 100;
            x = 170;
            y = 361;
            factorx = 2.9667;
            factory = 0.8;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;

        case(percentage > 130):
            x = 81;
            y = 337;

            break;

    }

    return x + "," + y;
}
function calcPercentageApr(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 31):

            x = 469.5;
            y = 390;
            factorx = 3.15;
            factory = 0.6666;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 30 && percentage < 91):
            percentage = percentage - 30;
            x = 375;
            y = 370;
            factorx = 2.9666;
            factory = 0.5;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 90 && percentage < 101):
            percentage = percentage - 90;
            x = 197;
            y = 340;
            factorx = 3;
            factory = 1;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 100 && percentage < 131):
            percentage = percentage - 100;
            x = 197;
            y = 340;
            factorx = 3.8666;
            factory = 2.4333;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;

        case(percentage > 130):
            x = 81;
            y = 267;

            break;

    }

    return x + "," + y;
}
function calcPercentageMei(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 11):

            x = 485.5;
            y = 366;
            factorx = 3.05;
            factory = 1.1;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 10 && percentage < 31):
            percentage = percentage - 10;
            x = 455;
            y = 355;
            factorx = 3.4;
            factory = 0.35;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 30 && percentage < 91):
            percentage = percentage - 30;
            x = 387;
            y = 348;
            factorx = 2.95;
            factory = 1.1833;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 90 && percentage < 131):
            percentage = percentage - 90;
            x = 210;
            y = 277;
            factorx = 2.7;
            factory = 1.75;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;

        case(percentage > 130):
            x = 102;
            y = 207;

            break;

    }

    return x + "," + y;
}
function calcPercentageJun(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 51):

            x = 494.5;
            y = 360;
            factorx = 2.99;
            factory = 1.3;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 50 && percentage < 101):
            percentage = percentage - 50;
            x = 345;
            y = 295;
            factorx = 2.54;
            factory = 1.8;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 100 && percentage < 131):
            percentage = percentage - 100;
            x = 218;
            y = 205;
            factorx = 2.266667;
            factory = 2.166667;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 130):
            x = 150;
            y = 140;

            break;

    }

    return x + "," + y;
}
function calcPercentageJul(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 51):

            x = 519.5;
            y = 350;
            factorx = 2.69;
            factory = 1.86;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 50 && percentage < 111):
            percentage = percentage - 50;
            x = 385;
            y = 257;
            factorx = 2.3;
            factory = 1.95;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 50 && percentage < 111):
            percentage = percentage - 50;
            x = 385;
            y = 257;
            factorx = 2.3;
            factory = 1.95;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 110 && percentage < 121):
            percentage = percentage - 110;
            x = 247;
            y = 140;
            factorx = 1.9;
            factory = 2.2;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 120 && percentage < 131):
            percentage = percentage - 120;
            x = 228;
            y = 118;
            factorx = 1.6;
            factory = 2.3;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 130):
            x = 212;
            y = 95;

            break;

    }

    return x + "," + y;
}
function calcPercentageAug(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 51):

            x = 531.5;
            y = 345;
            factorx = 2.09;
            factory = 2.14;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 50 && percentage < 101):
            percentage = percentage - 50;
            x = 427;
            y = 238;
            factorx = 1.68;
            factory = 2.24;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 100 && percentage < 131):
            percentage = percentage - 100;
            x = 343;
            y = 125.77;
            factorx = 1.267;
            factory = 2.19;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 130):
            //608.2,138
            x = 305;
            y = 60;
            break;

    }

    return x + "," + y;
}
function calcPercentageSep(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 51):

            x = 569.5;
            y = 350;
            factorx = 1.65;
            factory = 2.36;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 50 && percentage < 91):
            percentage = percentage - 50;
            x = 487;
            y = 232;
            factorx = 1.5;
            factory = 2.3;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 90 && percentage < 131):
            percentage = percentage - 90;
            x = 427;
            y = 140;
            factorx = 1.225;
            factory = 2.235;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 130):
            //608.2,138
            x = 378;
            y = 47;
            break;

    }

    return x + "," + y;
}
function calcPercentageOkt(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 61):

            x = 584.5;
            y = 360;
            factorx = 1.08;
            factory = 2.42;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 60 && percentage < 91):
            percentage = percentage - 60;
            x = 520;
            y = 215;
            factorx = 0.667;
            factory = 2.167;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 90 && percentage < 131):
            percentage = percentage - 90;
            x = 500;
            y = 150;
            factorx = 0.375;
            factory = 2.125;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 130):
            //608.2,138
            x = 485;
            y = 65;
            break;

    }

    return x + "," + y;
}
function calcPercentageNov(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 11):

            x = 614.5;
            y = 379;
            factorx = 0.15;
            factory = 2.4;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;

        case(percentage > 10 && percentage < 91):
            percentage = percentage - 10;
            x = 613;
            y = 355;
            factorx = 0.6;
            factory = 2.25;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;
        case(percentage > 90 && percentage < 101):
            percentage = percentage - 90;
            x = 565;
            y = 175;
            factorx = 0.2;
            factory = 1.8;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;
        case(percentage > 100 && percentage < 131):
            percentage = percentage - 100;
            x = 563;
            y = 157;
            factorx = 0.13333;
            factory = 1.8;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);
            break;

        case(percentage > 130):
            x = 559.6;
            y = 103;

            break;

    }

    return x + "," + y;
}
function calcPercentageDec(percentage)
{
    var factorx;
    var factory;
    var x;
    var y;



    switch (true)

    {
        case(percentage > 0 && percentage < 131):

            x = 622.5;
            y = 385;
            factorx = 0.11;
            factory = 1.9;
            x = x - (factorx * percentage);
            y = y - (factory * percentage);

            break;



        case(percentage > 130):
            //608.2,138
            x = 608.2;
            y = 138;
            break;

    }

    return x + "," + y;
}
function getRadar()
{
    var MaandenArr = new Array();

    var Userfolder = replaceall($("#text3784 tspan").text(), " ", "_");
    //$("input[name= 'MRTjaar']").val("");
    // $("input[name= 'MRTmaanden']").val("");

    $.getJSON('js/maanden.js',
            function(json)
            {
                $.each(json.maanden, function(key, val)
                {
                    MaandenArr.push(capitalize(val.naam));


                });

                for (var i = 0; i < 12; i++)

                {
                    var abrev = "mrt-" + MaandenArr[i].slice(0, 3);
                    var d = $("#" + abrev).attr("d");
                    var maand = MaandenArr[i];

                    var year = $("#textJaar tspan").text();
                    var dsplit = d.split("a");
                    var mijnpath = $("#radarGrafiek").attr("d");



                    insertMaanden(year, maand, Userfolder, abrev, dsplit, i, mijnpath);

                    //console.log(year,maand,Userfolder,abrev,dsplit,i,mijnpath);


                    //console.log(beschikbaar.indexOf(maand),beschikbaar,maand);

//                var beschikbaar= new Array();
//            
//                beschikbaar=$.trim($("input[name='MRTmaanden']").val()).split(" ");
//                console.log(beschikbaar);
//              if (beschikbaar.indexOf(maand) != -1)
//                    {
//                      
//                
//                
//                    }







                }




            });



}
function insertMaanden(year, maand, Userfolder, abrev, dsplit, iteratie, mijnpath)
{ //alert("test");
    //$("input[name='MRTjaar']").val("");
    //M 195,430 180,410 160,355 163,330 175,260 207,204 261,163 340,130 410,115 492,107  560,158 609,197 607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z

    // console.log(year,maand,Userfolder,abrev,dsplit,iteratie,mijnpath);
    $.getJSON("users/cijfers/" + year + "/" + maand + "/" + Userfolder + "/" + "MRT.js",
            function(data)
            {

                $.each(data.MRTCijfers,
                        function(key, val)
                        {
                            $.each(val,
                                    function(key1, val1) {
                                        // console.log(key1, val1);
                                        if (key1 == "Percentage")
                                        {
                                            $("input[name='MRTjaar']").val($("input[name='MRTjaar']").val() + " " + val1);
                                            $("input[name='MRTmaanden']").val($("input[name='MRTmaanden']").val() + " " + maand);
                                            var inhoud = calcRadarMRT(maand, val1);
                                            $("#" + abrev).attr("d", "m " + inhoud + " a " + dsplit[1]);

                                            //set onclick
                                            $("#" + abrev).attr("onmouseover", "showMRTBalloon(" + inhoud + "," + "\"#" + abrev + "\")");
                                            $("#" + abrev).attr(
                                                    {
                                                        maand: maand.slice(0, 3),
                                                        perc: val.Percentage
                                                    });

                                            colorMRTBullet(val.Percentage, abrev);


                                            //Begin van path
                                            //M 195,430 180,410 160,355 163,330 175,260 207,204 261,163 340,130 410,115 492,107  560,158 609,197
                                            //Einde van path
                                            //607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z
                                            //"466.5,425 466.5,410 469.5,390 475.5,375 485.5,366 494.5,360 519.5,350 531.5,345 569.5,350 584.5,360 614,379 622.5,385"
                                            var mijnpathsplit = mijnpath.split("607,40");
                                            //var eindepath= "607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z";
                                            var eindepath = "607,40 630,400 630,430 330,430  70,430 z";
                                            var beginpath = mijnpathsplit[0].replace("M", "").trim();
                                            //console.log(beginpath);
                                            var splitpath = beginpath.split(" ");
                                            var nieuwepath = "";
                                            splitpath[iteratie] = inhoud;

                                            for (var a = 0; a < 12; a++)
                                            {
                                                nieuwepath = nieuwepath + " " + splitpath[a];
                                            }
                                            nieuwepath = "M" + nieuwepath + " " + eindepath;
                                            //console.log(nieuwepath);
                                            //$("#radarGrafiek").attr("d",nieuwepath);

                                        }
                                    });
                        }
                );
            }

    );
}
function correctRadar()
{//randomizeColor();
    //alert("v");
    //console.log("correctRadar");
    var arrPath = new Array();
    var MaandenArr = new Array();
    $.getJSON('js/maanden.js',
            function(json)
            {
                $.each(json.maanden, function(key, val)
                {
                    MaandenArr.push(capitalize(val.naam));


                });

                for (var i = 0; i < 12; i++)
                {
                    var abrev = "mrt-" + MaandenArr[i].slice(0, 3);
                    var d = $("#" + abrev).attr("d");
                    var dsplit = d.split("a");
                    var path = dsplit[0];
                    path = path.replace("m ", "").trim();
                    arrPath.push(path);
                    //console.log(path);
                }

                $("#radarGrafiek").attr("d", "M " + arrPath[0] + " "
                        + arrPath[1] + " "
                        + arrPath[2] + " "
                        + arrPath[3] + " "
                        + arrPath[4] + " "
                        + arrPath[5] + " "
                        + arrPath[6] + " "
                        + arrPath[7] + " "
                        + arrPath[8] + " "
                        + arrPath[9] + " "
                        + arrPath[10] + " "
                        + arrPath[11] + " "
                        + "607,40 630,400 630,430 330,430  70,430 z");
                //+ "607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z" ); 
            });







}

function randomizeColor()
{
    var randomfactor = Math.random();
    var colornumber = Math.round((randomfactor * 4));
    switch (colornumber)
    {
        case 1:
            $("#blue-glow").show();
            $("#orange-glow").hide();
            $("#purple-glow").hide();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,277.11467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#blue").css("fill"));
            break;
        case 2:
            $("#blue-glow").hide();
            $("#orange-glow").show();
            $("#purple-glow").hide();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,289.11467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#orange").css("fill"));
            break;
        case 3:
            $("#blue-glow").hide();
            $("#orange-glow").hide();
            $("#purple-glow").show();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,301.31467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#purple").css("fill"));
            break;
        case 4:
            $("#blue-glow").hide();
            $("#orange-glow").hide();
            $("#purple-glow").hide();
            $("#yellow-glow").show();
            $("#color-aan").attr("d", "m 684.91243,313.31467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#yellow").css("fill"));
            break;

    }
}
function assignColor(number)
{
    //var randomfactor=Math.random();
    var colornumber = parseInt(number);
    switch (colornumber)
    {
        case 1:
            $("#blue-glow").show();
            $("#orange-glow").hide();
            $("#purple-glow").hide();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,277.11467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#blue").css("fill"));
            break;
        case 2:
            $("#blue-glow").hide();
            $("#orange-glow").show();
            $("#purple-glow").hide();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,289.11467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#orange").css("fill"));
            break;
        case 3:
            $("#blue-glow").hide();
            $("#orange-glow").hide();
            $("#purple-glow").show();
            $("#yellow-glow").hide();
            $("#color-aan").attr("d", "m 684.91243,301.31467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#purple").css("fill"));
            break;
        case 4:
            $("#blue-glow").hide();
            $("#orange-glow").hide();
            $("#purple-glow").hide();
            $("#yellow-glow").show();
            $("#color-aan").attr("d", "m 684.91243,313.31467 c 0,0 -0.0512,-3.10812 0.20492,-5.80638 2.73241,-0.11949 6.48947,-0.0171 6.48947,-0.0171 -0.12749,2.47198 -0.0375,3.15844 0.056,5.89266 -3.11709,-0.13481 -4.42271,-0.24693 -6.75043,-0.0692 z");
            $("#radarGrafiek").css("fill", $("#yellow").css("fill"));
            break;

    }
}
function colorMRTBullet(percentage, bullet)
{
    var waarde = parseInt(percentage);
    switch (true)
    {
        case (waarde < 95):
            //#ff0000 rood

            $("#" + bullet).css("fill", "#ff0000");


            break;
        case (waarde > 94 && waarde < 100):
            // url(#linearGradient7376) oranje
            $("#" + bullet).css("fill", "#ff6600");
            break;

        case (waarde > 99 && waarde < 106):
            //#00ff00 groen
            $("#" + bullet).css("fill", "#00ff00");
            break;

        case (waarde > 105 && waarde < 115):
            //#09cc09 licht groen
            $("#" + bullet).css("fill", "#09cc09");
            break

        case (waarde > 114):
            //#ffffff   wit
            $("#" + bullet).css("fill", "#ffffff");
            break;


    }
}
function showMRTBalloon(x, y, item)
{
    var waardex = parseInt(x);
    var waardey = parseInt(y);
    var arrBullet = new Array();
    waardex = waardex - 57;
    waardey = waardey - 110;

    //alert(waardex + "," + waardey); 
    //m 415.5,315.75142 c -12.78409,0 -23.09375,10.27841 -23.09375,23.0625 l 0,20.875 c 0,10.78658 7.34372,19.79074 17.3125,22.34375 l 53.03125,44.6875 c 0,0 -4.40625,-29.66197 -4.40625,-35.15625 0,-3.34235 5.66537,-6.6758 10.125,-8.78125 l 44.8125,0 c 12.78409,0 23.09375,-10.30966 23.09375,-23.09375 l 0,-20.875 c 0,-12.78409 -10.30966,-23.0625 -23.09375,-23.0625 l -97.78125,0 z
    var restofpath = " c -12.78409,0 -23.09375,10.27841 -23.09375,23.0625 l 0,20.875 c 0,10.78658 7.34372,19.79074 17.3125,22.34375 l 53.03125,44.6875 c 0,0 -4.40625,-29.66197 -4.40625,-35.15625 0,-3.34235 5.66537,-6.6758 10.125,-8.78125 l 44.8125,0 c 12.78409,0 23.09375,-10.30966 23.09375,-23.09375 l 0,-20.875 c 0,-12.78409 -10.30966,-23.0625 -23.09375,-23.0625 l -97.78125,0 z";
    var mybulletitem = $(item).attr("d").split("a");
    $(item).attr("terug", mybulletitem[0] + " a " + mybulletitem[1]);
    $(item).attr("onmouseout", "restorebullet(\"" + item + "\")");

    //arrBullet[3]= grootte + "," + grootte;

    mybulletitem[1] = replaceall(mybulletitem[1], "9", "18");
    mybulletitem[1] = replaceall(mybulletitem[1], "4.5,4.5", "9,9");
    //mybulletitem = replaceall(mybulletitem, "-9", "-18");



    $(item).attr("d", mybulletitem[0] + " a " + mybulletitem[1]);




    $("#mrt-infoballoon").attr("d", "m " + waardex + "," + waardey + restofpath);
    //waardex=waardex;
    waardey = waardey + 20;
    $("#mrt-infoballoon-text-maand, #mrt-infoballoon-text-maand tspan").attr(
            {
                x: waardex,
                y: waardey
            });
    //$(item).attr("maand")
    if ($(item).attr("maand") == "Maa")
    {
        $("#mrt-infoballoon-text-maand tspan").text("Mrt");
    }
    else
    {
        $("#mrt-infoballoon-text-maand tspan").text($(item).attr("maand"));
    }
    //$("#mrt-infoballoon-text-maand tspan").text("test");
    waardey = waardey + 32.37595;
    $("#mrt-infoballoon-text-perc, #mrt-infoballoon-text-perc tspan").attr(
            {
                x: waardex,
                y: waardey
            });
    $("#mrt-infoballoon-text-perc tspan").text($(item).attr("perc"));
    $("#mrt-infoballoon-group").show(500);
}
function restorebullet(item)
{
    $("#mrt-infoballoon-group").hide();
    $(item).attr("d", $(item).attr("terug"));


}

function refresh(item)
{
    var item = parseInt(item);
    //stringofGrafieken="grafiekMRT,grafiekGespr,grafiekAHT,grafiekACW,grafiekVerzuim,grafiekAdherence,grafiekDoelen";
    //GrafiekMRTData,GrafiekGesprData1,GrafiekAHTData1,GrafiekACWData1,GrafiekVerzuimData,GrafiekADHData
    var Userfolder = $("#text3784 tspan").text();
    Userfolder = replaceall(Userfolder, " ", "_");
    switch (item)
    {
        case 1:
            GrafiekMRTData(Userfolder);
            break;
        case 2:
            GrafiekGesprData1(Userfolder)
            break;
        case 3:
            GrafiekAHTData1(Userfolder);
            break;
        case 4:
            GrafiekACWData1(Userfolder);
            break;
        case 5:
            GrafiekVerzuimData(Userfolder);
            
            break;
        case 6:

            var alpha = false;
            while (alpha === false)
            {
                alpha = checkadh();
                if ($("input[name='ADHcijfers']").val() !== "")
                {
                    retrieveADHhoogtes2();
                }



            }
            break;
        case 7:
            GrafiekQMCOR(Userfolder);
            break;
        case 8:
            GrafiekQMHistory(Userfolder);
            break;
            

    }
    //console.log(item);
}
function setItem()
{
    var grafieken = new Array();
    var stringofGrafieken = "grafiekMRT,grafiekGespr,grafiekAHT,grafiekACW,grafiekVerzuim,grafiekAdherence,grafiekDoelen,grafiekQMCor";
    grafieken = stringofGrafieken.split(",");


    switch (true)
    {
        case ($("#" + grafieken[0]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(1)");
            break;
        case ($("#" + grafieken[1]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(2)");
            break;
        case ($("#" + grafieken[2]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(3)");
            break;
        case ($("#" + grafieken[3]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(4)");
            break;
        case ($("#" + grafieken[4]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(5)");
            break;
        case ($("#" + grafieken[5]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(6)");
            break;
        case ($("#" + grafieken[7]).css("display") !== "none"):
            $("#refresh-button").attr("onclick", "refresh(7)");
            break;
    }
}
function Covertohide(cover)
{
    cover=parseInt(cover)|| 0;
    
    switch(cover)
    {
        case 0:
            //$("rect[id^='Cover']").show();
            $("#Cover1, #Cover2, #Cover3, #Cover4").show(3000);
            $("#Cor-starAgent").hide(500);
            break;
        case 1:
            $("#Cover2, #Cover3, #Cover4").show(1000);
            $("#Cover1").hide(1000);
            $("#Cor-starAgent").hide(500);
            break;
        case 2:
           $("#Cover1, #Cover3, #Cover4").show(1000);
            $("#Cover2").hide(1000);
            $("#Cor-starAgent").hide(500);
            break;
        case 3:
           $("#Cover1, #Cover2, #Cover4").show(1000);
            $("#Cover3").hide(1000);
            $("#Cor-starAgent").hide(500);
            break;
        case 4:
           $("#Cover1, #Cover2, #Cover3").show(1000);
            $("#Cover4").hide(1000);
            $("#Cor-starAgent").hide(500);
            break;
        case 5:
            $("#Cover1, #Cover2, #Cover3").show(1000);
            $("#Cover4").hide(1000);
            $("#Cor-starAgent").show(500);
            break;
            
    }
}
function showCorHis(status)
{
    status= parseInt(status) || 0;
    switch(status)
    {
        case 1:
            //knop naar aan
            $("#Cor-Schakelaar-knop").attr("transform", "translate(0,0)");
            $("#Cor-Schakelaar-knop").attr("onclick", "showCorHis()");
            $("#grafiekHistory").show();
            break;
        case 0:
            //knop naar aan
            $("#Cor-Schakelaar-knop").attr("transform", "translate(0,40)");
            $("#Cor-Schakelaar-knop").attr("onclick", "showCorHis(1)");
            $("#grafiekHistory").hide();
            break;            
    }
}

function returnInterval(start, end)
{
    var interval ;
    var strOfVal="A+,A,B,C,D";
    var ArrOfVal=strOfVal.split(",");
    
    var index1 = ArrOfVal.indexOf(start);
    var index2 = ArrOfVal.indexOf(end);
    
    interval = index2-index1;
    return interval;
}

function calcQmHistorypoint(metingen,interval)
{
   
  var factorx= 620/metingen;//670
  var factory= 57;
  //console.log("metingen =" +metingen);
  var x,y;
  
  x=factorx;
  y=interval*factory;
  
  
  return x + "," + y;
 
  
  
}

function calcQmHistorypointElse(prevX,prevY,metingen,interval)
{
   
  var factorx= 620/metingen; //670
  var factory= 57;
  
  var x,y;
  
  x=factorx;
  y=interval*factory;
  
  x=parseInt(prevX)+x +1.25;
  y=parseInt(prevY)+y ;
  
  
  return x + "," + y;
 
  
  
}

function GrafiekQMHistory(Userfolder)
{ var year = (new Date().getFullYear());
    
    $.getJSON("users/cijfers/" + year + "/QM_model/"  + Userfolder + ".json",
               function(data)
               {
                            $.each($("path[id^='QM-bullet-']"), 
                            function(index)
                            {
                                console.log($(this).attr("id"));
                            var number = $(this).attr("id");
                            number= parseInt(number.substr(number.length-1,number.length));
                            console.log("number = "+ number);
                            if (number>1)
                            {
                                $(this).remove();
                            }
                            });
                            
                   $.each(data.QM_model, function(key,val)
                   {
                       key = parseInt(key);
                       var waarde =val.meting;
                       
                       if (key==0)
                       {
                           switch(waarde)
                           {
                               case "A+":
                                   var path= "m 95,150";
                                   //bullet cy, cx en d atrr
                                   
                                   var strBulletd=$("#QM-bullet-1").attr("d");
                                   var arrBulletd=strBulletd.split("a");
                                   $("#QM-bullet-1").attr("d",path + "  a" + arrBulletd[1]);
                                   $("#QM-bullet-1").attr("sodipodi:cx",95);
                                   $("#QM-bullet-1").attr("sodipodi:cy",150);
                                   
                                   break;
                               case "A":
                                   path= "m 95,207";
                                    strBulletd=$("#QM-bullet-1").attr("d");
                                    arrBulletd=strBulletd.split("a");
                                   $("#QM-bullet-1").attr("d",path + "  a" + arrBulletd[1]);
                                   $("#QM-bullet-1").attr("sodipodi:cx",95);
                                   $("#QM-bullet-1").attr("sodipodi:cy",207);                                   
                                   break;
                               case "B":
                                   path= "m 95,264";
                                    strBulletd=$("#QM-bullet-1").attr("d");
                                    arrBulletd=strBulletd.split("a");
                                   $("#QM-bullet-1").attr("d",path + "  a" + arrBulletd[1]);
                                   $("#QM-bullet-1").attr("sodipodi:cx",95);
                                   $("#QM-bullet-1").attr("sodipodi:cy",264);                                   
                                   break;
                               case "C":
                                   path= "m 95,321";
                                    strBulletd=$("#QM-bullet-1").attr("d");
                                    arrBulletd=strBulletd.split("a");
                                   $("#QM-bullet-1").attr("d",path + "  a" + arrBulletd[1]);
                                   $("#QM-bullet-1").attr("sodipodi:cx",95);
                                   $("#QM-bullet-1").attr("sodipodi:cy",321);                                   
                                   break;
                               case "D":
                                   path= "m 95,378";
                                    strBulletd=$("#QM-bullet-1").attr("d");
                                    arrBulletd=strBulletd.split("a");
                                   $("#QM-bullet-1").attr("d",path + "  a" + arrBulletd[1]);
                                   $("#QM-bullet-1").attr("sodipodi:cx",95);
                                   $("#QM-bullet-1").attr("sodipodi:cy",378);                                   
                                   break;
                           }
                         $("#QMHistory-lijn").attr("d",path); 
                       }
                       else
                       {
                           var metingen = data.QM_model.length;
                           var interval = returnInterval(data.QM_model[key-1].meting,waarde);
                           var thispoint= calcQmHistorypoint(metingen,interval);
                           var arrthispoint=thispoint.split(",");
                           $("#QMHistory-lijn").attr("d",$("#QMHistory-lijn").attr("d")+" "+thispoint);
                           
                           $(".QM-bullets").clone().appendTo("#grafiekHistory").attr("id","QM-bullet-"+(key+1));
                           $("#QM-bullet-"+(key+1)).removeAttr("class");
                           
                           var strBulletd=$("#QM-bullet-"+key).attr("d");
                            var arrBulletd=strBulletd.split("a");
                            var arrXY=arrBulletd[0].split(",");
                            
                            var prevX=arrXY[0].replace("m ","");
                            var prevY=arrXY[1];
                            var thispoint1=calcQmHistorypointElse(prevX,prevY,metingen,interval);
                            
                            arrthispoint = thispoint1.split(",");
                           $("#QM-bullet-"+(key+1)).attr("d","m "+thispoint1 + "  a" + arrBulletd[1]);
                           $("#QM-bullet-"+(key+1)).attr("sodipodi:cx",arrthispoint[0]);
                           $("#QM-bullet-"+(key+1)).attr("sodipodi:cy",arrthispoint[1]);                           
                                                      
                           
                       }
                       
                        
                       
                   });
               });
}
function showQMCorBalloon(status)
{
	var waarde = parseInt(status);
	
						switch(waarde)
                           {
                               case 0:
									//alles uitschakelen
									$("path[id^='QmCorBalloon-']").hide();			
                                  $("#grQmCorBalloon").hide();
                                   break;							   
                               case 1:
									$("path[id^='QmCorBalloon-']").hide();
                                   $("#QmCorBalloon-A").show();
								   $("#QmCorBalloon-A-schaduw").show();
								   $("#grQmCorBalloon").show();
                                   break;
                               case 2:
									$("path[id^='QmCorBalloon-']").hide();
                                   $("#QmCorBalloon-A").show();
								   $("#QmCorBalloon-A-schaduw").show();
								   $("#grQmCorBalloon").show();									                                  
                                   break;
                               case 3:
									$("path[id^='QmCorBalloon-']").hide();
                                   $("#QmCorBalloon-B").show();
								   $("#QmCorBalloon-B-schaduw").show();
								   $("#grQmCorBalloon").show();									                                 
                                   break;
                               case 4:
									$("path[id^='QmCorBalloon-']").hide();
                                   $("#QmCorBalloon-C").show();
								   $("#QmCorBalloon-C-schaduw").show();
								   $("#grQmCorBalloon").show();									                                   
                                   break;
                               case 5: 
									$("path[id^='QmCorBalloon-']").hide();
									$("#QmCorBalloon-D").show();
								   $("#QmCorBalloon-D-schaduw").show();
								   $("#grQmCorBalloon").show();
																                                    
                                   break;
                           }	
}