/* - - - - - - - - - - - - - - - - - - - - - - -
 JavaScript
 donderdag 18 juli 2013 10:29:11
 - - - - - - - - - - - - - - - - - - - - - - - */


//--------------------------------------------------------------------------------------------------------------------------//

function changeName(number, AgentID) {
Covertohide();
    
    //Als grafiek niet zichtbaar laat de auto niet zien
    $("#refresh-button").hide();
    var GrafiekAHT = $("#grafiekAHT").css("display");
    var GrafiekACW = $("#grafiekACW").css("display");
    var GrafiekGespr = $("#grafiekGespr").css("display");
    if(GrafiekAHT=="none")
    {
        $("#car").hide();
    }
    else
    {
        $("#car").show();
    }
    
    if(GrafiekACW=="none")
    {
        $("#car-purple").hide();
    }
    else
    {
        $("#car-purple").show();
    }
    
    if(GrafiekGespr=="none")
    {
        $("#car-blauw").hide();
    }
    else
    {
        $("#car-blauw").show();
    }
    //Force gemiddelde KTO button
    if($("#gemiddelde_aan_zetten").css("display")=="none")
    {
    zetgemiddeldeuit(); 
    }
  //Geselecteerde naam
  $("input[name='selected']").val(AgentID);
  $("input[name='selected']").attr("number", number);  
// MRT meter resetten
        $("#mrtTekst tspan, #mrtTekst-schaduw tspan").text("-");
    //Haal maanden op voor AHT
    var original = $("#text" + number + " tspan").text();
    var names = original.split(" ");
    var voornaam = names[0];
    var defaultpath="M 40,450 L 600,450";
    //M 40,450 L 600,450
//var defaultpath="M 40,561.17103 C 40,506.64887 64.912176,406.34515 80,400 c 12.578374,-5.28981 26.02655,-72.67136 40,-73.65177 13.27231,-0.93122 26.29423,-87.69929 40,-85.97843 12.02422,1.50973 28.22294,-101.6026 40,-98.92142 11.92443,2.71473 28.88894,-56.69801 40,-53.62095 11.47606,3.17814 24.05275,398.99212 40,392.91217 11.50955,-4.38806 26.4561,-149.78803 40,-154.39137 13.33569,-4.53258 26.53882,124.0444 41.60913,123.019 13.11346,-0.89226 24.13097,-99.60476 38.39087,-95.23101 7.00066,2.14722 15.17706,43.67712 23.21807,76.7297 4.89118,20.10525 9.73227,37.07384 14.22817,40.13408";
    // naam_compleet berekend naam van Map user\cijfers\2013\maand\naam_compleet
//Overlay laten zijn 
$(".assemblyOverlay img").attr("src","images/css/overlay2.png");

$(".assemblyOverlay img").show();
checkCookie2();
//InfoBallon verbergen
hideInfoBallon();




// Wijzig kleur van Naam
for (var addup = 3266; addup < 3284; addup++)
{
   if (addup===number)
   {
       $("#text" + number + " tspan").css("fill","#ff0000");
       $("#text" + number ).attr("selected","true");
   }   
   else
   {
       $("#text" + addup + " tspan").css("fill","#333333");
       $("#text" + number ).removeAttr("selected");
   }
}
//Reset MRT spider

resetSpider();
//// Reset to default path
////$("#asfalt, #asfalt-acw, #asfalt-gespr").attr("d", defaultpath);
////$("#animatieStraat, #animatieStraat-acw, #animatieStraat-gespr").attr("d", defaultpath);
//$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5,#bullet6,#bullet7,#bullet8,#bullet9,#bullet10,#bullet11,#bullet12").hide();
//$("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").hide();
//$("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").hide();
//========================
    var naam_compleet = replaceall(original, " ", "_");

    GrafiekAHTData2(naam_compleet);
    GrafiekACWData1(naam_compleet);
    GrafiekGesprData1(naam_compleet);
    GrafiekMRTData(naam_compleet);
    GrafiekVerzuimData(original);
    GrafiekADHData2(naam_compleet,number);
    GrafiekQM(naam_compleet);
    GrafiekQMHistory(naam_compleet);
    //GrafiekQMCOR(naam_compleet);
    //Reset text QMCor
    $("#grafiekQMCor text tspan").text("-");
    //Show All Covers
    $("rect[id^='Cover']").show(3000);
    //correctRadar();
    //Reset all adh en qm data from txtQM
    $("#txtQM").removeAttr("QM-data");
    $("#txtQM").removeAttr("ADH");
if (naam_compleet=="Inge_Dix"||naam_compleet=="Marian_vd_Berg_Onos")
				{
					$("#asfalt, #asfalt-acw, #asfalt-gespr").attr("d", defaultpath);
					$("#animatieStraat, #animatieStraat-acw, #animatieStraat-gespr").attr("d", defaultpath);
					$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5,#bullet6,#bullet7,#bullet8,#bullet9,#bullet10,#bullet11,#bullet12").hide();
					$("#bullet1-acw, #bullet2-acw, #bullet3-acw, #bullet4-acw, #bullet5-acw, #bullet6-acw, #bullet7-acw, #bullet8-acw, #bullet9-acw, #bullet10-acw, #bullet11-acw, #bullet12-acw").hide();
					$("#bullet1-gespr, #bullet2-gespr, #bullet3-gespr, #bullet4-gespr, #bullet5-gespr, #bullet6-gespr, #bullet7-gespr, #bullet8-gespr, #bullet9-gespr, #bullet10-gespr, #bullet11-gespr, #bullet12-gespr").hide();
                                        
					$("#groupInfoBallon").show();
					$("#inforegel1 tspan").text(voornaam + " belt niet mee");
					$("#groupInfoBallon").hide(10000);
					for (var b=2; b<11;b++)
					{
						$("#inforegel"+b+" tspan").text("");
					}
				}
	
    var pictures;
    $("#isMailer").hide();
    for (var iterate = 1; iterate < 8; iterate++) {
        eraseMeter(iterate);
        //console.log("meter Erased: " + iterate);
    }
    //Wijzig userpic
    $.getJSON("users/allusers.json", function (json) {

        for (var i = 0; i < json.employees.length; i++) {

            if (AgentID == json.employees[i].AgentID) {
                $("#photo,#photo1").attr("xlink:href", "afbeeldingen/users/" + json.employees[i].pic);
                if (json.employees[i].isMailer == "Waar") {
                    $("#isMailer").show();
                }
            }

        }


    });

    $("#text3012 tspan").text($("#text" + number + " tspan").text());
    $("#text3784 tspan").text($("#text" + number + " tspan").text());
    $("#textAgentId tspan").text($("#text"+ number ).attr("agentid"));
    $("#textAgentId-schaduw tspan").text($("#text"+ number ).attr("agentid"));

    var naamMaand = $("#textMaand tspan").text();

    var	naamJaar = $("#textJaar tspan").text();
        naamMaand = capitalize(naamMaand);
    var MaandenJaar = capitalize(naamMaand)+ " " + naamJaar;    
    var beschikbaar = [];
    var available = 0;
    $.getJSON("js/system.js", function (json) { //alert(json.system);

        $.each(json.system, function (a, field) {
            $.each(field.availablemonths, function (b, field2) {

                beschikbaar.push(field2.month + " " + field2.year );

            });

        });


        if (beschikbaar.indexOf(MaandenJaar) != -1) {
            available = 1;
        } else {
            alert("Deze informatie is nog niet beschikbaar");
        }
        
// Clear previous data
 $("input[name='KTOAverage']").val("");        
//first check current month
        var thisMonth= new Date()
        thisMonth=thisMonth.getMonth(); //is an integer
        
        var Monthstr;
        
//second check if the data of previous months are available
        for (var r=0; r<thisMonth+1;r++)
        {
            //getJson and mark de data down in the input hidden field KTOAverage
            //!important 8 fields in JSON you need only 0,1,2,4,5,6,7
            Monthstr = getMonthStr(r);
            $.getJSON("users/cijfers/"+naamJaar+"/" + Monthstr + "/" + naam_compleet + "/KTO.json", function(json)
            {
                $.each(json, function(level1,field)
                {
                    $.each(field, function(level2, field2)
                    {
                        $.each(field2, function(level3, field3)
                        {   if($("input[name='KTOAverage']").val()=="")
                            {
                                $("input[name='KTOAverage']").val(field3);
                                
                            }
                            else
                            { 
                                if (level3=="Wachttijd")
                                {
                                    
                                 $("input[name='KTOAverage']").val($("input[name='KTOAverage']").val()+field3);   
                                }
                                else
                                {
                                $("input[name='KTOAverage']").val($("input[name='KTOAverage']").val()+"//"+field3);
                                }
                            }
                        });
                    });
                });
                $("input[name='KTOAverage']").val($("input[name='KTOAverage']").val()+"*");  
            });
          
        }
        
//third check if the file is really there




        if (available == 1) {
            //alert(naamMaand);
            //Voeg toe in display.svg jaar en wijzig mogelijkheden


            $.getJSON("users/cijfers/"+naamJaar+"/" + naamMaand + "/" + naam_compleet + "/KTO.json", function (json) {
                //console.log("Im close but not there yet");
                $.each(json, function (q, field) {
                    $.each(field, function (b, field2) {


                        $.each(field2, function (c, field3) {

                            //console.log("sleutel is " + c + " waarde is " + field3);

                            if (c == "Wachttijd") {
                                changeMeter(field3);
                            }
                            switch (c) {
                                case "Wachttijd":
                                    changeMeter(field3, 1);
                                    $('#wachttijd').text(field3);
                                    break;
                                case "Duidelijk antwoord":
                                    changeMeter(field3, 2);
                                    $('#dAntw').html(field3);
                                    dAntw
                                    break;
                                case "Behulpzaamheid":
                                    changeMeter(field3, 3);
                                    $('#Behulp').text(field3);
                                    break;
                                case "Vraag volledig beantwoord":
                                    //changeMeter(field3,3);
                                    var stop = calcStop(parseInt(field3));

                                    // gethappiness(stop);


                                    break;
                                case "Hoe vaak contact opgenomen?":

                                    var invert = invertMeter(field3);
                                    //console.log(invert + " dit is het omgekeerde van " + field3);
                                    changeMeter(invert, 4);
                                    $('#vAntw').text(field3);
                                    break;
                                case "Totaal Oordeel Gesprek":
                                    changeMeter(field3, 5);
                                    $('#totOord').text(field3);

                                    break;
                                case "Responsiviteit":
                                    changeMeter(field3, 6);
                                    $('#respons').text(field3);

                                    break;
                                case "Empathie":
                                    changeMeter(field3, 7);
                                    $('#empathie').text(field3);

                                    break;                                
                                case "Aantal metingen":
                                    //                                    changeMeter(field3,7);
                                    changeStapelmeter(field3);
                                    break;
                            }
                        });
                    });


                });

            }).fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request2 Failed: " + err );
alert("KTO Data is niet beschikbaar");
//Reset meters KTO
for (var alpha=1; alpha<8;alpha++){
eraseMeter(alpha);
}
});
        }
    }



    ).fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request1 Failed: " + err );
});
    //alert(available);

    //If AHT is visible then run graph

    if ($("#grafiekAHT").css("display") !== "none") {
       // GrafiekAHTData(naam_compleet);

        //$("#leeg").click();
    }
    
    getRadar();
    if($("#schakelaar-uit").css("display")==="none"){
zetSchakelaaruit();
    }
    correctRadar();
    $("#refresh-button").show(1000);

