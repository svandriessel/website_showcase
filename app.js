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
