module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
    production: {
      use_env_variable: 'JAWSDB_URL',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
  };
  