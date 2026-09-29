export {};

// A
let count = 5;
count = "десять"; // Type 'string' is not assignable to type 'number'.

// B
function add(x: number, y: number): number {
    return x + y;
}
add(2); // Expected 2 arguments, but got 1.

// C
let name1: string = null; // Type 'null' is not assignable to type 'string'.

// D
function greet(name: string): string {
    console.log(name);
} // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
