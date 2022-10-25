function iniciarPrograma (){
    /* let initialVelocity = 150;

    function slowDown () {
        printVelocity(initialVelocity);

        while(initialVelocity > 0){
            
            initialVelocity = initialVelocity - 20;
    
            if(initialVelocity < 0){
                initialVelocity = 0;
            }

            printVelocity(initialVelocity);

            if (initialVelocity == 0) {
                document.write("Nave parada: As comportas podem ser abertas.");
            }
        }
    }
    
    function printVelocity (slow){
        document.write("Velocidade atual "+slow+"km/s <br>");
    }

    slowDown(); */

    function slowDown (velocity, print){

        let desaceleration = 20;
        while (velocity > 0) {
            print(velocity);
            velocity = velocity - desaceleration;
            if(velocity<0){
                velocity = 0;
                console.log("Velocidade atual: "+velocity+" km/s <br>")
            }      
        }
        alert("Nave parada: As comportas podem ser abertas");
    }

    let spaceVelocity = 150;
    slowDown(spaceVelocity, function (velocidade) {
        console.log("Velocidade atual: "+velocidade+" km/s <br>");
    });
}

//Eventos
let btnStart = document.getElementById("btn-iniciar");
btnStart.addEventListener('click', iniciarPrograma);