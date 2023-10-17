const palabrasTospell = ['ROUGH', 'JOKE', 'STRAWBERRY', 'WATERMELON', 'NAPKIN', 'EXAM', 'GUEST', 'ZUCCHINI', 'WATER', 'JULY'];
const spelling = ['/AR/ - /OU/ - /IU/ - /YI/ - /EICH/', '/YEI/ - /OU/ - /KEI/ - /I/', '/ES/ - /TI/ - /AR/ - /DABLIU/ - /BI/ - /I/ - /AR/ - /AR/ - /WAY/', '/DABLIU/ - /EI/ - /TI/ - /I/ - /AR/ - /EM/ - /I/ - /EL/ - /OU/ - /EN/', '/EN/ - /EI/ - /PI/ - /KEY/ - /AI/ - /EN/',  ' /I/ - /EKS/ - /AI/ - /EM/]', '/YI/ - /IU/ - /I/ - /ES/ - /TI/', '/ZI/ - /IU/ - /CI/ - /CI/ - /EICH/ - /AI/ - /EN/ - /AI/', '/DABLIU/ - /EI/ - /TI/ - /I/ - /AR/', '/YEI/ - /IU/ - /EL/ - /WAY/'];
const vocabulary = ['CEJAS', 'SACAPUNTAS', 'TRECE','RELOJ DE PARED','QUESO','IGLESIA','CARTUCHERA','FÁCIL','SEDIENTO', 'CUELLO', 'TABLERO', 'MORADO', 'PASTEL', 'DIENTES', 'HAMBRIENTO','CEREZA','MARRÓN','BIBLIOTECA'];
const translation = ['eyebrows', 'sharpener','thirteen','clock','cheese','church','pencil case','easy', 'thirsty','neck','board','purple','cake','teeth','hungry','cherry','brown','library'];
const videosLinks = ["https://www.youtube.com/embed/So-EvKIYvpQ", "https://www.youtube.com/embed/exu61pb5X68", "https://www.youtube.com/embed/LcSFUP4gGn0", "https://www.youtube.com/embed/tiMaUSvlzIU"];
const videosWords = [
    ['thank','rude',"sorry",'pick','up','her','get','please','you','will','good','noticed','not','on','is','that','still','of','out','was','have','wanted','here','your','dropped','she','a','start','has','ordered','make','to','like','would','i','everybody','celebration','toast','sock','mom', 'lunch','town','gosh','baby','ground', 'attention', 'mommy','god','sake'],

    [ 'i','need','your','help','are','you','okay','sorry', 'just','real','quick','why','is','there','a','lampshade','on','head','listen', 'baby','gotta','be','honest','little','bit','of','catnip','that','great', 'it','everything','all','right', 'do','hear','what','like','tiny','motor','calming','sound','know','good','purring','me','guess','in', 'the','coming','from','inside','wonder','sounds','could','make','trusted','to','look', 'after', 'his', 'busy','bee','boy','would','please','stop','finished','this','important','back','but','teach','way','cat'],

    ['i','wear','nautical','not','even','friday','come','on','putting','this','thing', 'What','have','you','done','to', 'me','way', 'all','the','racket', 'he','adorable', 'got','one','for','smile','for','camera','it','makes','feel', 'weak','who', 'ticklish','work','on','here','dead','down','there', 'come', 'everyone','has','spot','a'],

    ['okay','i','got','a','box','but','there','no','key','in', 'here','just','letters','the','wrong','box','put','it', 'back','are','these', 'from','your','grandmother','read','those','look','she','calls','you','moon','pie', 'that','is','so','cute','how','train', 'ride','delightful','listen','know','what','doing','right','now','there','are', 'little', 'bubbles','forming','the', 'corner','of', 'mouth','kind','crossed','line','put','him','back','on','thank', 'up','one']

];

