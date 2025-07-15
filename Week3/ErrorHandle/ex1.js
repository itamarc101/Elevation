function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (e) {
        return "Invalid JSON format"
    }
}

console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"
