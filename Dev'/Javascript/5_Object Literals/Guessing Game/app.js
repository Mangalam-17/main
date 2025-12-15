const max = prompt("Enter the max number : ");
console.log(`The max number you entered is : ${max}`);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the random number : ");

while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    else if(guess == random){
        console.log("Congratulations! You got it right. The random number is : ", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess was too small ! try again");
    }
    else{
        guess = prompt("Your guesss was too large! try again");
    }
}