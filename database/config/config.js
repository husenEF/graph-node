require("dotenv").config();

const mysql = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
};

const pg = {
  development: {
    use_env_variable: process.env.DB_PATH,
    dialect: process.env.DIALECT,
    operatorAliases: 0,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: 1,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    url:process.env.DB_PATH,
    use_env_variable: process.env.DB_PATH,
    dialect: process.env.DIALECT,
    operatorAliases: 0,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: 1,
    },
  },
};

const config = process.env.DIALECT === "mysql" ? { ...mysql } : { ...pg };
// console.log({ config, a: process.env.DIALECT });
module.exports = config;
