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
    
}

//Capturando botão do HTML e adicionando função para iniciar o programa
let btnStart = document.getElementById("iniciar");
btnStart.addEventListener('click', iniciar);