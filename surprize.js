console.log("This is surprize javascript");
console.log("gautam gondaliya");

let number= Math.floor(100*Math.random());
let chances=1;

document.getElementById("submitguess").onclick=function(){

let input=document.getElementById("guessField").value;
if(input==number){
    alert( " congratulation !!! you complet game in  " +chances+".");
    chances++;

}
else if(input>number){
    alert("Enter te smaller number");
    chances++;

}

else{
    alert("Enter the larger number");
    chances++;
}

}

//console.log(number);