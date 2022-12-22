import { parse } from "path";

customElements.define(
    "comp-countdown",
    class CountDown extends HTMLElement {
        constructor(){
            super();
            this.render();
        }


        render(){
            const shadow = this.attachShadow({mode:"open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.setAttribute("id", "countdown");

            div.classList.add("custom-countdown");
        

                style.innerHTML = `
                .custom-countdown {
                    font-size:60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top:50px;
                    margin-bottom:50px;
                    border: 8px solid rgba(0, 0, 0, 0.1);
                    width: 86px;
                    height: 86px;
                    border-radius: 50%;
                    border-left-color: #9900FF;

                    animation: spin 1s ease infinite;
                }
                
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                    
                `;
                
                //<circle r="18" cx="20" cy="20"></circle>
                let counter = 3;

                const invervalId = setInterval(()=>{
                  div.innerHTML = `
                  <div class="countdown-number">${counter}</div>
        
              `
                    counter--;
                    if(counter < 0){
                      clearInterval(invervalId);
                    }
                },1000)
                
            
                shadow.appendChild(div);
                shadow.appendChild(style);
           
           
            }

    }
    
)