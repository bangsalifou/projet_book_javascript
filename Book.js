let myFirstBook = {
    title: verre cassé,
    author: Alain Mabanckou,
    description: roman adulte,
    numberPages: 120,
    read: false,

};
let mySecondBook = {
  title: lLes jardins de lumières,
  author: Amin Maloof;
  description: roman adulte,
  numberPages: 252,
  read: false,
};
let myThirdBook = {
  title: tout mon chat,
  author: Gilles Bachelet,
  description: "album jeunesse,
  numberPages: 64,
  read: false,
};

let myFourthBook = {
  title: Le magicien d'Oz;
  author: Robert Sabuda,
  description: album jeunesse,
  numberPages: 10,
  read: false,
};
let bookTitle = myBook.title;
let bookAuthor = myBook.author;
let bookDescription = myBook.description;
let bookNumberPages = myBook.NumberPages;
let bookRead = myBook.read;


export class Book {
  constructor(title, author, description, numberPages, read){
  this.title = title;
  this.author = author;
  this.description = description;
  this.numberPages = numberPages;
  this.read = read;

};
};

let myFirstBook = new Book("verre cassé", "Alain Mabanckou", "roman adulte",120, false);
let mysecondBook = new Book ("les jardins de lumières", "Amin Maloof", "roman adulte", 252, false);
let mythirdBook = new Book ("tout mon chat", "Gilles Bachelet", "album jeunesse",64, false);
let myfourthBook = new Book ("le magicien d'Oz", "Robert Sabuda", "album jeunesse", 10, false);

export {myFirstBook, mySecondBook, myThirdBook, myFourthBook};

let readBook (page) = book.length;
export{book, numberPages};

class book {
  constructor(title, numberPages, currentPage){
    this.title = title;
    this.numberPages = numberPages;
    this.currentPage = 0;
    this.page = [];
    this.currentPage = book.length - this.page;

    if(page < 1 || page >= numberPages){
      this.numberPages = 0;
      this.currentPage = "Pas encore lu";
    }else if (page > 1 && page <= numberPages){
      this.numberPages = "en train de lire";
      this.currentPage = page;
      console.log(page);
    }else if (page===numberPage){
      this.numberpage = 1;
      this.currentPage = "lu";
    }
    }
  };

export const books = [];
