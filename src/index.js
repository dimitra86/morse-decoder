const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**':  ' ',
};

function decode(expr) {
    const length = 10; // длина одной части
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let res = expr.match(pattern).map(item => item.padEnd(length, "."));
    console.log(res);
    let lett = [];
    for(let j=0;j<res.length;j++){
    let str = res[j].toString();
    console.log(str);
    let strM = '';
    
    for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
    
        if (str[i] + str[i + 1] == 10) {
          strM += `.`;
         // console.log(i);
        }
        else if (str[i] + str[i + 1] == 11) {
          strM += `-`;
         // console.log(i);
        }
        else if (str[i] + str[i + 1] == '**') {
          strM += '**';
          break;
        }
      }
    }
    //console.log(strM);
    
    
    for (let key in MORSE_TABLE) {
      // ключи
      if (key == strM) { lett.push(MORSE_TABLE[key]); }
      // значения ключей
    }
    
    }
   return lett.join('');  // write your solution here
}

module.exports = {
    decode
}