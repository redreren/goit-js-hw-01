"use strict";
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите пароль: ');

if (!message) {
    console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
} else if (message !== ADMIN_PASSWORD) {
    console.log('Доступ запрещен, неверный пароль!');
}