const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; // convert into number by adding + in-front of value

populateUI();

//save selected movie index and price
const setMovieData = (movieIndex, movieData) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMovieData', movieData);
}
function updateSelectedCount() {
    //get the selected seat
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    setTotalAndCount(selectedSeats);
}

function setTotalAndCount(selectedSeats) {
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
}

//Get data from local storage and populate on UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
             if (selectedSeats.indexOf(index) > -1) {
                 seat.classList.add('selected');
             }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    let movieData = localStorage.getItem('selectedMovieData');
    if (movieData) {
        movieSelect.value = movieData;
    }
}

//movie select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', (event) => {
    // console.log(event.target);//this will give us exact clicked target
    if (event.target.classList.contains('seat')
        && !event.target.classList.contains('occupied')) {
        // console.log('Inside ', event.target);
        event.target.classList.toggle('selected');

        updateSelectedCount()
    }
});

updateSelectedCount();

