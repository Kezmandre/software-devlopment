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

// let string = "The olympics has started"
// let skills = "Express"

// console.log(string.split())
// console.log(string.split(" "))
// console.log(skills.split(""))

//  trim : to remove trailing or white spaces

// console.log(string.trim(), "string")

//  includes : returns booleans if a string is present

// let present = "The path is clear"

// console.log(present.includes("path"))
// console.log(present.includes("clear"))
// console.log(present.includes("welcome"))

// replace : take 2 argument, the old substring and the new string

// console.log(present.replace("clear", "vague"))

// charAt : return the character at a given index

// console.log(present.charAt(6))

// charCodeAt

let code = "Learn";
let char = "learn";

// console.log(code.charCodeAt(0))
// console.log(char.charCodeAt(0))

// indexOf: this takes a substring  and if the substring exist it returns the first occurrence index of the string and if it does not it returns -1

let language = "let learn javascript learn java";

// console.log(language.indexOf("l"));
// console.log(language.indexOf("learn"));
// console.log(language.indexOf("java"));
// console.log(language.indexOf("knowledge"));

// lastIndexOf:

// console.log(language.lastIndexOf("j"))
// console.log(language.lastIndexOf("a"))

// concat : this is use to join two or more strings together

// let word1 = "javascript"
// let word2 = "basics"

// console.log(word1.concat( " ",word2))

// startswith: takes  substring as an argument and check if the substring start with the specified letter. it returns boolean,true if the substring start and false if it does not


// console.log(language.startsWith("j"))
// console.log(language.startsWith("l"))

let result = []
let countries = ["Nigeria", "Ghana", "USA", "Namibia", "Andorra", "Niger"]

for(let i = 0; i < countries.length; i++)
    if(countries[i].startsWith("N")){
        result.push(countries[i])
    }
    

// result = countries.filter(country => country.startsWith("N"))

console.log(result)