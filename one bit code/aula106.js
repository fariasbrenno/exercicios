function iniciar (){
    let velocity = 0;
    let naveName = prompt("Qual o nome da nave?");
    let changeOption;

    function menu(){
        let option;

        while(option!=1 && option!=2 && option!=3 && option!=4){
            option = prompt (`Olá, ${naveName}\nEscolha uma das opções:\n1-Acelerar a nave em 5km/s\n2-Desacelerr a nave em 5km/s\n3-Imprimir dados de bordo\n4-sair do programa`);
        }

        return option;
    }

    
}


let btnStart = document.getElementById('iniciar');
//Eventos
btnStart.addEventListener('click', iniciar);