



const hamBtn=document.querySelector("#hamIcon");

const menuItemsList=document.querySelector("nav ul");

hamBtn.addEventListener("click",toggleMenus);

function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

const answer = document.querySelector("#answer");
const number = document.querySelector("#number_generator");


const start = document.querySelector("#start")
const reset = document.querySelector("#reset");
//here lies a beautiful flower

let fold = 0;
const foldtext = document.querySelector("#fold-text");
const mover = document.querySelector("#paper");


function radomiser(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}

function paperrunning(){
mover.style.left = radomiser(0,40) + "vw";
mover.style.top = radomiser(0,40) + "vh";
}



const foldingnoise = new Audio('paper folding.mp3');

var check = 1;


//game start and game stop

//start
var movepaperitvid;
  mover.style.left = 35 +"vw";
  mover.style.top = 25 + "vh";
start.addEventListener('click', () => {
  if (check == 1){
movepaperitvid = setInterval(paperrunning , 1000);
check = 0;
  }
}); 


//stp[]
reset.addEventListener('click', () => {
  
if (check == 0){
mover.style.backgroundPosition = '-1px -29px';
fold = 0;
foldtext.textContent = `im on fold ${fold}`;
  clearInterval(movepaperitvid);
  mover.style.left = 35 +"vw";
  mover.style.top = 25 + "vh";
  check = 1;
}
});

//fullscreen
const fullscreenBtn = document.querySelector("#fullscreen");
let isFullscreen = false;

fullscreenBtn.addEventListener("click", () => {
  if (!isFullscreen) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.textContent = "exit fullscreen";
    isFullscreen = true;
  } else {
    document.exitFullscreen();
    fullscreenBtn.textContent = "fullscreen";
    isFullscreen = false;
  }
});


function enterFullscreen(){
  document.documentElement.requestFullscreen();
}
function exitFullscreen(){
  document.exitFullscreen();

}






//origami move mechanism
mover.addEventListener('click', () => {

  if (check == 0){
  if (!(fold == 12)){
  }
  foldingnoise.currentTime = 5;
  foldingnoise.play();

  fold++;
//fold 1
if (fold == 1){
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-110px -32px';
}
if (fold == 2){
//fold 2
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-237px -17px';
}

if (fold == 3){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-369px -12px';
}
if (fold == 4){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-10px -175px';
}
if (fold == 5){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-125px -191px';
}
if (fold == 6){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-237px -211px';
}
if (fold == 7){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-365px -225px';
}
if (fold == 8){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-365px -205px';
}
if (fold == 9){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '20px -395px';
}
if (fold == 10){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-107px -353px';
}
if (fold == 11){
//fold 3
  foldtext.textContent = `im on fold ${fold}`;
  mover.style.backgroundPosition = '-257px -387px';
  mover.style.transform = 'rotate(270deg)';
}
if (fold == 12){
//fold 3
  foldtext.textContent = `im now a rhino thank you`;
  mover.style.backgroundPosition = '-394px -380px';
    mover.style.left = 35 +"vw";
  mover.style.top = 25 + "vh";
  clearInterval(movepaperitvid);

}
  }
});

//a origami fold


function calculate(a, d) {

return a + d;
}









// when y increases the thing goes up 

//when the y decreases the thing goes down

//

const advert1 = document.querySelector("#ad1");
const advert2 = document.querySelector("#ad2");
const advert3 = document.querySelector("#ad3");
const allads = document.querySelectorAll(".advertisment")

function hideads(){
  for(let onead of allads){ //go through all subtopic pages
onead.style.display="none";
}
}
function adtime(pgno){
hideads();
let onead= document.querySelector("#ad" +pgno)
onead.style.display="block";
}

setInterval(() => {
  const addedtime = Math.floor(Math.random() * 4) + 1;
  adtime(addedtime);
}, 10000);
hideads();


const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}


}
function show(pgno){ //function to show selected page no
hideall();

//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
hideall();


const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="Rhino")score++ ;
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="japan")score++;

if(score == 2){
scorebox.innerHTML="you got all correct";
}else {
  scorebox.innerHTML=`you got ${score}/2`;
}

}