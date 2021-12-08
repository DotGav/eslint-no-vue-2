/**
 * @fileoverview Does not allow vue 2
 * @author no-vue-2
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-vue-2");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MSG = "STOP IMPORTING FROM VUE-2!!!!!!!!";

const ruleTester = new RuleTester();
ruleTester.run("no-vue-2", rule, {
  valid: [
    {
      code: 'import vue from "vue"',
    },
  ],
  invalid: [
    {
      code: 'import vue from "Vue"',
      errors: [{ message: ERROR_MSG, type: "ImportDeclaration" }],
    },
  ],
});
