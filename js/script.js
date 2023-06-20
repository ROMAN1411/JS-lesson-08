// map
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.map((item, idx, arr) => item * 2);

// const result = arr.map((item, idx, arr) => {
//     item * 2
// });
// console.log(result);
// console.log(arr);
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const result = arr.map(item => {
//     if (!(item % 2)) {
//         return item * 2
//     }
//     return item
// })

// const result = arr.map(item => !(item % 2) ? item * 2 : item)

// console.log(result);

// function customMap(arr, callback) {
//     const result = []
//     for (let i = 0; i < arr.length; i += 1) {
//         const item = arr[i];
//         result.push(callback(item, i, arr));
//     }
//     return result;
// }
// console.log(customMap(arr, foo));

// function foo(item, idx, arr) {
//     if (!(item % 2)) {
//         return item * 2
//     }
//     return item

// }

// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]

// const result = arr.map(item => item.skills.map(skill => skill))
// console.log(result);

// flatMap
// const result = arr.flatMap(item => item.skills)
// console.log(result);

// find
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]
// const result = arr.find(item => item > 100)
// const result = arr.find(item => item.skills.includes('js'))
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]

// findIndex
// // const result = arr.findIndex(item =>item.skills.includes('node.js'))
// const result = arr.findIndex(item =>item.skills.includes('avadakedavra'))
// console.log(result);

// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter((item) => !(item % 2))
//     .map((item, _, arr) => {

//         console.log(arr);
//         return item * 2
//     })
// console.log(result);

// every
// const numbers = [22, 1, 2, 3, 4, 5, 6, 7];
// const number2 = [2, 4, 6, 8, 10]
// const result = numbers.every(item => !(item % 2))
// console.log(result);

// const arr = [{
//     name: 'User1',
//     age: 18
// }, {
//     name: 'User2',
//     age: 12
// }, {
//     name: 'User3',
//     age: 19
// }]

// const result = arr.every(user => user.age >= 18)
// console.log(result);

// some
// const numbers = [1, 3, 4, 5, 6, 7];
// const numbers2 = [1, 23, 43, 7, 9];

// const result = numbers2.some(item => {
//     console.log(item);
//     return !(item % 2)
// })
// console.log(result);

// sort

// const numbers = [11, 4, 9, 3, 54, 23, 12]
// const result = numbers.sort((a, b) => b - a)
// console.log('result', result);
// console.log('numbers', numbers);

// const result = [...numbers].sort((a, b) => b - a)
// console.log('result',result);
// console.log('numbers',numbers);

// const numbers = [11, 4, 9, 3, 54, 23, 12]
// numbers.sort()
// console.log(numbers);

// const str = ['s', 'a', 'f', 'B', 'A', 'S']
// const result = str.sort((a, b) => a - b)
// const result = str.sort()
// const result = str.sort((a,b) => b.localeCompare(a))
// console.log(result);

// const arr = [{
//     name: 'Den',
//     age: 18
// }, {
//     name: 'Slava',
//     age: 12
// }, {
//     name: 'Max',
//     age: 19
// }]

// arr.sort((a, b) => a.name.localeCompare(b.name))
// console.table(arr);

//reduce
// const numbers = [11, 4, 9, 3, 54, 23, 12]
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     console.log('----------------------------------');
//     return acc + item;
// }, 0)
// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     acc.push(item * 2)
//     return acc
// }, [])
// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     return acc.push(item * 2)
// }, [])
