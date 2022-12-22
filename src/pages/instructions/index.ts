export function initInstructions(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    div.classList.add("container-instructions");

    div.innerHTML = `
        <h4>Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h4>
        <comp-button class="btn-jugar"><span>Jugar</span></comp-button>
        <div>
        <comp-scissors></comp-scissors>
        <comp-rock></comp-rock>
        <comp-paper></comp-paper>
        </div>
    `;

    style.innerHTML = `
    .container-instructions{
        display:flex;
        align-items: center;
        flex-direction:column;
    }

    h4{
        margin:30px;
        width: 193px;
        font-size: 30px;
        text-align: center;
    }
    
`;  

div.appendChild(style);

const button = div.querySelector(".btn-jugar") as Element;
    button.addEventListener('click', ()=>{
        params.goTo("/play");
    })

    return div
}