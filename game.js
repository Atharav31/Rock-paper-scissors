let usersc=0;
let compsc=0;

let choice=document.querySelectorAll(".pick");
let result=document.querySelector(".result");
let userscore=document.querySelector("#user");
let computerscore=document.querySelector("#com");

const gencomp=()=>{
    let option=["rock","paper","scissors"]
    let r=Math.floor(Math.random()*3);
    return option[r];
}
const draw=()=>{
    
        
        result.innerText="Its a Draw"
        result.style.backgroundColor='#5D5D81';

}


const play=(userch)=>{
    const compch=gencomp();
    console.log(compch,userch)
    if(userch===compch){
       draw();
    }else{
        let userwin=true;
        if(userch==="rock"){
            userwin=compch==="paper" ? false:true;
        }else if(userch==="paper"){
            userwin=compch==="scissors" ? false:true;
        }else if(userch==="scissors"){
            userwin=compch==="rock" ? false:true;
        }
        gamewin(userwin)
    }
   
}

const gamewin=(userwin)=>{
    if(userwin){
        result.innerText="You win";
        result.style.backgroundColor='green';
        usersc++;
        userscore.innerText=`${usersc}`
    }
    else{
        result.innerText="You lose"
        result.style.backgroundColor='red';
        compsc++;
        com.innerText=`${usersc}`
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userch=choice.getAttribute("id");
        // console.log(userch)
        play(userch);
    })    
});