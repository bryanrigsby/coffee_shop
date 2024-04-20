const mysql = require('mysql2/promise');

// MySQL database configuration
const dbConfig = {
  host: 'sql5.freesqldatabase.com',
  user: 'sql5697268',
  password: '8Lw7Q1LlHE',
  database: 'sql5697268',
};

// Function to test the database connection
async function testDatabaseConnection() {
    try {
      // Create a connection to the database
      const connection = await mysql.createConnection(dbConfig);
  
      console.log('Connected to database');
  
      // Execute a test query
      const [rows, fields] = await connection.execute('SELECT * from menu');
      
      console.log('Test query executed successfully');
      console.log('rows', rows);
      console.log('fields', fields);
  
      // Close the database connection
      await connection.end();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to test the database connection
  testDatabaseConnection();