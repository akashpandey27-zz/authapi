module.exports = {
    "rules": {
      "no-console": 0,
      "no-underscore-dangle": 0,
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      "no-use-before-define": ["error", { "variables": false }],
      "no-multi-str": 0,
      "no-plusplus": 0,
      "prefer-destructuring": 0,
      "no-param-reassign": 0,
      "max-len": 0,
      "prefer-template": 0,
      "object-curly-newline": 0,
      "class-methods-use-this": 0,
      "prefer-promise-reject-errors": 0,
      "no-useless-escape": 0,
      "no-multi-spaces": 0,
      "key-spacing": [1,{"align":"colon","beforeColon":false,"afterColon":true}],
      "quote-props": 0,
      "no-use-before-define": 0,
      "consistent-return": 0
    },
    "env": {
      "node": true,
      "mocha": true
    },
    "parserOptions": {
      "ecmaVersion": 8
    },
    "extends": [
      "airbnb-base"
    ]
  };
  