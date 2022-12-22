type Jugadas = "piedra" | "papel" | "tijera";

const state = {
    data : {
        currentGame: {
            computerPlay: "",
            myPlay: "",
    },
    history:{
        myScore: 0,
        computerScore: 0,
    },
},

getStorage(){
    const local = JSON.parse(localStorage.getItem("data") as string);
    if(localStorage.getItem("data")){
        this.data.history = local;
    }
},

getState(){
    return this.data;
},

setState(newState){
    this.data = newState;
},

setMove(move: Jugadas){
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;

    currentState.currentGame.computerPlay = this.computerMove();
    //console.log(currentState.currentGame.computerPlay);
    
    this.pushHistory();
},

computerMove(){
    const move = ["piedra", "papel", "tijera"];
        return move[Math.floor(Math.random()*3)]
},

pushHistory(){
    const currentState = this.getState();
    const currentWinner = this.whoWins();

    const myScore = currentState.history.myScore;
    const enemyScore = currentState.history.computerScore;

    if(currentWinner == "victoria"){
        this.setState({
            ...currentState,
            history:{
                myScore: myScore + 1,
                computerScore: enemyScore,
            },

        });
    }
    else if(currentWinner == "derrota"){
        this.setState({
            ...currentState,
            history:{
                myScore: myScore,
                computerScore: enemyScore + 1,
            },

        });
    }
    this.savedData();
},

whoWins(){
    const currentState = this.getState();
    const jugadaElegida = currentState.currentGame;

    const ganeConTijeras = jugadaElegida.myPlay == "tijera" && jugadaElegida.computerPlay == "papel";
    const ganeConPiedra = jugadaElegida.myPlay == "piedra" && jugadaElegida.computerPlay == "tijera";
    const ganeConPapel = jugadaElegida.myPlay == "papel" && jugadaElegida.computerPlay == "piedra";

    const gane = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);

    const perdiConTijeras = jugadaElegida.myPlay == "tijera" && jugadaElegida.computerPlay == "piedra";
    const perdiConPiedra = jugadaElegida.myPlay == "piedra" && jugadaElegida.computerPlay == "papel";
    const perdiConPapel = jugadaElegida.myPlay == "papel" && jugadaElegida.computerPlay == "tijera";

    const perdi = [perdiConTijeras, perdiConPapel, perdiConPiedra].includes(true);

    const empate = [jugadaElegida.myPlay == "tijera" && jugadaElegida.computerPlay == "tijera",
    jugadaElegida.myPlay == "piedra" && jugadaElegida.computerPlay == "piedra",
    jugadaElegida.myPlay == "papel" && jugadaElegida.computerPlay == "papel"];

    if(gane){
        return "victoria";
    }
    else if(perdi){
        return "derrota";
    }
    else if (empate){
        return "empate";
    }

},

savedData(){
    const currentState = this.getState().history;
    localStorage.setItem("data", JSON.stringify(currentState));
},

cleanData(){
    localStorage.setItem("data", JSON.stringify({myScore: 0, computerScore: 0})
    );
 }

}

export{state};
