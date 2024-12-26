alert("Boshlanishida arrayingiz:4");
let fruits = ['olma', 'banan', 'gilos', 'shoftoli'];
console.log(fruits)

let confirm1 = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz");

if (confirm1) {
    fruits.pop();
    alert("arrayingiz 3");
    console.log(fruits)
} else {
    alert("arrayingiz 4");
    console.log(fruits)
}
