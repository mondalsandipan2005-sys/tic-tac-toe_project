let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let h=document.querySelector(".hide");
let w=document.querySelector("p");

let turnofX=true;
let count=0;
let val=false;

const winComb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>
{
    box.addEventListener("click", ()=>
    {
        if(turnofX){
            box.innerText="X";
            turnofX=false;
        }
        else{
            box.innerText="O"; 
            turnofX=true;
        }
        box.disabled=true;
        count=count+1;
        val=chkWinner();

       if(count===9 && !val){
          h.classList.remove("hide");
          w.innerText="IT'S A DRAW";
          
          gameEnd();
          
        }
        
    });
}
);

const gameEnd=()=>{
   for(let i of boxes){
       i.disabled=true;
   }
}
const winDisplay=(b1)=>{
   w.innerText=`CONGRATS!!! THE WINNER IS ${b1}`;
   h.classList.remove("hide");
   gameEnd();
}

const gameStart=()=>{
   for(let i of boxes){
       i.disabled=false;
       i.innerText="";
   }
}

const resetGame=()=>{
    count=0;
    turnofX=true;
    gameStart();
    h.classList.add("hide");
}

const chkWinner =()=>{
    
    for(let each of winComb){
       let  b1=boxes[each[0]].innerText;
       let b2=boxes[each[1]].innerText;
       let b3=boxes[each[2]].innerText;

       if(b1!="" && b2!="" && b3!=""){
        if(b1===b2 && b2===b3 && b1===b3){
          winDisplay(b1);
          return true;
        }
       }
    }

}

reset.addEventListener("click",resetGame);

