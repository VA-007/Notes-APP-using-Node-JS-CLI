const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs');
// const { string } = require('yargs');


// <----- 4.1 Adding using Normal Command Line ----->
// console.log(process.argv);
// const command = process.argv[2];

// if (command === 'add') {
//   console.log("Adding a Note to the list!");
// } else if (command === "remove") {
//   console.log("Removing a Note from the list!");
// } else {
//   console.log("Please select a valid input");
// }



// <----- 4.2 Passing arguments with yargs ----->
// console.log(process.argv);
// console.log(yargs.argv);

// add command
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Notes',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);

    // <----- My code for printing the notes sequentially ----->
    // if (typeof argv.body === 'string') {          // Condition to check wether the body contains only one element or not
    //   console.log("1." + argv.body);
    // } else {
    //   for (let i = 0; i < argv.body.length; i++) {
    //     console.log(`${i + 1}. ${argv.body[i]}`);
    //   }
    // }
  }
})

// remove command
yargs.command({
  command: 'remove',
  describe: 'Removes the note',
  handler: function () {
    console.log("Removing a note now");
  }
})

// list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler: function () {
    console.log("Listing a note now");
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function () {
    console.log("Reading a note now");
  }
})

// Both of them do the same work and are necessary to run the yargs commands
yargs.parse();
// console.log(yargs.argv);