import { text } from "stream/consumers";
import {state} from "../../state";

export function initScores(params){
    const div = document.createElement("div");
    const style = document.createElement("style");
    var resultado = state.whoWins();
    console.log(resultado + " soy el score");
    
    const currentState = state.getState();
    let miPuntaje = currentState.history.myScore;
    let rivalPuntaje = currentState.history.computerScore;

    div.classList.add("container-scores");

    

        div.innerHTML = `
        <div>
        <comp-results whow="winner"></comp-results>
        </div>
        <div class="scores">
                    <h2 class="h2-puntaje">PUNTAJES<h2>
                    <h4 class="h4-tu">Vos: ${miPuntaje}<h4>
                    <h4 class="h4-enemigo">Máquina: ${rivalPuntaje}<h4>
                    </div>
        <comp-button class="btn-jugar"><span>Volver a Jugar</span></comp-button>
    `;

    style.innerHTML = `
    results{
            background-color:black;
    
    }
    .container-scores{
        display:flex;
        align-items: center;
        flex-direction:column;
    }

    .h2-puntaje{
        text-align:center;
        color:black;
        font-size:30px;
        font-weight: bold;
    }
    .h4-tu{
        text-align:right;
        padding-right: 80px;
        color:black;
    }
    .h4-enemigo{
        text-align:right;
        padding-right: 80px;
        color:black;
    }
    .custom-results{
        display:flex;
        flex-direction: column;
        align-items:center;
    }
    .scores{
        margin-top:30px;
        width: 300px;
        border: solid 8px #560090;
        background-color:white;
    }
    .results-text{
        text-align:center;
        font-size:50px;
    }
    
`;  

div.appendChild(style);


const button = div.querySelector(".btn-jugar") as Element;
    button.addEventListener('click', ()=>{
        params.goTo("/play");
    })

    return div
}