
// #1

const firstRow = prompt('Первый текст, ' + 'пример => (мама мыла раму)');
const secondRow = prompt('Второй текст, ' + 'пример => (сабака друг человека)');

const value = prompt('Введите символ, который будем проверять на колличество в строке, например (а)')

function getRow (value, firstRow, secondRow) {
  let countFirstRow = 0;
  let countSecondRow = 0;

  for (let i = 0; i < firstRow.length; i++) {
    firstRow.charAt(i) === value ? countFirstRow++ : false; 
  }
  
  for (let f = 0; f < secondRow.length; f++) {
    secondRow.charAt(f) === value ? countSecondRow++ : false;
  }

  if (countFirstRow > countSecondRow) {
    return alert('в этой стороке больше символов (' +  value + ') =>' + firstRow)
  } else {
    return alert('в этой стороке больше символов (' +  value + ') =>' + secondRow)
  }
}

// первым агрементов нужно указать то значение, которое будем исчислять.
getRow(value, firstRow, secondRow)


// #2

const phoneNumber = prompt('Введите номер телефона, пример => ' + '+71234567890');

function formattedPhone (phone) {
  let newNumber = ''
  for (let i = 0; i < phone.length; i++) {
    return phone.charAt(0) + 
    phone.charAt(1) + 
    ' (' + phone.charAt(2) + 
    phone.charAt(3) + 
    phone.charAt(4) + ')' + 
    ' ' + phone.charAt(5) + 
    phone.charAt(6) + 
    phone.charAt(7) + 
    '-' + phone.charAt(8) + 
    phone.charAt(9) + 
    '-' + phone.charAt(10) + 
    phone.charAt(11);
  }

  return newNumber;
}

alert(formattedPhone(phoneNumber));
