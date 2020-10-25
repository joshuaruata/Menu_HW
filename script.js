var contentEle = document.body.querySelector(".content");

function makeHome(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page"
}

function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  var headEle1 = document.createElement("H3");
  headEle.innerHTML="About Page"
  headEle1.innerHTML="Joshua Bochung"
  contentEle.appendChild(headEle);
  contentEle.appendChild(headEle1);
}

var counter=0;
function makeInteract(){
  contentEle.innerHTML="";
  contentEle.innerHTML=counter.toString();
  counter++;
  return counter;
}

document.body.querySelector(".homeButt").addEventListener("click", function(){
  makeHome();
})

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout();
})

document.body.querySelector(".aboutInteract").addEventListener("click", function(){
  makeInteract();
})

makeHome();