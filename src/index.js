module.exports = function toReadable (number) {
  function radable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertHundreds(num) {
        if (num >= 100) {
            return units[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
        } else {
            return convertTens(num);
        }
    }

    function convertTens(num) {
        if (num < 10) {
            return units[num];
        } else if (num >= 11 && num <= 19) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
        }
    }

    if (number === 0) {
        return 'zero';
    } else {
        return convertHundreds(number).trim();
    }
}
}

function readable(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convertHundreds(num) {
      if (num >= 100) {
          return units[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
      } else {
          return convertTens(num);
      }
  }

  function convertTens(num) {
      if (num < 10) {
          return units[num];
      } else if (num >= 11 && num <= 19) {
          return teens[num - 10];
      } else {
          return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
      }
  }

  if (number === 0) {
      return 'zero';
  } else {
      return convertHundreds(number).trim();
  }
}

console.log(readable(937));
