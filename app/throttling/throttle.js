const resizeController =(function () {

    function onInit() {
        window.addEventListener('resize', onThrottled());
    }

    function onResize() {
        let box = document.querySelector('.box');
        box.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    function throttle(expensive, limit) {
        let isCalled = true;

        return function () {
            if (isCalled) {
                expensive();
                isCalled = false;
                setTimeout(() => {
                    isCalled = true;
                }, limit)
            }
        }
    }

    function onThrottled() {
        return throttle(onResize, 10000);
    }

    return {
        init: onInit
    }
})()

document.addEventListener("DOMContentLoaded", function(event) {
    resizeController.init();
});
