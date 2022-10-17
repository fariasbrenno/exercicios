function iniciar (){
    let velocity = 0;
    let naveName = prompt("Qual o nome da nave?");
    let changeOption;

    function menu(){
        let option;

        while(option!=1 && option!=2 && option!=3 && option!=4){
            option = prompt (`Olá, ${naveName}\nEscolha uma das opções:\n1-Acelerar a nave em 5km/s\n2-Desacelerar a nave em 5km/s\n3-Imprimir dados de bordo\n4-sair do programa`);
        }

        return option;
    }

    function speedUp(velocity){
        let newVelocity = velocity + 5;
        return newVelocity;
    }
    function slowDown(velocity){
        let newVelocity = velocity - 5;
        if(newVelocity < 0){
            newVelocity = 0;
        }
        return newVelocity;
    }
    function printData(name, velocity){
        alert("Espaçonave: "+name+"\nVevolidade: "+velocity+" km/s");
    }

    do{
        changeOption = menu();
        switch(changeOption){
            case "1":
                velocity = speedUp(velocity);
                break
            case "2":
                velocity = slowDown(velocity);
                break
            case "3":
                printData(naveName, velocity);
                break
            case "4":
                alert("Programa encerrado!");
            }
    }while(changeOption != 4);
}


let btnStart = document.getElementById('iniciar');
//Eventos
btnStart.addEventListener('click', iniciar);