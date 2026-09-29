export {};

function formatPrice(value: number): string {
    return value.toFixed(2) + " ₽";
}
function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
function logMessage(message: string): void {
    console.log(message);
}

// Задание 3.2: некорректные вызовы
formatPrice("100");
clamp(5, 0);        
logMessage(123);    
