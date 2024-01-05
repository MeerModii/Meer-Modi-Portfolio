const mysql = require('mysql2');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sqlpassword',
  database: 'classicmodels',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Perform database operations
function performDatabaseOperations() {
  // Example: Select all rows from a 'orders' table ordered by 'orderNumber'
  const sqlQuery = 'SELECT orderNumber, orderDate FROM orders ORDER BY orderNumber';
  
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      return;
    }

    // Use the connection for the query
    connection.query(sqlQuery, (queryErr, results) => {
      // Release the connection back to the pool
      connection.release();

      if (queryErr) {
        console.error('Error executing query:', queryErr);
        return;
      }

      console.log('Query results:', results);
    });
  });
}

// Create a pool and connect to the database
// const pool = mysql.createPool(dbConfig);

// Perform database operations
performDatabaseOperations();
