
export function initHome(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    div.classList.add("container-home");
    div.innerHTML = `
        <h1>Piedra Papel o Tijera</h1>
        <comp-button class="btn-c"><span>Empezar</span></comp-button>
        <div>
        <comp-scissors></comp-scissors>
        <comp-rock></comp-rock>
        <comp-paper></comp-paper>
        </div>
    `;
    style.innerHTML = `
        .container-home{
            display:flex;
            align-items: center;
            flex-direction:column;
        }
    btn-c{
       
    }
    h1{
        margin-top:100px;
    }
        
    `

    const button = div.querySelector(".btn-c") as Element;
    button.addEventListener('click', ()=>{
        params.goTo("/instructions");
    })
    div.appendChild(style);
    return div;
}



class HomePage extends Element {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <my-play play="piedra">
        `
    }
}