let turn = 1;
let cont = 0;
let indice1 = 0;
let palabrasTospell = ['ROUGH', 'JOKE', 'STRAWBERRY', 'WATERMELON', 'NAPKIN', 'EXAM', 'GUEST', 'ZUCCHINI', 'WATER', 'JULY'];
let spelling = ['/AR/ - /OU/ - /IU/ - /YI/ - /EICH/', '/YEI/ - /OU/ - /KEI/ - /I/', '/ES/ - /TI/ - /AR/ - /DABLIU/ - /BI/ - /I/ - /AR/ - /AR/ - /WAY/', '/DABLIU/ - /EI/ - /TI/ - /I/ - /AR/ - /EM/ - /I/ - /EL/ - /OU/ - /EN/', '/EN/ - /EI/ - /PI/ - /KEY/ - /AI/ - /EN/',  ' /I/ - /EKS/ - /AI/ - /EM/]', '/YI/ - /IU/ - /I/ - /ES/ - /TI/', '/ZI/ - /IU/ - /CI/ - /CI/ - /EICH/ - /AI/ - /EN/ - /AI/', '/DABLIU/ - /EI/ - /TI/ - /I/ - /AR/', '/YEI/ - /IU/ - /EL/ - /WAY/'];
let vocabulary = ['CEJAS', 'SACAPUNTAS', 'TRECE','RELOJ DE PARED', 'BEAUTIFUL', 'EASY', ''];
const wordsVideo1 = ['everybody','celebratio','toast','sock','mom', 'lunch','town','gosh','baby','ground', 'attention', 'mommy','god','sake'];
let score = 0;
let attempts = 7;
const usedWords = new Set();
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


function drill(clue){
    
    document.getElementById("answer").innerHTML="";
    document.getElementById("pregunta").innerHTML="";
    document.getElementById('old_boton').innerHTML="";
    

    let buttonAnswer = document.getElementById('answerRequest');
    let oldBoton = document.getElementById('old_boton');

    let boton = document.createElement('button');
    boton.id = 'old_boton'
    boton.classList.add("btn", "btn-success");
    boton.setAttribute("onclick","rightAnswer('"+ clue +"')");

    let nodoBoton = document.createTextNode('Check Answer');
    boton.appendChild(nodoBoton);
    

    let bodyModal = document.getElementById('bodyModal');
    let ejercicioDisplay = document.getElementById('pregunta');
    let ejercicio = document.createElement('div');
    let pregunta = document.createElement('p');
    ejercicio.id = 'pregunta';
    ejercicio.classList.add("row", "text-center", "py-5");

    if(clue == 'spelling'){      
        
        
        let nodoEje = document.createTextNode('How do you spell '+palabrasTospell[indice1] + '?');
        pregunta.appendChild(nodoEje);
        ejercicio.appendChild(pregunta);  
        bodyModal.replaceChild(ejercicio, ejercicioDisplay);
        buttonAnswer.replaceChild(boton, oldBoton);        

        indice1++;
        
    }else if(clue == 'vocabulary'){
        


    }else if(clue == 'grammar'){

    }else if(clue == 'listening'){
        let video = document.createElement('div');
        video.classList.add("col-5");
        video.id='listeningVideo';

        let iframe = document.createElement("iframe");
        iframe.height="300px";
        iframe.src = "https://www.youtube.com/embed/So-EvKIYvpQ";
        video.appendChild(iframe);

        let palabras = document.createElement('div');
        palabras.classList.add("col");
        palabras.classList.add('m-5');

        let entrada = document.createElement('div');
        entrada.classList.add("row");

        let colEntrada=document.createElement('div');
        colEntrada.classList.add("col");
        colEntrada.id = 'listeningWords';

        

        let progress = document.createElement('div');
        progress.classList.add("row","my-5");
        progress.id = 'progressDisplay';
        

        let input = document.createElement('input');
        input.type = "text";
        input.id = "wordInput";
        input.placeholder = "Insert a word";
        input.classList.add('me-3');

        colEntrada.appendChild(input);
        colEntrada.appendChild(boton);
        entrada.appendChild(colEntrada);

        let text1 = document.createElement('p');
        text1.classList.add('text-center');
        let nodotext1 = document.createTextNode('Puntos Ganados: ');
        let spanText1 = document.createElement('span');
        spanText1.id = 'score';
        spanText1.textContent= '0'
        text1.appendChild(nodotext1);
        text1.appendChild(spanText1);

        let text2 = document.createElement('p');
        text2.classList.add('text-center');
        let nodotext2 = document.createTextNode('Intentos Restantes: ');
        let spanText2 = document.createElement('span');
        spanText2.id = 'attempts';
        spanText2.textContent= '7'
        text2.appendChild(nodotext2);
        text2.appendChild(spanText2);

        progress.appendChild(text1);
        progress.appendChild(text2);

        palabras.appendChild(entrada);
        palabras.appendChild(progress);

        ejercicioDisplay.appendChild(video);
        ejercicioDisplay.appendChild(palabras);

        let Outcome = document.createElement('h4');
        Outcome.id = 'outcome';
        Outcome.classList.add('text-center');
        let nodoOutcome = document.createTextNode('Get at least 5 right words from the video, you have 7 attempts!')
        Outcome.appendChild(nodoOutcome);
        let results = document.getElementById('Results');
        results.replaceChild(Outcome, buttonAnswer);

    }
}

function rightAnswer(clue){

    console.log(clue);
    if(clue == 'spelling'){
        let old_answer = document.getElementById('answer');
        let showAnswer = document.getElementById('mostrarRespuesta'); 

        let new_answer = document.createElement('div');
        new_answer.classList.add("col","text-center");
        new_answer.id = 'answer';
        let text = document.createElement('p');
        let nodoText = document.createTextNode(spelling[indice1-1]);
        text.appendChild(nodoText);
        new_answer.appendChild(text);
        showAnswer.replaceChild(new_answer, old_answer);

   
    }else if(clue == 'vocabulary'){
        


    }else if(clue == 'grammar'){

    }else if(clue == 'listening'){
        
        event.preventDefault(); 

        const wordInput = document.getElementById("wordInput").value.trim().toLowerCase();

        if (wordsVideo1.includes(wordInput) && !usedWords.has(wordInput)) {
            score++;
            attempts--;
            document.getElementById("score").textContent = score;
            document.getElementById("attempts").textContent = attempts;
            usedWords.add(wordInput);

            alert("Ganaste un punto, no repitas la palabra.");

            if(attempts == 0 && score < 5){
                document.getElementById('outcome').textContent = "No tienes más intentos disponibles, Vuelve a donde estabas! :/";
            }else if(score >= 5){
                document.getElementById('outcome').textContent = "Excellent! Ingresaste las 5 palabras correctamente :)";
            }       
            
        }else{
            attempts--;
            document.getElementById("attempts").textContent = attempts;
            
            if(attempts == 0 && score < 5){
                document.getElementById('outcome').textContent = "No tienes más intentos disponibles, Vuelve a donde estabas! :/";
            }else if(score >= 5){
                document.getElementById('outcome').textContent = "Excellent! Ingresaste las 5 palabras correctamente :)";
            }
        }
      

    }

}

