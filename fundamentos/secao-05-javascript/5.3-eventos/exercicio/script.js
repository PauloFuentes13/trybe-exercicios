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
  