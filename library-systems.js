/*
========================================================
Practice: Working with Multi-Dimensional Arrays
========================================================
Goal:
- Create and manipulate a 2D array (library system)
- Access data using bracket notation
- Use variables for dynamic access
- Use loops for iteration
========================================================
*/



// Task 1: Create a Multi-Dimensional Array

let library = [
  ["Inception", "The Matrix", "Interstellar"],
  ["1984", "Brave New World", "Fahrenheit 451"],
  ["The Godfather", "Pulp Fiction", "The Dark Knight"]
];

// Task 2: Access all elements using numbers

console.log( "Shelf 1 Items:", library[0][0], library[0][1], library[0][2]);
console.log("Shelf 2 Items:",library[1][0], library[1][1], library[1][2]);
console.log("Shelf 3 Items:",library[2][0], library[2][1], library[2][2]);

// Task 3: Access using variables (row & item)

let row = 2;
let item = 1;

console.log("Selected Item from Library:", library[row][item]); // pulp fiction

// Task 4: Loop through second shelf

console.log("Second Shelf Items:");
for (let i = 0; i < library[1].length; i++) 
    {
  console.log(library[1][i]);
}

// Expected output
/*Shelf 1 Items: Inception The Matrix Interstellar
Shelf 2 Items: 1984 Brave New World Fahrenheit 451
Shelf 3 Items: The Godfather Pulp Fiction The Dark Knight
Selected Item from Library: Pulp Fiction
Second Shelf Items:
1984
Brave New World
Fahrenheit 451 */