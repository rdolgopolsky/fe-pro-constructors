import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

const roman = new User('Roman');
const bohdan = new User("Bohdan");
const valera = new User("Valera");
const phill = new User("Phill");

const author1 = new Author("Roman Dolgopolsky");
const author2 = new Author("Bohdan Onatskyi");


roman.addToFriends(bohdan);
roman.addToFriends(valera);
roman.addToFriends(phill);

bohdan.addToFriends(valera);
// valera.removeFriend(roman);


const book = new Book("book 1", 2008, roman, [author1]);
const book2 = new Book("book 2", 2009, valera, [author1, author2]);
const book3 = new Book("book 3", 2010, roman, [author1, author2]);
const book4 = new Book("book 4", 2011, bohdan, [author1, author2]);
const book5 = new Book("book 5", 2012, phill, [author1, author2]);
const book6 = new Book("book 6", 2013, phill, [author1]);

console.log(book);

roman.likeBook(book);

console.log(roman);

setTimeout(function () {
  book.suggestedPublicators;
}, 3000)


// setTimeout(function () {
//   roman.likeBook(book);
//   roman.likeBook(book2);
//   roman.likeBook(book3);
//   valera.removeFriend(roman);
//   console.log(roman);
// }, 4000)


// setTimeout(function () {
// }, 5000)