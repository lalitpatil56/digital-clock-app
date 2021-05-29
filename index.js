document.getElementById("hour").innerHTML= "Hours"
document.getElementById("min").innerHTML= "Minutes"




function clock(){
    
    let date= new Date();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let se ="";
se= (h>12)? se="PM":se="AM";
h = (h == 0)? h=12:h;
h = (h > 12 )? h-12: h;

h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;

console.log(h +"  " + m +"  " +  s)
document.getElementById("hour").innerHTML= h;
document.getElementById("min").innerHTML= m;
document.getElementById("sec").innerHTML= s;
// document.getElementById("session").innerHTML= se;

setTimeout(clock,1000)
}
clock();


