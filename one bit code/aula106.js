function iniciar(){
    let spaceVelocity = 0;
    let spaceName = prompt ("Qual o nome da nave?")
    let spaceOption;

    function menu(){
        let menuOption;
        while(menuOption != 1 && menuOption != 2 && menuOption != 3 && menuOption != 4){
            menuOption = prompt(`Olá, ${spaceName}\nEscolha uma opção\n1-Acelerar a nave em 5km/s\n2-Desacelerar a nave em 5km/s\n3-Imprimir informações da nave\n4-Sair do programa`);
        }
        return menuOption;
    }
    function speed (velocity){
        spaceVelocity = velocity + 5;
        return spaceVelocity;
    }
    function slowDown (velocity){
        spaceVelocity = velocity - 5;
        if(spaceVelocity < 0){
            spaceVelocity = 0;
        }
        return spaceVelocity;
    }
    function printData (name, velocity){
        alert ("Espaçonave: "+name+"\nVelocidade: "+velocity+"km/s");
    }
    do{
        spaceOption = menu();
        switch(spaceOption){
            case "1":
                spaceVelocity = speed(spaceVelocity);
                break
            case "2":
                spaceVelocity = slowDown(spaceVelocity);
                break
            case "3":
                printData(spaceName, spaceVelocity);
                break
            case "4":
                alert("Programa encerrado");
                break
        }
    }while(spaceOption != 4);
    
}

//Capturando botão do HTML e adicionando função para iniciar o programa
let btnStart = document.getElementById("iniciar");
btnStart.addEventListener('click', iniciar);