/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function returnMyMonth(nummer)
{
    //nummer is an int
    var Waarde=parseInt(nummer);
    var Maanden=new Array();
    var Maandenstr="januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december";
    Maanden=Maandenstr.split(",");
    return Maanden[Waarde];
}
function returnMyMonthdigit(Month)
{
    //Month is an string
    
    var Maanden=new Array();
    var Maandenstr="januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december";
    Maanden=Maandenstr.split(",");
    var nummer=Maanden.indexOf(Month);
    return nummer;
}

function monthIncrement(nummer)
{
    var Waarde=parseInt(nummer);
    
    if (Waarde==11)
    {
    return   returnMyMonth(0);  
    }
    else
    {
        if (Waarde>11)
        {
            return "Error: Maand is groter dan toegestane waarde";
        }
        else
        {
            Waarde++;
            var Maand=returnMyMonth(Waarde);
            return Maand;
        }
    }
}
function monthDecrement(nummer)
{
    var Waarde=parseInt(nummer);
    
    if (Waarde==0)
    {
    return   returnMyMonth(11);  
    }
    else
    {
        if (Waarde<0)
        {
            return "Error: Maand is groter dan toegestane waarde";
        }
        else
        {
            Waarde--;
            var Maand=returnMyMonth(Waarde);
            return Maand;
        }
    }
}
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getMonthStr(MaandInt)
{
    var maanden = "Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December";
    var ArrMaanden=maanden.split(",");
    return ArrMaanden[MaandInt];
}


function Weeknr2month(weeknr,year)
{ var maanden = "Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December";
    var dagen="";
    var arrMaanden=maanden.split(",");
    var arrMonthdays = new Array();
    
    if (leapYear(year)==true)
    {
      dagen="31,29,31,30,31,30,31,31,30,31,30,31" ;  
       arrMonthdays=dagen.split(",");
    }
    else
    {
       dagen="31,28,31,30,31,30,31,31,30,31,30,31" ;
       arrMonthdays=dagen.split(",");
    }
    
    for (var i=0;i<12;i++)
    { 
        var limiet=parseInt(arrMonthdays[i])
        for(var r= 1; r<limiet+1; r++)
        {  
            var ThisWeek= (new Date(year,i,r).getWeek());
            
            if (ThisWeek ==weeknr)
            {
                return arrMaanden[i];
            }
        }
    
    }

}
function Month2Weeknrs(month,year)
{
    month=parseInt(month)-1;
   var strWeeknrs;
   var maanden = "Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December";
   var arrMaanden=maanden.split(",");
   for(var i=1;i<53;i++)
   {
       if(Weeknr2month(i,year)==arrMaanden[month])
       {
           if(strWeeknrs)
           {
           strWeeknrs = strWeeknrs + "," + i;
           }
           else
           {
           strWeeknrs = i    
           }
       }
   }
   return strWeeknrs;
}
//--------------------------------------------------------------------------------------------------------------------------//

function replaceall(strString, strValue, strChange) {
    var replacement = "";
    var arrEverytime = strString.split(strValue);
    for (var i = 0; i < arrEverytime.length; i++) {
        //console.log(arrEverytime[i]+"|");
        if (i == arrEverytime.length - 1) {
            replacement = replacement + arrEverytime[i];
        } else {
            replacement = replacement + arrEverytime[i] + strChange;
        }
    }
    return replacement;

}

/////////////////////////// Splitting text in several parts

function splitstring(textstring,interval,separator)
{// returns string with separator marks
 //To Do: Repair this function at the second occurence it does repeat the first occurence
    separator=separator || "//";
    
    var textlength=textstring.length;
    var factor=Math.ceil(textlength/interval);
    var acc=0;
    for (var i=1;i<factor+1;i++)
    {
        acc=acc+interval;
        
        if(i==1){
            var stringToReturn=textstring.substr(0,acc)+ separator;
            var lastpos=acc+1;
        }
        else if(i==factor){
            //last
            stringToReturn=stringToReturn + textstring.substr(lastpos,textlength);
            
        }
        else{
            stringToReturn=stringToReturn + textstring.substr(lastpos,acc)+separator;
            lastpos=acc+1;
        }
    }
    return stringToReturn;
}
function returnAvgArr(elmt){
var sum = 0;
var strElmt=elmt;
elmt= strElmt.split(",");
for(var i = 0; i < elmt.length; i++)
{
    sum += parseInt(elmt[i], 10); //don't forget to add the base
}

var avg = sum/elmt.length;
return avg;
}