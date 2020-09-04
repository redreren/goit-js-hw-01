"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let amountDroid = Number(prompt('Введите количество дроидов которое вы хотели бы приобрести: '));
let totalPrice = amountDroid * pricePerDroid;
let creditsLeft = credits - totalPrice;

if (amountDroid == 0) {
    alert('Отменено пользователем!');
} else if (totalPrice <= credits) {
    alert(`Вы купили ${amountDroid} дроидов, на счету осталось ${creditsLeft} кредитов.`)
} else {
    alert('Недостаточно средств на счету!')
}