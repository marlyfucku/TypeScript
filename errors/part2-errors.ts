export {};

// Задание 2.3: намеренные ошибки типизации
let title: string = "Книга";
title = 123; // Type 'number' is not assignable to type 'string'.

let pages: number = 300;
pages = "много"; // Type 'string' is not assignable to type 'number'.

let isRead: boolean = false;
isRead = 1; // Type 'number' is not assignable to type 'boolean'.

// Задание 2.4
let userName: string = null; // Type 'null' is not assignable to type 'string'.
