
class CopaDoMundo {    

    constructor(){
        this.nomes = [];
        this.pontos = [32];
        this.timesInicial = [];
        this.timesObj = [];

        let copaDoMundo = this;

        this.carregarTimesInicial();

        //Evento de click do botão
        $('#sorteio').on('click', function(e){
            copaDoMundo.carConteudo();
        });

        $('#inserir').on('click', function(e){
            copaDoMundo.inserir();
        });

        $('#openModal').on('click', function(e){
            copaDoMundo.mostrarModal(1);
        })

        $('#openModal2').on('click', function(e){
            copaDoMundo.mostrarModal(2);
        })

        $('#openModal3').on('click', function(e){
            copaDoMundo.mostrarModal(3);
        })

        $('#openModal4').on('click', function(e){
            copaDoMundo.mostrarModal(4);
        })

        $('#openModal5').on('click', function(e){
            copaDoMundo.mostrarModal(5);
        })

        $('#openModal6').on('click', function(e){
            copaDoMundo.mostrarModal(6);
        })

        $('#openModal7').on('click', function(e){
            copaDoMundo.mostrarModal(7);
        })

        $('#openModal8').on('click', function(e){
            copaDoMundo.mostrarModal(8);
        })

        $('#closeModal').on('click', function(e){
            copaDoMundo.fecharModal();
        })

        $('#partida').on('click', function(e){
            copaDoMundo.preOitavas();
        })
    }


    // Consumindo a API
    carregarTimesInicial(){
        let copaDoMundo = this;
        $.ajax({
            'url': 'http://estagio.geopostenergy.com/WorldCup/GetAllTeams',
            'method': 'GET',
            'async': false,
            'headers': {
                'git-user': 'LucasSoares2810'
            },
        }).done(function(response){
            copaDoMundo.timesObj = response.Result;   
            
        });
        
        this.timesObj.forEach(paisObj => {
            this.timesInicial.push(paisObj.Name);
        });  

        
    }
  
    // Metodo para pegar os países aleatóriamente
    processar(){
        let times = this.timesInicial;
        this.nomes = [];    
    
        while(times.length > 0){
            const random = (min, max) => Math.floor(Math.random() * (max-min) + min);
            const numero = random(0, times.length);
            this.nomes.push(times[numero]);
            times = times.filter(time => time != times[numero]);
        }

    
    }

    // Método para preencher o HTML
    carConteudo(){
        this.processar();
    
        for (let index = 0; index < 32; index++) {
            let idTime = 'time' + (index+1);
            document.getElementById(idTime).innerHTML = this.nomes[index];
        }


    }

    // Método para tirar os grupos da parte de sorteio para o chaveamento
    inserir(){

        for(let index=0; index<8; index++){
            let idGrupo = '#grupo' + (index+1);
            let idGrupoChaveamento = '#chaveamentoGrupo' + (index+1);

            $(idGrupoChaveamento).html($(idGrupo));
        }
        
    }

    mostrarModal(botao){
        if(botao == 1){
            this.gerarRodada(0, 3);
        }

        if(botao == 2){
            this.gerarRodada(4, 7);
        }

        if(botao == 3){
            this.gerarRodada(8, 11);
        }

        if(botao == 4){
            this.gerarRodada(12, 15)
        }

        if(botao == 5){
            this.gerarRodada(16, 19)
        }

        if(botao == 6){
            this.gerarRodada(20, 23)
        }

        if(botao == 7){
            this.gerarRodada(24, 27)
        }

        if(botao == 8){
            this.gerarRodada(28, 31)
        }
        
        fade.classList.toggle("hide");
        Modal.classList.toggle("hide");
        
    }

    fecharModal(){
        Modal.classList.add("hide")
        fade.classList.add("hide");
        
    }

   gerarRodada(inicio, fim){

        let timeCopa = [];

        for(let x=inicio; x<=fim; x++){

            timeCopa.push(this.nomes[x]);
        }

        for(let y=0; y<=3; y++){
            
            for(let i=0; i<=3; i++){
                let time = '#time' + (i+1) + 'Rodada' + (y+1);
                $(time).html(timeCopa[i]);
            }
        }

    }
    
    preOitavas(){
        let golTime1Rodada1 = $('#golTime1Rodada1').val();
        let golTime2Rodada1 = $('#golTime2Rodada1').val();
        
        if(golTime1Rodada1 > golTime2Rodada1){
            
        }
       
    }

}



// Quando terminar de carregar a pagina, inicia a classe
window.addEventListener('load', (event) => {
    let copaDoMundo = new CopaDoMundo();
    
});



