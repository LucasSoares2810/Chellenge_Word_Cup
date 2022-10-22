

nomes = [];

const botao2 = document.querySelector("#Refresh")

botao2.addEventListener("click", () => {
    location.reload()
});




function sorteio(){

    const times = ['Alemanha', 'Arábia Saudita', 'Argentina', 'Austrália', 'Bélgica', 'Brasil', 'Camarões', 'Canadá', 'Catar', 'Coreia do Sul', 'Costa Rica', 'Croácia', 'Dinamarca', 'Equador', 'Espanha', 'EUA', 'França', 'Gana', 'Holanda', 'Inglaterra', 'Irã', 'Japão', 'Marrocos', 'México', 'País de Gales', 'Polônia', 'Portugal', 'Senegal', 'Sérvia', 'Suíça', 'Tunísia' , 'Uruguai'];

    for (let i=0; i<times.length; i++){
        const random = (min, max) => Math.floor(Math.random() * (max-min) + min);
        const numero = random(0, times.length);
        const sort = (times[numero]);
        nomes.push(sort);
        times.splice(numero, 1);
    }
}

function carConteudo(){
    sorteio();
    
    document.getElementById("time1").innerHTML = nomes[0];
    document.getElementById("time2").innerHTML = nomes[1];
    document.getElementById("time3").innerHTML = nomes[2];
    document.getElementById("time4").innerHTML = nomes[3];
    document.getElementById("time5").innerHTML = nomes[4];
    document.getElementById("time6").innerHTML = nomes[5];
    document.getElementById("time7").innerHTML = nomes[6];
    document.getElementById("time8").innerHTML = nomes[7];
    document.getElementById("time9").innerHTML = nomes[8];
    document.getElementById("time10").innerHTML = nomes[9];
    document.getElementById("time11").innerHTML = nomes[10];
    document.getElementById("time12").innerHTML = nomes[11];
    document.getElementById("time13").innerHTML = nomes[12];
    document.getElementById("time14").innerHTML = nomes[13];
    document.getElementById("time15").innerHTML = nomes[14];
    document.getElementById("time16").innerHTML = nomes[15];
    document.getElementById("time17").innerHTML = nomes[16];
    document.getElementById("time18").innerHTML = nomes[17];
    document.getElementById("time19").innerHTML = nomes[18];
    document.getElementById("time20").innerHTML = nomes[19];
    document.getElementById("time21").innerHTML = nomes[20];
    document.getElementById("time22").innerHTML = nomes[21];
    document.getElementById("time23").innerHTML = nomes[22];
    document.getElementById("time24").innerHTML = nomes[23];
    document.getElementById("time25").innerHTML = nomes[24];
    document.getElementById("time26").innerHTML = nomes[25];
    document.getElementById("time27").innerHTML = nomes[26];
    document.getElementById("time28").innerHTML = nomes[27];
    document.getElementById("time29").innerHTML = nomes[28];
    document.getElementById("time30").innerHTML = nomes[29];
    document.getElementById("time31").innerHTML = nomes[30];
    document.getElementById("time32").innerHTML = nomes[31];
    

    
}