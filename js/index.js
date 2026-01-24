// DOM
var bookmarkName = document.getElementById('bookmarkName');
var siteURL = document.getElementById('siteURL');
var table = document.getElementById('table');
var links = [];
// Regex (Validation)
var regex = {
    bookmarkName: /.{3,20}/,
    siteURL: /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost)(:\d+)?(\/[^\s?#]*)?(\?[^\s#]*)?(#[^\s]*)?$/
};

if (localStorage.getItem('sites')) {
    links = JSON.parse(localStorage.getItem('sites'));
    viewLinks();
}


// Add
function addLinks() {
    if (validateInputs(bookmarkName) & validateInputs(siteURL)) {
        var link = {
            bookmarkName: bookmarkName.value,
            siteURL: siteURL.value
        }

        links.push(link)
        localStorage.setItem('sites', JSON.stringify(links));

        clearInputs();
        viewLinks();
    }
}


// Clear Inputs
function clearInputs() {
    bookmarkName.value = '';
    siteURL.value = '';
    bookmarkName.classList.remove('is-valid');
    siteURL.classList.remove('is-valid');
}


// View
function viewLinks() {
    var cartona = ``;
    var index = 0;

    if (links.length == 0) {
        table.innerHTML = '';
    }
    else {
        for (var i = 0; i < links.length; i++) {
            index = index + 1;
            cartona += `
            <tr>
                <th scope="row"><h5 class="mt-2 fw-bold">${index}</h5></th>
                <td><h5 class="mt-2 fw-bold">${links[i].bookmarkName}</h5></td>
                <td>
                    <a href="${links[i].siteURL}" target="_blank">
                        <button type="button" class="btn btn-success fw-bold"><i class="fa-solid fa-eye"></i>Visit</button>
                    </a>
                </td>
                <td><button type="button" class="btn btn-danger fw-bold" onclick="deleteLinks(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
            </tr>
            `
            table.innerHTML = cartona;
        }
    }
}


// Delete
function deleteLinks(linkIndex) {
    links.splice(linkIndex, 1);
    localStorage.setItem('sites', JSON.stringify(links));
    viewLinks();
}


// Validation
function validateInputs(enteredInput) {
    if (regex[enteredInput.id].test(enteredInput.value)) {
        enteredInput.classList.remove('is-invalid');
        enteredInput.classList.add('is-valid');
        return true;
    }
    else {
        enteredInput.classList.remove('is-valid');
        enteredInput.classList.add('is-invalid');
        return false;
    }
}