//  var strKTOAvg=$("input[name='KTOAverage']").val();
//  
//   strKTOAvg=strKTOAvg.slice(0,(strKTOAvg.length-1));
//  var stukkenKTO = strKTOAvg.split("*");
//  var factorAvg= stukkenKTO.length;
//  for (var b=0;b<factorAvg-1;b++)
//  {
//      var sTemp=stukkenKTO[b].split("//");
//      //0,1,2,4,5,6,7
//      var one=parseInt(sTemp[0]);
//      var Wachttijd=parseInt(Wachttijd)+one;
//      var two=parseInt(sTemp[1]);
//      var Duidelijk= parseInt(Duidelijk)+two;
//      var three=parseInt(sTemp[2]);
//      var Behulpzaamheid=parseInt(Behulpzaamheid)+three;
//      var four=parseInt(sTemp[3]);
//      var Contact=parseInt(Contact)+four;
//      var five=parseInt(sTemp[4]);
//      var Oordeel=parseInt(Oordeel)+five;
//      var six=parseInt(sTemp[5]);
//      var Responsiviteit=parseInt(Responsiviteit)+six;
//      var seven=parseInt(sTemp[6]);
//      var Empathie=parseInt(Empathie)+seven;
//
//
//      
//  }Math.
//  Wachttijd=Math.round(Wachttijd/factorAvg);
//  Duidelijk=Math.round(Duidelijk/factorAvg);
//  Behulpzaamheid=Math.round(Behulpzaamheid/factorAvg);
//  Contact=Math.round(Contact/factorAvg);
//  Oordeel=Math.round(Oordeel/factorAvg);
//  Responsiviteit=Math.round(Responsiviteit/factorAvg);
//  Empathie=Math.round(Empathie/factorAvg);
//  
//  $("#Gemiddelde-cijfer-1 tspan").text(Wachttijd);
//  $("#Gemiddelde-cijfer-2 tspan").text(Duidelijk);
//  $("#Gemiddelde-cijfer-3 tspan").text(Behulpzaamheid);
//  $("#Gemiddelde-cijfer-4 tspan").text(Contact);
//  $("#Gemiddelde-cijfer-5 tspan").text(Oordeel);
//  $("#Gemiddelde-cijfer-6 tspan").text(Responsiviteit);
//  $("#Gemiddelde-cijfer-7 tspan").text(Empathie);
//  
//  
//  if(factorAvg>1)
//  {
//      $("#gemiddelde1").show();
//      $("#gemiddelde2").show();
//      $("#gemiddelde3").show();
//      $("#gemiddelde4").show();
//      $("#gemiddelde5").show();
//      $("#gemiddelde6").show();
//      $("#gemiddelde7").show();
//      
//      for (var z=1;z<factorAvg+1;z++)
//      {
//          //Show monthsbars
//            $(".maand-"+ z).show()
//      }
$("#layer-schakelaar_gemiddelde").show();
$("#gemiddelde_aandacht").show(1000);
$("#gemiddelde_aandacht").hide(2000);
$("#gemiddelde_aandacht").show(500);
$("#gemiddelde_aandacht").hide(2000);
      
  }
  
  
  

