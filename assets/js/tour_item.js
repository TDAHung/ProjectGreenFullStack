const setSthLocalStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}

const getSthLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

const tourArray = getSthLocalStorage('TourList');

const TourDatesListWrapper = document.querySelector('.TourDates__list');

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
    const FanClub__1__NumsOfTickets = elementHTML.querySelector('.FanClub__1__NumsOfTickets');
    const FanClub__2__name = elementHTML.querySelector('.FanClub__2__name');
    const FanClub__2__NumsOfTickets = elementHTML.querySelector('.FanClub__2__NumsOfTickets');

    dayInWeek.innerText = element.dayInWeek;
    dayInMonth.innerText = element.dayInMonth;
    city.innerText = element.city;
    stage.innerText = element.stage;
    FanClub__1__name.innerText = element.FanClub__1__name;
    FanClub__1__NumsOfTickets.innerText = element.FanClub__1__NumOfTickets > 0 ? element.FanClub__1__NumOfTickets + ' tickets' : 'Sold out';
    FanClub__2__name.innerText = element.FanClub__2__name;
    FanClub__2__NumsOfTickets.innerText = element.FanClub__2__NumOfTickets > 0 ? element.FanClub__2__NumOfTickets + ' tickets' : 'Sold out';

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
        setSthLocalStorage('TourList', tourArray);
        TourDatesListWrapper.innerHTML = '';
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
        TourDatesListWrapper.innerHTML = '';
        init();
    });

    const removeBTN = elementHTML.querySelector('.removeBTN');
    removeBTN.addEventListener('click', () => {
        const index = tourArray.findIndex(item => {
            return item.id === elementHTML.getAttribute('id');
        })

        if (index > -1) tourArray.splice(index, 1);
        setSthLocalStorage('TourList', tourArray);
        TourDatesListWrapper.innerHTML = '';
        init();
    });

    return elementHTML;
}

const init = () => {
    tourArray.forEach(element => {
        TourDatesListWrapper.appendChild(buildTemplateElement(element));
    })
}

init();