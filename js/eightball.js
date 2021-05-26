const answerArray = ["You know they can hear you, right?",
                        "Maybe Its Been Fixed",
                        "Probably Not",
                        "Highly Unlikely",
                        "Yeah Good Luck",
                        "Its gonna be a fun day!"];
const response = document.querySelector(".response");
const question = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click",function(){
let res = Math.floor(Math.random()*answerArray.length);
response.innerText = question.value + "? " + " " + answerArray[res];
question.value = "";
})