function zetgemiddeldeaan()
{
    $("#gemiddelde_aan_zetten").toggle();
    $("#gemiddelde_uit_zetten").toggle();
    var strKTOAvg=$("input[name='KTOAverage']").val();
  
   strKTOAvg=strKTOAvg.slice(0,(strKTOAvg.length-1));
  var stukkenKTO = strKTOAvg.split("*");
  var factorAvg= stukkenKTO.length;
  
  var Wachttijd=0;
  var Duidelijk= 0;
  var Behulpzaamheid=0;
  var Contact=0;
  var Oordeel=0;
  var Responsiviteit=0;
  var Empathie=0;
  for (var b=0;b<factorAvg;b++)
  { console.log("test="+b +" factorAvg: "+factorAvg);
    
      var sTemp=stukkenKTO[b].split("//");
      //0,1,2,4,5,6,7
      var one=parseInt(sTemp[0]);
      
       Wachttijd=(parseFloat(Wachttijd)+one);
       
      var two=parseFloat(sTemp[1]);
      
       Duidelijk= (Duidelijk+two);
      var three=parseFloat(sTemp[2]);
      
       Behulpzaamheid=(parseInt(Behulpzaamheid)+three);
      var four=parseInt(sTemp[4]);
      
       Contact=(parseInt(Contact)+four);
      var five=parseInt(sTemp[5]);
      
       Oordeel=(parseInt(Oordeel)+five);
      var six=parseInt(sTemp[6]);
      
       Responsiviteit=(parseInt(Responsiviteit)+six);
       
      var seven=parseInt(sTemp[7]);
      
       Empathie=(parseInt(Empathie)+seven);


      
  }
  Wachttijd=Math.round(Wachttijd/factorAvg*10)/10;
  Wachttijd= Wachttijd.toFixed(1);
  
  Duidelijk=Math.round(Duidelijk/factorAvg*10)/10;
  Duidelijk=Duidelijk.toFixed(1);
  
  Behulpzaamheid=Math.round(Behulpzaamheid/factorAvg*10)/10;
  Behulpzaamheid=Behulpzaamheid.toFixed(1);
  
  Contact=Math.round(Contact/factorAvg*10)/10;
  Contact=Contact.toFixed(1);
  
  Oordeel=Math.round(Oordeel/factorAvg*10)/10;
  Oordeel=Oordeel.toFixed(1);
  
  Responsiviteit=Math.round(Responsiviteit/factorAvg*10)/10;
  Responsiviteit=Responsiviteit.toFixed(1);
  
  Empathie=Math.round(Empathie/factorAvg*10)/10;
  Empathie=Empathie.toFixed(1);
  
  $("#Gemiddelde-cijfer-1 tspan, #Gemiddelde_zoom-1 text:first tspan").text(Wachttijd);
  $("#Gemiddelde-cijfer-2 tspan, #Gemiddelde_zoom-2 text:first tspan").text(Duidelijk);
  $("#Gemiddelde-cijfer-3 tspan, #Gemiddelde_zoom-3 text:first tspan").text(Behulpzaamheid);
  $("#Gemiddelde-cijfer-4 tspan, #Gemiddelde_zoom-4 text:first tspan").text(Contact);
  $("#Gemiddelde-cijfer-5 tspan, #Gemiddelde_zoom-5 text:first tspan").text(Oordeel);
  $("#Gemiddelde-cijfer-6 tspan, #Gemiddelde_zoom-6 text:first tspan").text(Responsiviteit);
  $("#Gemiddelde-cijfer-7 tspan, #Gemiddelde_zoom-7 text:first tspan").text(Empathie);
  
  $("#Gemiddelde_zoom-1 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-2 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-3 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-4 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-5 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-6 text:first tspan").attr("x","30");
  $("#Gemiddelde_zoom-7 text:first tspan").attr("x","30");
  
  var beschrijving1="Gemiddelde per";
  var beschrijving2= factorAvg +" maanden ";
  console.log("test="+b +" factorAvg1: "+factorAvg);
  
//  $(
//    "#Gemiddelde-beschrijving-1 tspan:first, #Gemiddelde-beschrijving-1-schaduw tspan:first, "+
//    "#Gemiddelde-beschrijving-2 tspan:first, #Gemiddelde-beschrijving-2-schaduw tspan:first, " +
//    "#Gemiddelde-beschrijving-3 tspan:first, #Gemiddelde-beschrijving-3-schaduw tspan:first, "+
//    "#Gemiddelde-beschrijving-4 tspan:first, #Gemiddelde-beschrijving-4-schaduw tspan:first, " +
//    "#Gemiddelde-beschrijving-5 tspan:first, #Gemiddelde-beschrijving-5-schaduw tspan:first, "+
//    "#Gemiddelde-beschrijving-6 tspan:first, #Gemiddelde-beschrijving-6-schaduw tspan:first, "+
//    "#Gemiddelde-beschrijving-7 tspan:first, #Gemiddelde-beschrijving-7-schaduw tspan:first "
//    ).text(beschrijving1);
    
    
    
//  $(
//    "#Gemiddelde-beschrijving-1 tspan:last, #Gemiddelde-beschrijving-1-schaduw tspan:last, "+
//    "#Gemiddelde-beschrijving-2 tspan:last, #Gemiddelde-beschrijving-2-schaduw tspan:last, " +
//    "#Gemiddelde-beschrijving-3 tspan:last, #Gemiddelde-beschrijving-3-schaduw tspan:last, "+
//    "#Gemiddelde-beschrijving-4 tspan:last, #Gemiddelde-beschrijving-4-schaduw tspan:last, " +
//    "#Gemiddelde-beschrijving-5 tspan:last, #Gemiddelde-beschrijving-5-schaduw tspan:last, "+
//    "#Gemiddelde-beschrijving-6 tspan:last, #Gemiddelde-beschrijving-6-schaduw tspan:last, "+
//    "#Gemiddelde-beschrijving-7 tspan:last, #Gemiddelde-beschrijving-7-schaduw tspan:last"
//    ).text(beschrijving2);    
 
 
 
    $("#Gemiddelde-beschrijving-1-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-2-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-3-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-4-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-5-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-6-schaduw tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-7-schaduw tspan:first").text(beschrijving1);
    
    $("#Gemiddelde-beschrijving-1 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-2 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-3 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-4 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-5 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-6 tspan:first").text(beschrijving1);
    $("#Gemiddelde-beschrijving-7 tspan:first").text(beschrijving1);
    
    $("#Gemiddelde-beschrijving-1 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-2 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-3 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-4 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-5 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-6 tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-7 tspan:last").text(beschrijving2);
    
    
    $("#Gemiddelde-beschrijving-1-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-2-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-3-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-4-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-5-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-6-schaduw tspan:last").text(beschrijving2);
    $("#Gemiddelde-beschrijving-7-schaduw tspan:last").text(beschrijving2);
    
    
    
    
  if(factorAvg>1)
  {
      $("#gemiddelde1").show();
      $("#gemiddelde2").show();
      $("#gemiddelde3").show();
      $("#gemiddelde4").show();
      $("#gemiddelde5").show();
      $("#gemiddelde6").show();
      $("#gemiddelde7").show();
      
      for (var z=1;z<factorAvg+1;z++)
      {
          //Show monthsbars
            $(".maand-"+ z).show()
      }
      
  }
  
}
function zetgemiddeldeuit()
{
    $("#gemiddelde_aan_zetten").toggle();
    $("#gemiddelde_uit_zetten").toggle();
          
      $("#gemiddelde1, #gemiddelde2, #gemiddelde3, #gemiddelde4, #gemiddelde5, #gemiddelde6, #gemiddelde7").hide();

}

