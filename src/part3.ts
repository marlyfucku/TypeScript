export {};

function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
    console.log(message);
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}

// Корректные вызовы
console.log(formatPrice(1234.5));      // "1 234,50 ₽"
console.log(clamp(15, 0, 10));         // 10
logMessage("Привет");                  // "Привет"
console.log(repeat("abc"));            // "abcabc"
console.log(describeUser("Иван"));     // "Иван"
console.log(describeUser("Иван", 25)); // "Иван, возраст: 25"

// Задание 3.3: void и undefined
function logMsg(msg: string): void {
    console.log(msg);
}

function returnUndefined(): undefined {
    return undefined;
}

logMsg("void: функция ничего не возвращает");
console.log(returnUndefined());
