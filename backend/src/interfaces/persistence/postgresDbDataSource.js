class PostgresDbDataSource {
	constructor() {
		this.connection = null;
		this.init();
	}
	init() {
		try {
			const promise = require("bluebird");
			const options = {
				promiseLib: promise,
			};

			const pgp = require("pg-promise")(options);
			const connectionString = {
				host: process.env.DB_HOST,
				port: process.env.DB_PORT,
				database: process.env.DB,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
			};

			this.connection = pgp(connectionString);
		} catch (error) {
			throw error;
		}
	}
	addNewAnalysis(data) {
		
	}
}

module.exports = PostgresDbDataSource;