const sentences = ['she and I _________ going for a walk','_______ of the girls is good at mathematics','There are _________ bottles of water','__________ police station near my house is always garded','This is ___________ orange market','___________ is my room at the end of the hall','He is ___________ his homework','She ___________ a movie every day','__________ you like a cup of coffee?','___________ you want to work?'];

const options = ['AM', 'ARE','ONE','SOME','MUCH','MANY','THE','A','AN','A','THIS','THAT','DOING','DOESING','WATCH','WATCHES','DO','WOULD','DO','DOES'];

const rightOption = ['ARE','ONE','MANY','THE','AN','THAT','DOING','WATCHES','WOULD','DO'];


let turn = 1;
let cont = 0;
let indiceSpelling = 0;
let indiceVideos = 0;
let indiceListening = 0;
let score = 0;
let attempts = 7;
const usedWords = new Set();
let jugadorImpar = 0;
let jugadorPar = 0;
let wordToTranslate;
let EnglishWord;
let copia = "";
let lastMovePar =0;
let lastMoveImpar = 0;


function pepe(message, backgroundColor, textColor) {
    const notification = document.getElementById("notification2");
    notification.textContent = message;
    notification.style.backgroundColor = backgroundColor; // Establecer el color de fondo
    notification.style.color = textColor; // Establecer el color del texto
    notification.style.fontSize = "24px"; // Establecer el tamaño de fuente

    // Centrar la notificación
    notification.style.position = "fixed";
    notification.style.top = "50%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";

    notification.style.display = "block";

    // Opcional: Ocultar la notificación después de unos segundos

    setTimeout(() => {
        notification.style.display = "none";
    }, 15000); // Oculta la notificación después de 15 segundos (15000 milisegundos)
    
    
}



function createBootstrapNotification(title, message, type,time) {
    const modalNotificationsDiv = document.getElementById("modalNotifications");

    const notificationDiv = document.createElement("div");
    notificationDiv.classList.add("alert", "alert-" + type);
    notificationDiv.innerHTML = `
        <strong>${title}</strong><br>${message}
    `;

    modalNotificationsDiv.appendChild(notificationDiv);

    // Opcional: Ocultar la notificación después de unos segundos
    setTimeout(() => {
        notificationDiv.style.display = "none";
    }, time); // Oculta la notificación después del tiempo enviado
}


function showNotification(playerName, steps) {
    const notificationDiv = document.getElementById("notification");
    notificationDiv.textContent = `Jugador: ${playerName}, Pasos: ${steps}`;
    notificationDiv.classList.remove("alert-success", "alert-info", "alert-warning", "alert-danger");
    notificationDiv.classList.add("alert-info");

    // Ajustar la posición en la parte superior derecha
    notificationDiv.style.position = "fixed";
    notificationDiv.style.top = "20px";  // Ajusta la distancia desde la parte superior
    notificationDiv.style.right = "20px";  // Ajusta la distancia desde la derecha

    notificationDiv.style.display = "block";

    // Opcional: Ocultar la notificación después de unos segundos
    setTimeout(() => {
        notificationDiv.style.display = "none";
    }, 5000); // Oculta la notificación después de 5 segundos (5000 milisegundos)
}


