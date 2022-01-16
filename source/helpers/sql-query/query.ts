import mysql from 'mysql';

export class Query {
	createConnectionPool() {
		return mysql.createPool({
			connectionLimit: 10,
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME
		});
	}
	executeQuery(SQL_QUERY: string) {
		const cnx = this.createConnectionPool();
		cnx.getConnection(function(err, connection) {
			console.log('SQL', SQL_QUERY);
			if (err) throw err;
			connection.query(SQL_QUERY, (error: void, results: void, fields: void) => {});
		});
	}
}
