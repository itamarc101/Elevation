const fs = require('fs');
const path = require('path');

function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code ==='ENOENT') {
                callback(`File not found: ${filePath}`);
            }
            if (err.code === 'EISDIR') {
                callback("Path is directory");
            }
            else {
                callback("ERROR HAPPENED! ");
            }
        }
        else {
            callback(`File read successfully. Size: ${data.length} bytes`);
        }
    });
}

readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
