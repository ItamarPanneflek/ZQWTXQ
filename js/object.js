$(document).ready(function () {
    /* Deze gedeelte beinvloed de smiley
   var piet=0;
console.log ("running");
$.getJSON('js/test.json', function(data){


var thesmile=[];
var q=0;
$.each(data, function(key, val) {
thesmile[key]=val;
q++;
});
piet= thesmile["KTO"];
//alert (piet);
kto =piet;
//alert(kto);
console.log ("piet is:"+piet);
console.log ("kto is:"+kto) ;

console.log ("10x"+kto);

var stop = kto;
console.log ($('#smiletest animate').attr('dur'));
var limit = $('#smiletest animate').attr('dur');
limit=limit.replace('s','');
limit=parseInt(limit);

var myinterval = ((limit*1000) /(100-stop))/10
myinterval=Math.round(myinterval)*10;
*/

//==========================================================================\\
//======================place overlay on dashboard==========================\\
//==========================================================================\\


$(".assemblyOverlay img").attr("src", "images/css/overlay.png");
checkCookie();
//Move meters to new positions
//
   //Reset QMCor all text
    $("#grafiekQMCor text tspan").text("-");
    


verhuisMeters();
 // Clear all form data from previous run
 $("form input").val("");
//==========================================================================\\

    //replaceall("This is a text with a couple of a","a","b");
    // populate dropdown shadow
    $("input[name='grafiekx']").val($("#grgrafiekkl").position().left);
    $("input[name='grafieky']").val($("#grgrafiekkl").position().top);
    //reset hidden fields 
    $("input[name='AHTMaanden']").val("");
    returnMaanden();

    var calcpos = 15;
    for (var addup = 3266; addup < 3284; addup++)

    {
        $("#text" + addup).attr("onmouseover", "takefocus(" + addup + "," + calcpos + ")");
        $("#text" + addup).attr("onmouseout", "loosefocus()");
        $("#text" + addup).attr("class", "svgdropdowntext");
        //resize all dropdown text to 15 px
        $("#text" + addup + " tspan").css("font-size","15px");
        //add animation to cars
        $("#car animateMotion").attr("begin",$("#car animateMotion").attr("begin")+";text"+addup+".click");
        $("#car-blauw animateMotion").attr("begin",$("#car-blauw animateMotion").attr("begin")+";text"+addup+".click");
        $("#car-purple animateMotion").attr("begin",$("#car-purple animateMotion").attr("begin")+";text"+addup+".click");
        
        calcpos = calcpos + 20;
    }
    // End populate dropdown shadow
    // populate display
$("#arrow-up-bg, #arrow-down-bg, #arrow-right, #arrow-left").css("cursor","pointer"); // make cursor pointer on arrows in display
    $.getJSON('js/system.js', function (json) {
        var activemonth = parseInt(json.system[0].startupmonth) - 1;
        $.getJSON('js/maanden.js', function (json) {
            var month = json.maanden[activemonth].naam;

            $("#textMaand tspan").text(month);
            $("#textMaand-schaduw tspan").text(month);
            
            checkIfAvailable();
        }).fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request Failed: " + err );
});//.fail(function () {
           // console.log('maanden.js failed');
        //});
//populate startup year
var activeyear = parseInt(json.system[0].startupyear);
$("#textJaar tspan").text(activeyear);

    }).fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request Failed: " + err );
});
    ////.fail(function () {
        //console.log('system.js failed');
    //});

//set every value of Adherence graph to -
for  (var i=1; i<13;i++)
{
 
         
    $("#text-adh-waarde-Week"+i+" tspan").text("-");        
           
    $("#text-adh-waarde-Week"+i+"-schaduw tspan").text("-");        
}
//Set font size gemiddelde
for (var i=1;i<8;i++)
{
    $("#Gemiddelde-cijfer-"+i+ ", #Gemiddelde-cijfer-"+i+" tspan").css("font-size","12px");
}

    // Add extra functionality
    $("#scroller").mousedown(function (e) {
        var x = e.clientX;
        var y = e.clientY;
        //alert(x);
        $('#Status').html(x + ', ' + y);


    });
    $("#scroller").mouseup(function (e) {
        var oldy = parseInt($("#Status").text());
        //console.log(oldy);
        var x = e.clientX;
        var y = e.clientY;
        var maand = parseInt($("#Status2").text());
        if (oldy < x || oldy > x) {
            if (oldy < x) {
                if (maand < 11) {
                    maand++;
                    $("#Status2").text(maand);
                    console.log(maand);
                }
            }
        }
        //alert(x);
        $('#Status1').html(x + ', ' + y);


    });

