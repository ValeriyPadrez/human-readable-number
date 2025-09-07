module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const onePart = number % 10;

    if (onePart === 0) {
      return tens[tenPart];
    }

    return `${tens[tenPart]} ${ones[onePart]}`;
  }

  const hundredPart = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) {
    return `${ones[hundredPart]} hundred`;
  }

  return `${ones[hundredPart]} hundred ${toReadable(remainder)}`;
};
