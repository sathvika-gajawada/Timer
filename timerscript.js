 let d=0,h=0,m=0,s=0;let interval;let rem=0,total=0;
function setTimer() {
    let days = document.getElementById("daysIn").value;
    let hours = document.getElementById("hoursIn").value;
    let mins = document.getElementById("minsIn").value;
    let secs = document.getElementById("secsIn").value;
   if(secs>=60|| mins>=60||hours>=24)
    {   if(secs>=60)
        {
        mins=parseInt(mins)+Math.floor(secs/60);
        secs=parseInt(secs)%60;
        }
        if(mins>=60)
            {
                hours=parseInt(hours)+Math.floor(mins/60);
                mins=parseInt(mins)%60;
            }
        if(hours>=24)
            {
                days=parseInt(days)+Math.floor(hours/24);
                hours=parseInt(hours)%24;
            }

    } 
   document.getElementById("days").innerHTML=parseInt(days);
   document.getElementById("hours").innerHTML=hours;
   document.getElementById("mins").innerHTML=mins;
   document.getElementById("secs").innerHTML=secs;
   d=days;
   h=hours;
   m=mins;
   s=secs;
   total = Number(d * 24 * 60 * 60) + Number(h * 60 * 60) +Number (m * 60 )+ Number(s);
    
}

function start(){
          interval=setInterval(function(){  total--;
                Timer(total);rem=total;
            },1000);
            
   
}
function Timer(total)
{
    let days=0,hrs=0,mins=0,secs=0;
    if(total>0)
    {
     days=Math.floor(total/(24*60*60));
     hrs=Math.floor((total/(60*60))%24);
     mins=Math.floor((total/60)%60);
     secs=Math.floor(total%60);
      }
    else
    {
       days=0;
        hrs=0;
        mins=0;
        secs=0; 
        clearInterval(interval);
    }
    document.getElementById("days").innerHTML=days;
   document.getElementById("hours").innerHTML=hrs;
   document.getElementById("mins").innerHTML=mins;
   document.getElementById("secs").innerHTML=secs;
    
}
    
function stop()
{
    clearInterval(interval);
    total=rem;
}
function reset()
{
    document.getElementById("days").innerHTML=0;
   document.getElementById("hours").innerHTML=0;
   document.getElementById("mins").innerHTML=0;
   document.getElementById("secs").innerHTML=0;
   total=0;
   document.getElementById("daysIn").value=0;
   document.getElementById("hoursIn").value=0;
    document.getElementById("minsIn").value=0;
    document.getElementById("secsIn").value=0;
    
}  

