import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} dateOfBirth
 * @constructor
 * @property {string} name
 * @property {Date} dateOfBirth
 * @property {Book[]} books
 */

export function Author(name, dateOfBirth = new Date()) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.books = [];
}
