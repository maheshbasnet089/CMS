module.exports = {
  HOST: "containers-us-west-67.railway.app",
  USER: "root",
  PORT : 7355,
  PASSWORD: "IQmnuvjAhnhwApCqKEB1",
  DB: "railway", // DATABASE NAME
  dialect: "mysql", // Kun variation of sql use garney
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
