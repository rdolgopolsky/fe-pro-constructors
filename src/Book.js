import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */

export function Book(title, year, publicationBy, authors) {
  this.title = title;
  this.authors = authors;
  this.year = year;
  this.likedUsers = [];
  this.publicationBy = publicationBy;

  publicationBy.myBooks.push(this);

  authors.forEach(({ books }) => books.push(this));

  Object.defineProperty(this, "suggestedBooks", {
    get() {
      let { authors: [{ books }] } = this;
      let suggestedBooks = books.filter(
        (book) => book !== this
      ).map(book => {
        return book.title;
      }).join(', ');

      console.log(suggestedBooks);
      return suggestedBooks;
    }
  });

  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      let { authors, publicationBy: thisPublicationBy } = this;

      let suggestedPublicators = authors.reduce((accum, { books }) => {
        books.forEach(({ publicationBy }) => {
          if (publicationBy !== thisPublicationBy && !accum.includes(publicationBy.name)) {
            return accum.push(publicationBy.name)
          } else {
            return accum;
          }
        });

        return accum;
      }, []).join(', ');

      console.log(suggestedPublicators);
      return suggestedPublicators;
    }

  });

}
