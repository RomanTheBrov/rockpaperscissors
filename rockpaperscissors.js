let rock=1;
let paper=2;
let scissors=3;



let choice1 = Math.floor(Math.random()*3);
let choice2 = Math.floor(Math.random()*3);

if (choice1===choice2){
	console.log("It's a draw!");
}
else if(choice1 ===1 && choice2===2 || choice2===1 && choice1===2){
	console.log("Paper beats rock!");
}
else if(choice1 ===2 && choice2===3 || choice2===2 && choice1===3){
	console.log("Scissors beats paper!");
}
else if(choice1 ===1 && choice2===3 || choice2===1 && choice1===3){
	console.log("Rock beats paper!");
}