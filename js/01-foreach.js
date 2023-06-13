/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];
console.log(numbers);

numbers.forEach(function (number) {
  console.log('number', number);
});

console.log('--------------------------------');

numbers.forEach(function (number, index, array) {
  console.log('number', number);
  console.log(index);
  //   console.log(array);

  if (index === 0) {
    array[index] = 200;
  }
});
console.log(numbers);
