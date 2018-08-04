
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env":{
    "browser":true,
    "node":true,
    "es6":true
  },
  "parser":"babel-eslint",
  "rules":{
    'no-console': 'off'
  },
  "plugins":[
    "react"
  ]
}