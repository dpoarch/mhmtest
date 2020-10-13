const db = require('../utils/databaseAccess');

exports.getAllUsers = async function ( req, res ) {
  let response = [];
  try {
    const users = await db.getUsers();
    const lastNames = await db.getLastNames();
    response = users.map( function ( user ) {
      const last = lastNames.find( function ( lastName ) {
        return lastName.id === user.id
      } );

      return { ...user, ...last };
    } );

    res.json( response );

  } catch ( error ) {
    res.status( 500 ).json( {
      error: 'Error in getting users'
    } ) ;
  }
}