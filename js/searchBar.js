
$(document).ready(function () {
    searchBar("#searchBar" , ".card-container")
});

function searchBar (input, selector) {
    document.addEventListener("keyup", (e) => {
        console.log(e);
        if (e.target.matches(input)) {
            document.querySelectorAll(selector).forEach( el => 
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? el.classList.remove("filter")
                : el.classList.add("filter")
            ); 
        }
    })
}
