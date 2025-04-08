require('dotenv').config()

console.log("database url: ", process.env.DEV_DATABASE_URL);

module.exports = {
	development: {
		url: process.env.DEV_DATABASE_URL,
		dialect: 'mysql',
	},
	test: {
		url: process.env.TEST_DATABASE_URL,
		dialect: 'mysql',
	},
	production: {
		url: process.env.DATABASE_URL,
		dialect: 'mysql',
	},
}