function comenzar(){
    console.log("comenzar() se está ejecutando.");
    
    let numJugadores = document.getElementById('numPlayers').value;
    document.getElementById('numPlayers').value = "Zero";

    let iconoPawn;
    let nodoPawn ;
    let lugar = '0a';

    for(let i = 1 ; i <= 2; i++){

        nodoPawn = document.getElementById(lugar);
        lugar = '0b';
        nodoPawn.innerHTML = "";
    }
    

    if(numJugadores != 0){
        lugar = '0a';
        for(let i = 1 ; i <= parseInt(numJugadores); i++){
            iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl");
             
            nodoPawn = document.getElementById(lugar);
            
            if(i == 1){
                iconoPawn.classList.add("text-info");
                lugar = '0b';
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

    showNotification("Jugador " + (turn % 2 === 0 ? "2" : "1"), steps); // Muestra la notificación


    turn++;   
    move(steps);
}

function pasosJugador1(i,jugadorImpar,time){
    i++;

    if(i <= jugadorImpar){

        setTimeout(function (){

            let old_iconSpace = document.getElementById(i + 'a');
            let casilla = document.getElementById(""+i+"");
            let new_iconSpace = document.createElement('div');
            new_iconSpace.classList.add("col-2");
            new_iconSpace.id = i + 'a';
            let iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-info");
            new_iconSpace.appendChild(iconoPawn);
            
            casilla.replaceChild(new_iconSpace, old_iconSpace);
            
            let casillaAnterior = i - 1;
            document.getElementById(casillaAnterior + 'a').innerHTML = ""; 
            pasosJugador1(i,jugadorImpar,time);
        },time); 
    }
}

function pasosJugador2(i,jugadorPar,time){
    i++;

    if(i <= jugadorPar){

        setTimeout(function (){
            let old_iconSpace = document.getElementById(i + 'b');
            let casilla = document.getElementById(""+i+"");
            let new_iconSpace = document.createElement('div');
            new_iconSpace.classList.add("col-2");
            new_iconSpace.id = i + 'b';
            let iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-success");
            new_iconSpace.appendChild(iconoPawn);
            casilla.replaceChild(new_iconSpace, old_iconSpace);

            let Anterior = i - 1; 
            document.getElementById(Anterior + 'b').innerHTML = "";

            pasosJugador2(i,jugadorPar,time);

        }, time);
    }
}


function move(steps){
    cont++;
    if(steps == '0'){
        cont--;
        if(cont % 2 == 0){
            let wrongAnswerSpace = document.getElementById(jugadorPar + "b");

            wrongAnswerSpace.innerHTML = "";
            jugadorPar -= lastMovePar;
            console.log(jugadorPar);

            
            let old_iconSpace = document.getElementById(jugadorPar + 'b');
            let casilla = document.getElementById(""+jugadorPar+"");
            let new_iconSpace = document.createElement('div');
            new_iconSpace.classList.add("col-2");
            new_iconSpace.id = jugadorPar + 'b';
            let iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-success");
            new_iconSpace.appendChild(iconoPawn);
            casilla.replaceChild(new_iconSpace, old_iconSpace);
            
            
        }else{
            let wrongAnswerSpace = document.getElementById(jugadorImpar + "a");

            wrongAnswerSpace.innerHTML = "";

            jugadorImpar -= lastMoveImpar;
            console.log(jugadorImpar);
            

            let old_iconSpace = document.getElementById(jugadorImpar + 'a');
            let casilla = document.getElementById(""+jugadorImpar+"");
            let new_iconSpace = document.createElement('div');
            new_iconSpace.classList.add("col-2");
            new_iconSpace.id = jugadorImpar + 'a';
            let iconoPawn = document.createElement('i');
            iconoPawn.classList.add("fa-solid", "fa-chess-pawn", "fa-2xl", "text-info");
            new_iconSpace.appendChild(iconoPawn);
            casilla.replaceChild(new_iconSpace, old_iconSpace);

        }

    }else if(cont % 2 == 0){
        jugadorPar += steps;
        lastMovePar = steps;
        let spaceBefore =jugadorPar - steps;

        if (jugadorPar > 20) {
            jugadorPar -= steps;
            pepe("It exceeds the remaining steps to the end, try again in another turn!");
            
        }else if (jugadorPar == 20) {
            document.getElementById("victoryText").textContent = "¡Felicidades, el Jugador 2 es el ganador!";
            document.getElementById("victoryMessage").style.display = "block";
            document.getElementById("victorySound").play(); // Reproducir sonido de victoria
        }

        pasosJugador2(spaceBefore, jugadorPar, 500);
                    
        
    }else{
        jugadorImpar += steps;
        lastMoveImpar = steps;
        let spaceBefore = jugadorImpar - steps; 

        if (jugadorImpar > 20) {
            jugadorImpar -= steps;
            pepe("It exceeds the remaining steps to the end, try again in another turn!");
        } else if (jugadorImpar == 20) {
            document.getElementById("victoryText").textContent = "¡Felicidades, el Jugador 1 es el ganador!";
            document.getElementById("victoryMessage").style.display = "block";
            document.getElementById("victorySound").play(); // Reproducir sonido de victoria
        }

        pasosJugador1(spaceBefore, jugadorImpar, 500);
        
    }

    if (jugadorImpar == 20 || jugadorPar == 20) {
        document.getElementById("victoryButton").style.display = "block";
        document.getElementById("comenzarButton").style.display = "none"; // Suponiendo que el botón de comenzar tiene el id "comenzarButton"
        document.getElementById("randomNum").style.display = "none"; // Suponiendo que el elemento que muestra el dado tiene el id "randomNum"
    }
}



function drill(clue){
    
    document.getElementById("answer").innerHTML="";
    document.getElementById("pregunta").innerHTML="";
    
    let results = document.getElementById('Results');
    let buttonAnswer = document.getElementById('answerRequest');
    
    let boton1Place= document.createElement('div');
    boton1Place.classList.add("col-3","text-center");
    boton1Place.id='answerRequest';


    let boton = document.createElement('button');
    boton.classList.add("btn", "btn-success");
    boton.setAttribute("onclick", "rightAnswer('"+ clue +"')");

    let nodoBoton = document.createTextNode('Check Answer');
    boton.appendChild(nodoBoton);

    boton1Place.appendChild(boton);
    

    let bodyModal = document.getElementById('bodyModal');
    let ejercicioDisplay = document.getElementById('pregunta');
    let ejercicio = document.createElement('div');
    let pregunta = document.createElement('p');
    ejercicio.id = 'pregunta';
    ejercicio.classList.add("row", "text-center", "py-5");

    if(clue == 'spelling'){      
        
        
        let nodoEje = document.createTextNode('How do you spell '+palabrasTospell[indiceSpelling] + '?');
        pregunta.appendChild(nodoEje);
        ejercicio.appendChild(pregunta);  
        bodyModal.replaceChild(ejercicio, ejercicioDisplay);
        results.replaceChild(boton1Place, buttonAnswer);        

        indiceSpelling++;
        
    }else if(clue == 'vocabulary'){

        if (vocabulary.length > 0) {
            // Mostrar una palabra en español como pista
            wordToTranslate = vocabulary.pop(); // Asigna la palabra a wordToTranslate
            let nodoEje = document.createTextNode('How do you say/write "' + wordToTranslate + '" in English?');
            pregunta.appendChild(nodoEje);
      
            // Agregar un campo de entrada de texto para la respuesta
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.id = 'vocabularyInput';
            inputField.placeholder = 'Insert the translation';
            inputField.classList.add('mx-3');
            pregunta.appendChild(inputField);
      
            // Agregar el botón para verificar la respuesta
            pregunta.appendChild(boton);
      
            ejercicio.appendChild(pregunta);
            bodyModal.replaceChild(ejercicio, ejercicioDisplay);
            results.replaceChild(boton1Place, buttonAnswer);
          } else {
            // Cuando se han agotado todas las palabras del juego de vocabulario
            let nodoEje = document.createTextNode('¡No hay más palabras para traducir!');
            pregunta.appendChild(nodoEje);
            ejercicio.appendChild(pregunta);
            bodyModal.replaceChild(ejercicio, ejercicioDisplay);
          }
      
    }else if(clue == 'grammar'){
        let oracion = sentences.pop();
        

        let nodoEje = document.createTextNode("COMPLETE:   "+oracion);
        pregunta.appendChild(nodoEje);

        let fila1 = document.createElement('div');
        fila1.classList.add('row');
        fila1.appendChild(pregunta);

        let answer1=options.pop();

        let opcion1 = document.createElement("input");
        opcion1.classList.add("me-2");
        opcion1.type = "radio";
        opcion1.name = "grammar"; 
        opcion1.value = answer1;

        let label1 = document.createElement("label");
        label1.innerHTML = answer1;

        let answer2=options.pop();

        let opcion2 = document.createElement("input");
        opcion2.classList.add("me-2");
        opcion2.type = "radio";
        opcion2.name = "grammar"; 
        opcion2.value = answer2;

        let label2 = document.createElement("label");
        label2.innerHTML = answer2;


        let fila2 = document.createElement('div');
        fila2.classList.add('form-check');
        fila2.appendChild(opcion1);
        fila2.appendChild(label1);
        fila2.appendChild(document.createElement("br"));
        fila2.appendChild(opcion2);
        fila2.appendChild(label2);


        ejercicio.appendChild(fila1);
        ejercicio.appendChild(fila2);  
        bodyModal.replaceChild(ejercicio, ejercicioDisplay);
        results.replaceChild(boton1Place, buttonAnswer);


    }else if(clue == 'listening'){

        console.log(indiceListening);

        let video = document.createElement('div');
        video.classList.add("col-5");
        video.id='listeningVideo';
        
        let iframe = document.createElement("iframe");
        iframe.height="300";
        iframe.width="300";
        iframe.src = videosLinks[indiceVideos];
        iframe.title = "Video de Youtube";    
        
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
        input.placeholder = "Ingrese una palabra";
        input.classList.add('me-3');

        colEntrada.appendChild(input);
        colEntrada.appendChild(boton);
        entrada.appendChild(colEntrada);

        let text1 = document.createElement('p');
        text1.classList.add('text-center');
        let nodotext1 = document.createTextNode('Puntos Ganados: ');
        let spanText1 = document.createElement('span');
        spanText1.id = 'score';
        spanText1.textContent= '0';
        text1.appendChild(nodotext1);
        text1.appendChild(spanText1);

        let text2 = document.createElement('p');
        text2.classList.add('text-center');
        let nodotext2 = document.createTextNode('Intentos Restantes: ');
        let spanText2 = document.createElement('span');
        spanText2.id = 'attempts';
        spanText2.textContent= '7';
        text2.appendChild(nodotext2);
        text2.appendChild(spanText2);

        progress.appendChild(text1);
        progress.appendChild(text2);

        palabras.appendChild(entrada);
        palabras.appendChild(progress);

        ejercicioDisplay.appendChild(video);
        ejercicioDisplay.appendChild(palabras);
        
        
        let Outcome = document.createElement('h4');
        Outcome.id = 'answerRequest';
        Outcome.classList.add('text-center');
        let nodoOutcome = document.createTextNode('Get at least 5 right words from the video, you have 7 attempts!')
        Outcome.appendChild(nodoOutcome);
        
        results.replaceChild(Outcome, buttonAnswer);
        
    }
}



function rightAnswer(clue) {

    if(clue == 'spelling'){
        let old_answer = document.getElementById('answer');
        let showAnswer = document.getElementById('mostrarRespuesta'); 

        let new_answer = document.createElement('div');
        new_answer.classList.add("col","text-center");
        new_answer.id = 'answer';
        let text = document.createElement('p');
        let nodoText = document.createTextNode(spelling[indiceSpelling-1]);
        text.appendChild(nodoText);
        new_answer.appendChild(text);
        showAnswer.replaceChild(new_answer, old_answer);

   
    }else  if (clue === 'vocabulary') {
        let buttonAnswer = document.getElementById('answerRequest');
        
        EnglishWord = translation.pop();
        const inputField = document.getElementById('vocabularyInput');
        const playerAnswer = inputField.value.trim().toLowerCase();  

        if (playerAnswer === EnglishWord) {
            // Respuesta correcta
            createBootstrapNotification("Felicidades!", "PUEDES AVANZAR :)", "success",5000);
            vocabulary++;
        } else {
            // Respuesta incorrecta
            createBootstrapNotification("Incorrecto", "       La respuesta correcta es: " + EnglishWord + ' NO PUEDES AVANZAR! ', "danger", 5000);
            vocabulary++;
        }

        // Limpia el campo de entrada
        inputField.value = '';
        // Deshabilita input y boton check answer
        inputField.disabled = true;
        buttonAnswer.disabled = true;
    }else if(clue == 'grammar'){
            let option = document.getElementsByName("grammar");
            let answer = rightOption.pop();
            let selectedOption = false;
    
            for (var i = 0; i < option.length; i++) {
                if (option[i].checked) {
                    let radio = option[i];
                    let valorOption = radio.value;
    
                    if (valorOption == answer) {
                        createBootstrapNotification("Felicidades!", "PUEDES AVANZAR :)", "success",5000);
                    } else {
                        createBootstrapNotification("Que mal :C", "NO PUEDES AVANZAR, NI CAMBIAR TU RESPUESTA!", "danger", 5000);
                    }
                    selectedOption = true;
                    break;
                }
            }
    
            if (!selectedOption) {
                createBootstrapNotification("Respuesta sin registrar", "Debes seleccionar una opción", "info", 5000);                rightOption.push(answer);
            }
    }else if(clue == 'listening'){
        event.preventDefault();
    
        const wordInput = document.getElementById("wordInput").value.trim().toLowerCase();
    
        if (videosWords[indiceListening].includes(wordInput) && !usedWords.has(wordInput)) {
            score++;
            usedWords.add(wordInput);
            document.getElementById("score").textContent = score;
            createBootstrapNotification("Ganaste un punto", "No repitas la palabra.", "info", 2000);

        }
    
        attempts--;
    
        if (attempts <= 0) {
            if (score >= 5) {
                // El jugador adivinó al menos 5 palabras correctamente y puede avanzar
                createBootstrapNotification("PUEDES AVANZAR :)", " Ingresaste 5 palabras correctamente", "success", 5000);
                
                
            } else {
                // El jugador no adivinó al menos 5 palabras correctamente, no puede avanzar
                createBootstrapNotification("NO PUEDES AVANZAR! :/", "No tienes más intentos disponibles y no ingresaste al menos 5 palabras correctamente", "danger",5000);
                
            }
            
        } else{
            document.getElementById("attempts").textContent = attempts;

            if (score >= 5) {
                // El jugador adivinó al menos 5 palabras correctamente y puede avanzar
                createBootstrapNotification("PUEDES AVANZAR :)", " Ingresaste 5 palabras correctamente", "success", 5000);
                // document.getElementById('answerRequest').textContent = "Ingresaste 5 palabras correctamente, PUEDES AVANZAR! :)";    
            }
        }
    
        document.getElementById('wordInput').value = "";
    
        if (attempts <= 0|| score == 5 || indiceVideos >= videosLinks.length) {
            document.getElementById('pregunta').innerHTML = "";
            score = 0;
            attempts = 7;
            indiceVideos++; 
            indiceListening++;

            if (indiceVideos >= videosLinks.length) {
                indiceListening = 0;
                indiceVideos = 0;
            }
        }
    }
    

    if (indiceVideos >= videosLinks.length) {
        indiceVideos=0;
    }
    document.getElementById('checkAnswerButton').disabled = true;
}

document.getElementById("victoryButton").addEventListener("click", function() {
    location.reload(); // Esto recargará la página y reiniciará el juego
});

document.addEventListener("DOMContentLoaded", function() {
    var numPlayersSelect = document.getElementById("numPlayers"); // Usar getElementById para seleccionar por ID
    var getStepsButton = document.getElementById("getStepsButton");
    var startButton = document.getElementById("startButton");

    numPlayersSelect.addEventListener("change", function() {
        if (numPlayersSelect.value === "2") {
            getStepsButton.removeAttribute("disabled");
        } else {
            getStepsButton.setAttribute("disabled", "disabled");
        }
    });
});