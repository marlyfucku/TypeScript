export {};

// Задание 2.1: пять базовых типов с явной аннотацией
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

console.log(studentName, studentAge, isEnrolled, middleName, hobby);

// Задание 2.2: вывод типов
let city = "Москва";         // string
let population = 12_000_000; // number
let isCapital = true;        // boolean

console.log(city, population, isCapital);

// Задание 2.3: ошибки (см. errors/part2-errors.ts), здесь исправленная версия
let title: string = "Книга";
title = "Новая книга";

let pages: number = 300;
pages = 350;

let isRead: boolean = false;
isRead = true;

console.log(title, pages, isRead);

// Задание 2.4: корректные варианты
let userName1: string | null = null;
let userName2: string = "";
let userName3: string | undefined = undefined;

console.log(userName1, userName2, userName3);
