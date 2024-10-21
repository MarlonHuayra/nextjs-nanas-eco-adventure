import mysql from 'serverless-mysql'

export const db = mysql({
	config: {
		host: 'localhost',
		user: 'root',
		password: '',
		port: 3306,
		database: 'nanasadventure',
	},
})
