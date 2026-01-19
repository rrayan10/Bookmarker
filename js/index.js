// DOM
var bookmarkName = document.getElementById('bookmarkName');
var siteURL = document.getElementById('siteURL');
var links = [];


// Add
function addLink() {
    var link = {
        bookmarkName: bookmarkName.value,
        siteURL: siteURL.value
    }

    links.push(link)
    clearInputs();
}

// Clear Inputs
function clearInputs() {
    bookmarkName.value = '';
    siteURL.value = '';
}