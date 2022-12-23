customElements.define(
    "comp-paper",
    class Paper extends HTMLElement {
        constructor(){
            super();
            this.render();
        }


        render(){
            const img = require("url:../../resources/papel.svg")
            const shadow = this.attachShadow({mode:"open"});
            const style = document.createElement("style");

            shadow.innerHTML = `
                <img class="paper" src="${img}">
            `;

            style.innerHTML = `
                .paper{
                    height:200px;
                }
                @media(min-width:768px){
                    .paper{
                        height:250px;
                    }
                }
            `

            shadow.appendChild(style);
        }

    }
    
)