//    $(".selector").slider({
//        orientation: "vertical"
//    });
//Margins ADH
$("#adh-95").attr("d","m 71.063224,180.1675 613.010036,0");
$("#adh-92").attr("d","m 71.063224,215.0674 613.010036,0");
$("#adh-89").attr("d","m 71.063224,249.973 613.010036,0");

$("#radarGrafiek").attr("d",
"M 466.5,425 466.5,410 469.5,390 475.5,375 485.5,366 494.5,360 519.5,350 531.5,345 569.5,350 584.5,360 614,379 622.5,385 607,40 700,40 C 670,180 650,50  650,465 C 400,500 560,510 330,507 C 290,490 70,505 44,425 z");
    $("#dropdown").hide();
    $("#isMailer").hide();
    $("#pijlrechts_schaduw").hide();
    $("#pijlrechts").attr({
        onmouseover: "showbutton(\"pijlrechts_schaduw\")",
        onmouseout: "hidebutton(\"pijlrechts_schaduw\")"
    });
    $("#pijllinks_schaduw").hide();
    $("#pijllinks").attr({
        onmouseover: "showbutton(\"pijllinks_schaduw\")",
        onmouseout: "hidebutton(\"pijllinks_schaduw\")"
    });
    calcTextPos(1);

    var active = 1;
    $("#photo,#photo1").click(

    function () {

        if (active == 1)

        {
            $('#dropdown').toggle();
            $("#dropdown").animate({
                width: "70%",
                opacity: 0.8,
                marginLeft: "0.6in",
                fontSize: "3em",
                height: "300",
                borderWidth: "10px"
            }, 1500);


            active = 0;
            // show tutorial
            $(".assemblyOverlay img").attr("src","images/css/overlay1.png").show();
            //$(".assemblyOverlay img").show();
            checkCookie1();
        } else {

            $('#dropdown').hide('slow');

            active = 1;

        }
    });

    $.getJSON("users/allusers.json",

    function (json) {
        var total = json.employees.length;
        var aantalgroepen = Math.ceil(total / 18);
        var splitsingsfactor = Math.floor(total / aantalgroepen);

        var punt1 = splitsingsfactor;
        var punt2 = splitsingsfactor + 1;
        var punt3 = splitsingsfactor + splitsingsfactor + 2;
        var limiet1 = punt2;
        var limiet2 = punt3 - 1;
        var txtnumber = 3265;
        var myY = 51;
        var extratext = "";

        var current = parseInt($("#groupnumber tspan").text()); //$("#text3012 tspan").text
        //alert(current);
        var group1 = new Array();
        var picCollection1 = new Array();

        var group2 = new Array();
        var picCollection2 = new Array();

        var group3 = new Array();
        var picCollection3 = new Array();
        var group4 = new Array();
        var picCollection4 = new Array();

        var group5 = new Array();
        var picCollection5 = new Array();

        var groups = 0;

        // defaulttext will fill the list with the name of the employees
        var defaulttext = "<text xml:space=\"preserve\" \
        style=\"font-size:40px;font-style:normal;\
        font-weight:normal;line-height:125%;letter-spacing:0px; \
        word-spacing:0px;fill:#333333;fill-opacity:1;stroke:none;\
        font-family:Sans\" x=\"749.23956\"  y=\"" + myY + ".6182\" \
        id=\"text" + i + "\" sodipodi:linespacing=\"125%\"> \
        <tspan sodipodi:role=\"line\"         \
        id=\"tspan" + i + "\" x=\"749.23956\" y=\"" + myY + ".6182\" \
        style=\"font-size:20px;fill:#333333\">" + extratext + "</tspan></text>";


        for (var i = 0; i < json.employees.length; i++) {
            //alert(json.employees[i].firstName);
            //console.log("JSON Data: " + json.employees[i].firstName);
            if (i < 17) {
                txtnumber++;
                myY = myY + 22;
                extratext = json.employees[i].firstName + " " + json.employees[i].lastName;

                $("#text" + txtnumber + " tspan").text(extratext);

                // Dit voegt de AgentID als attribute aan de Text element tbv het op halen van de foto onclick
                $("#text" + txtnumber).attr("agentid", json.employees[i].AgentID);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + json.employees[i].AgentID + "\")");
                //console.log("groep1 " + json.employees[i].firstName);
                group1.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection1.push(json.employees[i].AgentID);
                groups = 1;
            }

            if (i < 35 && i > 17) {
                //console.log("groep2 " + json.employees[i].firstName);
                group2.push(json.employees[i].firstName + " " + json.employees[i].lastName);

                picCollection2.push(json.employees[i].AgentID);
                groups = 2;
            }

            if (i < 53 && i > 34) {
                //console.log("groep3 " + json.employees[i].firstName);
                group3.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection3.push(json.employees[i].AgentID);
                groups = 3;
            }

            if (i < 71 && i > 52) {
                //console.log("groep4 " + json.employees[i].firstName);
                group4.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection4.push(json.employees[i].AgentID);
                groups = 4;
            }

            if (i < 89 && i > 70)

            {
                console.log("groep5 " + json.employees[i].firstName);
                group5.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection5.push(json.employees[i].AgentID);
                groups = 5;
            }

        }


        if (current = 1)

        {
            $("#pijllinks").hide();

            for (var i = 0; i < group1.length; i++)

            {
                group1[i];



            }
        }

        if (current = 2)

        {
            txtnumber++;
            myY = myY + 22;

            for (var i = 0; i < group2.length; i++)

            {
                extratext = group2[i];
                //$("#text" + txtnumber +" tspan").text(extratext);
            }

        }

        if (current = 3)

        {

            for (var i = 0; i < group3.length; i++) {
                group3[i];
            }

        }
    });

});
//////////////////////////////////////////////////////
// regurlar functions outside of $(document).ready()//
//////////////////////////////////////////////////////
function UCaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function runEmp() {



    $.getJSON("users/allusers.json", function (json) {

        var total = json.employees.length;
        var aantalgroepen = Math.ceil(total / 18);
        var splitsingsfactor = Math.floor(total / aantalgroepen);
        // console.log(aantalgroepen);
        //console.log(splitsingsfactor);
        var punt1 = splitsingsfactor;
        var punt2 = splitsingsfactor + 1;
        var punt3 = splitsingsfactor + splitsingsfactor + 2;
        var limiet1 = punt2;
        var limiet2 = punt3 - 1;
        var txtnumber = 3265;

        var myY = 51;

        var extratext = "";

        var shownextbutton = new Boolean;

        shownextbutton = true;


        var current = parseInt($("#groupnumber tspan").text()); //$("#text3012 tspan").text

        //alert(current);

        var group1 = new Array();
        var picCollection1 = new Array();

        var group2 = new Array();
        var picCollection2 = new Array();

        var group3 = new Array();
        var picCollection3 = new Array();
        var group4 = new Array();
        var picCollection4 = new Array();

        var group5 = new Array();
        var picCollection5 = new Array();;

        var groups = 0;

        // defaulttext will fill the list with the name of the employees

        var defaulttext = "<text xml:space=\"preserve\" \
                  style=\"font-size:40px;font-style:normal;\
                  font-weight:normal;line-height:125%;letter-spacing:0px; \
                  word-spacing:0px;fill:#333333;fill-opacity:1;stroke:none;\
                  font-family:Sans\" x=\"749.23956\"  y=\"" + myY + ".6182\" \
                  id=\"text" + i + "\" sodipodi:linespacing=\"125%\"> \
                  <tspan sodipodi:role=\"line\"         \
                  id=\"tspan" + i + "\" x=\"749.23956\" y=\"" + myY + ".6182\" \
                  style=\"font-size:20px;fill:#333333\">" + extratext + "</tspan></text>";


        //console.log(defaulttext);

        //alert(json.employees[0].firstName);

        //

        var aantaldeelnemers = json.employees.length;
        //console.log("aantaldeelnemers is: "+aantaldeelnemers);        
        var a = 0; // a is vervanging van i in iteratie    
        for (var i = 0; i < json.employees.length; i++)


        {



            if (i < 17)

            {

                txtnumber++;

                myY = myY + 22;

                //extratext=json.employees[i].firstName + " " + json.employees[i].lastName;


                $("#text" + txtnumber + " tspan").text(extratext);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + json.employees[i].AgentID + "\")");
                //console.log("groep1 " + json.employees[i].firstName);

                group1.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection1.push(json.employees[i].AgentID);
                groups = 1;
                a = i + 1;



            }


            if (i < 35 && i > 16)

            {

                //console.log("groep2 " + json.employees[i].firstName);

                group2.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection2.push(json.employees[i].AgentID);
                groups = 2;
                a = i + 1;



            }


            if (i < 53 && i > 34)

            {

                //console.log("groep3 " + json.employees[i].firstName);

                group3.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection3.push(json.employees[i].AgentID);
                groups = 3;
                a = i + 1;



            }


            if (i < 71 && i > 52)

            {

                //console.log("groep4 " + json.employees[i].firstName);

                group4.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection4.push(json.employees[i].AgentID);
                groups = 4;
                a = i + 1;



            }


            if (i < 89 && i > 71)

            {

                //console.log("groep5 " + json.employees[i].firstName);

                group5.push(json.employees[i].firstName + " " + json.employees[i].lastName);
                picCollection5.push(json.employees[i].AgentID);
                groups = 5;
                a = i + 1;



            }


        }


        //$("#pijlrechts").hide();



        //alert(group4.length);

        /*if (shownextbutton==false)

        {

            console.log("closing");

            $("#pijlrechts").hide();

            return;
        }
        else 
        {
            $("#pijlrechts").show();
        }*/

        txtnumber = 3265;

        myY = 51;

        //console.log(current);

        if (current == 1) {
            $("#pijllinks").hide();
            $("#pijlrechts").show();
            //alert("I begin here");

            txtnumber++;

            myY = myY + 22;

            for (var i = 0; i < group1.length; i++) {

                extratext = group1[i];

                $("#text" + txtnumber + " tspan").text(extratext);
                $("#text" + txtnumber).attr("agentid", picCollection1[i]);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + picCollection1[i] + "\")");
                // Lees AGENTID om te kijken of deze nu geselecteerd is
                if(picCollection1[i]==$("input[name='selected']").val())
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#ff0000");
                }
                else
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#333333");
                }
                    
                txtnumber++;




            }
            if (current == groups) {
                $("#pijlrechts").hide();
            }

            return;

        }


        if (current == 2) {
            $("#pijllinks").show();

            //alert("I passed here");

            txtnumber++;

            myY = myY + 22;

            for (var i = 0; i < group2.length; i++) {

                extratext = group2[i];

                $("#text" + txtnumber + " tspan").text(extratext);
                $("#text" + txtnumber).attr("agentid", picCollection2[i]);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + picCollection2[i] + "\")");
                
                if(picCollection2[i]==$("input[name='selected']").val())
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#ff0000");
                }
                else
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#333333");
                }
                
                txtnumber++;



                //alert (txtnumber);

            }
            if (current == groups) {
                $("#pijlrechts").hide();
            }
            return;

        }


        if (current == 3) {
            $("#pijllinks").show();

            txtnumber = 3265;

            myY = 51;

            //alert("I passed here");

            txtnumber++;

            myY = myY + 22;

            for (var i = 0; i < group3.length; i++) {

                extratext = group3[i];

                $("#text" + txtnumber + " tspan").text(extratext);
                $("#text" + txtnumber).attr("agentid", picCollection3[i]);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + picCollection3[i] + "\")");
                
                if(picCollection3[i]==$("input[name='selected']").val())
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#ff0000");
                }
                else
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#333333");
                }                
                
                txtnumber++;



                //alert (txtnumber);

            }
            if (current == groups) {
                $("#pijlrechts").hide();
            }
            return;

        }

        if (current == 4) {
            $("#pijllinks").show();

            txtnumber = 3265;

            myY = 51;

            //alert("I passed here");

            txtnumber++;

            myY = myY + 22;

            for (var i = 0; i < group4.length; i++) {

                extratext = group4[i];

                $("#text" + txtnumber + " tspan").text(extratext);
                $("#text" + txtnumber).attr("agentid", picCollection4[i]);
                $("#text" + txtnumber).attr("onclick", "changeName(" + txtnumber + ",\"" + picCollection4[i] + "\")");
                
                if(picCollection4[i]==$("input[name='selected']").val())
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#ff0000");
                }
                else
                {
                    $("#text" + txtnumber + ", #text"+txtnumber+" tspan").css("fill", "#333333");
                }                
                
                txtnumber++;



                //alert (txtnumber);

            }
            if (current == groups) {
                $("#pijlrechts").hide();
            }

            return;

        }


    });
    //Reset kleur van alle tekst velden

