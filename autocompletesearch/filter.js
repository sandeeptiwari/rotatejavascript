let countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan",
    "India",
    "Indonatia",
    "Indiana",
    "United ingdom",
    "Poland"
];

let SearchCountry = (function () {
    this._allCountry = countryList;
    let searchBox = document.getElementById('country');
    let suggestionContainer = document.getElementById('country-suggestion-container');

    function search(textToBeSearch) {
        suggestionContainer.innerHTML = "";
        countryList.forEach(country => {
            // Check if the inputted value matches the start of the country
            if (country.startsWith(textToBeSearch)) {
                //add country as a suggestion
                suggestionContainer.appendChild(createSuggestionElement(country));
            }
        })
    }

    function createSuggestionElement(country) {
        let element = document.createElement('div');
        //add class if required
        //element.classList.add('autocomplete-items');
        element.textContent = country;
        // Handle click on a suggestion
        $(element).click(function (e) {
            searchBox.value = e.target.textContent;
            // Empty the suggestion list
            suggestionContainer.innerHTML = "";
        });
        return element;
    }

    function init() {
        // Handle input change
        searchBox.addEventListener("input", (e) => {
            console.log(e.target.value);
            search(e.target.value);
        });
    }

    return {
        init: init
    };
})();

$(document).ready(function () {
    SearchCountry.init();
});
