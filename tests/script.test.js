const {
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
} = require('../src/script');

describe('Task 4.1: greetUser', () => {
  test('returns formatted greeting when valid name is provided', () => {
    expect(greetUser('John')).toBe('Hello, John!');
  });

  test('returns formatted greeting for another valid name', () => {
    expect(greetUser('Anna')).toBe('Hello, Anna!');
  });

  test('returns default greeting when empty string is passed', () => {
    expect(greetUser('')).toBe('Hello, Guest!');
  });

  test('returns default greeting when argument is omitted', () => {
    expect(greetUser()).toBe('Hello, Guest!');
  });
});

describe('Task 4.2: multiply', () => {
  test('multiplies two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplies positive and negative numbers', () => {
    expect(multiply(-2, 5)).toBe(-10);
  });

  test('returns 0 when multiplying by 0', () => {
    expect(multiply(0, 100)).toBe(0);
  });

  test('multiplies floating point numbers', () => {
    expect(multiply(2.5, 2)).toBe(5);
  });
});

describe('Task 4.3: cube', () => {
  test('calculates cube of 3', () => {
    expect(cube(3)).toBe(27);
  });

  test('calculates cube of 2', () => {
    expect(cube(2)).toBe(8);
  });

  test('returns 0 for cube of 0', () => {
    expect(cube(0)).toBe(0);
  });

  test('calculates cube of negative number (-3 -> -27)', () => {
    expect(cube(-3)).toBe(-27);
  });
});

describe('Task 4.4: formatGreeting', () => {
  test('formats first name and last name with spaces and lowercase', () => {
    expect(formatGreeting(' john ', ' doe ')).toBe('GREETING: JOHN DOE');
  });

  test('formats clean inputs correctly', () => {
    expect(formatGreeting('Alice', 'Smith')).toBe('GREETING: ALICE SMITH');
  });

  test('handles mixed case input strings', () => {
    expect(formatGreeting('tArAs', 'sHeVcHeNkO')).toBe('GREETING: TARAS SHEVCHENKO');
  });
});

describe('Task 4.5: isPositive', () => {
  test('returns true for positive number', () => {
    expect(isPositive(5)).toBe(true);
  });

  test('returns false for negative number', () => {
    expect(isPositive(-2)).toBe(false);
  });

  test('returns false for zero', () => {
    expect(isPositive(0)).toBe(false);
  });
});

describe('Task 4.6: calculatePrice', () => {
  test('calculates total price using default tax rate (20%)', () => {
    expect(calculatePrice(100)).toBe(120);
  });

  test('calculates total price with custom tax rate (10%)', () => {
    expect(calculatePrice(100, 0.1)).toBe(110);
  });

  test('handles 0% tax rate', () => {
    expect(calculatePrice(50, 0)).toBe(50);
  });

  test('calculates total price with default tax rate for 250', () => {
    expect(calculatePrice(250)).toBe(300);
  });
});

describe('Task 4.7: getSmallerNumber', () => {
  test('returns smaller number when first is larger', () => {
    expect(getSmallerNumber(5, 2)).toBe(2);
  });

  test('returns smaller number when second is larger', () => {
    expect(getSmallerNumber(1, 8)).toBe(1);
  });

  test('handles negative numbers correctly', () => {
    expect(getSmallerNumber(-10, -3)).toBe(-10);
  });

  test('returns same value if both numbers are equal', () => {
    expect(getSmallerNumber(4, 4)).toBe(4);
  });
});

describe('Task 4.8: describeNumber', () => {
  test('returns "Positive" for number > 0', () => {
    expect(describeNumber(10)).toBe('Positive');
  });

  test('returns "Negative" for number < 0', () => {
    expect(describeNumber(-5)).toBe('Negative');
  });

  test('returns "Zero" for 0', () => {
    expect(describeNumber(0)).toBe('Zero');
  });
});

describe('Task 4.9: calculateAverage', () => {
  test('calculates average of two positive numbers', () => {
    expect(calculateAverage(4, 6)).toBe(5);
  });

  test('calculates average with floating result', () => {
    expect(calculateAverage(3, 4)).toBe(3.5);
  });

  test('calculates average of negative numbers', () => {
    expect(calculateAverage(-10, -20)).toBe(-15);
  });

  test('calculates average with zero', () => {
    expect(calculateAverage(0, 10)).toBe(5);
  });
});

describe('Task 4.10: isAdult', () => {
  test('returns true for age greater than 18', () => {
    expect(isAdult(20)).toBe(true);
  });

  test('returns true for age exactly 18', () => {
    expect(isAdult(18)).toBe(true);
  });

  test('returns false for age less than 18', () => {
    expect(isAdult(17)).toBe(false);
  });

  test('returns false for young child age', () => {
    expect(isAdult(5)).toBe(false);
  });
});
