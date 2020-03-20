///// counters 
window.addEventListener("scroll", () => {
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll >= 753){
        const counters = document.querySelectorAll('.counter');
        const speed = 2900;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
});