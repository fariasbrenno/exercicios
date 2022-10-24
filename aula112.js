function iniciarPrograma (){
    let initialVelocity = 150;

    function slowDown () {

        while(initialVelocity > 0){
            document.write(initialVelocity+"<br>");
            initialVelocity = initialVelocity - 20;
    
            if(initialVelocity < 0){
                initialVelocity = 0;
                document.write(initialVelocity);
            }
        }
    }
    
    function printVelocity (slow){
        document.write(slow+"<br>");
    }
 
}

//Eventos
let btnStart = document.getElementById("btn-iniciar");
btnStart.addEventListener('click', iniciarPrograma);