for (var addup = 3266; addup < 3284; addup++)
{
   if ($("#textAgentId tspan").text()===$("#text" + addup ).attr("agentid"))
   {
       $("#text" + addup + " tspan").css("fill","#ff0000");
   } 
   else
   {
       $("#text" + addup + " tspan").css("fill","#333333");
   }
}

}

function eraseLabel() {

    for (var i = 3266; i < 3284; i++)

    {

        $("#text" + i + " tspan").text("")

    }

}

function takefocus(item, mypos) {

    //alert(item);

    $("#focus").show();

    $("#focus").attr("y", mypos);

    $("#linearGradient3896").attr("y1", mypos);

    $("#linearGradient3896").attr("y2", mypos + 38);

    //alert($("#focus").attr("y"));

}

function loosefocus() {
    $("#focus").hide();
}

function hidebutton(button) {
    $("#" + button).hide();
}

function showbutton(button) {

    $("#" + button).show();
}
/*          for (var iterate=1;iterate<6;iterate++)
            {
                eraseMeter(iterate);
                console.log("meter Erased: " + iterate );
            }
*/
function resetADH()
{

var startpunttekst="325.45721";
var stringPath="m 71.389565,121.7965 608.746205,0";
$("#ADH-graph, #ADH-graph-schaduw").attr("d",stringPath);
for  (var i=1; i<13;i++)
{
    $("#adh-Week"+i).css("fill","#ffffff");
    $("#adh-Week"+i).attr(
            {
        height:"371.021",
        y:"122"
            });
    $("#text-adh-Week"+i+" tspan").text("-");        
    $("#text-adh-waarde-Week"+i+" tspan").text("-");        
    $("#text-adh-Week"+i+"-schaduw tspan").text("-");        
    $("#text-adh-waarde-Week"+i+"-schaduw tspan").text("-"); 
    $("#text-adh-waarde-Week"+i+" tspan, #text-adh-waarde-Week"+i+"-schaduw tspan,#text-adh-waarde-Week"+i+"-schaduw, #text-adh-waarde-Week"+i ).attr("y",startpunttekst);
    //325.45721
}
    
}
function resetSpider()
{
    var abrevs="Jan,Feb,Maa,Apr,Mei,Jun,Jul,Aug,Sep,Okt,Nov,Dec";
    var waarden= "466.5,425 466.5,410 469.5,390 475.5,375 485.5,366 494.5,360 519.5,350 531.5,345 569.5,350 584.5,360 614,379 622.5,385";
    var arrAbrevs=new Array();
    var arrWaarden=new Array();
    arrAbrevs=abrevs.split(",");
    arrWaarden=waarden.split(" ");
    
    $.each(arrAbrevs,
    function(index,value)
    {
        var d=$("#mrt-"+value ).attr("d");
        var dsplit= d.split("a");
        $("#mrt-"+value).attr("d","m " + arrWaarden[index] + " a " + dsplit[1]);
        $("#mrt-"+value).removeAttr("maand perc");
        $("#mrt-"+value).css("fill","#ffcc00");
        //#ffcc00
        
    });
    
}
function resetVerzuim()
{
    $("#text-Verzuim tspan, #text-Verzuim-schaduw tspan").text("-");
}
function eraseMeter(meter) {
    var items = [];
    $.getJSON('globals/meters.json', function (data) {


        $.each(data, function (key, val) {
            items.push(val);

        });

        $('#wijzerop' + meter + ' animate').attr('values', items[0]);
        $("#wachttijd, #dAntw, #Behulp, #vAntw, #totOord, #respons, #empathie").text("1");
        $("#textAantalmeting tspan, #textAantalmeting-schaduw tspan").text("100");
                
                
    
    });
    //

}


