import { initRouter } from "./router";
import { initHome } from "./pages/home";
import "./components/button";
import "./components/scissors";
import "./components/rock";
import "./components/paper";
import "./components/countdown";
import "./components/results";
import { state } from "./state";


(function(){
    const root = document.querySelector(".root");
    initRouter(root as HTMLElement);

})();


