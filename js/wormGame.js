let turn = 1;
let cont = 0;
let palabrasTospell = ['ROUGH', 'JOKE', 'STRAWBERRY', 'WATERMELON', 'NAPKIN', 'SHELF'];
let spelling = ['AR - OU - IU - YI - EICH', 'YEI - OU - KEI - I'];
let jugadorImpar = 0;
let jugadorPar = 0;

function comenzar(){
    let numJugadores = document.getElementById('numPlayers').value;
    document.getElementById('numPlayers').value = "Zero";

    let iconoPawn;
    let nodoPawn ;
    let lugar = 'a';

    for(let i = 1 ; i <= 2; i++){

        nodoPawn = document.getElementById(lugar);
        lugar = 'b';
        nodoPawn.innerHTML = "";
    }
    

    if(numJugadores != 0){
        lugar = 'a';
        for(let i = 1 ; i <= parseInt(numJugadores); i++){
            iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl");
             
            nodoPawn = document.getElementById(lugar);
            
            if(i == 1){
                iconoPawn.classList.add("text-info");
                lugar = 'b';
            }else if(i == 2){
                iconoPawn.classList.add("text-success");
            }
            
            nodoPawn.appendChild(iconoPawn);

        }

    }
}

function getSteps(){

    let steps = Math.floor(Math.random() * 6) + 1;
    let numEscogido = document.getElementById('randomNum');
    let oldDie = document.getElementById('dadoVisto');

    let newDie = document.createElement('i');

    if(steps == 1){
            
        newDie.classList.add("fa-solid", "fa-dice-one", "fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }else if(steps == 2){
        newDie.classList.add("fa-solid", "fa-dice-two" ,"fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }else if(steps == 3){
        newDie.classList.add("fa-solid", "fa-dice-three" ,"fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }else if(steps == 4){
        newDie.classList.add("fa-solid", "fa-dice-four" ,"fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }else if(steps == 5){
        newDie.classList.add("fa-solid", "fa-dice-five" ,"fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }else if(steps == 6){
        newDie.classList.add("fa-solid", "fa-dice-six" ,"fs-1", "pb-2");
        newDie.id = 'dadoVisto';

        numEscogido.replaceChild(newDie, oldDie);
    }

    if(turn % 2 == 0){
        newDie.classList.add("text-success");
    }else{
        newDie.classList.add("text-info");
    }

    turn++;   
    move(steps);
}

function move(steps){
    cont++;
        
    if(cont % 2 == 0){
        jugadorPar += steps;
        let casilla = document.getElementById(""+jugadorPar+"");
        let iconoPawn = document.createElement('i');
        iconoPawn.id = cont;
        iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-success");
        casilla.appendChild(iconoPawn);
        document.getElementById("b").innerHTML = "";

        
        
    }else{
        jugadorImpar += steps;
        let casilla = document.getElementById(""+jugadorImpar+"");
        let iconoPawn = document.createElement('i');
        iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-info");
        casilla.appendChild(iconoPawn);
        document.getElementById("a").innerHTML = "";

    }
}


function drill(clue){

    

    if(clue == 'a'){
        let ejercicio = document.createElement('div');
        ejercicio.id = 'ejercicioSpelling';
        ejercicio.classList.add("col-2", "bg-info-subtle", "text-center", "py-5");
        let nodoEje = document.createTextNode('How do you spell '+palabrasTospell[cont] + '?');
        

        ejercicio.appendChild(nodoEje);

        let answer = document.createElement('button');
        answer.classList.add("btn", "btn-success");

        let nodoAnswer = document.createTextNode('Answer');
        answer.appendChild(nodoAnswer);
        ejercicio.appendChild(answer);

        let steps = document.getElementById('casillas');
        let cover = document.getElementById(clue);

        steps.replaceChild(ejercicio, cover);

        cont ++;
        
    }
}

