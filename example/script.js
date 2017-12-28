/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-19 18:12:18
 * @version $Id$
 */
//另一个例子：https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement
window.onload = prepareLinks;
function prepareLinks(){
	var links = document.getElementsByTagName("a");
    
    for(var i=0; i<links.length;i++){
    	if(links[i].getAttribute("class") == "popup"){
    	links[i].onclick = function(){
    		popUp(this.getAttribute("href"));
    		return false;
    	}
    }
    }
}

function popUp(winURL){
	window.open(winURL, "popup", "width=320,height=480");
}