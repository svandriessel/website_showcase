/*
Author: Sebastiaan van Driessel, 2021

Ideas to implement:
- Red Alert sound effects on menu items,
- Bubbles / Planets moving around,
- Television / computerscreen on second glass
*/


const a = document.querySelector('.cards');
const b = a.childNodes[1];
var dict = {"Python":"80%","Java":"80%","Javascript":"70%","html":"60%","CSS":"60%","REST_API":"70%","Flask":"70%","SQLAlchemy":"70%","Arduino":"80%", "GML": "40%"};

var newChild = b.cloneNode(true);
a.removeChild(b);
stylesheet = document.styleSheets[0];
var rule="";
console.log("these are a nodes", a.childNodes);
for (var skill in dict){
  var perc = dict[skill];
  var cssname = "skill" + skill;
  tempChild = newChild.cloneNode(true);
  console.log(a.childNodes);
  tempChild.childNodes[3].childNodes[1].innerHTML = perc;
  rule +='#'+cssname+':after{ left: '+perc+'; }\n';
  console.log(rule);
  tempChild.childNodes[1].childNodes[1].innerHTML=skill;
  tempChild.childNodes[1].childNodes[3].id=cssname;
  console.log("these are temp nodes: ");
  console.log(tempChild.childNodes[1].childNodes[3]);
  console.log(tempChild);
  a.appendChild(tempChild);
  console.log("these are a nodes", a.childNodes);
  console.log("done with"+skill);
}
console.log(rule);
/*
console.log(stylesheet);
stylesheet.insertRule(rule, -1);
*/
var newstylesheet = document.createElement("style");
newstylesheet.type = "text/css";
newstylesheet.innerText = rule;
document.head.appendChild(newstylesheet);

const glass = document.querySelector(".dashboard");
console.log(glass);
const body = document.body;

window.onscroll = function() {myFunction()};

/*document.addEventListener('scroll', myFunction(event));*/

var circles = document.getElementsByClassName("circle");
console.log(circles.length,"circles found", circles[0]);
const main = document.getElementsByTagName('main')[0];
const section2 = document.getElementById('section2');
var state = true;
function myFunction(event) {
  if (document.documentElement.scrollTop > 600 && state) {
    console.log("starttime");
    main.style.background = "rgba(0,0,0,1)";/*"linear-gradient(to right bottom, var(--imgcolrgba), rgba(0,0,0,1))";*/
    state =false;
    section2.style.margin = "0rem 0 5rem 0";

    /* work in progress bouncing balls
    console.log(circles[0]);
    for (i=0; i < circles.length-1; i++){
      var x, y, width, height = circles[i].getBoundingClientRect()
      console.log("before",);
      circles[i].style.top = ((y>0) ? 1:-1) * Math.random() * 0.01 * y;
      console.log("after",circles[i].style.top);
    }*/
  }
  if (document.documentElement.scrollTop <= 50 && !state) {
    console.log("starttime");
    main.style.background = "linear-gradient(to right bottom, var(--bg2), var(--bg7))";
    state=true;
    section2.style.margin = "20rem 0 5rem 0";

    /* work in progress bouncing balls
    for (i=0; i < circles.length-1; i++){
      console.log(circles[i]);
      circles[i].style.top = (Math.random()+1) *0.01 * parseFloat(circles[i].style.top);
      console.log(circles[i].style.top);
    }*/
  }
}
/*
body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /25;
  let yAxis = (window.innerHeight /2 - e.pageY) /25;
  glass.style.transform = 'rotateY(${xAxis}deg) rotateX(${yAxis}deg)';
  }
)*/
