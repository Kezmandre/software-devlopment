//  lenght

// let lastName = "Babajide"
// let firstName = "SANYAOLU"

// console.log(name[4], "character")

//  const last = console.log(lastName.length-1)

//  console.log(last ,"last")

//  console.log(name[7])

// console.log(name.length, "length")

// uppercase

// console.log(lastName.toUpperCase())

// lowercase

// console.log(firstName.toLocaleLowerCase())

// substr: takes two argument the starting index and the number of character to slice

// let language = "javascript";
// let country = "finland";

// console.log(language.substr(4, 6));
// console.log (country.substr(3, 6));


// substring: takes two argument the starting index and the stopping index, but the stopping index doesnt include the character of the last letter


// console.log(language.substring(0,4))
// console.log(country.substring(0,5))
// console.log(country.substring(3))

//  split: to convert strings into array

let string = "  The olympics has started  "
// let skills = "Express"

// console.log(string.split())
// console.log(string.split(" "))
// console.log(skills.split(""))


//  trim : to remove trailing or white spaces


console.log(string.trim(), "string")


//  includes : returns booleans if a string is present

let present = "The path is clear"

// console.log(present.includes("path"))
// console.log(present.includes("clear"))
// console.log(present.includes("welcome"))


// replace : take 2 argument, the old substring and the new string


console.log(present.replace("clear", "vague"))

// charAt : return the character at a given index

console.log(present.charAt(6))