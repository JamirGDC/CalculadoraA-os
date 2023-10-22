const dayInputByUser = document.querySelector("#day");
const monthInputByUser = document.querySelector("#month");
const yearInputByUser = document.querySelector("#year");

const calculateButton = document.querySelector(".btn-calculate");
const answerContainer = document.querySelector(".answer");

const outYear = document.querySelector(".outYear");
const outMonth = document.querySelector(".outMonth");
const outDay = document.querySelector(".outDay");


function calculateDate() {

    const dayParsed = parseInt(dayInputByUser.value);
    const monthParsed = parseInt(monthInputByUser.value);
    const yearParsed = parseInt(yearInputByUser.value);

    if (dayParsed <= 0 || monthParsed <= 0 || yearParsed < 0) {
        answerContainer.innerHTML = "Please verify the values entered";
        return;
    }

    const actualDate = new Date();

    const userDate = new Date(yearParsed, monthParsed - 1, dayParsed);

    const timeDiff = actualDate - userDate;

    const years = Math.abs(actualDate.getFullYear() - userDate.getFullYear());
    const actualMonth = actualDate.getMonth();
    const userMonth = userDate.getMonth();
    const months = Math.abs(actualMonth - userMonth + (actualDate.getDate() < userDate.getDate() ? -1 : 0));
    const days = Math.abs(actualDate.getDate() - userDate.getDate());

    answerContainer.innerHTML = `<p><span class="outYear"> ${years} </span>years</p> <p><span class="outMonth">${months} </span>months</p> <p><span class="outDay">${days} </span>days</p>`;
    
}