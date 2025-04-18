/*
1:
Entrada: un número pedido con un prompt. Salida: Una tabla con los
números del 1 al número dado con sus cuadrados y cubos. Utiliza
document.write para producir la salida
2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números
generados de manera aleatoria. Salida: La página debe indicar si el
resultado fue correcto o incorrecto, y el tiempo que tardó el usuario
en escribir la respuesta.
3:
Función: contador. Parámetros: Un arreglo de números. Regresa: La
cantidad de números negativos en el arreglo, la cantidad de 0's, y la
cantidad de valores mayores a 0 en el arreglo.
4:
Función: promedios. Parámetros: Un arreglo de arreglos de números.
Regresa: Un arreglo con los promedios de cada uno de los renglones de
la matriz.
5:
Función: inverso. Parámetros: Un número. Regresa: El número con sus
dígitos en orden inverso.
*/

function numTabla() {
    let num = parseInt(prompt("Dame un número:"));
    if (isNaN(num) || num <= 0) {
        alert("Error, número no válido");
        return;
    }
    
    let tabla = "<h2>Tabla</h2><table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    
    document.write(tabla);

    for (let i = 1; i <= num; i++) {
        document.write('<tr><td>$(');
        document.write((i).toString());
        document.write(')</td><td>$(');
        document.write((i ** 2).toString());
        document.write(')</td><td>$(');
        document.write((i ** 3).toString());
        document.write(')</td></tr>');
    }
    
    document.write("</table>");
}

function quizSuma() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    
    let start = Date.now();
    let res = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));
    let end = (Date.now() - start) / 1000;
    end = end.toFixed(2);

    if (res === num1 + num2) {
        alert(`¡Correcto! Tiempo: ${end} segundos.`);
    } else {
        alert(`¡Incorrecto! La respuesta era ${num1 + num2}. Tiempo: ${end} segundos.`);
    }
}

function conteo() {
    const lista = [];
    let num;

    for (let i = 0; i < 10; i++) {
        num = Math.floor(Math.random() * 21) - 10;
        lista.push(num);
    }

    let neg = 0, cer = 0, pos = 0;
    
    for (let num of lista) {
        if (num < 0) neg++;
        else if (num == 0) cer++;
        else pos++;
    }

    alert(`Lista generada: ${lista}.\n\nCant. de negativos: ${neg}.\nCant. de ceros: ${cer}.\nCant. de positivos: ${pos}`);
}

function prom() {
    const matrix = [];

    for (let i = 0; i < 3; i++) {
        const lista = [];
        for (let j = 0; j < 10; j++) {
            lista.push(Math.floor(Math.random() * 10));
        }
        matrix.push(lista);
    }

    const promedios = [];

    let sum = 0;
    let count = 0;
    
    for (let arr of matrix) {
        for (let num of arr) {
            sum += num;
            count++;
        }
        promedios.push(sum / count);
        sum = 0;
        count = 0;
    }

    alert(`Matriz generada (Cada 10 elementos es una lista): ${matrix}.\n\nPromedios: ${promedios}.`)
}

function inverse() {
    let num = parseInt(prompt("Dame un número:"));

    let numStr = num.toString();
    let numParsed = numStr.split("");
    
    numParsed = numParsed.reverse();
    numStr = numParsed.join("");

    num = parseInt(numStr);
    alert(`El número revertido es: ${num}`);
}