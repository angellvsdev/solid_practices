class Ebook {
  constructor(bookTitle, bookCover, bookPagesQuantity, bookCategory) {
    this.bookTitle = bookTitle
    this.bookCover = bookCover
    this.bookPagesQuantity = bookPagesQuantity
    this.bookCategory = bookCategory
  }

  getEbookSummary() {
    c(this)
  }
}

class Librarian {
  #booksStack = []

  constructor(booksStack) {
    this.booksStack = booksStack
  }

  set takeEbook(book) {
    return this.#booksStack.push(book)
  }

  get ebooksStack() {
    return this.#booksStack
  }
  
  storeBooksStack(obj, el) {
    obj.storedBooks.push(el)
  }

  removeBooksStack(obj) {
    return obj.storedBooks.splice(0)
  }
}

class Library {
  constructor(storedBooks, librarySlots, libraryCategory) {
    this.storedBooks = storedBooks
    this.librarySlots = librarySlots
    this.libraryCategory = libraryCategory
  }

  get getLibraryContent() {
    console.table(this)
  }
}

class FantasyNovelsLibrary extends Library {
  constructor() {
    super([], 50, "Fantasy")
  }

  validate()
}

class RomanticNovelsLibrary extends Library {
  constructor() {
    super([], 75, "Romance")
  }
}

class ComedyStoriesLibrary extends Library {
  constructor(storedBooks) {
    super([], 20, "Comedy")
  }
}

let book = new Ebook("Harry Potter", "https://harrypotter.jpg", 22000, "Fantasy")

let mainLibrarian = new Librarian()
mainLibrarian.takeEbook = book
c(mainLibrarian)

let mainFantasyLibrary = new FantasyNovelsLibrary()
c(mainFantasyLibrary)

mainLibrarian.storeBooksStack(mainFantasyLibrary, book)

c(mainFantasyLibrary)

