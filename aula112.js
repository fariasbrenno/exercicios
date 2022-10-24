function iniciarPrograma (){
    let initialVelocity = 150;

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

    slowDown();
     

}

//Eventos
let btnStart = document.getElementById("btn-iniciar");
btnStart.addEventListener('click', iniciarPrograma);