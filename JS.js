window.addEventListener("load", workFunction, false);

function workFunction(){
  var b = document.getElementById("europe");
  var svgdocument = b.contentDocument;
  var svgdocument = b.getSVGDocument();
  stat = svgdocument.getElementsByClassName("stat");
  $("button").on("click", function(event){
  		click(event);
  });

  var c = document.getElementById("europedetail");
  var svgdocumenta = c.contentDocument;
  var svgdocumenta = c.getSVGDocument();
  stata = svgdocumenta.getElementsByClassName("stat");
  $("button").on("click", function(event){
  		clicka(event);
  });

  var d = document.getElementById("world");
  var svgdocumentb = d.contentDocument;
  var svgdocumentb = d.getSVGDocument();
  statb = svgdocumentb.getElementsByClassName("stat");
  $("button").on("click", function(event){
  		clickb(event);
  });
};



function click(event){
		var seznam = [];

		for (var i=0; i<stat.length; i++) {
			if (event.target.getAttribute("id") == "empty") {
				stat[i].setAttribute("fill","#CCCCCC")
			} else if (event.target.getAttribute("id") == "plan" && stat[i].getAttribute("rok") == "plan") {
				stat[i].setAttribute("fill","blue")
				seznam.push(stat[i].getAttribute("id"))
			} else if (event.target.getAttribute("id") == "ideal") {
				stat[i].setAttribute("fill","darkblue")
			} else if (stat[i].getAttribute("rok") >= 1992 && stat[i].getAttribute("rok") <= event.target.getAttribute("id")) {
				stat[i].setAttribute("fill","darkblue")
				if (stat[i].getAttribute("rok") == event.target.getAttribute("id")) {
					stat[i].setAttribute("fill","blue")
					seznam.push(stat[i].getAttribute("id"));
				}
			} else if (stat[i].getAttribute("let") >= 1992 && stat[i].getAttribute("let") <= event.target.getAttribute("id") && event.target.getAttribute("id") < stat[i].getAttribute("rok")) {
				stat[i].setAttribute("fill","RoyalBlue")
					if (stat[i].getAttribute("let") == event.target.getAttribute("id")) {
					stat[i].setAttribute("fill","CornflowerBlue")
					seznam.push(stat[i].getAttribute("id")+" (pouze přelet)");
					}
			} else {
				stat[i].setAttribute("fill","#CCCCCC")
			}
		}

		var vycet = seznam.filter(function (el, i, arr) {
			return arr.indexOf(el) === i;
		});

		if (event.target.getAttribute("id") == "empty") {
			document.getElementById("data").innerHTML = "Není vybrán žádný letopočet!"
		} else if (event.target.getAttribute("id") == "plan") {
			document.getElementById("data").innerHTML = "V plánu pro rok 2018 a později: " + vycet.join(", ");
		} else if (event.target.getAttribute("id") == "ideal") {
			document.getElementById("data").innerHTML = "Ideální stav :-)"
		} else {
			document.getElementById("data").innerHTML = "Nově navštívené v roce " + event.target.getAttribute("id")+ ": " + vycet.join(", ");
		}
	};

function clicka(event){
	var seznam = [];
	for (var i=0; i<stata.length; i++) {
		if (event.target.getAttribute("id") == "empty") {
			stata[i].setAttribute("fill","#CCCCCC")
		} else if (event.target.getAttribute("id") == "plan" && stata[i].getAttribute("rok") == "plan") {
			stata[i].setAttribute("fill","blue")
			seznam.push(stata[i].getAttribute("id"))
		} else if (event.target.getAttribute("id") == "ideal") {
			stata[i].setAttribute("fill","darkblue")
		} else if (stata[i].getAttribute("rok") >= 1992 && stata[i].getAttribute("rok") <= event.target.getAttribute("id")) {
			stata[i].setAttribute("fill","darkblue")
			if (stata[i].getAttribute("rok") == event.target.getAttribute("id")) {
				stata[i].setAttribute("fill","blue")
				seznam.push(stata[i].getAttribute("id"));
			}
		} else if (stata[i].getAttribute("let") >= 1992 && stata[i].getAttribute("let") <= event.target.getAttribute("id") && event.target.getAttribute("id") < stata[i].getAttribute("rok")) {
			stata[i].setAttribute("fill","RoyalBlue")
				if (stata[i].getAttribute("let") == event.target.getAttribute("id")) {
				stata[i].setAttribute("fill","CornflowerBlue")
				seznam.push(stata[i].getAttribute("id")+" (pouze přelet)");
				}
		} else {
			stata[i].setAttribute("fill","#CCCCCC")
		}
	}
	
};

function clickb(event){
	var seznam = [];
	for (var i=0; i<statb.length; i++) {
		if (event.target.getAttribute("id") == "empty") {
			statb[i].setAttribute("fill","#CCCCCC")
		} else if (event.target.getAttribute("id") == "plan" && statb[i].getAttribute("rok") == "plan") {
			statb[i].setAttribute("fill","blue")
			seznam.push(statb[i].getAttribute("id"))
		} else if (event.target.getAttribute("id") == "ideal") {
			statb[i].setAttribute("fill","darkblue")
		} else if (statb[i].getAttribute("rok") >= 1992 && statb[i].getAttribute("rok") <= event.target.getAttribute("id")) {
			statb[i].setAttribute("fill","darkblue")
			if (statb[i].getAttribute("rok") == event.target.getAttribute("id")) {
				statb[i].setAttribute("fill","blue")
				seznam.push(statb[i].getAttribute("id"));
			}
		} else if (statb[i].getAttribute("let") >= 1992 && statb[i].getAttribute("let") <= event.target.getAttribute("id") && event.target.getAttribute("id") < statb[i].getAttribute("rok")) {
			statb[i].setAttribute("fill","RoyalBlue")
				if (statb[i].getAttribute("let") == event.target.getAttribute("id")) {
				statb[i].setAttribute("fill","CornflowerBlue")
				seznam.push(statb[i].getAttribute("id")+" (pouze přelet)");
				}
		} else {
			statb[i].setAttribute("fill","#CCCCCC")
		}
	}
	
};

/*
1. propojení HTML tlačítka a JS funkce - DONE
2. propojení mezi id tlačítka a zeměmi podle roku - DONE
3. obarvení těch zemí na darkblue - DONE
4. seřazení zemí podle roku pro text - DONE
5. přepis textu podle nových zemí - DONE

6. default mapa - DONE
7. blízké plány mapa - DONE
8. ideál mapa - DONE
X. úprava finální hlášky - DONE
*/



