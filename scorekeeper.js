var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rButton = document.querySelector("#r");

var p1Display= document.querySelector("#p1Display");
var p2Display= document.querySelector("#p2Display");
var numInput= document.querySelector("input");
var p= document.querySelector("p");

var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



console.log(p1Display)
p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		console.log(p1Score, winningScore);
		if(p1Score === winningScore){
			gameOver = true;
			alert("GAME OVER!!!!")
		}
		p1Display.textContent= p1Score;
	}

});
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			alert("GAME OVER!!!!")
		}
		p2Display.textContent= p2Score;
	}


});
rButton.addEventListener("click",function(){
	reset();
		
	
});
//run anytime value changes
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
});

function reset(){
	if("click"){
		p1Score = 0;
		p2Score = 0;
		p1Display.textContent=p1Score;
		p2Display.textContent=p2Score;

		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");

		gameOver = false;
	}

}
