module.exports = {
  // To give you an idea how to override rule options:
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: ["eslint:recommended"],
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double", "avoid-escape"],
    "no-console": ["warn"],
    "no-unused-vars": ["warn", {"vars": "all", "args": "after-used"}],
    "no-return-await": ["warn"],
    "no-underscore-dangle": ["off"],
  }
};