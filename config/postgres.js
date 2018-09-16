const pg = require('pg');
require('dotenv').config();
class Postgres {
  constructor() {
    this.dbClient;
  }
  static async client(){
    await new Promise((resolve,reject)=> {
      if(typeof this.dbClient === 'undefined' ){
        this.dbClient = new pg.Client();
        this.dbClient.connect(async (err) => {
          if (err) return reject(err);
          return resolve();
        });
      } else {
        return resolve();
      }

    });
    return this.dbClient;
  }
};
module.exports = Postgres;