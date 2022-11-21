const tourArray = [{
    dayInWeek: 'Mon',
    dayInMonth: 'May 23',
    city: 'Berlin, germany',
    stage: 'Arena Berlin',
    FanClub__1__name: 'Fan Club',
    FanClub__1__TicketStatus: 'Sold out',
    FanClub__2__name: 'Gangster',
    FanClub__2__TicketStatus: 'Available'
}, {
    dayInWeek: 'Mon',
    dayInMonth: 'May 23',
    city: 'Berlin, germany',
    stage: 'Arena Berlin',
    FanClub__1__name: 'Fan Club',
    FanClub__1__TicketStatus: 'Sold out',
    FanClub__2__name: 'Gangster',
    FanClub__2__TicketStatus: 'Available'
},
{
    dayInWeek: 'Mon',
    dayInMonth: 'May 23',
    city: 'Berlin, germany',
    stage: 'Arena Berlin',
    FanClub__1__name: 'Fan Club',
    FanClub__1__TicketStatus: 'Sold out',
    FanClub__2__name: 'Gangster',
    FanClub__2__TicketStatus: 'Available'
},
];

const buildTemplateElement = element => {
    const template = document.querySelector('#templateTourDate');
    const cloneNode = template.content.cloneNode(true);
    const elementHTML = cloneNode.querySelector('.TourDates__item');

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
    FanClub__1__TicketStatus.innerText = element.FanClub__1__TicketStatus;
    FanClub__2__name.innerText = element.FanClub__2__name;
    FanClub__2__TicketStatus.innerText = element.FanClub__2__TicketStatus;

    return elementHTML;
}

const init = () => {
    const TourDates__list = document.querySelector('.TourDates__list');
    tourArray.forEach(element => {
        TourDates__list.appendChild(buildTemplateElement(element));
    })
}

init();