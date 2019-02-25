var	quoteIndex;
var quoteDeck;


var quote1 = new Quote('MLK Jr.', '"If you can’t fly, run. If you can’t run, walk. If you can’t walk, crawl, but by all means, keep moving."')
var quote2 = new Quote('Bob Dylan', '"Some people feel the rain. Others just get wet."')
var quote3 = new Quote('Edward Abbey', '"May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds."')
//var quote4 = new Quote('Rene Daumal', '"You cannot stay on the summit forever; you have to come down again. So why bother in the first place? Just this: What is above knows what is below, but what is below does not know what is above. One climbs, one sees. One descends, one sees no longer, but one has seen. There is an art of conducting oneself in the lower regions by the memory of what one saw higher up. When one can no longer see, one can at least still know."');
var quote5 = new Quote('Auth5', '"Quote5"')
var quote6 = new Quote('Auth6', '"Quote6"')
var quote7 = new Quote('Auth7', '"Quote7"')
var quote8 = new Quote('Auth8', '"Quote8"')
var quote9 = new Quote('Auth9', '"Quote9"')


quoteDeck = [quote1, quote2, quote3, quote5, quote6, quote7, quote8, quote9] //quote4 has been removed from array due to string.length


function Quote (author, quote) {
	this.author = author;
	this.quote = quote;
}

function updateMessage() {
	quoteIndex = Math.floor(Math.random() * quoteDeck.length);
	document.getElementById("quote-display").textContent = quoteDeck[quoteIndex].quote;
	document.getElementById("author-display").textContent = "-- " + quoteDeck[quoteIndex].author;
}

function lastMessage (){
	if (quoteIndex == 0) {
		quoteIndex = quoteDeck.length - 1;
	}
	else {
		quoteIndex -= 1;	
	}
	document.getElementById("quote-display").textContent = quoteDeck[quoteIndex].quote;
	document.getElementById("author-display").textContent = "-- " + quoteDeck[quoteIndex].author;
	console.log(quoteIndex);
}

function nextMessage (){
	if (quoteIndex == quoteDeck.length - 1) {
		quoteIndex = 0;
	}
	else {
		quoteIndex += 1;	
	}
	document.getElementById("quote-display").textContent = quoteDeck[quoteIndex].quote;
	document.getElementById("author-display").textContent = "-- " + quoteDeck[quoteIndex].author;
	console.log(quoteIndex);
}

document.getElementById('lastQuote').onclick = lastMessage;
document.getElementById('shuffle').onclick = updateMessage;
document.getElementById('nextQuote').onclick = nextMessage;



/*
function randomIndex(){
	quoteIndex = Math.floor(Math.random() * quoteDeck.length);
	return quoteIndex;
}

//randomIndex();


function updateMessage() {
	if (document.getElementById('shuffle').onclick === true) {
		randomIndex;
	}
	else if (document.getElementById('next').onclick === true) {
		// quoteIndex += 1;
	}
	else if (document.getElementById('back').onclick === true) {
		// quoteIndex -= 1;
	}
	document.getElementById("quote-display").textContent = quoteDeck[quoteIndex];	
}

document.getElementById('shuffle').onclick = updateMessage;
console.log(quoteIndex);
*/