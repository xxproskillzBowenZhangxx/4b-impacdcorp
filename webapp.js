// JavaScript Document
//Defining Global Variables
 var currentScore = 0;
var downloadTimer;
var inter;
var inter5;
var timeleft;
var saveScore;
var array;
var highScore = 0;

//Time Check/Timer Function
// Random Function
//Time Check Function


/*function timeCheck(){
   for(timeLeft >0, timeLeft--) {
    timeleft--;
	  document.getElementById("countdowntimer").textContent = timeleft;

	    if(timeleft <= 0){
			//stops timer
    clearInterval(downloadTimer);
	//saves score
	var saveScore = currentScore;
	currentScore = 0;


}
}
*/



//starts Game
function start() {
	// add this event listener to all of the buttons
	//will be used later
		/*document.getElementById("mole11").addEventListener("click", function() {
		document.getElementById("mole11").removeEventListener( "click", addScore5);
		document.getElementById("mole11").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole12").addEventListener("click", function() {
		document.getElementById("mole12").removeEventListener( "click", addScore5);
		document.getElementById("mole12").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole13").addEventListener("click", function() {
		document.getElementById("mole13").removeEventListener( "click", addScore5);
		document.getElementById("mole13").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole14").addEventListener("click", function() {
		document.getElementById("mole14").removeEventListener( "click", addScore5);
		document.getElementById("mole14").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole15").addEventListener("click", function() {
		document.getElementById("mole15").removeEventListener( "click", addScore5);
		document.getElementById("mole15").removeEventListener( "click", addScore1);});

		document.getElementById("mole21").addEventListener("click", function() {
		document.getElementById("mole21").removeEventListener( "click", addScore5);
		document.getElementById("mole21").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole22").addEventListener("click", function() {
		document.getElementById("mole22").removeEventListener( "click", addScore5);
		document.getElementById("mole22").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole23").addEventListener("click", function() {
		document.getElementById("mole23").removeEventListener( "click", addScore5);
		document.getElementById("mole23").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole24").addEventListener("click", function() {
		document.getElementById("mole24").removeEventListener( "click", addScore5);
		document.getElementById("mole24").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole25").addEventListener("click", function() {
		document.getElementById("mole25").removeEventListener( "click", addScore5);
		document.getElementById("mole25").removeEventListener( "click", addScore1);});
	
		document.getElementById("mole31").addEventListener("click", function() {
		document.getElementById("mole31").removeEventListener( "click", addScore5);
		document.getElementById("mole31").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole32").addEventListener("click", function() {
		document.getElementById("mole32").removeEventListener( "click", addScore5);
		document.getElementById("mole32").removeEventListener( "click", addScore1);});
	
		document.getElementById("mole33").addEventListener("click", function() {
		document.getElementById("mole33").removeEventListener( "click", addScore5);
		document.getElementById("mole33").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole34").addEventListener("click", function() {
		document.getElementById("mole34").removeEventListener( "click", addScore5);
		document.getElementById("mole34").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole35").addEventListener("click", function() {
		document.getElementById("mole35").removeEventListener( "click", addScore5);
		document.getElementById("mole35").removeEventListener( "click", addScore1);});

	// add this event listener to all of the buttons
	for (  x = 0; x < 6;  x++){
	document.getElementById("mole1" + x).addEventListener("click", function() {
		document.getElementById("mole1" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole1" + x).removeEventListener( "click", addScore1);});
	}
	for(  x = 0; x < 6; x++){
	document.getElementById("mole2" + x).addEventListener("click", function() {
		document.getElementById("mole2" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole2" + x).removeEventListener( "click", addScore1);});
	}
	for(  x = 0; x < 6; x++){
	document.getElementById("mole3" + x).addEventListener("click", function() {
		document.getElementById("mole3" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole3" + x).removeEventListener( "click", addScore1);});
	}
*/
		//Timer
		
	    

   //  downloadTimer = setInterval(timeCheck,1000);
	//Time Variable(45 Seconds)
	timeleft = 45;
	//	intervals
	inter = setInterval(moveMoleAround1,2000);
//	inter5 = setInterval(moveMoleAround5, 5000);
	var t=setInterval(countdown_timer, 1000); 
//Timer
	function countdown_timer()  {
		document.getElementById("time").innerHTML = timeleft;
		timeleft--;
		if(timeleft == -1) {
			//when timer end all intervals get cleared
			clearInterval(t);
			clearInterval(inter);
			//clearInterval(inter5);
			alert("Time's Up!");
			
		//makes HighScore
			if 	(currentScore > highScore){
	highScore = currentScore;
	document.getElementById("highScore").value = highScore;
	currentScore = 0;
	}

	  }
	}
//not being used right now
		var molePicker = 
		[
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+0",
			"mole+0",
			"mole+0",
			"mole+0",
			"mole+0",
			//"mole+5"  There are 5 +1 to make +1 more common. +5 not intergrated yet
			];
			
		var randomNumber = Math.floor(Math.random()*molePicker.length);
		var  jack = molePicker[randomNumber];
	
		

		//Random Place Generator
		
} // end start function

/*function addScore11() {
var class = document.getElementById("mole11").className;
if (class == "active"){
currentScore++;
}
}*/
// Add Score Functions
//function addScore1() {
		/*while (true) {
			var x = document.getElementsByTagName("button");
			if ( x === document.getElementByClassName("active").className) {
			currentScore++;
			}
			else {
			currentScore + 0;
			}
		}
	document.getElementById("score").value = currentScore;
}
	
	

Add 5 Function
function addScore5() {
	currentScore = currentScore + 5
}
*/
// adds one to the score on +1 moles
function addScore1(){
				currentScore++;
				document.getElementById("score").innerHTML = currentScore;
				array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
			}
		//adds 5 when a +5 mole is clicked
function addScore5(){
				currentScore = currentScore + 5;
				document.getElementById("score").innerHTML = currentScore;
			}
//picks random coord for mole
function coord() {
		var randomPlaceX = Math.floor(Math.random()*3)+1;
		var randomPlaceY = Math.floor(Math.random()*5)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		
		//creates a +5 mole
function moveMoleAround5() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi");
	//sets class
			document.getElementById(coords).className="silver";
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore5 );
			//removes all +5 moles after 0.5 seconds
			setTimeout(removeMoles5, 500);
}
//Creates a +1 mole		 
function moveMoleAround1() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi");
	//alert(coords);
	//sets class
			document.getElementById(coords).setAttribute("class", "active");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore1 );
			//removes +1 moles after a second
			setTimeout(removeMoles1, 1000);
}
			
	
	//removes +5 moles
function removeMoles5() {
	
//gets array of all +5 moles
	var array = document.getElementsByClassName("silver");
	
	for( var i = 0; i < array.length; i++) {
		//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		
	}
}
//removes all +1 moles
function removeMoles1() {
	
//gets array of all +1 moles
	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
}
//highscroe variable
var highScore = 0;
/*
function savecookies(){
	 var exdays= 69;
	 highScore = saveScore + highScore;
	 var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = highScore;

}
function loadcookies(){
	
}
function clearcookies(){
	
}
function skinchange(page, skin){
	alert(page);
	alert(skin);
	document.getElementsById(page).setAttribute('href', skin);
	}*/
	
	//not currently being used
	  if(timeleft <= 0){
    clearInterval(downloadTimer);
	var saveScore = currentScore;
	currentScore = 0;}
	
	