let n = prompt("Введите n (2 < n < 15)\nn = ");
if (isNaN(n) || !isFinite(n) || Number(n)%1 !== 0){
    alert("Ошибочное число: " + n);
} else if (n <= 2 || n >= 15){
    alert("Недопустимое значение: " + n);
} else {
    let lines = ``;
    let w = 100;
    for (let i = 1; i <= n; i++){
        w = Math.round(100/i);
        lines += `<hr width=${w}%>`;
    }

    let t = '<table>';
    let prevfac = 1;
    let temp = 0;
    let fac = 1;
    for (let i = 1; i < n/2 + 1; i++){
        t += '<tr>';
        for (let j = 0; j < n/2 - i; j++){
            t += `<td><b></b></td>`;
        }
        for (let j = 0; j < i*2 -1; j++){
            t += `<td class =bl><b>${fac}</b></td>`;
        }
        temp = fac
        fac = prevfac + fac;
        prevfac = temp;
        for (let j = 0; j < n/2 - i; j++){
            t += `<td><b></b></td>`;
        }
        t += '</tr>';
    }

    for (let i = Math.floor(n/2); i >= 1; i--){
        t += '<tr>';
        for (let j = 0; j < n/2 - i; j++){
            t += `<td><b></b></td>`;
        }
        for (let j = 0; j < i*2 -1; j++){
            t += `<td class =bl><b>${fac}</b></td>`;
        }
        temp = fac
        fac = prevfac + fac;
        prevfac = temp;
        for (let j = 0; j < n/2 - i; j++){
            t += `<td><b></b></td>`;
        }
        t += '</tr>';
    }
    t += `</table>`;

    let lines2 = ``;
    w = 100;
    for (let i = n; i >= 1; i--){
        w = Math.round(100/i);
        lines2 += `<hr width=${w}%>`;
    }
    
    document.write(lines + t + lines2);
}