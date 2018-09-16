# Auth API

Node.js Express API to register user, authenticate user and reset user password 
Backend: Postgresql

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [Postgresql](https://www.postgresql.org) Git.
```sh
git clone https://github.com/akashpandey27/authapi.git
cd authapi
npm i
npm start
```
## .env file configuration
PGUSER= [postgres username]
PGPASS= [postgres password]
PGDATABASE= [postgres database]

## Postgresql create table script

```sql
CREATE TABLE public."user123"
(
  id serial PRIMARY KEY,
  email text UNIQUE,
  password text,
  name text
)
```


Your app should now be running on [localhost:300](http://localhost:3000/sudoku-validator).



## Running sample 
### Use the following cURL request to check the API

Register new user
```sh
curl -X POST \
  http://localhost:3000/auth/create \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 02f1d782-0be5-498a-868d-b783f00c285d' \
  -d '{
	"name": "akash pandey",
	"email": "akashpandey@gmail.com",
	"password": "testpass1"
}'
```

Authenticate user 

```sh
curl -X POST \
  http://localhost:3000/auth/login \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: d39b3b55-0b3a-4db5-ac37-71dab3bc2890' \
  -d '{
	"email": "akashpandey@gmail.com",
	"password": "testpass1"
}'
```
Rest Password

```sh
curl -X POST \
  'http://localhost:3000/auth/reset?key=akashpandey27@gmail.com' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 595dd22d-6748-4fe3-8d3e-f23b2bd9edd1' \
  -d '{
	"password": "testpass1"
}'
```