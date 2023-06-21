// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
console.table(cars);
console.log('-------------------- Example - 01 --------------------');
{
  /** Метод map
   *
   * Нехай функція getModels повертає масив моделей ( поле model ) всіх автомобілів.
   */

  const getModels = cars => cars.map(car => car.model);

  //   console.table(getModels(cars));
  //   console.log(getModels(cars));
}
console.log('-------------------- Example - 02 --------------------');
{
  /** Метод map
   *
   *Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним 
   значенням властивості price залежно від переданої знижки.
   */

  const makeCarsWithDiscount = (cars, discount) => {
    return cars.map(car => ({
      ...car,
      price: car.price * (1 - discount),
    }));
  };

  //   console.table(makeCarsWithDiscount(cars, 0.2));
  //   console.log('--------------------------------------------------');
  //   console.table(makeCarsWithDiscount(cars, 0.4));
}
console.log('-------------------- Example - 03 --------------------');
{
  /** Метод filter
   *
   * Нехай функція filterByPrice повертає масив автомобілів, ціна яких менша,
   * ніж значення параметра threshold.
   */

  const filterByPrice = (cars, threshold) =>
    cars.filter(({ price }) => price < threshold);

  //   console.table(filterByPrice(cars, 30000));
  //   console.table(filterByPrice(cars, 25000));
}
console.log('-------------------- Example - 04 --------------------');
{
  /**Метод filter
   *
   * Нехай функція getCarsWithDiscount повертає масив автомобілів
   * властивість onSale яких true.
   */

  const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

  //   console.table(getCarsWithDiscount(cars));
}
console.log('-------------------- Example - 05 --------------------');
{
  /** Метод filter
   *
   *Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається 
   зі значенням параметра type.
   */

  const getCarsWithType = (cars, type) =>
    cars.filter(({ type: carType }) => carType === type);

  //   console.table(getCarsWithType(cars, 'suv'));
  //   console.table(getCarsWithType(cars, 'sedan'));
}
console.log('-------------------- Example - 06 --------------------');
{
  /** Метод find */

  const getCarByModel = (cars, model) =>
    cars.find(({ model: carModel }) => carModel === model);

  //   console.log(getCarByModel(cars, 'F-150'));
  //   console.log(getCarByModel(cars, 'CX-9'));
}
console.log('-------------------- Example - 07 --------------------');
{
  /** Метод sort
   *
   * Нехай функція sortByAscendingAmount повертає новий масив автомобілів,
   *  відсортований за зростанням значення властивості amount.
   */

  //   const sortByAscendingAmount = cars =>
  //     [...cars].sort((a, b) => a.amount - b.amount);

  const sortByAscendingAmount = cars =>
    [...cars].sort(({ amount: a }, { amount: b }) => a - b);

  //   console.table(sortByAscendingAmount(cars));
}
console.log('-------------------- Example - 08 --------------------');
{
  /** Метод sort
   * Нехай функція sortByDescendingPrice повертає новий масив автомобілів,
   * відсортований за зменшенням значення властивості price.
   */

  const sortByDescendingPrice = cars =>
    [...cars].sort(({ price: a }, { price: b }) => b - a);

  //   console.table(sortByDescendingPrice(cars));
}
console.log('-------------------- Example - 09 --------------------');
{
  /** Метод sort
   *
   *Нехай функція sortByModel повертає новий масив автомобілів відсортований 
   за назвою моделі в алфавітному та зворотному алфавітному порядку, 
   в залежності від значення параметра order.
   */

  //   const sortByModel = (cars, order) => {
  //     if (order === 'asc') {
  //       return [...cars].sort((a, b) => a.model.localeCompare(b.model));
  //     } else {
  //       return [...cars].sort((a, b) => b.model.localeCompare(a.model));
  //     }
  //   };

  const sortByModel = (cars, order) =>
    [...cars].sort(({ model: a }, { model: b }) =>
      order === 'asc' ? a.localeCompare(b) : b.localeCompare(a),
    );

  //   console.table(sortByModel(cars, 'asc'));
  //   console.table(sortByModel(cars, 'desc'));
}
console.log('-------------------- Example - 10 --------------------');
{
  /**  Метод reduce
   * Нехай функція getTotalAmount повертає загальну кількість автомобілів
   * (значення властивостей amount).
   */

  const getTotalAmount = cars =>
    cars.reduce((acc, { amount }) => {
      return acc + amount;
    }, 0);
  //   console.log(getTotalAmount(cars));
}
console.log('-------------------- Example - 11 --------------------');
{
  /** Ланцюжки методів
   *
   * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
   * але тільки тих, які зараз на розпродажі.
   */

  const getModelsOnSale = cars =>
    cars
      .filter(({ onSale }) => onSale)
      .map(({ make, model }) => `${make} - ${model}`);

  //   console.table(getModelsOnSale(cars));
}
console.log('-------------------- Example - 12 --------------------');
{
  /** Ланцюжки методів
   *
   * Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
   * (Властивість onSale), відсортованих за зростанням ціни.
   */

  /**
   * Get cars on sale and sort them
   * @param {Array} cars - Array with object
   * @returns {Array} - sorted Array onSale
   */

  const getSortedCarsOnSale = cars =>
    cars
      .filter(({ onSale }) => onSale)
      .sort(({ price: a }, { price: b }) => a - b);

  //   console.table(getSortedCarsOnSale(cars));
}
console.log('-------------------- Task 1 --------------------');
{
  const str = 'duaguidgasuidgauisdhasudasdfhsgvfakhfugduashc';
  const result = str.split('').reduce((acc, item) => {
    // Варіант №1
    // acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);

    // Варіант №2
    const keys = Object.keys(acc);
    keys.includes(item) ? (acc[item] += 1) : (acc[item] = 1);

    return acc;
  }, {});

  // console.log(result);
}
console.log('-------------------- Task 2 --------------------');
{
  // const arr = ['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault'];

  // Загальна кількість авто 6:

  // 1 Honda
  // 2 Audi

  // 6 Reno

  // const arr = [];

  // Вибачте авто немає

  function logCars(arr) {
    const result = arr.reduce(
      (acc, car, idx) => {
        return acc + `${idx + 1} - ${car}\n`;
      },
      arr.length
        ? `Загальна кількість авто ${arr.length} \n`
        : `Вибачте авто немає 😢`,
    );
    return result;
  }

  // console.log(logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault']));
  // console.log(logCars([]));
}
