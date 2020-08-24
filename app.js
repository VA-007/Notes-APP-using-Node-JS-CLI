const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


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
  handler(argv) {                  // Using ES6 meod deftion syntax here
    notes.addNote(argv.title, argv.body);
  }
})

// remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {                  // Using ES6 method definetion syntax here
    notes.removeNote(argv.title);
  }
})

// list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler() {                      // Using ES6 method definetion syntax here
    notes.listNotes();
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  builder: {
    title: {
      describe: 'Title of the note to be displayed',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {                  // Using ES6 method definetion syntax here
    notes.readNote(argv.title);
  }
})

// Both of them do the same work and are necessary to run the yargs commands
yargs.parse();
// console.log(yargs.argv);
