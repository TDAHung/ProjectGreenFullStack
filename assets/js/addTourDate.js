const btnAdd = document.querySelector('.btnAdd');

const setSthLocalStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}

const getSthLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
}


btnAdd.addEventListener('click', event => {
    event.preventDefault();
    const dayInMonth = document.querySelector('.TourDates__dayInMonth');
    const city = document.querySelector('.TourDates__city');
    const stage = document.querySelector('.TourDates__stage');
    const FanClub__1__name = document.querySelector('.FanClub__1__name');
    const FanClub__1__NumsOfTickets = document.querySelector('.FanClub__1__NumsOfTickets');
    const FanClub__2__name = document.querySelector('.FanClub__2__name');
    const FanClub__2__NumsOfTickets = document.querySelector('.FanClub__2__NumsOfTickets');

    const tourDate = {
        id: 'TI-' + Math.floor(Math.random() * 100) + 1,
        dayInWeek: 'Mon',
        dayInMonth: dayInMonth.value,
        city: city.value,
        stage: stage.value,
        FanClub__1__name: FanClub__1__name.value,
        FanClub__1__NumOfTickets: Number(FanClub__1__NumsOfTickets.value),
        FanClub__2__name: FanClub__2__name.value,
        FanClub__2__NumOfTickets: Number(FanClub__2__NumsOfTickets.value)
    };

    const dataArray = getSthLocalStorage('TourList');
    dataArray.push(tourDate);
    setSthLocalStorage('TourList', dataArray);
    window.location.href = '../../index.html';
})