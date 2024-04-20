const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5697268',
    password: '8Lw7Q1LlHE',
    database: 'sql5697268'
});

export default async (req, context) => {
    try {
        // Query the database
        const [rows, fields] = await pool.query('SELECT * FROM menu');
        
        // Process the results
        console.log('Rows:', rows);
        const responseBody = JSON.stringify(rows);
        
        return new Response(responseBody, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error('Error executing query:', error);
        const errorMessage = JSON.stringify({message: 'Error executing query'});
        return new Response(errorMessage, {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
  