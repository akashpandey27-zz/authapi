# Sudoku Validator

Node.js Express API to register user, authenticate user and reset user password

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and Git.
```sh
git clone https://github.com/akashpandey27/sudoku-validator.git
cd sudoku-validator
npm i
npm start
```

Your app should now be running on [localhost:300](http://localhost:3000/sudoku-validator).

## Running sample 
### Use the following cURL request to check the API

Valid Solution 
```sh
curl -X POST \
  http://localhost:3000/sudoku-validator \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"grid": [
	 	[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
		[9, 6, 1, 5, 3, 7, 2, 8, 4]
	]
	}'
```

Invalid Solution

```sh
curl -X POST \
  http://localhost:3000/sudoku-validator \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"grid": [
	 	[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 1, 5, 6, 7],
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
		[9, 6, 1, 5, 3, 7, 2, 8, 4]
	]
	}'
```
