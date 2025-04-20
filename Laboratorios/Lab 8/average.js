function average(arr) {
    const sum = arr.reduce(add, 0)
    return sum / arr.length;
}

function add(count, num) {
    return count + num;
}

const numbers = [5,10,15,20,25];
console.log("Average", average(numbers));