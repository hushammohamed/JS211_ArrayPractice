// Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
const cars = ["Ford", "Toyota", "Honda", "BMW"];
console.log(cars);

// Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
const moreCars = ["Chevrolet", "Nissan", "Audi", "Honda"];

// Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
const totalCars = cars.concat(moreCars);

// Console.log the length of the totalCars array
console.log("Length of totalCars array:", totalCars.length);

// Run the program
console.log(totalCars);

// Use the indexOf method to find the index of 'Honda'
const hondaIndex = totalCars.indexOf("Honda");
console.log("Index of Honda:", hondaIndex);

// Use the lastIndexOf method to find the index of 'Ford'
const fordIndex = totalCars.lastIndexOf("Ford");
console.log("Index of Ford:", fordIndex);

// Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`
const stringOfCars = totalCars.join(", ");

// Console.log `stringOfCars`
console.log("String of Cars:", stringOfCars);

// Use the `split` method to convert `stringOfCars` into an array called `carsFromString`
const carsFromString = stringOfCars.split(", ");

// Console.log the array you just created
console.log("Array from String:", carsFromString);

// Use the `reverse` method to reverse the `totalCars` array
const carsInReverse = totalCars.reverse();

// Console.log the reversed array
console.log("Reversed Cars:", carsInReverse);

// Use the `sort` method to put the array `carsInReverse` into alphabetical order
carsInReverse.sort();

// Console.log the sorted array
console.log("Sorted Cars:", carsInReverse);

// Predict which item should be at index 0
const prediction = "Audi"; // Update this prediction based on the sorted list

// Use console.log to confirm or reject your prediction
console.log(
  "Index of your prediction (" + prediction + "):",
  carsInReverse.indexOf(prediction)
);

//.slice()`
// - Create a `pets` array by copy/pasting the following: `const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']`
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];

// Use the slice method to create a reptiles array with 'snake' and 'lizard' from the pets
const reptiles = pets.slice(4, 6); // Index 4 is 'snake', and index 6 is exclusive, so it includes up to 'lizard'

// Console.log the reptiles array
console.log("Reptiles array:", reptiles);

// Console.log the original pets array
console.log("Original pets array:", pets);
//Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
const removedReptiles = pets.splice(4, 2, "hamster"); // Starting at index 4, remove 2 elements ('snake' and 'lizard')
// Console.log the removedReptiles array
console.log("Removed reptiles:", removedReptiles);

// Console.log the modified pets array (now with 'hamster' instead of 'snake' and 'lizard')
console.log("Pets array after removal and addition:", pets);

//   - Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
// Given array
//const pets = ['dog', 'cat', 'fish', 'rabbit', 'hamster', 'bird'];

// Use pop method to remove the last item from the pets array and save it to removedPet
const removedPet = pets.pop();

// Console.log the removedPet and pets array after removal
console.log("Removed pet:", removedPet);
console.log("Remaining pets array:", pets);

// - Use the `push` method to add `removedPet` back to the end of the `pets` array.
// Variable holding the removed pet
const removedPetToAddBack = "hamster"; // Assuming 'hamster' was the last removed pet

// Use push method to add removedPetToAddBack back to the end of the pets array
pets.push(removedPetToAddBack);

// Console.log the updated pets array
console.log("Updated pets array:", pets);

//- Use the `shift` method to remove and console.log the first item in the `pets` array.
const removedFirstPet = pets.shift();

// Log the removed pet and the updated pets array
console.log("Removed first pet:", removedFirstPet);
console.log("Updated pets array:", pets);

// Use unshift method to add 'turtle' as the first item in the pets array
pets.unshift("turtle");

// Log the updated pets array
console.log("Updated pets array:", pets);

//Create a numbers array by copy/pasting the following: `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

//- Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`.
const addTwo = (num, index, arr) => {
  arr[index] = num + 2;
};
// - Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as an argument, in order to add 2 to each number in the array.
numbers.forEach(addTwo);

// Logging the updated numbers array
//Console.log `numbers` and run the program.
console.log("Updated numbers array:", numbers);
