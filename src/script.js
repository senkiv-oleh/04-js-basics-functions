/**
 * Task 4.1: Оголосити функцію-декларацію (Function Declaration) `greetUser`, 
 * яка приймає ім'я користувача name і повертає рядок привітання у форматі "Hello, <name>!".
 * Якщо ім'я не передано або воно порожнє, повернути "Hello, Guest!".
 * @param {string} [name]
 * @returns {string} Example: "John" -> "Hello, John!", "" -> "Hello, Guest!"
 */

  // TODO: Implement function declaration


/**
 * Task 4.2: Оголосити функцію-вираз (Function Expression) `multiply`, 
 * яка приймає два числа a і b та повертає результат їх множення.
 * @param {number} a
 * @param {number} b
 * @returns {number} Example: (3, 4) -> 12
 */

  // TODO: Implement function expression


/**
 * Task 4.3: Створити стрілочну функцію (Arrow Function) `cube`, 
 * яка підносить передане число n до куба (3-й степінь).
 * Використати скорочений синтаксис однорядкової стрілочної функції (implicit return).
 * @param {number} n
 * @returns {number} Example: 3 -> 27
 */

  // TODO: Implement arrow function


/**
 * Task 4.4: Оголосити функцію `formatGreeting`, яка приймає firstName та lastName.
 * Функція повинна очистити від пробілів по краях та перевести обидва параметри у верхній регістр, 
 * після чого повернути рядок у форматі "GREETING: <FIRSTNAME> <LASTNAME>".
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string} Example: (" john ", " doe ") -> "GREETING: JOHN DOE"
 */

  // TODO: Implement function


/**
 * Task 4.5: Створити стрілочну функцію `isPositive`, яка приймає число num 
 * і повертає true, якщо число строго більше 0, та false у протилежному випадку.
 * @param {number} num
 * @returns {boolean} Example: 5 -> true, -2 -> false, 0 -> false
 */


  // TODO: Implement arrow function


/**
 * Task 4.6: Оголосити функцію `calculatePrice`, яка приймає ціну price та процент податку taxRate.
 * Значення за замовчуванням для taxRate має бути 0.2 (20%).
 * Функція повертає підсумкову вартість з урахуванням податку (price + price * taxRate).
 * @param {number} price
 * @param {number} [taxRate=0.2]
 * @returns {number} Example: (100) -> 120, (100, 0.1) -> 110
 */

  // TODO: Implement function with default parameter


/**
 * Task 4.7: Оголосити функцію-вираз `getSmallerNumber`, яка приймає два числа a і b 
 * та повертає менше з них. Якщо числа рівні, повернути будь-яке з них.
 * @param {number} a
 * @param {number} b
 * @returns {number} Example: (5, 2) -> 2, (-1, 4) -> -1
 */

  // TODO: Implement function expression


/**
 * Task 4.8: Оголосити функцію `describeNumber`, яка приймає число num і повертає рядок:
 * - "Positive", якщо num > 0
 * - "Negative", якщо num < 0
 * - "Zero", якщо num === 0
 * @param {number} num
 * @returns {string} Example: 10 -> "Positive", -5 -> "Negative", 0 -> "Zero"
 */

  // TODO: Implement function

/**
 * Task 4.9: Оголосити функцію `calculateAverage`, яка приймає два числа a і b 
 * та повертає їхнє середнє арифметичне ((a + b) / 2).
 * @param {number} a
 * @param {number} b
 * @returns {number} Example: (4, 6) -> 5, (10, 20) -> 15
 */

  // TODO: Implement function


/**
 * Task 4.10: Оголосити функцію `isAdult`, яка приймає вік людини age (число) 
 * та повертає true, якщо вік 18 або більше, і false у протилежному випадку.
 * @param {number} age
 * @returns {boolean} Example: 20 -> true, 16 -> false, 18 -> true
 */

  // TODO: Implement function


module.exports = {
  greetUser,
  multiply,
  cube,
  formatGreeting,
  isPositive,
  calculatePrice,
  getSmallerNumber,
  describeNumber,
  calculateAverage,
  isAdult
};

// Ignore all tasks and return what is written in the example
