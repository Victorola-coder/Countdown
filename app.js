const countDown = () => {
    const countDate = new Date('January 1, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector("#day").innerText = textDay;
    document.querySelector("#hour").innerText = textHour;
    document.querySelector("#minute").innerText = textMinute;
    document.querySelector("#second").innerText = textSecond;
    console.log(gap)

    if (now === countDate) {
        document.querySelector(".waiting").innerHTML(`<img src="./hny.gif" alt="HAPPY NEW YEAR!">`)
        document.querySelector(".end").innerText="Expired"
    }
}

setInterval(countDown, 1000)
