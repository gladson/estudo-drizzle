// import { describe, expect, it } from 'vitest';

// import { db } from './db';


// describe('db', () => {
//     it('should connect to the database and return a Drizzle instance', async () => {
//         // Mock environment variables
//         process.env.DBHOST = 'localhost';
//         process.env.DBUSER = 'testuser';
//         process.env.DBPASS = 'testpass';
//         process.env.DBNAME = 'testdb';

//         // Call the function
//         const connection = await db();

//         // Assert the connection is a Drizzle instance
//         expect(connection).toBeDefined();

//         // Assert the connection properties are set correctly
//         // expect(connection.user).toBe('testuser');
//     });
// });