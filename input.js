let connection;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const setupInput = function(conn) {
  connection = conn;
  rl.question('What is the file name?', (answer) => {
    console.log('Filename: ', answer);
    connection.write(`${answer}`);
  });
}

module.exports = { setupInput }

/* const recursiveAsyncReadLine = () => {
  rl.question('Command: ', function (answer) {
      console.log('answer', answer);
    if (answer == 'exit')
      return rl.close();
    connection.write(`${answer}`, () => {
      recursiveAsyncReadLine();
    });
  });
}; */