function calcTextPos(meter) {
    var ChrCount = parseInt($("#tspan-meter" + meter).text().length);
    var txtStart = 0;
    var factor = Math.round(ChrCount * 3.16666);
    txtStart = 108 - factor;
    txtStart = Math.round(txtStart / 2);
//    console.log("textlengte is " + txtStart);

}

function calcTextWidth(text)
{
    var a= text.length; //aantal tekens van tekst
    var b=0;
    for (var i = 0; i<a-1;i++)
    {
        var n=text[i];
        status = n.isUpperOrLower(0);
        if(status==="lowerCase")
        {
          b = b+22;
        }
        
        if(status==="upperCase")
        {
            b=b+30;
        }
    }
    //var b= a*30; //30 is breedte van tekst teken
    
    return b;
}
function calcCenter(kader,breedte)
{
    var x = breedte - kader; // lege ruimte
    var y= x/2; // halve lege ruimte
    return y;
}
function checkadh()
{
    if($("input[name='ADHcijfers']").val()!=="")
    {
        return true;
    }
    else
    {
        return false;
    }
        
}
String.prototype.isUpperOrLower=function(pos)
{
   if (this.charCodeAt(pos)>64 && this.charCodeAt(pos)<91)
   {
       return "upperCase";
   } 
   else if(this.charCodeAt(pos)>96 && this.charCodeAt(pos)<123) 
   {
       return "lowerCase";
   }
   else
   {
       return "neither";
   }
} ;