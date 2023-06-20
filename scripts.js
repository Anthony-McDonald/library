let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(`${this.name} written by ${this.author}, ${this.pages} pages, ${this.read}`);
}


function addBookToLibrary(name, author, pages, read) {
    myLibrary.push(new Book(name, author, pages, read));
}



function bookLister() {
    let table = document.querySelector('.bookList')
    let rows = table.getElementsByTagName('tr');
    
    for (let i = rows.length - 1; i > 0; i--) {
        console.log(rows.length)
        console.log('deleting row i' + rows[i])
        table.deleteRow(i);
    }

    for (let j = 0; j < myLibrary.length; j++) {
        console.log(myLibrary[j]);
        let row = table.insertRow(1);
        row.id = "ident" + j;

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = myLibrary[j].name;
        cell2.innerHTML = myLibrary[j].author;
        cell3.innerHTML = myLibrary[j].pages;
        // cell4.innerHTML = myLibrary[j].read;
        cell4.innerHTML = "<button id='buttonident"+ j +"'onclick=changeStatus(" + j + ")> " + myLibrary[j].read + "  </button>";
        cell5.innerHTML = "<button onclick=removeRow(" + j + ")> Remove Book</button>";

    }
}

function removeRow(toRemove) {
    let rowToRemove = document.querySelector("#ident" + toRemove);
    console.log("row to remove is currently bound to " + rowToRemove)
    rowToRemove.parentNode.removeChild(rowToRemove);
    myLibrary.splice(toRemove, 1)
}

function changeStatus(toChange) {
    let rowToChange = document.querySelector("#buttonident" + toChange);
    console.log("row to change is currently bound to " + rowToChange)
    console.log(rowToChange.innerHTML)
    let substring = "Not";
    if (rowToChange.innerHTML.includes(substring)) {
        myLibrary[toChange].read = 'Read'

    } else if (!rowToChange.innerHTML.includes(substring)){
        myLibrary[toChange].read = 'Not Read'
    }
    bookLister();
}

function openBookForm() {
    document.querySelector('.form').style.display = "";
    document.querySelector('.bookList').style.display= "none";
}



function closeBookForm() {
    formEntryArray = []
    let form = document.querySelector('.form');
    let forminputs = form.getElementsByTagName('input');
    
    for (i = 0; i< forminputs.length - 2; i++) {
        formEntryArray.push(forminputs[i].value);
        forminputs[i].value = '';
        console.log(forminputs[i])
    }

    formEntryArray.push(document.querySelector('input[name=affirmative]:checked').value);

    for (let i = 0; i < formEntryArray.length; i++) {
        if (formEntryArray[i] == "") {
            alert("please fill out every entry area to continue")
            return false;
        } 
    }

    addBookToLibrary(formEntryArray[0], formEntryArray[1], formEntryArray[2], formEntryArray[3]);
    console.log(formEntryArray)
    form.style.display = "none";
    document.querySelector('.bookList').style.display= "";
}


let formShowButton = document.querySelector(".bookAddButton")

    formShowButton.addEventListener('click', ()=> {
        openBookForm();
})

let formCloseButton = document.querySelector(".formbutton") 
    formCloseButton.addEventListener('click', ()=> {
        closeBookForm();
        bookLister();
    })


// let changeStatusButton = document.querySelector('.changeRead')
//     changeStatusButton.addEventListener('click', ()=> {
//         alert('status changed');
//     })

// let removeListingButton = document.querySelector('.removeListing')
// changeStatusButton.addEventListener('click', ()=> {
//     alert('listing removed')
// })


let target = document.getElementsByTagName('body')[0];
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].firstChild.nodeType == "button") {
       mutation.addedNodes[0].addEventListener("click", alert("status changed"));
    }
  });    
});

let config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);

// ---------------------------

// let testBook = new Book('test', 'tester', 6969, 'not read');
// myLibrary.push(testBook);

// let testBook2 = new Book('test2', 'tester', 6969, 'not read');
// myLibrary.push(testBook);

// let testBook3 = new Book('test3', 'tester', 6969, 'not read');
// myLibrary.push(testBook);
// testBook.info();

// console.log(myLibrary.length)
// console.log(myLibrary[0])