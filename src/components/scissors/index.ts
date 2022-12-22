customElements.define(
    "comp-scissors",
    class Scissors extends HTMLElement {
        constructor(){
            super();
            this.render();
        }


        render(){
            const img = require("url:../../resources/tijera.svg")
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style");
            shadow.innerHTML = `
                <img class="scissors" src="${img}">
            `;

            style.innerHTML = `
                .scissors{
                    height:200px;
                }
            `

            shadow.appendChild(style);
        }

    }
    
)