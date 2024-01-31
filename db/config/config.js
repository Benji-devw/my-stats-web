'use strict';
// import pg from "pg";
module.exports = {
  development: {
    username: 'navart',
    password: process.env.DB_PASS,
    database: 'my-stats-dev',
    host: process.env.PG_DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
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
    // dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};