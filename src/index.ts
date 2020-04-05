/**
 * @fileoverview ESLint plugin to prevent module side effects for better tree shaking
 * @author Mac Lockard
 */
"use strict";

function noModuleSideEffectsRule() {}

export default {
  rules: {
    "no-module-side-effects": noModuleSideEffectsRule,
  },
};
