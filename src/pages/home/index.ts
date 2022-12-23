
export function initHome(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    div.classList.add("container-home");
    div.innerHTML = `
        <h1>Piedra Papel o Tijera</h1>
        <comp-button class="btn-c"><span>EMPEZAR</span></comp-button>
        <div class="div-componentes">
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
        .div-componentes{
            margin-top:25px;
        }
    h1{
        font-size: 70px;
        width: 300px;
        text-align:center;
        margin-bottom:0px;
    }

    @media(min-width:768px){
        h1{
            margin-top:90px;
           width:300px;
           font-size: 70px;
           margin-bottom:0px;
        }
    }
    @media(min-width:768px){
        .div-componentes{
            margin-top:60px;
        }
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