//--------------------------------------------------------------------------------------------------------------------------//

function changeColor() {
    var myTextField = document.getElementById('shadow');
    //alert(myTextField.getAttribute("style"));
    if (myTextField.getAttribute("style") == "fill:#ffffff;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;filter:url(#filter4000)") {
        myTextField.setAttribute("style", "fill:#005566;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;filter:url(#filter4000)");
    } else {
        myTextField.setAttribute("style", "fill:#ffffff;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;filter:url(#filter4000)");
    }
    //alert("just did it");
}

//--------------------------------------------------------------------------------------------------------------------------//

function changeMeter(value, welkemeter) {


    $.getJSON('globals/meters.json', function (data) {
        var waarde = parseInt(value);
        var items = [];
        $.each(data, function (key, val) {
            items.push(val);

        });
        for (var i = 1; i < items.length + 1; i++) {
            if (i = value) {
                //$('#wijzerop1').attr('d',items[i-1]);


                //$('#wijzerop1 animate').attr('values', items[0]+ ";"+ items[1]  + ";"+ items[i-1]);

                switch (waarde) {
                    case 1:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0]);

                        break;

                    case 2:
                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[i - 1]);
                        break;

                    case 3:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[i - 1]);

                        break;
                    case 4:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[2] + ";" + items[i - 1]);
                        // console.log("Ik ben in Case 4 en meter is",welkemeter,items[i-1],i-1);
                        break;

                    case 5:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[2] + ";" + items[3] + ";" + items[i - 1]);
                        break;
                    case 6:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[2] + ";" + items[3] + ";" + items[i - 1]);
                        break;
                    case 7:

                        $('#wijzerop' + welkemeter + ' animate').attr('values', items[0] + ";" + items[1] + ";" + items[2] + ";" + items[3] + ";" + items[i - 1]);
                        break;                        
                }


                //alert(items[0]);
                //alert(items[i-1]);
                //alert(items[i-2]);

                break;
            }
            //alert(items[i]);
            //Do something
        }
    });
}

