// DOM
var bookmarkName = document.getElementById('bookmarkName');
var siteURL = document.getElementById('siteURL');
var table = document.getElementById('table');
var links = [];


// Add
function addLinks() {
    var link = {
        bookmarkName: bookmarkName.value,
        siteURL: siteURL.value
    }

    links.push(link)
    clearInputs();
    viewLinks();
}


// Clear Inputs
function clearInputs() {
    bookmarkName.value = '';
    siteURL.value = '';
}


// View
function viewLinks() {
    var cartona = ``;
    var index = 0;

    for (var i = 0; i < links.length; i++) {
        index = index + 1;
        cartona += `
        <tr>
            <th scope="row"><h5 class="mt-2 fw-bold">${index}</h5></th>
            <td><h5 class="mt-2 fw-bold">${links[i].bookmarkName}</h5></td>
            <td><button type="button" class="btn btn-success fw-bold"><i class="fa-solid fa-eye"></i>Visit</button></td>
            <td><button type="button" class="btn btn-danger fw-bold"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
        </tr>
        `
        table.innerHTML = cartona;
    }
}