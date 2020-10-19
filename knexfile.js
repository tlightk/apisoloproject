// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'solo_api',
      user:     'postgres',
      password: 'wordpass1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'solo_api',
      user:     'postgres',
      password: 'wordpass1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
