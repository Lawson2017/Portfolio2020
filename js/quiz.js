// function myFunction() {
// 	const x = document.getElementsByClassName("mainQuiz");
// 	console.log('button ran')
// 	if (x.style.display === "none") {
// 	  x.style.display = "block";
// 	} else {
// 	  x.style.display = "none";
// 	}
//   }

var x = document.getElementById("mainQuiz");
var y = document.getElementById("jumbotronDiv");

	function showQuiz(){
	console.log('onclick event fired');
	x.style.display = "block";
	y.style.display = "none";
}

// when the page is ready, link button to the main quiz ID
$(document).ready(function() {
	// ADD CLASS OF 'FONTS' TO ALL LIST ITEMS
	$(".btn btn-primary btn-lg").click(function(){
		$("#mainQuiz").fadeIn()
	}); 
})

//add a header
var header = document.createElement('nav')
var DOM = document.getElementById('addHere')
header.className = 'navbar navbar-light bg-light'
DOM.prepend(header)

//add a banner to the header
var bannerImg = document.createElement('img')
bannerImg.src = "favicon.ico"
bannerImg.className = 'bannerImg'
var bannerText = document.createTextNode('Owls 101')
bannerText.className = 'bannerText'
header.appendChild(bannerImg)
// header.appendChild(bannerText)




//an array of objects, each containing a question and answer
var questions = [
	{
		question: "What Kind of Owl is this?",
		answer: "northern pygmy owl", 
	},
	{
		question: "When is it more active, day or night?",
		answer: "day"
	},
	{
		question: "On which continent is it possible to this Owl?",
		answer: "north america"
	}
]

//loop through each question
for(var i = 0; i < questions.length; i++){
	//store each question as the [i] loops through the 'question property in our array of objects as a variable 'question'
	var question = questions[i].question
	//store each element to append these questions to, using the iterator to place the strings as questions
	var questionText = document.getElementById('question' + [i])

	//verify questions and elment being selected
	console.log(question, questionText)

	//add the questionText to each of the divs
	questionText.textContent = question;
}

//function to compare answers with answer property in our array of objects
function checkAnswers() {
	//store the users score as we go
	var correct = 0;
	var incorrect = 0;

	//loop through the array
	for(var i = 0; i < questions.length; i++){
		// store the correct answer for each step of the loop
		var answer = questions[i].answer
		//store the users answer
		var userAnswer = document.getElementById('answer' + [i]).value
		//store an element to add our correct or incorrect class to
		var feedback = document.getElementById('question' + [i])
		if(answer == userAnswer){
			feedback.className = 'correct'
			// add one to correct
			correct++;
		} else {
			//update class on the feedback area
			feedback.className = 'incorrect'
		}
	}
	//update our users score
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
