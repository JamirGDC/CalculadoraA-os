const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const calculateButton = document.querySelector(".btn-calculate");
const answerContainer = document.querySelector(".answer");

const outYear = document.querySelector(".outYear");
const outMonth = document.querySelector(".outMonth");
const outDay = document.querySelector(".outDay");


function calculateDate() {

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (day <= 0 || month <= 0 || year < 0) {
        answerContainer.innerHTML = "Please verify the values entered";
        return;
    }

    const actualDate = new Date();

    const userDate = new Date(year, month - 1, day);

    const timeDiff = actualDate - userDate;

    
    const years = Math.abs(actualDate.getFullYear() - userDate.getFullYear());
    const actualMonth = actualDate.getMonth();
    const userMonth = userDate.getMonth();
    const months = Math.abs(actualMonth - userMonth + (actualDate.getDate() < userDate.getDate() ? -1 : 0));
    const days = Math.abs(actualDate.getDate() - userDate.getDate());

    answerContainer.innerHTML = `<p><span class="outYear"> ${years} </span>years</p> <p><span class="outMonth">${months} </span>months</p> <p><span class="outDay">${days} </span>days</p>`;
    
}