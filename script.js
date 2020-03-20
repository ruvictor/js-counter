///// counters 
const allDivCounters = document.querySelectorAll('#counter');
const speed = 200;

allDivCounters.forEach(counter => {

    const updateCount = setInterval(() => {
        const counterNumber = +counter.getAttribute('countTo');
        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ? 
        counter.innerHTML = Math.ceil(divContent + increaseBy) : 
        clearInterval(updateCount);

    }, 1);

});