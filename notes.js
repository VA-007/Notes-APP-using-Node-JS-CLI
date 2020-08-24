const fs = require('fs');
const chalk = require('chalk')


// addNote Function 
const addNote = (title, body) => {
  const notes = loadNotes();

  //Using arrow function(with the shorthand syntax) here which dosent require return statement in this case and parenthesis for the parameters to be passed in the filter method and also shortens the code. 
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {             // Note: The find method returns the object if found and returns undefined if it isn't found
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse(" Note added! "));
  } else {
    console.log(chalk.yellow.inverse(" Note title already taken "));
  }
}

// removeNote Function
const removeNote = (title) => {
  const notes = loadNotes();
  const notMatchingTitles = notes.filter(note => note.title !== title);
  if (notMatchingTitles.length === notes.length) {
    console.log(chalk.red.inverse(" No matching note found "));
  } else {
    saveNotes(notMatchingTitles);
    console.log(chalk.green.inverse(" Note successfully removed! "));
  }
}

// listNotes Function
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("           Your Notes           "));
  notes.forEach(note => {
    console.log(note.title);
  });
}

// readNote function
const readNote = (title) => {
  const notes = loadNotes();
  const match = notes.find((note) => note.title === title);       // Using the find method in the array instead of filter as its more efficient
  if (!match) {             // Note: The find method returns the object if found and returns undefined if it isn't found
    console.log(chalk.red.inverse(" No matching note found "));
  } else {
    console.log(chalk.inverse(`  ${match.title}  `));
    console.log(chalk.cyan(`-> ${match.body}`));
  }
}

// <------- Utility Functions ------->
// saveNotes Function
const saveNotes = (notes) => {
  const JSONdata = JSON.stringify(notes);
  fs.writeFileSync('notes.json', JSONdata);
}

// loadNotes Function
const loadNotes = () => {
  try {
    data = fs.readFileSync('notes.json');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Exporting the Modules
module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}