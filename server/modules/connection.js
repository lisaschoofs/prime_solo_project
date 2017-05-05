// connection.js
// var connectionString = '';
//
// if(process.env.DATABASE_URL != undefined) {
//     connectionString = process.env.DATABASE_URL + "?ssl=true";
// } else {
//     connectionString = 'postgres://localhost:5432/musicnotes';
// }
//
// module.exports = connectionString;

var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    console.log('env connection string');
    connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
    connectionString = 'postgres://localhost:5432/musicnotes';
}

console.log("connectionString set to: ", connectionString);

module.exports = connectionString;
