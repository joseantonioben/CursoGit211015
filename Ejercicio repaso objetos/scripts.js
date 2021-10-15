class Book{
    constructor(title,author,year,genre){
        this.title = title
        this.author = author
        this.year = year
        this.genre = genre
    }

    getAuthor(){
        return this.author
    }

    getGenre(){
        return this.genre
    }

    bookInfo(){
        return `${this.title} es un libro de ${this.genre} escrito por ${this.author} el año ${this.year}.`
    }
}

let books = []

while(books.length < 3){
    let title = prompt("Introduce el título del libro")
    let author = prompt("Introduce el autor del libro")
    let year = prompt("Introduce el año del libro")
    let genre = prompt("Introduce el género del libro").toLowerCase()

    if(title != "" && 
        author != "" && 
        !isNaN(year) && 
        year.length == 4 && 
        (genre == "aventuras" || genre == "terror" || genre == "fantasía")){

            books.push(new Book(title,author,year,genre))
        }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []

    for(const book of books) {
        authors.push(book.getAuthor())
    }

    console.log(authors.sort());
}

const showGenre = () => {
    const genre = prompt("Introduce el género a buscar")

    for(const book of books){
        if(book.getGenre() == genre){
            console.log(book.bookInfo());
        }
    }
}

showAllBooks()
showAuthors()
showGenre()