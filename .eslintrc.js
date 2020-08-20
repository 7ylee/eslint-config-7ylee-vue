module.exports = {
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended", // vue 파일 검사용
        "@vue/prettier"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "html", // required to lint .vue file
        "prettier"
    ],
    "settings": {
        "import/resolver": "webpack"
    },
    "rules": {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "vue": "never"
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "printWidth": 80,
                "tabWidth": 4,
                "useTabs": false,
                "trailingComma": "none",
                "arrowParens": "avoid"
            }
        ],
    }
}