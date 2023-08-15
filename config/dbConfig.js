// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "cms", // DATABASE NAME 
//   dialect: "mysql", // Kun variation of sql use garney
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

module.exports = {
  HOST: "containers-us-west-62.railway.app",
  USER: "root",
  PORT : 7782,
  PASSWORD: "aWtkSpwQJY20FGIECYPo",
  DB: "railway", // DATABASE NAME 
  dialect: "mysql", // Kun variation of sql use garney
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};