$(document).ready(function (){
	var playerTurn = "X";	
	$("div[class*='col']").on({
		'click': function (event){
			$(this).addClass(playerTurn);
			$(this).html("<p>"+playerTurn+"</p>");
			playerTurn = (playerTurn==="X")?"O":"X";
		}
	});
});