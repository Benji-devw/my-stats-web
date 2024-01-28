'use strict';
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    storage: "./test_collection.db",
    host: process.env.DB_HOST,
    dialect: "sqlite",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    storage: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "sqlite",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    storage: "./prod_collection.db",
    host: "https://my-stats-bis.vercel.app",
    dialect: "sqlite",
    // dialectOptions: {
    //   ssl: true,
    // },
  },
};