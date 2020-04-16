/*let myFirstBook = {
    title: verre cassé,
    author: Alain Mabanckou,
    description: roman adulte,
    pages: 120,
    read: false,

};
let mySecondBook = {
  title: lLes jardins de lumières,
  author: Amin Maloof;
  description: roman adulte,
  pages: 252,
  read: false,
};
let myThirdBook = {
  title: tout mon chat,
  author: Gilles Bachelet,
  description: "album jeunesse,
  pages: 64,
  read: false,
};

let myFourthBook = {
  title: Le magicien d'Oz;
  author: Robert Sabuda,
  description: album jeunesse,
  pages: 10,
  read: false,
};
let bookTitle = myBook.title;
let bookAuthor = myBook.author;
let bookDescription = myBook.description;
let bookpages = myBook.pages;
let bookRead = myBook.read;
*/

export class Book {
  constructor(title, author, description, pages, currentPage, read){
  this.title = title;
  this.author = author;
  this.description = description;
  this.pages = pages;
  this.read = false;
  this.currentPage = currentPage;
  }
  readBook(page){

      if(page < 1 || page > this.pages){
        return  0;
        alert( "Pas encore lu");
      }else if (page  >= 1 && page < this.pages){

        this.currentPage = page;
          return  1;
        console.log(page);
      }else if (page===this.pages){
        
        this.read = true;
        this.currentPage = page;
          return 1;
      }
  }
}

let myFirstBook = new Book("verre cassé", "Alain Mabanckou", "roman adulte",120);
let mySecondBook = new Book("les jardins de lumières", "Amin Maloof", "roman adulte", 252);
let myThirdBook = new Book("tout mon chat", "Gilles Bachelet", "album jeunesse",64);
let myFourthBook = new Book("le magicien d'Oz", "Robert Sabuda", "album jeunesse", 10);

export let books = [myFirstBook, mySecondBook, myThirdBook, myFourthBook];
