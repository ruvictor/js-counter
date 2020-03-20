///// counters 
window.addEventListener("scroll", () => {
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll >= 753){
        const allCounters = document.querySelectorAll('.counter');
        const speed = 2900;

        allCounters.forEach(counter => {
            const updateCount = () => {
                const counterNumber = +counter.getAttribute('data-target');
                const divContent = +counter.innerText;
                const increaseBy = counterNumber / speed;
                if (divContent < counterNumber) {
                    counter.innerText = Math.ceil(divContent + increaseBy);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = counterNumber;
                }
            };
            updateCount();
        });
    }
});