const fs = require("fs");

const fileName = "test.txt";

// file create kr rhe hai 
fs.writeFile(fileName, "Hello! This is my first file.", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }

  console.log("File created successfully");

  // file ko read kr rhe hai 
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    console.log("File Content:", data);

    // file ko update kr rhe hai 
    fs.appendFile(fileName, "\nThis line was added later.", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }

      console.log("File updated successfully");

      // ab hum updated file ko read kr rhe hai
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading updated file:", err);
          return;
        }

        console.log("Updated Content:");
        console.log(data);

        // file ko dlt kr rhe hai 
        fs.unlink(fileName, (err) => {
          if (err) {
            console.log("Error deleting file:", err);
            return;
          }

          console.log("File deleted successfully");
        });
      });
    });
  });
});
