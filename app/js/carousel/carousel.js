    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const dotsNav = document.querySelector('.carousel__nav');
    const dots = Array.from(dotsNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log('slides width', slideWidth)
    //set position of slide in queue format rather than stack,means arrange the slide next to each other
    /*
        slides[0].style.left = 0 * slideWidth + 'px';
        slides[1].style.left = 1 * slideWidth + 'px';
        slides[2].style.left = 2 * slideWidth + 'px';
     */

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-dot');
        targetDot.classList.add('current-dot');
    }

    const setSlidePosition = (slide, index) => {
        slide.style.left = index * slideWidth + 'px';
    }

    slides.forEach(setSlidePosition);


    const hideShowArrows = (targetIndex, prevButton, nextButton, slides) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            nextButton.classList.add('is-hidden');
            prevButton.classList.remove('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }


    nextButton.addEventListener('click', e => {
        console.log(' next click ', e);
        //get current slide
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-dot');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(nextIndex, prevButton, nextButton, slides);
    });

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-dot');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(prevIndex, prevButton, nextButton, slides);
    });

    dotsNav.addEventListener('click', e => {
        // what indicator clicked on
        const targetDot = e.target.closest('button');
        if (!targetDot) {
            return;
        }
        console.log('Target ', targetDot);
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-dot');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);

       hideShowArrows(targetIndex, prevButton, nextButton, slides);
    });
