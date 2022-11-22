// const tourArray = [{
//     id: 'TI-1',
//     dayInWeek: 'Mon',
//     dayInMonth: 'May 23',
//     city: 'Berlin, germany',
//     stage: 'Arena Berlin',
//     FanClub__1__name: 'Fan Club',
//     FanClub__1__NumOfTickets: 512,
//     FanClub__2__name: 'Gangster',
//     FanClub__2__NumOfTickets: 0
// }, {
//     id: 'TI-2',
//     dayInWeek: 'Mon',
//     dayInMonth: 'May 23',
//     city: 'Berlin, germany',
//     stage: 'Arena Berlin',
//     FanClub__1__name: 'Ngot Band',
//     FanClub__1__NumOfTickets: 123,
//     FanClub__2__name: 'Gangster',
//     FanClub__2__NumOfTickets: 23
// },
// {
//     id: 'TI-3',
//     dayInWeek: 'Mon',
//     dayInMonth: 'May 23',
//     city: 'Berlin, germany',
//     stage: 'Arena Berlin',
//     FanClub__1__name: 'Fan Club',
//     FanClub__1__NumOfTickets: 123,
//     FanClub__2__name: 'Gangster',
//     FanClub__2__NumOfTickets: 0
// },
// ];


const setSthLocalStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}

const getSthLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

const tourArray = getSthLocalStorage('TourList');

const TourDates__list = document.querySelector('.TourDates__list');

const buildTemplateElement = element => {
    const template = document.querySelector('#templateTourDate');
    const cloneNode = template.content.cloneNode(true);
    const elementHTML = cloneNode.querySelector('.TourDates__item');

    elementHTML.setAttribute('id', element.id);
    const dayInWeek = elementHTML.querySelector('.TourDates__dayInWeek');
    const dayInMonth = elementHTML.querySelector('.TourDates__dayInMonth');
    const city = elementHTML.querySelector('.TourDates__city');
    const stage = elementHTML.querySelector('.TourDates__stage');
    const FanClub__1__name = elementHTML.querySelector('.FanClub__1__name');
    const FanClub__1__TicketStatus = elementHTML.querySelector('.FanClub__1__TicketStatus');
    const FanClub__2__name = elementHTML.querySelector('.FanClub__2__name');
    const FanClub__2__TicketStatus = elementHTML.querySelector('.FanClub__2__TicketStatus');

    dayInWeek.innerText = element.dayInWeek;
    dayInMonth.innerText = element.dayInMonth;
    city.innerText = element.city;
    stage.innerText = element.stage;
    FanClub__1__name.innerText = element.FanClub__1__name;
    FanClub__1__TicketStatus.innerText = element.FanClub__1__NumOfTickets > 0 ? element.FanClub__1__NumOfTickets + ' tickets' : 'Sold out';
    FanClub__2__name.innerText = element.FanClub__2__name;
    FanClub__2__TicketStatus.innerText = element.FanClub__2__NumOfTickets > 0 ? element.FanClub__2__NumOfTickets + ' tickets' : 'Sold out';

    const btnBookFC1 = elementHTML.querySelector('.bookBTN-fanClub-1');
    btnBookFC1.innerText = 'Book ' + element.FanClub__1__name;
    const btnBookFC2 = elementHTML.querySelector('.bookBTN-fanClub-2');
    btnBookFC2.innerText = 'Book ' + element.FanClub__2__name;

    btnBookFC1.addEventListener('click', () => {
        const index = tourArray.findIndex(item => {
            return item.id === elementHTML.getAttribute('id');
        })
        if (index > -1) {
            if (tourArray[index].FanClub__1__NumOfTickets > 0)
                tourArray[index].FanClub__1__NumOfTickets--;
            else {
                alert('Het ve roi ko nhin thay a');
            }
        }
        TourDates__list.innerHTML = '';
        init();
    });

    btnBookFC2.addEventListener('click', () => {
        const index = tourArray.findIndex(item => {
            return item.id === elementHTML.getAttribute('id');
        })
        if (index > -1) {
            if (tourArray[index].FanClub__2__NumOfTickets > 0)
                tourArray[index].FanClub__2__NumOfTickets--;
            else {
                alert('Het ve roi ko nhin thay a');
            }
        }
        setSthLocalStorage('TourList', tourArray);
        TourDates__list.innerHTML = '';
        init();
    });

    const removeBTN = elementHTML.querySelector('.removeBTN');
    removeBTN.addEventListener('click', () => {
        const index = tourArray.findIndex(item => {
            return item.id === elementHTML.getAttribute('id');
        })

        if (index > -1) tourArray.splice(index, 1);
        TourDates__list.innerHTML = '';
        init();
    });

    return elementHTML;
}

const init = () => {
    tourArray.forEach(element => {
        TourDates__list.appendChild(buildTemplateElement(element));
    })
}

init();