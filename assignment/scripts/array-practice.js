console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ["Gyros", "Brownies", "Oranges", "Dahl"];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log("Favorite foods are: ", favoriteFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("Number of favorite foods:", favoriteFoods.length);


// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log("The second animal is: ", animalArray[1]);


// 3.b. TODO: Log the last animal in the array using it's array index 
console.log("The last animal is: ", animalArray[3]);


// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log("The last animal that I found using the array length variable is: ", animalArray[animalArray.length - 1]);



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push("Deer stew");
console.log("Favorite foods are now: ", favoriteFoods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
console.log("Removed the food", favoriteFoods.pop());
console.log("Favorite foods are now: ", favoriteFoods);


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift("Ice cream");
console.log("Added new food to beginning of array: ", favoriteFoods);


// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
console.log("Removed from favoriteFoods: ", favoriteFoods.shift());
console.log("Favorite foods are now: ", favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favoriteFoods[1] = "Banana";
console.log("Favorite foods are now: ", favoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
favoriteFoods.sort(function(a, b) {
    if (a[0] > b[0]) {
        return -1;
    } else if (a[0] < b[0]) {
        return 1;
    } else {
        return 0;
    }
});
// NOTE: This was a tricky one. I had to look up the Mozilla Javascript reference for this.
// Is there an easier way to do this that I did not see?

console.log("Favorite foods after sorting are now: ", favoriteFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
console.log(favoriteFoods[0], " and ", favoriteFoods[1], " and ", favoriteFoods[2], " and ", favoriteFoods[3]);
// NOTE: I know there is a better way to do this using a for loop.
// I also have a feeling there is a better way to do this then just
// slapping it togehter using the individual indexes.

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
let bigBigArray = favoriteFoods.concat(animalArray);
console.log(bigBigArray);