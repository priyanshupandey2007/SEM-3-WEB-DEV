const fs = require("fs");

const fileName = "test.txt";

// CREATE FILE
fs.writeFile(fileName, "Hello! This is my first file.", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    // READ FILE
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File Content:", data);

        // UPDATE FILE
        fs.appendFile(fileName, "\nThis line was added later.", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully");

            // READ UPDATED FILE
            fs.readFile(fileName, "utf8", (err, data) => {

                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated Content:");
                console.log(data);

                // DELETE FILE
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