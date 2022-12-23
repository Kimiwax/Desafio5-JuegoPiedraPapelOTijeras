
import { state } from "../../state";

export function initGame(params){
    const div = document.createElement("div");
    div.classList.add("container-game");
    const style = document.createElement("style");
  
//////Contador que reinicia la página si no se elige ninguna opcion
    let counter = 3;
    const invervalId = setInterval(()=>{
          counter--;

          if(counter < 0){
            clearInterval(invervalId);
            params.goTo("/desafio-m5/instructions")
          }
      },1000)

      div.innerHTML = `
        <div class="enemy-plays">
        <comp-scissors class="enemy-scissor"></comp-scissors>
        <comp-rock class="enemy-rock"></comp-rock>
        <comp-paper class="enemy-paper"></comp-paper>
        </div>

        <div class="spinner">
        <comp-countdown class="contador"></comp-countdown>
        </div>

        <div class="my-plays">
        <comp-scissors class="my-scissor"></comp-scissors>
        <comp-rock class="my-rock"></comp-rock>
        <comp-paper class="my-paper"></comp-paper>
        </div>
    `;

    style.innerHTML = `
    .container-game{
        display:flex;
        align-items: center;
        flex-direction:column;
    }

    .spinner{
        display: flex;
        align-items: center;
        flex-direction:column;
    
    }
    .my-scissor{
        opacity: 60%;
    }
    .my-scissor:hover{
        opacity: 100%;
        height:200px;
    }
    .my-rock{
        opacity: 60%;
    }
    .my-rock:hover{
        opacity: 100%;
    }
    .my-paper{
        opacity: 60%;
    }
    .my-paper:hover{
        opacity: 100%;
    }
    .enemy-plays{
        transform: rotate(180deg);
        visibility:hidden;
    }
    .disabled{
        display:none;
    }
    .active{ 
        display:block;
        visibility:visible;
        opacity:100%;
    }
    .active-enemy{
        display:flex;
        visibility:visible;
    }
    .invisible{
        visibility:hidden;
    }
    
`;

///Seleccion de los distintos contenedores para modificarlos
const contadorEl = div.querySelector(".contador") as Element;

const myPlays = div.querySelector<any>(".my-plays").children;
const myPlaysDiv = div.querySelector(".my-plays") as Element;
const enemyDiv = div.querySelector(".enemy-plays") as Element;

const myScissor = div.querySelector(".my-scissor") as Element;
const myPaper = div.querySelector(".my-paper") as Element;
const myRock = div.querySelector(".my-rock") as Element;

const enemyScissor = div.querySelector(".enemy-scissor") as Element;
const enemyPaper = div.querySelector(".enemy-paper") as Element;
const enemyRock = div.querySelector(".enemy-rock") as Element;

for(const plays of myPlays){
 plays.addEventListener("click", () =>{
    const type = plays.getAttribute("class");
    clearInterval(invervalId);
    //console.log(type)
    if(type == "my-scissor"){
        state.setMove("tijera");
        activePlay("tijera");
    }
    else if( type == "my-rock"){
        state.setMove("piedra");
        activePlay("piedra");    
    }
    else if( type == "my-paper"){
        state.setMove("papel")
        activePlay("papel");
    }
 })
}

function activePlay(jugada){
    for (const plays of myPlays){
        plays.classList.add("disabled");
    }

    if(jugada == "tijera"){
        myScissor.classList.remove("disabled");
        myScissor.classList.add("active");
        setTimeout(() => {
            myPaper.classList.add("disabled");
            myRock.classList.add("disabled");
        }, 1500);
        
    }
    else if(jugada == "piedra"){
        myRock.classList.remove("disabled");
        myRock.classList.add("active");
        setTimeout(() => {
            myScissor.classList.add("disabled");
            myPaper.classList.add("disabled");
        }, 1500);
    }
    else if(jugada == "papel"){
        myPaper.classList.remove("disabled");
        myPaper.classList.add("active");
        setTimeout(() => {
            myScissor.classList.add("disabled");
            myRock.classList.add("disabled");
        }, 1500);
    }

setTimeout(() => {
    const computerMove = state.getState().currentGame.computerPlay;
    //console.log(computerMove);
    
    contadorEl.classList.add("invisible");
    enemyDiv.classList.add("active-enemy")

    if(computerMove == "tijera"){
        enemyScissor.classList.add("active-enemy");
        enemyPaper.classList.add("disabled");
        enemyRock.classList.add("disabled");
    }
    else if(computerMove == "piedra"){
        enemyRock.classList.add("active-enemy");
        enemyScissor.classList.add("disabled");
        enemyPaper.classList.add("disabled");
    }
    else if(computerMove == "papel"){
        enemyPaper.classList.add("active-enemy")
        enemyScissor.classList.add("disabled");
        enemyRock.classList.add("disabled");
    }
   //console.log(state.whoWins() + " soy el whowhins");
    
    setTimeout(()=>{
        params.goTo("/desafio-m5/scoreboard");
        },1500)
    
    }, 1500);
}
    div.appendChild(style);
    return div;
}