
class CopaDoMundo {    

    constructor(){
        this.nomes = [];
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

    inserir(){
            $("#chaveamentoGrupo1").html($('#grupo1'));
        
    }

}

// Quando terminar de carregar a pagina, inicia a classe
window.addEventListener('load', (event) => {
    let copaDoMundo = new CopaDoMundo();
});