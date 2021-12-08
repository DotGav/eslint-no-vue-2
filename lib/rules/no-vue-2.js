/**
 * @fileoverview Does not allow vue 2
 * @author no-vue-2
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Does not allow vue 2",
      category: "Big Problem",
      recommended: true,
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "Vue") {
          context.report({
            node,
            message: "STOP IMPORTING FROM VUE-2!!!!!!!!",
          });
        }
      },
    };
  },
};
