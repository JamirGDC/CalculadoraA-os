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

    const actualDate = new Date();

    const userDate = new Date(year, month - 1, day);

    const timeDiff = actualDate - userDate;

    
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24)));

    answerContainer.innerHTML = `<p><span class="outYear"> ${years} </span>years</p> <p><span class="outMonth">${months} </span>months</p> <p><span class="outDay">${days} </span>days</p>`;

    
    
    // `<br>${years} years<br>${months} months<br>${days} days`;

    
}
