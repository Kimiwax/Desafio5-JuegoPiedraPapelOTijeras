
import { state } from "../../state";
customElements.define(
    "comp-results",
    class Results extends HTMLElement {
        constructor(){
            super();
            this.render();

        }


        render(){
            const shadow = this.attachShadow({mode:"open"});
          
            const style = document.createElement("style");
          
            let currentWhoW = this.getAttribute('whow');
            
            if(state.whoWins() == "empate"){
                shadow.innerHTML = `
                <div class="results">
                    <h1 class="results-text">EMPATE</h1>
                </div>
            `;

            style.innerHTML = `
                .custom-results{
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                }
                .results{
                    margin-top:80px;
                    height:100px;
                    width:400px;
                    border: solid 5px white;
                    background-color:#FECD70;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    
                }
                .results-text{
                    text-align:center;
                    font-size:50px;
                }

                body{
                    background-color:#894949E5;
                    
                }

            `
            }
            else if(state.whoWins() == "victoria"){
                shadow.innerHTML = `
                <div class="results">
                    <h1 class="results-text">VICTORIA</h1>
                </div>
            `;

            style.innerHTML = `
                .custom-results{
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                }
                .results{
                    margin-top:80px;
                    height:100px;
                    width:400px;
                    border: solid 5px white;
                    background-color:#B6E2A1;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    
                }
                .results-text{
                    text-align:center;
                    font-size:50px;
                }

                body{
                    background-color:#894949E5;
                    
                }

            `
            }else if(state.whoWins() == "derrota"){
                shadow.innerHTML = `
                <div class="results">
                    <h1 class="results-text">DERROTA</h1>
                </div>
            `;

            style.innerHTML = `
                .custom-results{
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                }
                .results{
                    margin-top:80px;
                    height:100px;
                    width:400px;
                    border: solid 5px white;
                    background-color:#FD8A8A;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    
                }
                .results-text{
                    text-align:center;
                    font-size:50px;
                }

                body{
                    background-color:#894949E5;
                    
                }
            `
            }

            shadow.appendChild(style);
        }

    }
    
)