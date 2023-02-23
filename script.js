setInterval(setClock, 1000)

const clock = document.getElementById("clock")
const date = document.getElementById("date")

function setClock() {
    let currentDate = new Date()
    let hour = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hour + ":" + minutes + ":" + seconds

    clock.textContent = currentTime
    date.textContent = currentDate.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })
}

setClock()