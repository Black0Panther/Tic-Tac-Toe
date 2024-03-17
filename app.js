let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg1=document.querySelector("#msg");
let container=document.querySelector(".container-msg");
let turn0 = true;
const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("Clicked");
      if(turn0){
        box.innerHTML="O";
        turn0=false;
      }
      else{
        box.innerHTML="X";
        turn0=true;
      }
      box.disabled=true;

      winnerCheck();
    })
}
)
const reset1=()=>{
    turn0=true;
    enabledbtn();
    container.classList.add("hide");
};
const disabledbtn=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
};
const enabledbtn=()=>{
  for(let box of boxes){
   box.disabled=false;
   box.innerText="";
  }
};

const showWinner=(winner)=>{
  msg1.innerText=`Congratulation Winner is ${winner}`;
  disabledbtn();
  container.classList.remove("hide");
}
const winnerCheck=()=>{
  for(let pattern of winPatterns ){
    pos1=boxes[pattern[0]].innerText;
    pos2=boxes[pattern[1]].innerText;
    pos3=boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("winner",pos1);
        showWinner(pos1);
        
      }
    }
  }
};

//Reset button
reset.addEventListener("hover",reset1);