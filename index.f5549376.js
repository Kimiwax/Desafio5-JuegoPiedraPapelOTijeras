function n(n,e,t,s){Object.defineProperty(n,e,{get:t,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequire0cf3;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in s){var e=s[n];delete s[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){s[n]=e},e.parcelRequire0cf3=i),i.register("27Lyk",(function(e,t){var s,i;n(e.exports,"register",(()=>s),(n=>s=n)),n(e.exports,"resolve",(()=>i),(n=>i=n));var o={};s=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)o[e[t]]=n[e[t]]},i=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i.register("iAw9S",(function(n,e){n.exports=new URL(i("27Lyk").resolve("lvx9k"),import.meta.url).toString()})),i.register("ff77G",(function(n,e){n.exports=new URL(i("27Lyk").resolve("g7CE3"),import.meta.url).toString()})),i.register("izcPi",(function(n,e){n.exports=new URL(i("27Lyk").resolve("fWTWK"),import.meta.url).toString()})),i("27Lyk").register(JSON.parse('{"dZpbI":"index.f5549376.js","lvx9k":"tijera.6a2fdda1.svg","g7CE3":"piedra.c88f7ccf.svg","fWTWK":"papel.5f79bbf0.svg"}'));const o={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},getStorage(){const n=JSON.parse(localStorage.getItem("data"));localStorage.getItem("data")&&(this.data.history=n)},getState(){return this.data},setState(n){this.data=n},setMove(n){const e=this.getState();e.currentGame.myPlay=n,e.currentGame.computerPlay=this.computerMove(),this.pushHistory()},computerMove:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())],pushHistory(){const n=this.getState(),e=this.whoWins(),t=n.history.myScore,s=n.history.computerScore;"victoria"==e?this.setState({...n,history:{myScore:t+1,computerScore:s}}):"derrota"==e&&this.setState({...n,history:{myScore:t,computerScore:s+1}}),this.savedData()},whoWins(){const n=this.getState().currentGame,e=["tijera"==n.myPlay&&"papel"==n.computerPlay,"piedra"==n.myPlay&&"tijera"==n.computerPlay,"papel"==n.myPlay&&"piedra"==n.computerPlay].includes(!0),t="tijera"==n.myPlay&&"piedra"==n.computerPlay,s="piedra"==n.myPlay&&"papel"==n.computerPlay,i=[t,"papel"==n.myPlay&&"tijera"==n.computerPlay,s].includes(!0),o=["tijera"==n.myPlay&&"tijera"==n.computerPlay,"piedra"==n.myPlay&&"piedra"==n.computerPlay,"papel"==n.myPlay&&"papel"==n.computerPlay];return e?"victoria":i?"derrota":o?"empate":void 0},savedData(){const n=this.getState().history;localStorage.setItem("data",JSON.stringify(n))},cleanData(){localStorage.setItem("data",JSON.stringify({myScore:0,computerScore:0}))}};const r=[{path:/\/home/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return e.classList.add("container-home"),e.innerHTML='\n        <h1>Piedra Papel o Tijera</h1>\n        <comp-button class="btn-c"><span>EMPEZAR</span></comp-button>\n        <div class="div-componentes">\n        <comp-scissors></comp-scissors>\n        <comp-rock></comp-rock>\n        <comp-paper></comp-paper>\n        </div>\n    ',t.innerHTML="\n        .container-home{\n            display:flex;\n            align-items: center;\n            flex-direction:column;\n        }\n        .div-componentes{\n            margin-top:25px;\n        }\n    h1{\n        font-size: 70px;\n        width: 300px;\n        text-align:center;\n        margin-bottom:0px;\n    }\n\n    @media(min-width:768px){\n        h1{\n            margin-top:90px;\n           width:300px;\n           font-size: 70px;\n           margin-bottom:0px;\n        }\n    }\n    @media(min-width:768px){\n        .div-componentes{\n            margin-top:60px;\n        }\n    }\n        \n    ",e.querySelector(".btn-c").addEventListener("click",(()=>{n.goTo("/desafio-m5/instructions")})),e.appendChild(t),e}},{path:/\/instructions/,component:function(n){o.getStorage();const e=document.createElement("div"),t=document.createElement("style");return e.classList.add("container-instructions"),e.innerHTML='\n        <h4>Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h4>\n        <comp-button class="btn-jugar"><span>Jugar</span></comp-button>\n        <div>\n        <comp-scissors></comp-scissors>\n        <comp-rock></comp-rock>\n        <comp-paper></comp-paper>\n        </div>\n    ',t.innerHTML="\n    .container-instructions{\n        display:flex;\n        align-items: center;\n        flex-direction:column;\n    }\n\n    h4{\n        margin:30px;\n        width: 193px;\n        font-size: 30px;\n        text-align: center;\n    }\n    @media(min-width:768px){\n        h4{\n            margin-top:60px;\n            width:400px;\n            font-size:40px;\n            margin-bottom:0px;\n        }\n    }\n    @media(min-width:768px){\n        .btn-jugar{\n            margin-bottom:30px;\n            margin-top:0px;\n        }\n    }\n    \n",e.appendChild(t),e.querySelector(".btn-jugar").addEventListener("click",(()=>{n.goTo("/desafio-m5/play")})),e}},{path:/\/play/,component:function(n){const e=document.createElement("div");e.classList.add("container-game");const t=document.createElement("style");let s=3;const i=setInterval((()=>{s--,s<0&&(clearInterval(i),n.goTo("/desafio-m5/instructions"))}),1e3);e.innerHTML='\n        <div class="enemy-plays">\n        <comp-scissors class="enemy-scissor"></comp-scissors>\n        <comp-rock class="enemy-rock"></comp-rock>\n        <comp-paper class="enemy-paper"></comp-paper>\n        </div>\n\n        <div class="spinner">\n        <comp-countdown class="contador"></comp-countdown>\n        </div>\n\n        <div class="my-plays">\n        <comp-scissors class="my-scissor"></comp-scissors>\n        <comp-rock class="my-rock"></comp-rock>\n        <comp-paper class="my-paper"></comp-paper>\n        </div>\n    ',t.innerHTML="\n    .container-game{\n        display:flex;\n        align-items: center;\n        flex-direction:column;\n    }\n\n    .spinner{\n        display: flex;\n        align-items: center;\n        flex-direction:column;\n    \n    }\n    .my-scissor{\n        opacity: 60%;\n    }\n    .my-scissor:hover{\n        opacity: 100%;\n        height:200px;\n    }\n    .my-rock{\n        opacity: 60%;\n    }\n    .my-rock:hover{\n        opacity: 100%;\n    }\n    .my-paper{\n        opacity: 60%;\n    }\n    .my-paper:hover{\n        opacity: 100%;\n    }\n    .enemy-plays{\n        transform: rotate(180deg);\n        visibility:hidden;\n    }\n    .disabled{\n        display:none;\n    }\n    .active{ \n        display:block;\n        visibility:visible;\n        opacity:100%;\n    }\n    .active-enemy{\n        display:flex;\n        visibility:visible;\n    }\n    .invisible{\n        visibility:hidden;\n    }\n    \n";const r=e.querySelector(".contador"),a=e.querySelector(".my-plays").children,c=(e.querySelector(".my-plays"),e.querySelector(".enemy-plays")),l=e.querySelector(".my-scissor"),d=e.querySelector(".my-paper"),p=e.querySelector(".my-rock"),m=e.querySelector(".enemy-scissor"),u=e.querySelector(".enemy-paper"),h=e.querySelector(".enemy-rock");for(const n of a)n.addEventListener("click",(()=>{const e=n.getAttribute("class");clearInterval(i),"my-scissor"==e?(o.setMove("tijera"),g("tijera")):"my-rock"==e?(o.setMove("piedra"),g("piedra")):"my-paper"==e&&(o.setMove("papel"),g("papel"))}));function g(e){for(const n of a)n.classList.add("disabled");"tijera"==e?(l.classList.remove("disabled"),l.classList.add("active"),setTimeout((()=>{d.classList.add("disabled"),p.classList.add("disabled")}),1500)):"piedra"==e?(p.classList.remove("disabled"),p.classList.add("active"),setTimeout((()=>{l.classList.add("disabled"),d.classList.add("disabled")}),1500)):"papel"==e&&(d.classList.remove("disabled"),d.classList.add("active"),setTimeout((()=>{l.classList.add("disabled"),p.classList.add("disabled")}),1500)),setTimeout((()=>{const e=o.getState().currentGame.computerPlay;r.classList.add("invisible"),c.classList.add("active-enemy"),"tijera"==e?(m.classList.add("active-enemy"),u.classList.add("disabled"),h.classList.add("disabled")):"piedra"==e?(h.classList.add("active-enemy"),m.classList.add("disabled"),u.classList.add("disabled")):"papel"==e&&(u.classList.add("active-enemy"),m.classList.add("disabled"),h.classList.add("disabled")),setTimeout((()=>{n.goTo("/desafio-m5/scoreboard")}),1500)}),1500)}return e.appendChild(t),e}},{path:/\/scoreboard/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");o.whoWins();const s=o.getState();let i=s.history.myScore,r=s.history.computerScore;return e.classList.add("container-scores"),e.innerHTML=`\n        <button class="btn-reset"><span class="material-symbols-outlined">\n        restart_alt\n        </span></button>\n        <div>\n        <comp-results whow="winner"></comp-results>\n        </div>\n        <div class="scores">\n                    <h2 class="h2-puntaje">PUNTAJES<h2>\n                    <h4 class="h4-tu">Vos: ${i}<h4>\n                    <h4 class="h4-enemigo">Máquina: ${r}<h4>\n                    </div>\n        <comp-button class="btn-jugar"><span>Volver a Jugar</span></comp-button>\n    `,t.innerHTML="\n    .btn-reset{\n        background:white;\n        border:solid 3px #560090;\n        border-radius: 20%;\n        margin-left: 300px;\n        margin-top: 5px;\n    }\n    results{\n            background-color:black;\n    \n    }\n    .container-scores{\n        display:flex;\n        align-items: center;\n        flex-direction:column;\n    }\n    \n\n    .h2-puntaje{\n        text-align:center;\n        color:black;\n        font-size:30px;\n        font-weight: bold;\n    }\n    .h4-tu{\n        text-align:right;\n        padding-right: 80px;\n        color:black;\n    }\n    .h4-enemigo{\n        text-align:right;\n        padding-right: 80px;\n        color:black;\n    }\n    .custom-results{\n        display:flex;\n        flex-direction: column;\n        align-items:center;\n    }\n    .scores{\n        margin-top:30px;\n        width: 300px;\n        border: solid 8px #560090;\n        background-color:white;\n    }\n    .results-text{\n        text-align:center;\n        font-size:50px;\n    }\n    \n",e.appendChild(t),e.querySelector(".btn-jugar").addEventListener("click",(()=>{n.goTo("/desafio-m5/play")})),e.querySelector(".btn-reset").addEventListener("click",(()=>{o.cleanData(),o.getStorage(),n.goTo("/desafio-m5/home")})),e}}],a="/desafio-m5";function c(){return location.host.includes("github.io")}customElements.define("comp-button",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=document.createElement("style");e.className="custom-btn",t.innerHTML="\n            \n                .custom-btn{\n                    margin:50px 0 42px 0;\n                    font-family: 'Josefin Sans', sans-serif;\n                    font-weight:bold;\n                    font-size: 25px;\n                    color: #fff;\n                    height: 70px;\n                    width: 250px;\n                    border: 3px solid #560090;\n                    background-image: -webkit-linear-gradient(30deg, #560090 50%, #140021 50%);\n                    background-image: linear-gradient(30deg, #560090 50%, #140021 50%);\n                    background-size: 600px;\n                    background-repeat: no-repeat;\n                    background-position: 0%;\n                    -webkit-transition: background 300ms ease-in-out;\n                    transition: background 300ms ease-in-out;\n\n                }\n                .custom-btn:hover{\n                    background-position: 100%;\n                    color: #9900FF;\n                  }\n                \n                  @media(min-width:768px){\n                    .custom-btn{\n                        margin:70px 0 42px 0;\n                        font-family: 'Josefin Sans', sans-serif;\n                        font-weight:bold;\n                        font-size: 30px;\n                        color: #fff;\n                        height: 80px;\n                        width: 300px;\n                        border: 3px solid #560090;\n                        background-image: -webkit-linear-gradient(30deg, #560090 50%, #140021 50%);\n                        background-image: linear-gradient(30deg, #560090 50%, #140021 50%);\n                        background-size: 800px;\n                        background-repeat: no-repeat;\n                        background-position: 0%;\n                        -webkit-transition: background 300ms ease-in-out;\n                        transition: background 300ms ease-in-out;\n                  }\n                \n            ",e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}),customElements.define("comp-scissors",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=i("iAw9S"),e=this.attachShadow({mode:"open"}),t=document.createElement("style");e.innerHTML=`\n                <img class="scissors" src="${n}">\n            `,t.innerHTML="\n                .scissors{\n                    height:200px;\n                }\n                @media(min-width:768px){\n                    .scissors{\n                        height:250px;\n                    }\n                }\n            ",e.appendChild(t)}}),customElements.define("comp-rock",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=i("ff77G"),e=this.attachShadow({mode:"open"}),t=document.createElement("style");e.innerHTML=`\n                <img class="rock" src="${n}">\n            `,t.innerHTML="\n                .rock{\n                    height:200px;\n                }\n                @media(min-width:768px){\n                    .rock{\n                        height:250px;\n                    }\n                }\n            ",e.appendChild(t)}}),customElements.define("comp-paper",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=i("izcPi"),e=this.attachShadow({mode:"open"}),t=document.createElement("style");e.innerHTML=`\n                <img class="paper" src="${n}">\n            `,t.innerHTML="\n                .paper{\n                    height:200px;\n                }\n                @media(min-width:768px){\n                    .paper{\n                        height:250px;\n                    }\n                }\n            ",e.appendChild(t)}}),customElements.define("comp-countdown",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");e.setAttribute("id","countdown"),e.classList.add("custom-countdown"),t.innerHTML="\n                .custom-countdown {\n                    font-size:60px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    margin-top:50px;\n                    margin-bottom:50px;\n                    border: 8px solid rgba(0, 0, 0, 0.1);\n                    width: 86px;\n                    height: 86px;\n                    border-radius: 50%;\n                    border-left-color: #9900FF;\n\n                    animation: spin 1s ease infinite;\n                }\n                \n                @keyframes spin {\n                  0% {\n                    transform: rotate(0deg);\n                  }\n                  100% {\n                    transform: rotate(360deg);\n                  }\n                    \n                ";let s=3;const i=setInterval((()=>{e.innerHTML=`\n                  <div class="countdown-number">${s}</div>\n        \n              `,s--,s<0&&clearInterval(i)}),1e3);n.appendChild(e),n.appendChild(t)}}),customElements.define("comp-results",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("style");this.getAttribute("whow");"empate"==o.whoWins()?(n.innerHTML='\n                <div class="results">\n                    <h1 class="results-text">EMPATE</h1>\n                </div>\n            ',e.innerHTML="\n                .custom-results{\n                    display:flex;\n                    flex-direction: column;\n                    align-items:center;\n                }\n                .results{\n                    margin-top:80px;\n                    height:100px;\n                    width:320px;\n                    border: solid 5px white;\n                    background-color:#FECD70;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    \n                }\n                .results-text{\n                    text-align:center;\n                    font-size:50px;\n                }\n\n                body{\n                    background-color:#894949E5;\n                }\n                @media(min-width:768px){\n                    .results{\n                        margin-top:80px;\n                    height:100px;\n                    width:400px;\n                    border: solid 5px white;\n                    background-color:#FECD70;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    }\n                }\n\n            "):"victoria"==o.whoWins()?(n.innerHTML='\n                <div class="results">\n                    <h1 class="results-text">VICTORIA</h1>\n                </div>\n            ',e.innerHTML="\n                .custom-results{\n                    display:flex;\n                    flex-direction: column;\n                    align-items:center;\n                }\n                .results{\n                    margin-top:80px;\n                    height:100px;\n                    width:320px;\n                    border: solid 5px white;\n                    background-color:#B6E2A1;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    \n                }\n                .results-text{\n                    text-align:center;\n                    font-size:50px;\n                }\n\n                body{\n                    background-color:#894949E5;\n                    \n                }\n\n                @media(min-width:768px){\n                    .results{\n                        margin-top:80px;\n                    height:100px;\n                    width:400px;\n                    border: solid 5px white;\n                    background-color:#B6E2A1;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    }\n                }\n\n            "):"derrota"==o.whoWins()&&(n.innerHTML='\n                <div class="results">\n                    <h1 class="results-text">DERROTA</h1>\n                </div>\n            ',e.innerHTML="\n                .custom-results{\n                    display:flex;\n                    flex-direction: column;\n                    align-items:center;\n                }\n                .results{\n                    margin-top:80px;\n                    height:100px;\n                    width:320px;\n                    border: solid 5px white;\n                    background-color:#FD8A8A;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    \n                }\n                .results-text{\n                    text-align:center;\n                    font-size:50px;\n                }\n\n                body{\n                    background-color:#894949E5;\n                }\n                @media(min-width:768px){\n                    .results{\n                        margin-top:80px;\n                    height:100px;\n                    width:400px;\n                    border: solid 5px white;\n                    background-color:#FD8A8A;\n                    display:flex;\n                    align-items:center;\n                    justify-content:center;\n                    }\n                }\n            "),n.appendChild(e)}}),function(n){function e(n){const e=c()?a+n:n;history.pushState({},"",n),t(e)}function t(t){const s=c()?t.replace(a,""):t;for(const t of r)if(t.path.test(s)){const s=t.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(s)}}"/"==location.pathname||location.host.includes("github.io")?e("/desafio-m5/home"):t(location.pathname),window.onpopstate=()=>{t(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.f5549376.js.map