//--------------------------------------------------------------------------------------------------------------------------//
function scollwindow()
  {
  window.scrollTo(0,125);
  }
function glowmeter(status, meter) {
    var message = "";
    var tempstr ="";
    meter=parseInt(meter);
  window.scrollTo(0,400);
  // old tekst static
  // restore this in case of malfunction
  
 /*   switch (meter) {
        case 1:

            message = "De wachttijd, totdat de burger een medewerker aan de lijn kreeg";
            break;
        case 2:
            message = "De duidelijkheid van het antwoord dat de burger gekregen heeft";
            break;
        case 3:
            message = "De behulpzaamheid van de medewerker";
            break;
        case 4:
            message = "Hoe vaak heeft de burger al contact opgenomen met ons over deze vraag";
            break;
        case 5:
            message = "Totaal oordeel over het gesprek met de medewerker";
            break;
		case 6:
            message = "Deze tekst is nog niet bekend";
            break;
        case 7:
            message = "Deze tekst is nog niet bekend";
            break;			
    } */
    //reset text
    
    
    $("#tooltip tspan").text("");
switch (meter) {
        case 1:
$.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                               if(parseInt(val.meter)==meter)
                                               {
                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
                                                   tempstr=val.Tooltip;
                                                   if (tempstr.length>50)
                                                   {
                                                       var getal=tempstr.length/50;
                                                       var factor=Math.ceil(getal);
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                           var start = 0+((tool-1)*50);
                                                          var limit = tool*50;
                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   }
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }
                                               }                                                   
                                                   //$('#tooltip').text(val.Tooltip);
                                               });
                                            });
                       
            message = "De wachttijd, totdat de burger een medewerker aan de lijn kreeg";
            break;
        case 2:
            $.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                               if(parseInt(val.meter)==meter)
                                               {
                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
                                                   tempstr=val.Tooltip;
                                                   if (tempstr.length>50)
                                                   {
                                                        getal=tempstr.length/50;
                                                        factor=Math.ceil(getal);
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                            start = 0+((tool-1)*50);
                                                           limit = tool*50;
                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   } 
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }                                                   
                                                   //$('#tooltip').text(val.Tooltip);
                                               }
                                            }
                                );
                        }
);
            message = "De duidelijkheid van het antwoord dat de burger gekregen heeft";
            break;
        case 3:
            
            $.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                                
                                               if(parseInt(val.meter)==meter)
                                               {
                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
//                                                   $('#tooltip').text(val.Tooltip);
                                                   tempstr=val.Tooltip;
                                                   
                                                   if (tempstr.length>50)
                                                   {
                                                        getal=tempstr.length/50;
                                                        
                                                        factor= Math.ceil(getal);
                                                        
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                            start = 0+((tool-1)*50);
                                                           limit = tool*50;
                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   } 
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }
                                               }
                                            }
                                );
                        });            
            message = "De behulpzaamheid van de medewerker";
            break;
        case 4:
            $.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                               if(parseInt(val.meter)==meter)
                                               {
                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
                                                   //$('#tooltip').text(val.Tooltip);
                                                   tempstr=val.Tooltip;
                                                   //alert(tempstr.length);
                                                   if (tempstr.length>50)
                                                   {
                                                        getal=tempstr.length/50;
                                                        factor=Math.ceil(getal);
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                           
                                                            start = 0+((tool-1)*50);
                                                           limit = tool*50;
                                                           verschil=tempstr.length-limit;
                                                        if (tool==3)
                                                        {
                                                            $("#tspan"+tool).text(tempstr.substr(start,verschil));
                                                        } else  
                                                       {
                                                           $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       }
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   } 
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }                                                   
                                               }
                                            }
                                );
                        });            
            message = "Hoe vaak heeft de burger al contact opgenomen met ons over deze vraag";
            break;
        case 5:
            $.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                               if(parseInt(val.meter)==meter)
                                               {
                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
                                                   //$('#tooltip').text(val.Tooltip);
                                                   tempstr=val.Tooltip;
                                                   if (tempstr.length>50)
                                                   {
                                                        getal=tempstr.length/50;
                                                        factor=Math.ceil(getal);
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                            start = 0+((tool-1)*50);
                                                           limit = tool*50;
                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   }
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }                                                   
                                               }
                                            }
                                );
                        } );           
            message = "Totaal oordeel over het gesprek met de medewerker";
            break;
		case 6:
            $.getJSON("js/system.js",
            function(json)
                        {
                            
                            //Test nieuw approach
                            //alert(json.meters[5].Tooltip);
                            tempstr = json.meters[5].Tooltip;
                            getal=tempstr.length;
                            var found=0;
                            if (getal<51)
                            {
                               $("#tooltip tspan:first").text(tempstr); 
                            }
                            if (getal>50 && getal<101){
                                //search for the next space after 50
                                var splitat50=tempstr.substr(0,50);
                                var splitaft50=tempstr.substr(50,getal);
                                //alert(splitat50);
                                //alert(splitaft50);
                                for (var t=1;t<10;t++)
                                {
                                    var char=50+t
                                    var letter=tempstr.charAt(char);
                                    if (letter==" ")
                                    {
                                        splitat50=tempstr.substr(0,char);
                                        splitaft50=tempstr.substr(char+1,getal);
                                        found=1;
                                        break;
                                    }
                                }
                                if (found==0){
                                    
                                    for (var t=1;t<10;t++)
                                    {
                                        var char=50-t
                                        var letter=tempstr.charAt(char);
                                        if (letter==" ")
                                        {
                                            splitat50=tempstr.substr(0,char);
                                            splitaft50=tempstr.substr(char+1,getal);
                                            var found=1;
                                            break;
                                        }    
                                    }                                    
                                    
                                }
                                $("#tooltip tspan:first").text(splitat50).next().text(splitaft50);
                            }
                            
                            
                            
//                            $.each
//                                (json.meters, 
//                                function(key,val)
//                                            {
//                                               if(parseInt(val.meter)==meter)
//                                               {
//                                                   //alert(val.meter+" "+val.Tooltip + " " + meter);
//                                                   //$('#tooltip').text(val.Tooltip);
//                                                   tempstr=val.Tooltip;
//                                                   if (tempstr.length>50)
//                                                   {
//                                                        getal=tempstr.length/50;
//                                                        
//                                                        factor=Math.ceil(getal);
//                                                        
//                                                       for (var tool=1;tool<factor+1;tool++)
//                                                       {
//                                                            start = 0+((tool-1)*50);
//                                                           limit = tool*50;
//                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
//                                                       alert(tool);
//                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
//                                                       }
//                                                   }                                                    
//                                               }
//                                                   else
//                                                   {
//                                                       $("#tspan1").text(val.Tooltip);
//                                                   }                                               
//                                            }
//                                );
                        } );                   
            message = "Deze tekst is nog niet bekend";
            break;
        case 7:
            $.getJSON("js/system.js",
            function(json)
                        {
                            $.each
                                (json.meters, 
                                function(key,val)
                                            {
                                               if(parseInt(val.meter)==meter)
                                               {
                                                  //alert(val.meter+" "+val.Tooltip + " " + meter);
                                                   //$('#tooltip').text(val.Tooltip);
                                                   tempstr=val.Tooltip;
                                                   if (tempstr.length>50)
                                                   {
                                                        getal=tempstr.length/50;
                                                        factor=Math.ceil(getal);
                                                       for (var tool=1;tool<factor+1;tool++)
                                                       {
                                                            start = 0+((tool-1)*50);
                                                           limit = tool*50;
                                                       $("#tspan"+tool).text(tempstr.substr(start,limit));
                                                       //$("#tooltip tspan1").text(tempstr.substr(1,50));
                                                       }
                                                   }
                                                   else
                                                   {
                                                       $("#tspan1").text(val.Tooltip);
                                                   }                                                   
                                               }
                                            }
                                );
                        } );           
            message = "Deze tekst is nog niet bekend";
            break;			
    }
    if (status == 1) {
        $('#glow' + meter).show();


        //$('#tooltip').text(message);
        $('#tooltip').show()
        $("#over_text").show();

    } else {
        $('#glow' + meter).hide();


        //$('#tooltip').text('');
        $("#tspan1, #tspan2, #tspan3").text('');
        $('#tooltip').hide();
        $("#over_text").hide();
    }


}

