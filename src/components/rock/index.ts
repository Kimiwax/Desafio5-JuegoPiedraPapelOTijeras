customElements.define(
    "comp-rock",
    class Rock extends HTMLElement {
        constructor(){
            super();
            this.render();
        }


        render(){
            const img = require("url:../../resources/piedra.svg")
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style");
            shadow.innerHTML = `
                <img class="rock" src="${img}">
            `;

            style.innerHTML = `
                .rock{
                    height:200px;
                }
                @media(min-width:768px){
                    .rock{
                        height:250px;
                    }
                }
            `

            shadow.appendChild(style);
        }

    }
    
)