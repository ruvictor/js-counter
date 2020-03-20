///// counters 
const allDivCounters = document.querySelectorAll('#counter');
const speed = 200;
allDivCounters.forEach(counter => {
    const updateCount = setInterval(() => {
        const counterNumber = +counter.getAttribute('countto');
        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        if(divContent < counterNumber)
            counter.innerHTML = Math.ceil(divContent + increaseBy);
        else
            clearInterval(updateCount);
    }, 1);
});