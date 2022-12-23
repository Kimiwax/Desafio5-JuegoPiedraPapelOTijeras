customElements.define(
    "comp-button",
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }


        render(){
            const shadow = this.attachShadow({mode:"open"});
            const button = document.createElement("button");
            const style = document.createElement("style");

            button.className = "custom-btn";

            style.innerHTML = `
            
                .custom-btn{
                    margin:50px 0 42px 0;
                    font-family: 'Josefin Sans', sans-serif;
                    font-weight:bold;
                    font-size: 25px;
                    color: #fff;
                    height: 70px;
                    width: 250px;
                    border: 3px solid #560090;
                    background-image: -webkit-linear-gradient(30deg, #560090 50%, #140021 50%);
                    background-image: linear-gradient(30deg, #560090 50%, #140021 50%);
                    background-size: 600px;
                    background-repeat: no-repeat;
                    background-position: 0%;
                    -webkit-transition: background 300ms ease-in-out;
                    transition: background 300ms ease-in-out;

                }
                .custom-btn:hover{
                    background-position: 100%;
                    color: #9900FF;
                  }
                
                  @media(min-width:768px){
                    .custom-btn{
                        margin:70px 0 42px 0;
                        font-family: 'Josefin Sans', sans-serif;
                        font-weight:bold;
                        font-size: 30px;
                        color: #fff;
                        height: 80px;
                        width: 300px;
                        border: 3px solid #560090;
                        background-image: -webkit-linear-gradient(30deg, #560090 50%, #140021 50%);
                        background-image: linear-gradient(30deg, #560090 50%, #140021 50%);
                        background-size: 800px;
                        background-repeat: no-repeat;
                        background-position: 0%;
                        -webkit-transition: background 300ms ease-in-out;
                        transition: background 300ms ease-in-out;
                  }
                
            `;

            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
            
        }

    }
    
)