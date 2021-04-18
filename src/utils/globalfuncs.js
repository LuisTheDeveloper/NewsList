import isNil from "lodash/isNil";

export const sortByTitle = (a, b) => {
  const itemA = a.title.toUpperCase();
  const itemB = b.title.toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
};

export const sortByAuthor = (a, b) => {
  const itemA = a.author.toUpperCase();
  const itemB = b.author.toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
};

export const sortNews = (value, list) => {
  if (!value) {
    list.sort(sortByTitle);
  } else {
    list.sort(sortByAuthor);
  }
};

export const isArrayWithValues = (value) =>
  Array.isArray(value) && value.length > 0;

export const isObjectWithKeys = (value) =>
  value instanceof Object &&
  value.constructor === Object &&
  Object.keys(value).length > 0;

export const isObjectWithKeysAndValues = (value) =>
  isObjectWithKeys(value) &&
  Object.values(value).some((value) => {
    return isNil(value) ? false : true;
  });
