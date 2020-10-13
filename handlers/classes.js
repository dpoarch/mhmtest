const db = require('../utils/databaseAccess');

exports.getAllClasses = async function ( req, res ) {
  try {
    const classes = await db.getAllClasses();
    res.json( classes );
  } catch (error) {
    res.status( 500 ).json( {
      error: 'Error in getting classes'
    } ) ;
  }
}