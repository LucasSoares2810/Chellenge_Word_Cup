
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
    }

  

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

    carConteudo(){
        this.processar();
    
        for (let index = 0; index < 32; index++) {
            let idTime = 'time' + (index+1);
            document.getElementById(idTime).innerHTML = this.nomes[index];
        }
    }

}

// Quando terminar de carregar a pagina, inicia a classe
window.addEventListener('load', (event) => {
    let copaDoMundo = new CopaDoMundo();
});