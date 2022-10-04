let btnStart = document.getElementById('iniciar');

function iniciar (){
    let velocity = 0;
    let naveName = prompt("Qual o nome da nave?");

    let option = prompt (`Olá, ${naveName}\nEscolha uma das opções:\n1-Acelerar a nave em 5km/s\n2-Desacelerr a nave em 5km/s\n3-Imprimir dados de bordo\n4-sair do programa`);

    while((option !== 1) || (option !== 2) || (option !== 3) || (option !== 4)){

        do{
            switch (option){
                case '1':
                    alert('Soma');
                    break;
                case '2':
                    alert('Subtração');
                    break;
                case '3':
                    alert('Op 3');
                    break;
                case '4':
                    alert('Op 4');
                    break;

            let option = prompt (`Olá, ${naveName}\nEscolha uma das opções:\n1-Acelerar a nave em 5km/s\n2-Desacelerr a nave em 5km/s\n3-Imprimir dados de bordo\n4-sair do programa`);
            }
        } while((option !== 1) || (option !== 2) || (option !== 3) || (option !== 4))
        
    }
}


//Eventos
btnStart.addEventListener('click', iniciar);