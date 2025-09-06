// JSON Syntax:

        // Consists of key-value pairs enclosed in curly braces {}.
        // Keys and values are separated by a colon (:), and key-value pairs are separated by commas (,).


// Methods:
// JSON.stringify(obj): Converts a JavaScript object to a JSON string. 
// JSON.parse(jsonString): Parses a JSON string and returns a JavaScript object.



// Serializing JavaScript object to JSON string
const user = { name: 'John Doe', age: 30 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: {"name":"John Doe","age":30}

// Parsing JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'John Doe', age: 30 }