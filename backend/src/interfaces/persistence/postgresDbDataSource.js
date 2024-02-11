const utils = require("../../utils")

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
	async addNewAreaInterest(data) {
		try {
			const { areaOfInterest } = data
			const hash = utils.createHash(areaOfInterest)
			const query = `
				INSERT INTO area_of_interest (area_of_interest, area_hash, geom)
				VALUES ($1, $2, ST_GeomFromText($3, 4326))
				RETURNING id
				`;
			const result = await this.connection.one(query, [areaOfInterest, hash, areaOfInterest]);
			return result.id;
		} catch (error) {
			throw error
		}
	}
	async listAnalysis() {
		try {
			const query = `
				SELECT aoi.id, aoi.area_of_interest,
					 r.total_points, r.centroid_stdev, r.centroid_index
				FROM  area_of_interest aoi LEFT OUTER JOIN analysis r ON aoi.id = r.area_interest_fk
				`
			return await this.connection.any(query, []);
		} catch (error) {
			throw error
		}
	}
}

module.exports = PostgresDbDataSource;
