//Segunda-feira,7 de outubro de 2023 às 00:00
const data = new Date();

let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

let mesDoAno = data.getMonth();
const mesDoAnoTexto = getMesDoAnoTexto(mesDoAno);

const diaAtual = data.getDate();
const anoAtual = data.getFullYear();
const horaAtual = data.getHours()
const minutoAtual = data.getMinutes()

let diaAtualEHora = document.getElementById('diaAtualEHora');

function getDiaSemanaTexto(diaSemana) {
    
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Algo deu errado, tente novamente.';
    }

}

function getMesDoAnoTexto(mesDoAno) {
    let mesDoAnoTexto;

    switch (mesDoAno) {
        case 0:
            mesDoAnoTexto = 'janeiro';
            return mesDoAnoTexto;
        case 1:
            mesDoAnoTexto = 'fevereiro';
            return mesDoAnoTexto;
        case 2:
            mesDoAnoTexto = 'março';
            return mesDoAnoTexto;
        case 3:
            mesDoAnoTexto = 'abril';
            return mesDoAnoTexto;
        case 4:
            mesDoAnoTexto = 'maio';
            return mesDoAnoTexto;
        case 5:
            mesDoAnoTexto = 'junho';
            return mesDoAnoTexto;
        case 6:
            mesDoAnoTexto = 'julho';
            return mesDoAnoTexto;
        case 7:
            mesDoAnoTexto = 'agosto';
            return mesDoAnoTexto;
        case 8:
            mesDoAnoTexto = 'setembro';
            return mesDoAnoTexto;
        case 9:
            mesDoAnoTexto = 'outubro';
            return mesDoAnoTexto;
        case 10:
            mesDoAnoTexto = 'novembro';
            return mesDoAnoTexto;
        case 11:
            mesDoAnoTexto = 'dezembro';
           return mesDoAnoTexto;
        default:
            mesDoAnoTexto = 'Algo deu errado, tente novamente.';
    }
}

diaAtualEHora.innerHTML += `${diaSemanaTexto}, ${diaAtual} de ${mesDoAnoTexto} de ${anoAtual} às ${horaAtual}:${minutoAtual}.  `