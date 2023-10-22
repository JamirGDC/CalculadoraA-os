function obtainDay() {
    const day = document.querySelector("#day").value;
    return parseInt(day);
}
function obtainMonth() {
    const month = document.querySelector("#month").value;
    return parseInt(month);

}
function obtainYear() {
    const year = document.querySelector("#year").value;
    return parseInt(year);
}

function calculateDate() {

    const dayInputByUser = obtainDay();
    const monthInputByUser = obtainMonth();
    const yearInputByUser = obtainYear();

    if (dayInputByUser >= 1 && dayInputByUser <= 31 || monthInputByUser >= 1 && monthInputByUser <= 12 || yearInputByUser > 0) {
        const actualDate = new Date();

        const userDate = new Date(yearInputByUser, monthInputByUser - 1, dayInputByUser);
        const answerContainer = document.querySelector(".answer");



        const years = Math.abs(actualDate.getFullYear() - userDate.getFullYear());
        const actualMonth = actualDate.getMonth();
        const userMonth = userDate.getMonth();
        const months = Math.abs(actualMonth - userMonth + (actualDate.getDate() < userDate.getDate() ? -1 : 0));
        const days = Math.abs(actualDate.getDate() - userDate.getDate());

        answerContainer.innerHTML = `<p><span class="outYear"> ${years} </span>years</p> <p><span class="outMonth">${months} </span>months</p> <p><span class="outDay">${days} </span>days</p>`;
    }
    else {
        answerContainer.innerHTML = "Please verify the values entered";
        return;
    }



}