function glowrefresh(status) {
    var message = "";

  window.scrollTo(0,125);
  


    if (status === 1) {
        $('#glow-refresh').show();




    } else {
        $('#glow-refresh').hide();



    }


}
//--------------------------------------------------------------------------------------------------------------------------//

function gotoprevgroup() {
    var nummer = parseInt($("#groupnumber tspan").text())
    $("#groupnumber tspan").text(nummer - 1);
    var inhoud = $("#groupnumber tspan").text();
    eraseLabel();
    runEmp();
}

function gotonextgroup() {
    var nummer = parseInt($("#groupnumber tspan").text())
    $("#groupnumber tspan").text(nummer + 1);
    var inhoud = $("#groupnumber tspan").text();
    eraseLabel();
    runEmp();
}

function calcStop(getal) {
    var x = 0;
    var y = getal;

    if (y == 1) {
        x = 80;
    }
    if (y == 2) {
        x = 50;
    }

    if (y == 3) {
        x = 30;
    }

    return x;
}

//--------------------------------------------------------------------------------------------------------------------------//

function gethappiness(howhappy)

{
    //alert ('I start feeling happy');

    $.getJSON('js/status.json', function (data) {
        var status = [];
        var i = 0;

        $.each(data, function (key, val) {

            status[key] = val;

            i++;


        });

        var myItem = howhappy + "%";
        var myprev = "100%";
        if (howhappy < 50) {
            myprev = "50%";
        }
        var myprevResult = status[myprev];
        var myResult = status[myItem];

        //alert ("Eerste: "+ myprevResult + "\n"+ "Resultaat: " + myResult);


        $('#smiletest animate').attr('d', '5s');
        $('#smiletest animate').attr('values', myprevResult + ";" + myResult);

        //alert (status[myItem]);
        //alert (items.sl);
    });
}
//--------------------------------------------------------------------------------------------------------------------------//
function increaseyear()
{
    var increm = (parseInt($("#textJaar tspan").text())+1);
    $("#textJaar tspan").text(increm);
	
	// New in version 1.2.2
	//Fire's up changeName
	var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	checkIfAvailable();
	
	if (AgentID!=="")
	{
	
	changeName(number, AgentID);
	
	}
}
function decreaseyear()
{
    var increm = (parseInt($("#textJaar tspan").text())-1);
    $("#textJaar tspan").text(increm);   
	// New in version 1.2.2
	//Fire's up changeName
	var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	checkIfAvailable();
	
	if (AgentID!=="")
	{
	
	changeName(number, AgentID);
	
	}
	
}
function increasemonth() {
    var activemaand = $("#tspanMaand").text();
    var activejaar = $("#textJaar tspan").text();
 var maandnummer=returnMyMonthdigit(activemaand);
 var increment=monthIncrement(maandnummer);
 
 $("#textMaand tspan, #textMaand-schaduw tspan").text(increment);
 checkIfAvailable();
 if (maandnummer==11)
 {
     $("#textJaar tspan").text((parseInt(activejaar)+1));
     checkIfAvailable();
 }
 
//    if (activemaand != "Maand") {
//        $.getJSON('js/maanden.js', function (json) {
//            $.each(json, function (key, val) {
//                $.each(val, function (key2, val2) {
//                    if (val2.naam == activemaand) {
//                        var nummer = parseInt(val2.cijfer);
//                        if (nummer < 12) 
//                        {
//                            //$("#textMaand tspan").text(json.maanden[nummer].naam);
//                            //$("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);
//                            $("#textMaand tspan").text(json.maanden[nummer].naam);
//                            $("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);                            
//                            checkIfAvailable();
//                        }
//                        else if(nummer==12)
//                        {
//                           // $("#textMaand tspan").text(json.maanden[nummer-12].naam);
//                           // $("#textMaand-schaduw tspan").text(json.maanden[nummer-12].naam);
//                            
//                            var increm = (parseInt($("#textJaar tspan").text())+1);
//                            $("#textJaar tspan").text(increm);
//                            checkIfAvailable();
//                        }
//                    }
//                });
//            });
//        });
//    }

		var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	
	
	if (AgentID!=="")
	{
	//option 1 test if passing month as value helps
        //option 2 test if refreshing the data via refresh button helps
        if (activemaand!==$("#textMaand tspan").text())
        {
            changeName(number, AgentID);
        }
	}
}
function increasemonth_old() {
    var activemaand = $("#tspanMaand").text();
    
    
    if (activemaand != "Maand") {
        $.getJSON('js/maanden.js', function (json) {
            $.each(json, function (key, val) {
                $.each(val, function (key2, val2) {
                    if (val2.naam == activemaand) {
                        var nummer = parseInt(val2.cijfer);
                        if (nummer < 12) 
                        {
                            //$("#textMaand tspan").text(json.maanden[nummer].naam);
                            //$("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);
                            $("#textMaand tspan").text(json.maanden[nummer].naam);
                            $("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);                            
                            checkIfAvailable();
                        }
                        else if(nummer==12)
                        {
                           // $("#textMaand tspan").text(json.maanden[nummer-12].naam);
                           // $("#textMaand-schaduw tspan").text(json.maanden[nummer-12].naam);
                            
                            var increm = (parseInt($("#textJaar tspan").text())+1);
                            $("#textJaar tspan").text(increm);
                            checkIfAvailable();
                        }
                    }
                });
            });
        });
    }

		var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	
	
	if (AgentID!=="")
	{
	//option 1 test if passing month as value helps
        //option 2 test if refreshing the data via refresh button helps
        if (activemaand===!$("#textMaand tspan").text())
        {
            changeName(number, AgentID);
        }else
        {
            alert(activemaand+" "+$("#textMaand tspan").text() );
        }
	}
}
//--------------------------------------------------------------------------------------------------------------------------//

function decreasemonth() {
        var activemaand = $("#tspanMaand").text();
    var activejaar = $("#textJaar tspan").text();
 var maandnummer=returnMyMonthdigit(activemaand);
 var decrement=monthDecrement(maandnummer);
 
 $("#textMaand tspan, #textMaand-schaduw tspan").text(decrement);
 checkIfAvailable();
 if (maandnummer==0)
 {
     $("#textJaar tspan").text((parseInt(activejaar)-1));
     checkIfAvailable();
 }
    
    
    
//    if (activemaand != "Maand") {
//        $.getJSON('js/maanden.js', function (json) {
//            $.each(json, function (key, val) {
//                $.each(val, function (key2, val2) {
//                    if (val2.naam == activemaand) {
//                        var nummer = parseInt(val2.cijfer) - 2;
//                        if (nummer > -1) {
//                            $("#textMaand tspan").text(json.maanden[nummer].naam);
//                            $("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);
//                            checkIfAvailable();
//                        }
//                         else if(nummer==-1)
//                        { 
//                            $("#textMaand tspan").text(json.maanden[nummer+12].naam);
//                            $("#textMaand-schaduw tspan").text(json.maanden[nummer+12].naam);
//                            var increm = (parseInt($("#textJaar tspan").text())-1);
//                            $("#textJaar tspan").text(increm);
//                            checkIfAvailable();
//                        }
//                    }
//                });
//            });
//        });
//    }

		var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	
	
	if (AgentID!=="")
	{
	
	changeName(number, AgentID);
	
	}
}
function decreasemonth_old() {
    var activemaand = $("#tspanMaand").text();
    if (activemaand != "Maand") {
        $.getJSON('js/maanden.js', function (json) {
            $.each(json, function (key, val) {
                $.each(val, function (key2, val2) {
                    if (val2.naam == activemaand) {
                        var nummer = parseInt(val2.cijfer) - 2;
                        if (nummer > -1) {
                            $("#textMaand tspan").text(json.maanden[nummer].naam);
                            $("#textMaand-schaduw tspan").text(json.maanden[nummer].naam);
                            checkIfAvailable();
                        }
                         else if(nummer==-1)
                        { 
                            $("#textMaand tspan").text(json.maanden[nummer+12].naam);
                            $("#textMaand-schaduw tspan").text(json.maanden[nummer+12].naam);
                            var increm = (parseInt($("#textJaar tspan").text())-1);
                            $("#textJaar tspan").text(increm);
                            checkIfAvailable();
                        }
                    }
                });
            });
        });
    }

		var number=parseInt($("input[name='selected']").attr("number"));
	var AgentID=$("input[name='selected']").val();
	
	
	if (AgentID!=="")
	{
	
	changeName(number, AgentID);
	
	}
}




//--------------------------------------------------------------------------------------------------------------------------//


function invertMeter(getal) {
    var waarde = parseInt(getal);
    switch (waarde) {
        case 1:
            return 5;
            break;
        case 2:
            return 3;
            break;
        case 3:
            return 1;
            break;
    }
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function changeStapelmeter(getal) {
    //getal in procent
    var waarde = parseInt(getal);
    var startx1 = 320.34631;
    var startx2 = 320.15823;
    //y is altijd negatief niet vergeten een minus(-) aan string toe te voegen
    var starty1 = 49.099036;
    var starty2 = 51.718536;

    var incrementx = waarde * 0.1388958;
    var incrementy = waarde * 0.63892144;

    var nieuwex1 = startx1 + incrementx;
    var nieuwex2 = startx2 + incrementx;

    var nieuwey1 = starty1 + incrementy;
    var nieuwey2 = starty2 + incrementy;



    $("#linearGradient5884").attr({
        x1: nieuwex1,
        x2: nieuwex2,
        y1: "-" + nieuwey1,
        y2: "-" + nieuwey2
    });
    $("#tspanAantalmeting,#tspanAantalmeting-schaduw").text(waarde);


}

function checkIfAvailable() {
    var availablemaand = 0;
    var beschikbaar = [];
    var maand = capitalize($("#tspanMaand").text());
    var jaar = $("#textJaar tspan").text();


    $.getJSON("js/system.js",

    function (json) { //alert(json.system);

        $.each(json.system, function (a, field) {
            $.each(field.availablemonths, function (b, field2) {
                   var myobject = new Object();
                   myobject.month= field2.month;
                   myobject.year = field2.year;
                   
                beschikbaar.push(myobject);

//                if (beschikbaar.indexOf(maand) != -1) {
//
//                    $("#grdidRun").show();
//                    $("#grnotRun").hide();
//
//
//                } else {
//
//                    $("#grdidRun").hide();
//                    $("#grnotRun").show();
//                }
                    if (myobject.month == maand && myobject.year == jaar)
                    {
                        $("#grdidRun").show();
                        $("#grnotRun").hide();
                        return false;
                    }
                    else
                    {
                        $("#grdidRun").hide();
                        $("#grnotRun").show();                        
                    }

            });

        });
        //console.log(beschikbaar.indexOf(maand)); 




    });
    // console.log(beschikbaar.indexOf(maand));

    // console.log("aval3 "+availablemaand); 

}
function hideOverlay()
{
	$('.assemblyOverlay img').hide();
	var src=$(".assemblyOverlay img").attr("src");
	var dashboard="123456789";
	if(src=="images/css/overlay.png")
	{
		
		setCookie("Dashboard",dashboard,365);
	}
	else if(src=="images/css/overlay1.png")
	{
		
		setCookie("Dashboard1",dashboard,365);
	}
	else if(src=="images/css/overlay2.png")
	{
		
		setCookie("Dashboard2",dashboard,365);
	}
	else
	{
		setCookie("Dashboard3",dashboard,365);
	}
}
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
{
c_start = c_value.indexOf(c_name + "=");
}
if (c_start == -1)
{
c_value = null;
}
else
{
c_start = c_value.indexOf("=", c_start) + 1;
var c_end = c_value.indexOf(";", c_start);
if (c_end == -1)
{
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
var dashboard=getCookie("Dashboard");
if (dashboard!=null && dashboard!="")
  {
  $('.assemblyOverlay img').hide();
  $(".assemblyOverlay img").attr("src","images/css/overlay1.png");
  }
else
  {
  dashboard="123456789";
  if (dashboard!=null && dashboard!="")
    {
    //setCookie("Dashboard",dashboard,365);
    }
  }
}

function checkCookie1()
{
var dashboard=getCookie("Dashboard1");
if (dashboard!=null && dashboard!="")
  {
  $('.assemblyOverlay img').hide();
  $(".assemblyOverlay img").attr("src","images/css/overlay2.png");
  }
else
  {
  dashboard="123456789";
  if (dashboard!=null && dashboard!="")
    {
   // setCookie("Dashboard1",dashboard,365);
    }
  }
}

function checkCookie2()
{
var dashboard=getCookie("Dashboard2");
if (dashboard!=null && dashboard!="")
  {
  $('.assemblyOverlay img').hide();
  $(".assemblyOverlay img").attr("src","images/css/overlay3.png");
  }
else
  {
  dashboard="123456789";
  if (dashboard!=null && dashboard!="")
    {
    //setCookie("Dashboard2",dashboard,365);
    }
  }
}
function checkCookie3()
{
var dashboard=getCookie("Dashboard3");
if (dashboard!=null && dashboard!="")
  {
  $('.assemblyOverlay img').hide();
  $(".assemblyOverlay img").attr("src","images/css/overlay4.png");
  }
else
  {
  dashboard="123456789";
  if (dashboard!=null && dashboard!="")
    {
    //setCookie("Dashboard2",dashboard,365);
    }
  }
}
function test()
{
//var serverURL='https://mijnwerknet.denhaag.nl/User%20Photos/Profielafbeeldingen/bzjjong_LThumb.jpg';
var jqxhr = $.ajax( 'https://mijnwerknet.denhaag.nl/User%20Photos/Profielafbeeldingen/bznagir_LThumb.jpg' )
.done(function() {
alert( "success" );
})
.fail(function() {
alert( "error" );
})
.always(function() {
alert( "complete" );
});
}

function verhuisMeters()
{
    ///Oude volgorde is
    // Wachttijd Duidelijk antwoord Behulpzaamheid Aantal x Contact Totaal Oordeel Responsiviteit Empathie
    //Nieuwe volgorde is
    // Totaal Oordeel, Empathie, Responsiviteit, Behulpzaamheid, Duidelijk Antwoord
    // 4,6,5,2,1
    var strMeterNames="Totaal Oordeel, Empathie, Responsiviteit, Behulpzaamheid, Duidelijk Antwoord";
    
    var arrHtmlMeters=new Array();
    
    $(".unitStation").each(
            function(index, value)
                    {
                        arrHtmlMeters.push($(this).html());
                        $(this).hide();
                        
                    });
                    $(".unitStation").each(
            function(index, value){
                
                switch(index){
                    case 0:
                        $(this).html(arrHtmlMeters[4]);
                        $(this).show();
                        break;
                    case 1:
                        $(this).html(arrHtmlMeters[6]);
                        $(this).show()
                        break;
                    case 2:
                        $(this).html(arrHtmlMeters[5]);
                        $(this).show()
                        break;
                    case 3:
                        $(this).html(arrHtmlMeters[2])
                        $(this).show()
                        break; 
                    case 4:
                        $(this).html(arrHtmlMeters[1])
                        $(this).show()
                        break;                    
                }
            });
    
}
