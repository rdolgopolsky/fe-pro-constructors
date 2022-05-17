import { Book } from './Book.js';

/**
 * @param {string} name                      
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */

export function User(name, date = new Date()) {
  this.name = name;
  this.date = date;
  this.myBooks = [];
  this.friends = [];
  this.likes = [];

  this.addToFriends = function (user) {
    let { friends } = this;
    let { friends: userFriends } = user;

    if (friends.includes(user)) {
      // Почему-то не видет здесь переменную friends
      this.friends = this.friends.filter(
        (friend) => friend !== user
      );

      // Почему-то не видет здесь переменную userFriends
      user.friends = user.friends.filter(
        (friend) => friend !== this
      );
    }

    else {
      friends.push(user);
      userFriends.push(this);
    }
  }

  // this.removeFriend = this.addToFriends;

  this.removeFriend = function (user) {
    let { friends } = this;
    let { friends: userFriends } = user;
    let userIndex = friends.indexOf(user);
    let thisIndex = userFriends.indexOf(this);

    if (userIndex !== -1 && thisIndex !== -1) {
      friends.splice(userIndex, 1);
      userFriends.splice(thisIndex, 1);
    }

    else {
      friends.push(user);
      userFriends.push(this);
    }
  }

  this.likeBook = function (book) {
    let { likes } = this;
    let { likedUsers } = book;

    if (likes.includes(book)) {
      // Почему-то не видет здесь переменную likes
      this.likes = this.likes.filter(
        (likedBook) => likedBook !== book
      );

      // Почему-то не видет здесь переменную likedUsers
      book.likedUsers = book.likedUsers.filter(
        (user) => user !== this
      );
    }

    else {
      likes.push(book);
      likedUsers.push(this);
    }
  }

  this.unlikeBook = this.likeBook;

  Object.defineProperty(this, 'friendsNames', {
    get() {
      let { friends } = this;
      let friendsNames = friends.map(friend => {
        return friend.name;
      }).join(', ');

      console.log(friendsNames);
      return friendsNames;
    },
  });

  Object.defineProperty(this, 'likedBooks', {
    get() {
      let { likes } = this;
      let likedBooks = likes.map(book => {
        return book.title;
      }).join(', ');

      console.log(likedBooks);
      return likedBooks;
    },
  });

  Object.defineProperty(this, 'publishedBooks', {
    get() {
      let { myBooks } = this;
      let publishedBooks = myBooks.map(book => {
        return book.title;
      }).join(', ');

      console.log(publishedBooks);
      return publishedBooks;
    },
  });

}

