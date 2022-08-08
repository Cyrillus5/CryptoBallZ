require('dotenv').config();
const sequelize = require('./app/database');
const Users = require('./app/models/users');

/// Encryptage PWD
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

///  Test de la connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // (async () => {
    /// Find All users
    // const testUser = await Users.findAll();
    // console.log(testUser)

    /// Create User
    // const pass = "testPassword";
    // const email = "testEmail"
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hash = bcrypt.hashSync(pass, salt);
    // console.log(hash);
    // const testUser = await Users.create({id : 1, email: email, password: hash, role:'admin'});
    // console.log(testUser)

    /// Delete User
    // const testUser = await Users.findOne({id : 1});
    // await testUser.destroy();
  // })();

//   (async () => {
//     try {
//         const users = await Users.findAll();
//         console.log(users);
//         // users.forEach(user => {
//         //     console.log(user.email);
//         //     })
//         } catch (error) {
//         console.log(error);
//     }

// }) ();
