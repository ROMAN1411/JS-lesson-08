console.log('---------------------------------------------------------------');
{
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(item => (totalPrice += item));

    //   for (let i = 0; i < orderedItems.length; i += 1) {
    //     totalPrice += orderedItems[i];
    //   }

    // Change code above this line
    return totalPrice;
  }

  console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
  console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
  console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
}
console.log('---------------------------------------------------------------');
{
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
    // numbers.forEach(number => {
    //   if (number > value) {
    //     filteredNumbers.push(number);
    //   }
    // });

    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    // numbers.forEach(number => number > value);

    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }

    // Change code above this line
    return filteredNumbers;
  }

  console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); //повертає [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]
}
console.log('---------------------------------------------------------------');
{
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach(number => {
      //   console.log(secondArray.includes(number));
      if (secondArray.includes(number)) {
        commonElements.push(number);
      }
    });

    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }

    return commonElements;
    // Change code above this line
  }

  console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]

  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає [10, 30, 40]
  console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає []
}
console.log('---------------------------------------------------------------');
{
  function changeEven(numbers, value) {
    // console.log(numbers);
    const newArr = [];

    numbers.forEach(number =>
      number % 2 === 0 ? newArr.push(number + value) : newArr.push(number),
    );
    return newArr;
  }

  console.log(changeEven([1, 2, 3, 4, 5], 10));
  //повертає новий масив [1, 12, 3, 14, 5]
  console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
  // повертає новий масив [12, 18, 3, 7, 14, 16]
  console.log(changeEven([17, 24, 68, 31, 42], 100));
  // повертає новий масив [17, 124, 168, 31, 142]
  console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
  // повертає новий масив [144, 13, 81, 192, 136, 154]
}
console.log('---------------------------------------------------------------');
{
  const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
  // Change code below this line
  const planetsLengths = planets.map(planet => planet.length);
  console.log(planetsLengths);
}
console.log('---------------------------------------------------------------');

{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism'],
    },
  ];
  // Change code below this line

  //   const genres = books.map(book => book.genres);
  //   console.log(genres);

  const genres = books.flatMap(book => book.genres);
  console.log(genres);
  const genres2 = books.reduce((acc, book) => [...acc, ...book.genres], []);
  console.log(genres2);
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];

  //   const getUserNames = users.map(user => user.name);
  //   console.log(getUserNames);

  //   const getUserNames = users.flatMap(user => user.name);

  //   console.log(getUserNames);
}
console.log('---------------------------------------------------------------');
{
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  // Change code below this line

  const evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log(oddNumbers);
}
console.log('---------------------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = 'Bernard Cornwell';
  // Change code below this line

  const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  console.log(topRatedBooks);
  const booksByAuthor = books.filter(book => book.author === AUTHOR);
  console.log(booksByAuthor);
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  // console.log(users);

  const getUsersWithEyeColor = (users, color) => {
    return users.filter(({ eyeColor }) => eyeColor === color);
  };

  console.log(getUsersWithEyeColor(users, 'blue'));
  console.log(getUsersWithEyeColor(users, 'green'));
  console.log(getUsersWithEyeColor(users, 'brown'));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(({ age }) => age >= minAge && age < maxAge);
  };
  console.log(getUsersWithAge(users, 20, 30));
  console.log(getUsersWithAge(users, 30, 40));
  console.log(getUsersWithAge(users, 80, 100));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getUsersWithFriend = (users, friendName) => {
    let newArr = [];
    users.filter(elem => {
      if (elem.friends.includes(friendName)) {
        newArr.push(elem);
      }
    });
    return newArr;
  };

  console.log(getUsersWithFriend(users, 'Briana Decker'));
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));
  console.log(getUsersWithFriend(users, 'Adrian Cross'));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getFriends = users => {
    return users
      .flatMap(users => users.friends)
      .filter((user, index, array) => array.indexOf(user) === index);
  };

  console.log(getFriends(users));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getActiveUsers = users => {
    return users.filter(users => users.isActive === true);
  };

  console.log(getActiveUsers(users));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getInactiveUsers = users =>
    users.filter(users => users.isActive === false);

  console.log(getInactiveUsers(users));
}
console.log('---------------------------------------------------------------');
{
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  console.log(playtimes);
  // Change code below this line

  const totalPlayTime = playtimes.reduce((acc, item) => {
    return (acc += item);
  }, 0);
  console.log(totalPlayTime);

  // Change code above this line
  const averagePlayTime = totalPlayTime / playtimes.length;
  console.log(averagePlayTime);
}
console.log('---------------------------------------------------------------');
{
  const players = [
    { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
    { name: 'Poly', playtime: 469, gamesPlayed: 2 },
    { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
    { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line

  const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
    return (acc += player.playtime / player.gamesPlayed);
  }, 0);

  console.log(totalAveragePlaytimePerGame);
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const getTotalFriendCount = users =>
    users.reduce((acc, user) => {
      return (acc += user.friends.length);
    }, 0);

  console.log(getTotalFriendCount(users));
}
console.log('---------------------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];

  const sortedByAuthorName = [...books].sort((a, b) =>
    a.author.localeCompare(b.author),
  );
  console.table(sortedByAuthorName);

  const sortedByReversedAuthorName = [...books].sort((a, b) =>
    b.author.localeCompare(a.author),
  );

  console.table(sortedByReversedAuthorName);

  const sortedByAscendingRating = [...books].sort(
    (a, b) => a.rating - b.rating,
  );

  console.table(sortedByAscendingRating);

  const sortedByDescentingRating = [...books].sort(
    (a, b) => b.rating - a.rating,
  );

  console.table(sortedByDescentingRating);
}
console.log('---------------------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    {
      title: 'The Dreams in the Witch House',
      author: 'Howard Lovecraft',
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line

  const names = books
    .filter(({ rating }) => rating > MIN_BOOK_RATING)
    .map(books => books.author)
    .sort();

  console.log(names);
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: [
        'Jacklyn Lucas',
        'Linda Chapman',
        'Adrian Cross',
        'Solomon Fokes',
      ],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const getNamesSortedByFriendCount = users =>
    [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map(users => users.name);

  console.table(getNamesSortedByFriendCount(users));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: [
        'Jacklyn Lucas',
        'Linda Chapman',
        'Adrian Cross',
        'Solomon Fokes',
      ],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const getSortedFriends = users =>
    users
      .flatMap(users => users.friends)
      .filter((user, index, array) => array.indexOf(user) === index)
      .sort();

  console.log(getSortedFriends(users));
}
console.log('---------------------------------------------------------------');
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: [
        'Jacklyn Lucas',
        'Linda Chapman',
        'Adrian Cross',
        'Solomon Fokes',
      ],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const getTotalBalanceByGender = (users, gender) =>
    users
      .filter(({ gender: userGender }) => userGender === gender)
      .reduce((acc, user) => {
        return (acc += user.balance);
      }, 0);

  console.table(getTotalBalanceByGender(users, 'male'));
  console.table(getTotalBalanceByGender(users, 'female'));
}
