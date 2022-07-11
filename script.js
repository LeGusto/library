let library = [];
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let add = document.querySelector(".add");
let container = document.querySelector(".container");

let auth = document.querySelector("#author");
let titl = document.querySelector("#title");
let pag = document.querySelector("#pages");

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBook() {
    let author = auth.value;
    let title = titl.value;
    let pages = pag.value;
    let newBook = new Book(author, title, pages);
    library.push(newBook);
    console.log(library)
    library.forEach((bok) => {
        for(key in bok) {
            console.log(key,bok[key]);
        }
    })

    let contain = document.createElement("div");
    contain.classList.add("card");
    let aut = document.createElement("div");
    aut.textContent = auth.value;
    let tit = document.createElement("div");
    tit.textContent = titl.value;
    let page = document.createElement("div");
    page.textContent = pag.value;
    let read = document.createElement("button");
    read.classList.add("read");
    read.textContent = "Not read";
    read.addEventListener('click', () => {
        if (read.classList.contains("finished")) {
            read.classList.remove("finished")
            read.textContent = "Not read";
        }
        else {
            read.classList.add("finished");
            read.textContent = "Finished";
        }
    })
    let remove = document.createElement("button");
    remove.textContent = "REMOVE"
    remove.classList.add("remove");
    remove.addEventListener('click', () => {
        container.removeChild(contain);
        library.splice(library.findIndex((obj) => {return obj.author === aut.textContent}), 1)
    })


    contain.appendChild(tit);
    contain.appendChild(aut);
    contain.appendChild(page);
    contain.appendChild(read);
    contain.appendChild(remove);
    container.appendChild(contain);
}

add.addEventListener("click", () => {
    form.style.display = "flex";
})

submit.addEventListener('click', () => {
    form.style.display = "none";
    addBook();
})