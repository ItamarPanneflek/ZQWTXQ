// this javascript changes the values of the gauge 

var thissl=0;
var kto =0;

$(document).ready(function(){

var piet=0;
//console.log ("running");
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
//console.log ("piet is:"+piet);
//console.log ("kto is:"+kto) ;

//console.log ("10x"+kto);

var stop = kto;
//console.log ($('#smiletest animate').attr('dur'));
var limit = $('#smiletest animate').attr('dur');
limit=limit.replace('s','');
limit=parseInt(limit);

var myinterval = ((limit*1000) /(100-stop))/10
myinterval=Math.round(myinterval)*10;
//============================================


function decrease(){
    var percent = Number($('#counter span').text());
    
    if(percent > stop){
        $('#tspan5276').text(--percent+"%");
        $('#counter span').text(percent);
        var t = setTimeout(decrease,myinterval);
    }
}
setTimeout(decrease,myinterval);
//===========================================
$.getJSON('js/my.json', function(data){

//alert ("loaded");
var items = [];
items=data;
i=0;
/*$.each(data, function(key, val) {
items.push(key,val);
alert("i="+items[i]);
i++;


});
*/
//alert (items.sl);
thissl=parseInt(items.sl);
$('#path3906').attr("transform", "rotate("+ getsl(thissl) +" 160 160)");//40%: -45 160 160 //0%: -90 160 160// 100%:
});



gethappiness(stop);


});


function getUrlVars()

{

var vars = [], hash;

var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

//alert ('test'); 

for(var i = 0; i < hashes.length; i++)

{

hash = hashes[i].split('=');

vars.push(hash[0]);

vars[hash[0]] = hash[1];

}

 

return vars;

}

function getsl(percentage){
var sl=0;//-45=0 5=100 factor =50 50/100
sl=((percentage/100)*135)-10;
//alert (sl);
return sl;

}


function gethappiness(howhappy)
{
//alert ('I start feeling happy');

$.getJSON('js/status.json', function(data) {
var status = [];
var i=0;

$.each(data, function(key, val) {

status[key]=val;

i++;


});

var myItem=howhappy+"%";
var myprev="100%";
if (howhappy<50){
myprev="50%";
}
var myprevResult=status[myprev];
var myResult=status[myItem];

//alert ("Eerste: "+ myprevResult + "\n"+ "Resultaat: " + myResult);



$('#smiletest animate').attr('values', myprevResult + ";"+ myResult);

//alert (status[myItem]);
//alert (items.sl);
});
}





});
//alert (piet);




//alert ("thisworks");
// change path path3906 attr rotate
//var hash=getUrlVars();
//var mysl=hash['sl'];

// bereken snelheid waarmee percentage moet klaarzijn

/* myinterval=limit / (100-stop)   */



//alert(getKTO ());


//alert (kto);
//alert (jan);


//var JSONobj={"KTO": "25" } ;


