//Botões do tempo

let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');

//Campos a serem alterados

let time = document.querySelectorAll('.all-time');
let period = document.querySelectorAll('.all-period');

//Array dos dias

let timeDaily = ['5hrs', '1hr', '0hrs', '1hr', '1hr', '0hrs'];
let periodDaily = ['Last Day - 7hrs', 'Last Day - 2hrs', 'Last Day - 1hr', 'Last Day - 1hr', 'Last Day - 3hrs', 'Last Day - 1hr'];

//Array das semanas

let timeWeekly = ['32hrs', '10hrs', '4hrs', '4hrs', '5hrs', '2hrs'];
let periodWeekly = ['Last Week - 36hrs', 'Last Week - 8hrs', 'Last Week - 7hrs', 'Last Week - 5hrs', 'Last Week - 10hrs', 'Last Week - 2hrs'];

//Array dos meses

let timeMonthly = ['103hrs', '23hrs', '13hrs', '11hrs', '21hrs', '7hrs'];
let periodMonthly = ['Last Month - 128hrs', 'Last Month - 29hrs', 'Last Month - 19hrs', 'Last Month - 18hrs', 'Last Month - 23hrs', 'Last Month - 11hrs'];

//Função daily

function changeDaily(){
    for(var i = 0; i < time.length; i++){
        time[i].innerHTML = timeDaily[i];
        period[i].innerHTML = periodDaily[i];
    }
}

//Função weekly

function changeWeekly(){
    for(var i = 0; i < time.length; i++){
        time[i].innerHTML = timeWeekly[i];
        period[i].innerHTML = periodWeekly[i];
    }
}

//Função monthly

function changeMonthly(){
    for(var i = 0; i < time.length; i++){
        time[i].innerHTML = timeMonthly[i];
        period[i].innerHTML = periodMonthly[i];
    }
}

daily.addEventListener('click', changeDaily);
weekly.addEventListener('click', changeWeekly);
monthly.addEventListener('click', changeMonthly);