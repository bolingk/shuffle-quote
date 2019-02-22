var quoteIndex;
var quoteDeck = ['"If you can’t fly, run. If you can’t run, walk. If you can’t walk, crawl, but by all means, keep moving." -- MLK Jr.',
              '"Some people feel the rain. Others just get wet." -- Bob Dylan',
              '"May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds." -- Edward Abbey',
              '"You cannot stay on the summit forever; you have to come down again. So why bother in the first place? Just this: What is above knows what is below, but what is below does not know what is above. One climbs, one sees. One descends, one sees no longer, but one has seen. There is an art of conducting oneself in the lower regions by the memory of what one saw higher up. When one can no longer see, one can at least still know." -- Rene Daumal'];



function updateMessage() {
  var quoteIndex = Math.floor(Math.random() * quoteDeck.length);
  document.getElementById("quote-display").textContent = quoteDeck[quoteIndex];	
}

document.getElementById('shuffle').onclick = updateMessage;



/*
function randomIndex(){
	var quoteIndex = Math.floor(Math.random() * quoteDeck.length);
	return quoteIndex;
}

function updateMessage(X) {
	document.getElementById("quote-display").textContent = quoteDeck[X];	
}

document.getElementById('shuffle').onclick = updateMessage;
*/