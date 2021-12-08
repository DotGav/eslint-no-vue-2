# eslint-plugin-no-vue-2

Stops your from importing from vue 2

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-vue-2`:

```sh
npm install eslint-plugin-no-vue-2 --save-dev
```

## Usage

Add `no-vue-2` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-vue-2"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-vue-2/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


