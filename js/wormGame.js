function comenzar(){
    let numJugadores = document.getElementById('numPlayers').value;
    document.getElementById('numPlayers').value = "Zero";

    let iconoPawn;
    let nodoPawn ;
    let lugar;

    for(let i = 1 ; i <= 4; i++){
        lugar = i.toString();    
        nodoPawn = document.getElementById(lugar);
        nodoPawn.innerHTML = "";
    }
    

    if(numJugadores != 0){
        for(let i = 1 ; i <= parseInt(numJugadores); i++){
            iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl");   
            
            lugar = i.toString();    
            nodoPawn = document.getElementById(lugar);
            
            if(i == 1){
                iconoPawn.classList.add("text-info");
            }else if(i == 2){
                iconoPawn.classList.add("text-success");
            }else if(i == 3){
                iconoPawn.classList.add("text-primary");
            }else if(i == 4){
                iconoPawn.classList.add("text-warning");
            }
            
            nodoPawn.appendChild(iconoPawn);

        }
    }
}

let cont = 0;
let palabrasTospell = ['ROUGH', 'JOKE', 'STRAWBERRY', 'WATERMELON', 'NAPKIN', 'SHELF'];
let spelling = ['AR - OU - IU - YI - EICH', 'YEI - OU - KEI - I'];

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

