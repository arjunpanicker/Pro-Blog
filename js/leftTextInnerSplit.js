var byline = document.getElementById('left-text-inner');  	// Find the H2
var bylineText = byline.innerHTML;										// Get the content of the H2
var bylineArr = bylineText.split('');									// Split content into array
byline.innerHTML = '';														// Empty current content

var span;					// Create variables to create elements
var letter;

for(let i=0;i<bylineArr.length;i++){									// Loop for every letter
  span = document.createElement("span");					// Create a <span> element
  letter = document.createTextNode(bylineArr[i]);	// Create the letter
  if(bylineArr[i] == ' ') {												// If the letter is a space...
    byline.appendChild(letter);					// ...Add the space without a span
  } else {
        span.appendChild(letter);						// Add the letter to the span
  	byline.appendChild(span); 					// Add the span to the h2
  }
}