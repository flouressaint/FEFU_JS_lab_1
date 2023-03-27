function reverseString(str) {
    let pos = 0;
    let oldPos = 0;
    let newStr = '';
    let word = '';
    let newWord = '';
    
    str = str + ' ';

    while (str.indexOf(' ', pos + 1) !== -1) {
        oldPos = pos;
        pos = str.indexOf(' ', pos) + 1;
        word = str.slice(oldPos, pos);
        for (let i = 1; i <= word.length; i++){
            newWord += word[word.length - i];
        }
        newStr += newWord;
        newWord = '';
    }
    return newStr;
}
let text = prompt("Введите строку: ");
document.write(`<p>Исходная строка: ${ text }<p>Строка, в которой все буквы в словах выведены в обратном порядке: ${ reverseString(text) }.`);