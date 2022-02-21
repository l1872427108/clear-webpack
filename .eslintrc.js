module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ['warn'],
        "no-debugger": [0],
        "no-console": ['error'],
        "semi": ['error', 'always']
    }
}
