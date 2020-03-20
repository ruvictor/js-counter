///// counters 
const speed = 200;

document.querySelectorAll('#counter').forEach(counter => {

    const counterNumber = +counter.getAttribute('countTo');

    const updateCount = setInterval(() => {
        
        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ? 
        counter.innerHTML = Math.ceil(divContent + increaseBy) : 
        clearInterval(updateCount);

    }, 1);

});