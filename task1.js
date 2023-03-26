let max;
let html = "Последовательность чисел:<br>";
let flag = true;
let count = 0;
while (true) {
    let number = prompt('Введите число: ');
    if (isNaN(number) || !isFinite(number)) break;
    html += number +' ';
    flag = false;
    number = Number(number);
    if (count % 3 === 0){
        if (number > max || max === undefined){
            max = number;
        }
    }
    count++;
}
if (flag){
    document.write(`Числа не введены`);
} else{
    html += `<br>Максимальное среди тех элементов, порядковый номер котороого делится на 3: ${max}`;
    document.write(html);
}

