// Capitalize the First Character of Each Word

// This problem tests string manipulation and array methods.
let input = "the moon is so beautiful";
let output = input
  .split(" ")
  .map((val) => val[0].toLocaleUpperCase() + val.slice(1))
  .join(" ");
// console.log(input.split(" ").toUpperCase());
console.log(output);
