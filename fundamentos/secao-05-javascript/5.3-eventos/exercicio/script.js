function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index of weekDays) {
        const days = index;
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    }
}
  
  createDaysOfTheWeek();
//   Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  
  // Escreva seu código abaixo.

function createDays() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.querySelector('#days');

    for (let index of decemberDaysList) {
        const dayDec = index;
        const day = document.createElement('li');
        day.className = 'day';
        day.innerHTML = dayDec;

        if (dayDec === 24 || dayDec === 31) {
            day.className = 'day holiday';
        } else if(dayDec === 4 || dayDec === 11 || dayDec === 18){
            day.className = 'day friday';
        } else if (dayDec === 25) {
            day.className = 'day friday holiday';
        }

        days.appendChild(day);
    }
}
createDays();

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

const divButtons = document.querySelector('.buttons-container');
// console.log(divButtons);

function buttonHoliday(name) {
    const buttonHoli = document.createElement('button');
    let idButtons = 'btn-holiday';

    buttonHoli.id = idButtons;
    buttonHoli.innerHTML = name;

    divButtons.appendChild(buttonHoli);
}
buttonHoliday('Feriados');










