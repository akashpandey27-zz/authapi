const Promise = require('bluebird');
const _ = require('lodash');
const Pg = require('../config/postgres');

async function create(data) {
  const sqlQuery = 'INSERT INTO public.user(name, email, password) values($1, $2, $3)';
  const c = await Pg.client();
  try {
    await c.query(sqlQuery, [data.name, data.email, data.password]);
    return Promise.resolve({ message: 'User registered successfully' });
  } catch (e) {
    if (e.code === '23505') {
      return Promise.reject({
        error: 'Email id already registered',
      });
    }
    return Promise.reject(e);
  }
}

async function login(data) {
  const sqlQuery = 'SELECT email, name, password from public.user where email=$1';
  const c = await Pg.client();
  const res = await c.query(sqlQuery, [data.email]);

  if (res.rowCount > 0) {
    if (res.rows[0].password === data.password) {
      const result = {
        message: 'Successfully logged in',
        email  : res.rows[0].email,
        name   : res.rows[0].name,
      };
      return Promise.resolve(result);
    }
    return Promise.reject('Invalid Username password');
  }
  return Promise.reject('user not registered');
}


async function reset(key, newPass) {
  const sqlQuery = 'Update public.user set password = $2 where email = $1';
  const c = await Pg.client();
  try {
    const res = await c.query(sqlQuery, [key, newPass]);
    if (res.rowCount > 0) {return Promise.resolve({ message: 'User password updated successfully' });}
    return Promise.reject({ error: 'Invalid password reset key' });
  } catch (e) {
    return Promise.reject({ error: 'Invalid password reset key' });
  }
}

module.exports.create = create;
module.exports.login = login;
module.exports.reset = reset;
