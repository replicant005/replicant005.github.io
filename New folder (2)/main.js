/* 
should choose a random number between 1 to 100
while userResponse != chosenNumber 
keep on prompting again 
prompt user if they are wrong 
dispaly what numbers they have already chosen 
end game when userResponse = chosenNumber
or user runs out of turns 
another while loop , keep palying = True
if False, dont play anymore 

prompt them how many turns they wanna have 

*/ 

console.log("helloo jii")
let keepPlaying = true;

while(keepPlaying) {
let nTurns = console.log("How many turns you wish to have ? ");
console.log (nTurns);

let randomNumber = Math.floor(Math.random() * 101);
let userResponse;

i = 0; // initializtion of the counter 
while (i < nTurns &&  userResponse != randomNumber) {

userResponse = console.log("enter the number");
console.log (userResponse)

i ++ 
}
let askUser = console.log("keep palying ? (yes / no)")
if (askUser === "no") {
    keepPlaying = false;
}
else{
    console.log("another chance")
}
} 