const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function main() {

    let name = await ask("What is your name? ");

    if (name.trim() === "") {
        name = "Anonymous";
    }

    let choice = await ask(`
Choose from the following:

1. Clock In
2. Other
3. Clock Out

Selection: `);

    let timestamp = new Date().toLocaleString();

    let entry = "";
    let notification = "";

    if (choice === "1") {

        entry = `${name} - Clocked In - ${timestamp}`;
        notification = "Thank you for Clocking In";

    } else if (choice === "2") {

        let note = await ask('Would you like to add a note? If not, type "None": ');

        if (note.trim().toLowerCase() === "none") {
            entry = `Other [${timestamp}, ${name}]`;
        } else {
            entry = `Other [${timestamp}, ${name} Note - ${note}]`;
        }

        notification = "Thank you for choosing Other";

    } else if (choice === "3") {

        entry = `${name} - Clocked Out - ${timestamp}`;
        notification = "Thank you for Clocking Out";

    } else {

        entry = `${name} - Invalid Selection - ${timestamp}`;
        notification = "Invalid selection";

    }

    fs.appendFileSync("Timesheet.txt", entry + "\n");

    console.log("\n" + notification);

    rl.close();
}

main();
