let turn = 1;
let cont = 0;
let indice1 = 0;
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

        if(jugadorPar > 20){
            jugadorPar -= steps;
            alert("the die number exceeds the number of steps missing to the end, try again in another turn!");
        }else if(jugadorImpar == 20){
            alert("Congratulations, you are the winner!");
        }

        let old_iconSpace = document.getElementById(jugadorPar + 'b');
        let casilla = document.getElementById(""+jugadorPar+"");
        let new_iconSpace = document.createElement('div');
        new_iconSpace.classList.add("col-2");
        new_iconSpace.id = jugadorPar + 'b';
        let iconoPawn = document.createElement('i');
        iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-success");
        new_iconSpace.appendChild(iconoPawn);
        casilla.replaceChild(new_iconSpace, old_iconSpace);
        document.getElementById("b").innerHTML = "";

        let spaceBefore =jugadorPar - steps;
        
        if(cont > 2){
            document.getElementById(spaceBefore + 'b').innerHTML = "";
        }             
        
    }else{
        jugadorImpar += steps;

        if(jugadorImpar > 20){
            jugadorImpar -= steps;
            alert("the die number exceeds the number of steps missing to the end, try again in another turn!");
        }else if(jugadorImpar == 20){
            alert("Congratulations, you are the winner!");
        }


        let old_iconSpace = document.getElementById(jugadorImpar + 'a');
        let casilla = document.getElementById(""+jugadorImpar+"");
        let new_iconSpace = document.createElement('div');
        new_iconSpace.classList.add("col-2");
        new_iconSpace.id = jugadorImpar + 'a';
        let iconoPawn = document.createElement('i');
        iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-info");
        new_iconSpace.appendChild(iconoPawn);
        casilla.replaceChild(new_iconSpace, old_iconSpace);
        document.getElementById("a").innerHTML = "";

        let spaceBefore =jugadorImpar - steps; 

        if(cont > 1){
            document.getElementById(spaceBefore + 'a').innerHTML = "";
        }

    }
}


function drill(clue, number){

    if(clue == 'spelling'){
        let ejercicio = document.createElement('div');
        ejercicio.id = 'casilla'+number;
        ejercicio.classList.add("col-2", "bg-info-subtle", "text-center", "py-5");
        let nodoEje = document.createTextNode('How do you spell '+palabrasTospell[indice1] + '?');
        

        ejercicio.appendChild(nodoEje);

        let answer = document.createElement('button');
        answer.classList.add("btn", "btn-success");

        let nodoAnswer = document.createTextNode('Answer');
        answer.appendChild(nodoAnswer);
        ejercicio.appendChild(answer);

        let cover = document.getElementById('casilla'+number);

        steps.replaceChild(ejercicio, cover);

        indice1++;
        
    }else if(clue == 'vocabulary'){

    }else if(clue == 'grammar'){

    }else if(clue == 'listening'){

    }
}

