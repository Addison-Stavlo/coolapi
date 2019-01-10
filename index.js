// console.log('\nindex.js\n')

const server = require('./api/server.js');

// server.greet();

// console.log(server.greeting);

// endable dymanic ports for heroku or hosting provider
const port = process.env.PORT || 5000;
server.listen(port, () => console.log('server on port 5k'));

