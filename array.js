export const head = (arr) => arr[0];
export const tail = (arr) => arr.slice(1);
export const length = (arr) => arr.length;

const sumOfArr = arr => {
  if(length(arr) === 0) return 0;
  return head(arr) + sumOfArr(tail(arr));
}

export const map = (fn, arr) => {
  if(length(arr) === 0) return [];
  return [fn(head(arr)), ...map(fn, tail(arr))];
}

export const filter = (fn, arr) => {
  if(length(arr) === 0) return [];
  const filteredFirst = fn(head(arr)) ? [head(arr)] : [];
  return [...filteredFirst, ...filter(fn, tail(arr))];
}

export const reduce = (fn, initialValue, arr) => {
  if(length(arr) === 0) return initialValue;
  const newInitialValue = fn(initialValue, head(arr));
  return reduce(fn, newInitialValue, tail(arr));
}

export const max = (arr) => reduce((acc, n ) => acc > n ? acc : n, undefined, arr);
export const min = (arr) => reduce((acc, n ) => acc < n ? acc : n, undefined, arr);

// using reduce to write a method that returns an array where each item has been doubled
const double = (arr) => reduce((doubledArr, n ) => [...doubledArr, n*2], [], arr);