'use strict';
import pg from "pg";
module.exports = {
  development: {
    username: "navart",
    password: "admin&&",
    database: "my-stats-bis",
    host: "127.0.0.1",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  },
  production: { 
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};