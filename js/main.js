var siteNameInput = document.getElementById('siteNameInput');//input kolo
var siteUrlInput = document.getElementById('siteUrlInput');//input kolo


var bookmarkerContainer;
// var deleteBookmark = [];

if (localStorage.getItem('bookmark') != null) {
    bookmarkerContainer = JSON.parse(localStorage.getItem('bookmark'));
    displayBookmark(bookmarkerContainer);
}
else {
    bookmarkerContainer = [];
}

 


// function to add bookmark
function addBookmark() {
    var bookMark = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value
    }
    bookmarkerContainer.push(bookMark);
    // console.log(bookmarkerContainer);
    localStorage.setItem('bookmark', JSON.stringify(bookmarkerContainer));
    clearForm();
    displayBookmark(bookmarkerContainer);
    // displayBookmark(deleteBookmark);
}

// function to clear form
function clearForm() {
    siteNameInput.value = '';
    siteUrlInput.value = '';
}

// function to display sitename 
function displayBookmark(list) {
    var box = ``;
    for (var i = 0; i < list.length; i++) {
        box += `<div class="adding-bookmark w-100 my-3 p-4">
        <div class="bookmark-container w-100 d-flex justify-content-between my-4"> 
            <h3 >${list[i].siteName}</h3>
            <div class="adding-btn w-75">
                <a href="${list[i].siteUrl}" target="_blank" class="btn btn-primary">visit</a>
                <button onclick = "deleteBookmark(${i})" class="deleteBtn btn btn-danger" >Delete</button>
            </div>
        </div>
    </div>`
    }
    document.getElementById('addingBookmark').innerHTML = box;
}


//function to delete item
function deleteBookmark(deletedItem) {
    bookmarkerContainer.splice(deletedItem,1);
    localStorage.setItem('bookmark', JSON.stringify(bookmarkerContainer));
    displayBookmark(bookmarkerContainer);
}


